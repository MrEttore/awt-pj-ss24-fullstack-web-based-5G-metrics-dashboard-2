import './Content.css';
import DisplayHealth from './DisplayHealth/DisplayHealth.jsx';
import DisplayLogs from './DisplayLogs/DisplayLogs.jsx';
import DisplayTelemetry from './DisplayTelemetry/DisplayTelemetry.jsx';
import Graph from '../Graph/Graph.jsx';

export default function Content({ selectedTab, requestedData }) {
  return (
    <div className="contentContainer">
      {selectedTab === 'healthStatus' && (
        <DisplayHealth requestedData={requestedData} />
      )}
      {selectedTab === 'telemetry' && (
        <DisplayTelemetry requestedData={requestedData} />
      )}
      {selectedTab === 'logs' && <DisplayLogs requestedData={requestedData} />}
    </div>
  );
}
