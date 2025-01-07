import React, { useState } from "react";
import BatteryHealth from "../Product_page_components/BatteryHealth.js";
import FlowMeter from "../Product_page_components/FlowMeter.js";
import ValveControl from "../Product_page_components/ValveControl.js";
import "../Styles/Quadra.css"
import Layout from "../Layouts/Layout.js";


const NodesHeader = ({ nodes, selectedNode, onNodeSelect }) => {
    return (
      <div className="nodes-header">
        {nodes.map((node, index) => (
          <button
            key={index}
            className={`node-button ${
              selectedNode && selectedNode.name === node.name ? "active" : ""
            }`}
            onClick={() => onNodeSelect(node)}
          >
            {node.name}
          </button>
        ))}
      </div>
    );
  };
  
  const NodeCard = ({ node, onButtonClick }) => {
    return (
      <div className="node-card Quadra-card">
        <h3 className="node-title">{node.name}</h3>
        <button className="Quadra-btn" onClick={() => onButtonClick("battery")}>
          Battery Health
        </button>
        <button className="Quadra-btn" onClick={() => onButtonClick("flowmeter")}>
          Flowmeter
        </button>
        {node.valves.map((valve, index) => (
          <button
            key={index}
            className="Quadra-btn"
            onClick={() => onButtonClick(`valveControl_${index + 1}`)}
          >
            Valve {index + 1}
          </button>
        ))}
      </div>
    );
  };
  
  const ControlCard = ({ controlType, node }) => {
    const renderControlDetails = () => {
      switch (controlType) {
        case "battery":
          return <BatteryHealth node={node} />;
        case "flowmeter":
          return <FlowMeter flowRate={node.flowmeter} />;
        case "valveControl_1":
        case "valveControl_2":
        case "valveControl_3":
          return <ValveControl />;
        default:
          return <div>Select a control to view details</div>;
      }
    };
  
    return (
      <div className="control-card Quadra-card">
        <h4 className="Quadra-title">Control Details</h4>
        {renderControlDetails()}
      </div>
    );
  };
  
  // Main Quadra component
const Quadra = () => {
    const [selectedNode, setSelectedNode] = useState(null);
    const [controlType, setControlType] = useState(null);
  
    const nodes = [
      {
        name: "Node 1",
        batteryHealth: 85,
        flowmeter: 100,
        valves: [{ status: "Open" }, { status: "Closed" }],
      },
      {
        name: "Node 2",
        batteryHealth: 78,
        flowmeter: 120,
        valves: [{ status: "Open" }],
      },
      {
        name: "Node 3",
        batteryHealth: 90,
        flowmeter: 110,
        valves: [{ status: "Closed" }, { status: "Open" }, { status: "Closed" }],
      },
    ];
  
    const handleNodeSelect = (node) => {
      setSelectedNode(node);
      setControlType(null);
    };
  
    const handleButtonClick = (control) => {
      setControlType(control);
    };
  
    return (
        <>
            <Layout>
                <section className="Quadra-section">
                    <div className="quadra-header">
                    <h1 className="Quadra-title">Quadra Dashboard</h1>
                    </div>
            
                    {/* Nodes Header */}
                    <NodesHeader
                    nodes={nodes}
                    selectedNode={selectedNode}
                    onNodeSelect={handleNodeSelect}
                    />
            
                    <div className="quadra-content">
                    {/* Left Side: Node Card */}
                    {selectedNode && (
                        <NodeCard node={selectedNode} onButtonClick={handleButtonClick} />
                    )}
            
                    {/* Right Side: Control Card */}
                    {controlType && selectedNode && (
                        <ControlCard controlType={controlType} node={selectedNode} />
                    )}
                    </div>
                </section>
            </Layout>
        </>
    );
  };
  
export default Quadra;
  