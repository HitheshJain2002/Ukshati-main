import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Styles/Scheduling.css";

const Scheduling = () => {
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState(30);
  const [weatherAutomation, setWeatherAutomation] = useState(false);

  const [currentSchedule, setCurrentSchedule] = useState({
    startDate: "",
    startTime: "",
    duration: 30,
    weatherAutomation: false,
    status: "Not Scheduled",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentSchedule({
      startDate: startDate || "Not set",
      startTime: startTime || "Not set",
      duration,
      weatherAutomation,
      status: "Scheduled",
    });
  };

  return (
    <div className="scheduling-container">
      {/* Scheduling Input Card */}
      <Card className="mb-3 scheduling-card">
        <Card.Body>
          <Card.Title className="stitle">Set a Schedule</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="startDate">
              <Form.Label className="label">Select Date</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="startTime" className="mt-3">
              <Form.Label className="label">Select Time</Form.Label>
              <Form.Control
                className="form-time"
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="durationSlider" className="mt-3">
              <Form.Label className="label">
                Select Duration: {duration} minutes
              </Form.Label>
              <Form.Range
                min="10"
                max="120"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="weatherAutomation" className="mt-3">
              <Form.Check
                type="checkbox"
                label="Enable Weather-based Automation"
                checked={weatherAutomation}
                onChange={(e) => setWeatherAutomation(e.target.checked)}
                className="label"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Set Schedule
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {/* Display Current Scheduling */}
      <Card className="scheduling-card">
        <Card.Body>
          <Card.Title className="stitle">Current Schedule</Card.Title>
          <p>
            <strong>Start Date:</strong> {currentSchedule.startDate}
          </p>
          <p>
            <strong>Start Time:</strong> {currentSchedule.startTime}
          </p>
          <p>
            <strong>Duration:</strong> {currentSchedule.duration} minutes
          </p>
          <p>
            <strong>Status:</strong> {currentSchedule.status}
          </p>
          <p>
            <strong>Weather-based Automation:</strong>{" "}
            {currentSchedule.weatherAutomation ? "Enabled" : "Disabled"}
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Scheduling;
