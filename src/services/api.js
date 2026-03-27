import axios from "axios";

const weatherUrl = "https://api.openweathermap.org/data/2.5/";
const currentWeatherUrl = `${weatherUrl}/weather`;

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchWeatherByCity = async (query) => {
  if (!query) return null;

  const params = {
    q: query,
    units: "metric",
    appid: apiKey,
  };

  const current = await axios.get(currentWeatherUrl, { params });

  return current.data;
};
