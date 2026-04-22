import { useState, useEffect } from "react";
import { useFetchWeather } from "../hooks/useFetchWeather";
import Header from "./Header";
import WeatherCard from "./WeatherCard";
import Forecast from "./Forecast";

export default function Weather() {
  const [unit, setUnit] = useState("C");

  const toggleUnit = () => setUnit((prev) => (prev === "C" ? "F" : "C"));

  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);
  //-----------------------------------

  const DEFAULT_CITY = "London";

  const [city, setCity] = useState(DEFAULT_CITY);
  const [searchQuery, setSearchQuery] = useState(DEFAULT_CITY);

  const { data, isLoading, error } = useFetchWeather(searchQuery);

  // const { currentWeather, forecast } = data || {};
  const currentWeather = data?.currentWeather;
  const forecast = data?.forecast;

  const handleSearch = (e) => {
    e.preventDefault();

    setSearchQuery(city.trim());
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
      {isLoading && <p className="text-white">Loading...</p>}

      {error && <p className="text-red-400">Something went wrong ...</p>}
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
          <span role="img" aria-label="weather">
            🌤
          </span>{" "}
          Weather App
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
              unit={unit}
              setUnit={toggleUnit}
            />
          </div>
        )}
        <div className="mt-4">
          {forecast?.list && (
            <Forecast forecast={forecast} unit={unit} setUnit={toggleUnit} />
          )}
        </div>
      </div>
    </div>
  );
}
