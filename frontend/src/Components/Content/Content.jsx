import DisplayHealth from './DisplayHealth/DisplayHealth.jsx';
import DisplayLogs from './DisplayLogs/DisplayLogs.jsx';
import DisplayTelemetry from './DisplayTelemetry/DisplayTelemetry.jsx';

import './Content.css';

export default function Content({ selectedTab, requestedData, onMessage }) {
  return (
    <div className="contentContainer">
      {selectedTab === 'healthStatus' && (
        <DisplayHealth requestedData={requestedData} onMessage={onMessage} />
      )}
      {selectedTab === 'telemetry' && (
        <DisplayTelemetry requestedData={requestedData} onMessage={onMessage} />
      )}
      {selectedTab === 'logs' && (
        <DisplayLogs requestedData={requestedData} onMessage={onMessage} />
      )}
    </div>
  );
}
