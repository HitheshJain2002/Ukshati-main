import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Styles/Tapcontrol.css";
import axios from "axios";

const TapControl = () => {
  const [isTapOn, setIsTapOn] = useState(false);
  const [city, setCity] = useState("Mangalore");
  const [weatherData, setWeatherData] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  const toggleTap = () => {
    setIsTapOn((prev) => !prev);
  };

  // Function to format the current time
  const getFormattedTime = (date) => {
    return (
      date.getHours().toString().padStart(2, "0") +
      ":" +
      date.getMinutes().toString().padStart(2, "0") +
      ":" +
      date.getSeconds().toString().padStart(2, "0")
    );
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = currentTime.getMonth();
  const day = currentTime.getDate();
  const year = currentTime.getFullYear();
  const formattedDate = `${months[month]} ${day}, ${year}`;

  const API_KEY = "cbc279b2a6fc2027db989296e5c35428";

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  return (
    <div className="tapControl-container">
      <Card className="tap-control-card">
        <div>
          <h4>{formattedDate}</h4>
          <h2>{getFormattedTime(currentTime)}</h2>
          <h3>{city}</h3>
          {weatherData ? (
            <p>
              Temperature: {weatherData.main.temp}°C | Weather:{" "}
              {weatherData.weather[0].description} | Wind Speed:{" "}
              {weatherData.wind.speed} m/s
            </p>
          ) : (
            <p>Loading weather data...</p>
          )}
        </div>
        <Card.Body>
          <Card.Title className="tap-title">Tap Control</Card.Title>
          <p>
            <strong>Status:</strong> {isTapOn ? "Tap is ON" : "Tap is OFF"}
          </p>
          <Button variant={isTapOn ? "danger" : "success"} onClick={toggleTap}>
            {isTapOn ? "Turn Off Tap" : "Turn On Tap"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TapControl;
