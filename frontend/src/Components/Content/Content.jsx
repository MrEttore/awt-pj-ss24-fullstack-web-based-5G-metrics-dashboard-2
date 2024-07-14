import DisplayHealth from './DisplayHealth/DisplayHealth.jsx';
import DisplayLogs from './DisplayLogs/DisplayLogs.jsx';
import DisplayTelemetry from './DisplayTelemetry/DisplayTelemetry.jsx';

import './Content.css';

export default function Content({
  selectedTab,
  requestedData,
  onMessage,
  resetFlag,
}) {
  return (
    <div className="contentContainer">
      {selectedTab === 'healthStatus' && (
        <DisplayHealth
          requestedData={requestedData}
          onMessage={onMessage}
          resetFlag={resetFlag}
        />
      )}
      {selectedTab === 'telemetry' && (
        <DisplayTelemetry
          requestedData={requestedData}
          onMessage={onMessage}
          resetFlag={resetFlag}
        />
      )}
      {selectedTab === 'logs' && (
        <DisplayLogs
          requestedData={requestedData}
          onMessage={onMessage}
          resetFlag={resetFlag}
        />
      )}
    </div>
  );
}
