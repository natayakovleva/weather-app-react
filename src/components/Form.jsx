import { useState } from "react";

export default async function Form() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  return (
    <form>
      <input
        type="text"
        placeholder="Search for your city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
    </form>
  );
}
