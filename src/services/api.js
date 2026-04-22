import axios from "axios";

const weatherUrl = "https://api.openweathermap.org/data/2.5/";
const currentWeatherUrl = `${weatherUrl}/weather`;
const forecastWeatherUrl = `${weatherUrl}/forecast`;

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchWeatherByCity = async (searchQuery) => {
  if (!searchQuery) return null;

  const params = {
    q: searchQuery,
    units: "metric",
    appid: apiKey,
  };

  const [current, forecast] = await Promise.all([
    axios.get(currentWeatherUrl, { params }),
    axios.get(forecastWeatherUrl, { params }),
  ]);

  return {
    currentWeather: current.data,
    forecast: forecast.data,
  };
};
