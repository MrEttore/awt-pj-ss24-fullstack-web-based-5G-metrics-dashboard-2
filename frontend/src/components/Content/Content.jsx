import DisplayHealth from './DisplayHealth/DisplayHealth.jsx';
import DisplayLogs from './DisplayLogs/DisplayLogs.jsx';
import DisplayTelemetry from './DisplayTelemetry/DisplayTelemetry.jsx';
import LabelsTelemetryData from '../LabelsTelemetryData/LabelsTelemetryData.jsx';

import './Content.css';

export default function Content({
  selectedTab,
  requestedData,
  onMessage,
  resetFlag,
  isLiveDataToggled,
  devices,
}) {
  return (
    <div className="contentContainer">
      {selectedTab === 'healthStatus' && (
        <DisplayHealth
          requestedData={requestedData}
          onMessage={onMessage}
          resetFlag={resetFlag}
          isLiveDataToggled={isLiveDataToggled}
        />
      )}
      {selectedTab === 'telemetry' && (
        <>
          <LabelsTelemetryData />
          <DisplayTelemetry
            requestedData={requestedData}
            onMessage={onMessage}
            resetFlag={resetFlag}
            isLiveDataToggled={isLiveDataToggled}
            devices={devices}
          />
        </>
      )}
      {selectedTab === 'logs' && (
        <DisplayLogs
          requestedData={requestedData}
          onMessage={onMessage}
          resetFlag={resetFlag}
          isLiveDataToggled={isLiveDataToggled}
        />
      )}
    </div>
  );
}
