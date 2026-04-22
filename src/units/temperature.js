const toFahrenheit = (celsius) => {
  return Math.round((celsius * 9) / 5 + 32);
};

const toCelsius = (value) => {
  return Math.round(value);
};

export const formatTemp = (value, unit) => {
  const temp = unit === "C" ? toCelsius(value) : toFahrenheit(value);

  return `${temp}°${unit}`;
};
