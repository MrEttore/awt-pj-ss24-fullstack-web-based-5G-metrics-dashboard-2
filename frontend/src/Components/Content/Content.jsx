import "./Content.css";
import DisplayHealth from "./DisplayHealth/DisplayHealth.jsx";
import DisplayLogs from "./DisplayLogs/DisplayLogs.jsx";
import DisplayTelemetry from "./DisplayTelemetry/DisplayTelemetry.jsx";
import Graph from "../Graph/Graph.jsx";

export default function Content({ selectedTab }) {
  return (
    <div className="contentContainer">
      {selectedTab === "healthStatus" && <DisplayHealth />}
      {selectedTab === "telemetry" && <DisplayTelemetry />}
      {selectedTab === "logs" && <DisplayLogs />}
    </div>
  );
}
