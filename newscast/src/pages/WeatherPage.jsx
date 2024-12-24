import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherPage = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("New York");
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    try {
      const API_KEY = "3f44c8bf8187a1057729ff619522004b";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"3f44c8bf8187a1057729ff619522004b"}&units=metric`
      );
      setWeather(response.data);
      setError("");
    } catch (err) {
      setError("City not found. Please try again.");
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    const cityInput = e.target.elements.city.value.trim();
    if (cityInput) setCity(cityInput);
  };

  return (
    <div
  className="min-h-screen bg-cover bg-center text-gray-800"
  style={{ backgroundImage: "url('/sky.jpg')"}}>
  <div className="container mx-auto p-4">
    <form onSubmit={handleSearch} className="flex mb-4 gap-2">
      <input
        type="text"
        name="city"
        placeholder="Enter city"
        className="border rounded p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </form>
    {error && <p className="text-red-500">{error}</p>}
    {weather && (
      <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className="w-16 h-16 mx-auto"
        />
        <p className="text-lg">Temperature: {weather.main.temp}°C</p>
        <p>Condition: {weather.weather[0].description}</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind Speed: {weather.wind.speed} m/s</p>
      </div>
    )}
  </div>
</div>
  )
}
export default WeatherPage;
