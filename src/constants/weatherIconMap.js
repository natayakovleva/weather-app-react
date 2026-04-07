import Sun from "../assets/icons/sun.svg?react";
import Moon from "../assets/icons/moon.svg?react";
import CloudSun from "../assets/icons/cloud-sun.svg?react";
import CloudMoon from "../assets/icons/cloud-moon.svg?react";
import Fog from "../assets/icons/fog.svg?react";
import Cloud from "../assets/icons/cloud.svg?react";
import Rain from "../assets/icons/rain.svg?react";
import Thunder from "../assets/icons/thunder.svg?react";
import Snow from "../assets/icons/snow.svg?react";

export const weatherIconMap = {
  // ☀️ clear
  "01d": Sun,
  "01n": Moon,

  // 🌤 few clouds
  "02d": CloudSun,
  "02n": CloudMoon,

  // ☁️ clouds
  "03d": Cloud,
  "03n": Cloud,
  "04d": Cloud,
  "04n": Cloud,

  // 🌧 shower rain
  "09d": Rain,
  "09n": Rain,

  // 🌦 rain
  "10d": Rain,
  "10n": Rain,

  // ⚡ thunderstorm
  "11d": Thunder,
  "11n": Thunder,

  // ❄️ snow
  "13d": Snow,
  "13n": Snow,

  // 🌫 mist / fog
  "50d": Fog,
  "50n": Fog,
};
