import React from 'react'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Scheduling from "../Product_page_components/Scheduling.js"
import TapControl from "../Product_page_components/TapControl.js"
import History from "../Product_page_components/History.js"
import BatteryHealth from "../Product_page_components/BatteryHealth.js"
import WaterLevel from '../Product_page_components/WaterLevel.js';
import Layout from '../Layouts/Layout.js';
import "../Styles/Hexa.css"

const Hexa = () => {
  return (
    <>
        <Layout>
            <div className="HEXA-section">
            <h1 className="HEXA-title" style={{ color: "#0056b3", textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)"}}>
                HEXA Controls
            </h1>
            <div>
                <Card className="HEXA-section-card">
                <Tabs
                    defaultActiveKey="Scheduling"
                    id="justify-tab-example"
                    className="HEXA-section-card-tabs mb-3"
                    justify
                >
                    <Tab
                    className="HEXA-section-card-tab"
                    eventKey="Scheduling"
                    title="Scheduling"
                    >
                    <Scheduling />
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
                    <Tab eventKey="WaterLevel" title="Tank Water Level">
                    <WaterLevel/>
                    </Tab>
                </Tabs>
                </Card>
            </div>
            </div>
        </Layout>
    </>
  )
}

export default Hexa
