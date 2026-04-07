import { useQuery } from "@tanstack/react-query";
import { fetchWeatherByCity } from "../services/api";

export const useFetchWeather = (searchQuery) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["weather", searchQuery],
    queryFn: () => fetchWeatherByCity(searchQuery),
    enabled: !!searchQuery,
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
  });

  return { data, error, isLoading };
};
