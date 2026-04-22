import { getShortDate, getTime } from "../units/date";
import { formatTemp } from "../units/temperature";
import Icon from "./Icon";
import { weatherIconMap } from "../constants/weatherIconMap";
import { uiIconMap } from "../constants/uiIconMap";

const getStats = (props) => [
  { label: "Humidity", value: `${props.humidity}%` },
  { label: "Wind", value: `${props.wind} m/s` },
  { label: "Pressure", value: `${props.pressure} hPa` },
  { label: "Clouds", value: `${props.clouds}%` },
];

export default function WeatherCard(props) {
  const stats = getStats(props);

  return (
    <div
      className="bg-white/40 dark:bg-white/10
    backdrop-blur-2xl
    rounded-3xl
    p-6
    shadow-2xl
    border border-white/30 dark:border-white/10
    text-gray-800 dark:text-white"
    >
      <div className="mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold">{props.city}</h2>
        <p className="text-sm opacity-70">{getShortDate(props.date)}</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p
            className="text-6xl font-extrabold
    cursor-pointer
    tracking-tight
    select-none
    hover:scale-105
    transition-transform"
            onClick={props.setUnit}
          >
            {formatTemp(props.temp, props.unit)}
          </p>
          <p className="text-sm mt-1 text-gray-500 dark:text-gray-300">
            feels like{" "}
            <span className="font-medium">
              {formatTemp(props.feels_like, props.unit)}
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
              <p>Sunrise: {getTime(props.sunrise)}</p>
            </div>
            <div className="flex items-center gap-2">
              <Icon
                name="sunset"
                iconMap={uiIconMap}
                size={32}
                className="text-orange-400"
              />
              <p>Sunset: {getTime(props.sunset)}</p>
            </div>
          </div>
        </div>

        <div className="text-center sm:text-right">
          <Icon name={props.icon} iconMap={weatherIconMap} size={80} />
          <p className="text-lg font-semibold capitalize mt-2 text-blue-900">
            {props.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
        {stats.map((item) => (
          <div
            key={item.label}
            className="
        bg-white/30 dark:bg-white/5
        backdrop-blur-md
        rounded-xl
        p-3
        text-center
        transition
        hover:scale-105 hover:shadow-md
      "
          >
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {item.label}
            </p>
            <p className="font-semibold text-gray-800 dark:text-white">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
