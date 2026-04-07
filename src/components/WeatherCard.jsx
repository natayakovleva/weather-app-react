// src/components/WeatherCard.jsx
import Icon from "./Icon";
import { weatherIconMap } from "../constants/weatherIconMap";
import { uiIconMap } from "../constants/uiIconMap";

export default function WeatherCard(props) {
  return (
    <div
      className="bg-white/50 dark:bg-white/10
      backdrop-blur-xl
      rounded-3xl
      p-5 sm:p-6
      shadow-xl
      text-gray-800 dark:text-white"
    >
      {/* HEADER: місто + дата */}
      <div className="mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold">{props.city}</h2>
        <p className="text-sm opacity-70">
          {new Date(props.date * 1000).toLocaleString("uk-UA", {
            day: "numeric",
            month: "long",
          })}
        </p>
      </div>

      {/* TEMP + DETAILS */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        {/* LEFT: temp + feels like + sunrise/sunset */}
        <div>
          <p className="text-5xl font-extrabold tracking-tight">
            {Math.round(props.temp)}°C
          </p>
          <p className="text-gray-600 text-sm mt-1">
            feels like{" "}
            <span className="font-medium text-blue-800">
              {Math.round(props.feels_like)}°C
            </span>
          </p>

          <div className="flex gap-4 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <Icon
                name="sunrise"
                iconMap={uiIconMap}
                size={32}
                className="text-yellow-400"
              />
              <p>
                Sunrise:{" "}
                {new Date(props.sunrise * 1000).toLocaleTimeString("uk-UA", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Icon
                name="sunset"
                iconMap={uiIconMap}
                size={32}
                className="text-orange-400"
              />
              <p>
                Sunset:{" "}
                {new Date(props.sunset * 1000).toLocaleTimeString("uk-UA", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: weather icon + description */}
        <div className="text-center sm:text-right">
          <Icon name={props.icon} iconMap={weatherIconMap} size={80} />
          <p className="text-lg font-semibold capitalize mt-2 text-blue-900">
            {props.description}
          </p>
        </div>
      </div>

      {/* GRID CARDS: Humidity, Wind, Pressure, Clouds */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
        {[
          {
            label: "Humidity",
            value: `${props.humidity}%`,
            color: "text-blue-500",
          },
          { label: "Wind", value: `${props.wind} m/s`, color: "text-blue-500" },
          {
            label: "Pressure",
            value: `${props.pressure} hPa`,
            color: "text-blue-500",
          },
          {
            label: "Clouds",
            value: `${props.clouds}%`,
            color: "text-blue-500",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white/30
      backdrop-blur-md
      rounded-xl
      p-3
      text-center
      hover:scale-105
      transition"
          >
            <p className="text-xs opacity-70">{item.label}</p>
            <p className={`font-semibold ${item.color}`}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
