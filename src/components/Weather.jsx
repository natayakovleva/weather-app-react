// import { fetchWeatherByCity } from "../services/api";
import { useState } from "react";

// const data = await fetchWeatherByCity("London");
// console.log(data);

export default function Weather() {
  const [city, setCity] = useState("");

  return (
    <>
      <h2 className="text-3xl font-bold underline text-sky-500">Weather</h2>
      <form>
        <input
          type="text"
          placeholder="Search for your city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
