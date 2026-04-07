import { useState, useEffect } from "react";
import { useFetchWeather } from "../hooks/useFetchWeather";
import Header from "./Header";
import WeatherCard from "./WeatherCard";
import Forecast from "./Forecast";

export default function Weather() {
  // 1. Ініціалізація стану з localStorage
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // 2. Ефект для зміни класу на рівні всього документа
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  //-----------------------------------

  const [city, setCity] = useState("London");
  const [searchQuery, setSearchQuery] = useState("London");

  const { data, isLoading, error } = useFetchWeather(searchQuery);

  const { currentWeather, forecast } = data || {};

  console.log(currentWeather);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      setSearchQuery(city.trim());
    }
  };

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br 
      from-blue-400 via-blue-200 to-indigo-300
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      flex items-center justify-center
      p-3 sm:p-6
    "
    >
      <div
        className="
        w-full max-w-5xl
        bg-white/40 dark:bg-white/10
        backdrop-blur-2xl
        rounded-3xl
        shadow-2xl
        p-4 sm:p-6
        border border-white/30 dark:border-white/10
      "
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          🌤 Weather App
        </h1>

        <Header
          handleSearch={handleSearch}
          city={city}
          setCity={setCity}
          isDark={isDark}
          setIsDark={setIsDark}
        />

        {currentWeather && (
          <div className="mt-4">
            <WeatherCard
              city={currentWeather.name}
              date={currentWeather.dt}
              icon={currentWeather.weather[0].icon}
              temp={currentWeather.main.temp}
              feels_like={currentWeather.main.feels_like}
              description={currentWeather.weather[0].description}
              sunrise={currentWeather.sys.sunrise}
              sunset={currentWeather.sys.sunset}
              humidity={currentWeather.main.humidity}
              wind={currentWeather.wind.speed}
              pressure={currentWeather.main.pressure}
              clouds={currentWeather.clouds.all}
            />
          </div>
        )}

        {forecast && <Forecast forecast={forecast} />}
      </div>
    </div>
  );
}
