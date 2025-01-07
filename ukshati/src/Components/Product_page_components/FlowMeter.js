import React from "react";
import { Gauge } from 'react-d3-gauge';
import "../Styles/FlowMeter.css";

const FlowMeter = ({ flowRate }) => {
  return (
    <div className="flow-meter">
      <h5>Flow Meter Reading</h5>
      <div className="gauge-meter">
        <Gauge
          value={flowRate}
          minValue={0}
          maxValue={200}
          label={`${flowRate} L/min`}
          needleColor="rgba(75, 192, 192, 1)"
          arcColor="rgba(75, 192, 192, 0.5)"
        />
      </div>
      <div className="flow-text">
        <p>Current Flow Rate: {flowRate} L/min</p>
      </div>
    </div>
  );
};

export default FlowMeter





