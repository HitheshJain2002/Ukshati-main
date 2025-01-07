import React from "react";
import "../Styles/Uno.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Scheduling from "../Product_page_components/Scheduling.js"
import TapControl from "../Product_page_components/TapControl.js"
import History from "../Product_page_components/History.js"
import BatteryHealth from "../Product_page_components/BatteryHealth.js"
import Layout from "../Layouts/Layout.js";



const Uno = () => {
  return (
    <>
        <Layout>
            <div className="Uno-section">
            <h1 className="Uno-title" style={{ color: "#0056b3", textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)"}}>
                UNO Controls
            </h1>
            <div>
                <Card className="Uno-section-card">
                <Tabs
                    defaultActiveKey="Scheduling"
                    id="justify-tab-example"
                    className="Uno-section-card-tabs mb-3"
                    justify
                >
                    <Tab
                    className="Uno-section-card-tab"
                    eventKey="Scheduling"
                    title="Scheduling"
                    >
                    <Scheduling/>
                    </Tab>
                    <Tab eventKey="TapControl" title="Tap Control">
                    <TapControl />
                    </Tab>
                    <Tab eventKey="History" title="History">
                    <History />
                    </Tab>
                    <Tab eventKey="BatteryHealth" title="Battery Health">
                    <BatteryHealth />
                    </Tab>
                </Tabs>
                </Card>
            </div>
            </div>
        </Layout>
    </>
  );
};

export default Uno;



