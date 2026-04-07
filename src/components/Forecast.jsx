import { getShortDate } from "../units";
import Icon from "./Icon";
import { weatherIconMap } from "../constants/weatherIconMap";

export default function Forecast({ forecast }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        5-Day Forecast
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {forecast.list.slice(0, 5).map((item, i) => (
          <div
            key={i}
            className="
              bg-white/40 dark:bg-white/10
              backdrop-blur-md
              rounded-2xl
              p-3
              text-center
              transition
              hover:scale-105 hover:shadow-lg
            "
          >
            <p className="text-sm opacity-70">{getShortDate(item.dt)}</p>

            <Icon
              name={item.weather[0].icon}
              iconMap={weatherIconMap}
              size={50}
            />

            <p className="text-xl font-bold">{Math.round(item.main.temp)}°</p>

            <p className="text-sm opacity-70">{item.weather[0].main}</p>

            <p className="text-xs opacity-60">
              💨 {Math.round(item.wind.speed)} m/s
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
