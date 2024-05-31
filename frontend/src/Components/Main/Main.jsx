import { useState } from "react";
import ControlBar from "../ControlBar/ControlBar.jsx";
import Content from "../Content/Content.jsx";
import "./Main.css";

function Main() {
  // piece of state to control the tab selection
  const [selectedTab, setSelectedTab] = useState("healthStatus");

  function handleSelectedTab(e) {
    setSelectedTab(e.target.value);
  }

  return (
    <main className="main">
      {/* Tabs and forms */}
      <ControlBar selectedTab={selectedTab} onSelect={handleSelectedTab} />

      {/* Content */}
      {/* <Content /> */}
    </main>
  );
}

export default Main;
