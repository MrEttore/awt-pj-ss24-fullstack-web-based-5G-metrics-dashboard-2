import HealthForm from "./HealthForm/HealthForm";
import TelemetryForm from "./TelemetryForm/TelemetryForm";
import LogsForm from "./LogsForm/LogsForm";
import "./Forms.css";

export default function Forms({ selectedTab }) {
  return (
    <div className="formContainer">
      {selectedTab === "healthStatus" && (
        <HealthForm selectedTab={selectedTab} />
      )}

      {selectedTab === "telemetry" && (
        <TelemetryForm selectedTab={selectedTab} />
      )}

      {selectedTab === "logs" && <LogsForm selectedTab={selectedTab} />}
    </div>
  );
}
