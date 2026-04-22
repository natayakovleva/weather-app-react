import Icon from "./Icon";
import { weatherIconMap } from "../constants/weatherIconMap";
import { formatTemp } from "../units/temperature";
import { getDailyForecast } from "../units/getDailyForecast";

export default function Forecast({ forecast, unit, setUnit }) {
  if (!forecast?.list) return null;

  const daily = getDailyForecast(forecast.list);

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {daily.map((item) => {
        const weather = item.weather?.[0];

        return (
          <div
            key={item.dt}
            className="
              bg-white/40 dark:bg-white/10
              backdrop-blur-xl
              rounded-2xl
              p-4
              text-center
              border border-white/20 dark:border-white/10
              transition-all duration-300
              hover:scale-105 hover:shadow-lg
            "
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>

            <Icon name={weather?.icon} iconMap={weatherIconMap} size={50} />

            <p
              className="
                text-xl font-bold
                text-gray-900 dark:text-white
                cursor-pointer
                select-none
                hover:opacity-80
                transition
              "
              onClick={() => setUnit((prev) => (prev === "C" ? "F" : "C"))}
            >
              {formatTemp(item.main.temp, unit)}
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-300 capitalize">
              {weather?.main}
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Wind {Math.round(item.wind.speed)} m/s
            </p>
          </div>
        );
      })}
    </div>
  );
}
