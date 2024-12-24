import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import SearchBar from "./SearchBar";

const Weather = () => {
  const [city, setCity] = useState("New York");
  const API_KEY = "3f44c8bf8187a1057729ff619522004b";
  const { data: weather, loading, error } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"3f44c8bf8187a1057729ff619522004b"}&units=metric`
  );

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-2">Weather</h2>
      <SearchBar placeholder="Search city" onSearch={setCity} />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weather && (
        <div>
          <h3 className="text-2xl">{weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;