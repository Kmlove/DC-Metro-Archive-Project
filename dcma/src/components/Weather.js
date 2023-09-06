import React, { useState, useEffect } from "react";
import apiKeys from "./apiKeys";

function WeatherWidget() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = apiKeys.weatherApiKey;
  const washingtonDCCoords = "38.9,-77.04";

  useEffect(() => {
    fetchWeatherData(washingtonDCCoords);
  }, []);

  const fetchWeatherData = (coords) => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${coords}&aqi=no`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      });
  };

  const weatherWidgetStyle = {
    backgroundColor: "white", // Set the background color to white
    borderRadius: "10px", // Add rounded corners
    padding: "20px", // Add some padding for spacing
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)", // Add a box shadow for a card-like appearance
    maxWidth: "300px", // Set a maximum width to control the width of the widget
    margin: "0 auto", // Center the widget horizontally
    textAlign: "center", // Center the content
  };

  return (
    <div style={weatherWidgetStyle}>
      <h2>Weather</h2>
      {loading && <p>Loading weather data...</p>}
      {weatherData && (
        <div>
          <h3>Weather in {weatherData.location.name}, {weatherData.location.region}</h3>
          <p>Temperature: {weatherData.current.temp_f} °F</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <img
            src={weatherData.current.condition.icon}
            alt={weatherData.current.condition.text}
          />
        </div>
      )}
    </div>
  );
}


export default WeatherWidget;