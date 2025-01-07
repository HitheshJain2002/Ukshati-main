import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import "../Styles/BatteryHealth.css";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const BatteryHealth = () => {
  const data = {
    labels: [
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
    ], // dummy data
    datasets: [
      {
        label: "Voltage (V)",
        data: [3.7, 3.8, 3.9, 4.0, 4.1, 3.9, 3.8, 3.7], //dummy data
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (h)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Voltage (V)",
        },
        beginAtZero: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div className="battery-health-container">
      <h2>Battery Health</h2>
      <div className="chart-container">
        <Line data={data} options={options} />
        
      </div>
    </div>
  );
};

export default BatteryHealth;
