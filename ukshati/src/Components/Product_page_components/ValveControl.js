import React, { useState } from "react";
import { Tab, Nav, Card, Button } from "react-bootstrap";
import Scheduling from "../Product_page_components/Scheduling.js"
import TapControl from "../Product_page_components/TapControl.js"
import History from "../Product_page_components/History.js"
import "../Styles/ValveControl.css";

const ValveControl = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleToggle = () => {
    if (isStarted) {
      setStatusMessage("Successfully stopped!");
    } else {
      setStatusMessage("Successfully started!");
    }
    setIsStarted(!isStarted);
  };

  return (
    <div className="valve-control-container">
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Valve Control System</Card.Title>
          {statusMessage && <div className="status-message">{statusMessage}</div>}
          <Button variant={isStarted ? "secondary" : "success"} onClick={handleToggle}>
            {isStarted ? "Stop" : "Live Start"}
          </Button>
        </Card.Body>
      </Card>

      <Tab.Container id="left-tabs-example" defaultActiveKey="tap-control">
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="tap-control">Tap Control</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="scheduling">Scheduling</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="history">History</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="tap-control">
            <TapControl setStatusMessage={setStatusMessage} />
          </Tab.Pane>
          <Tab.Pane eventKey="scheduling">
            <Scheduling setStatusMessage={setStatusMessage} />
          </Tab.Pane>
          <Tab.Pane eventKey="history">
            <History />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default ValveControl;
