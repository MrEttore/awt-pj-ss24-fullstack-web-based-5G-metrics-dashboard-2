import './Filters.css';

export default function Filters({ filters }) {
  if (!filters) return <div className="filters"></div>;

  return (
    <div className="filters">
      {'startTime' in filters && (
        <div className="startTimeFilter">
          <p>
            Start time: <span>{filters.startTime}</span>
          </p>
        </div>
      )}
      {'endTime' in filters && (
        <div className="endTimeFilter">
          <p>
            End time: <span>{filters.endTime}</span>
          </p>
        </div>
      )}
      {'devices' in filters && (
        <div className="devicesFilter">
          <p>Devices: </p>
          {filters.devices.map((d, i) => (
            <p key={i}>
              <span>{d.label}</span>
            </p>
          ))}
        </div>
      )}
      {'metrics' in filters && (
        <div className="metricsFilter">
          <p>Metrics: </p>
          {filters.metrics.map((d, i) => (
            <p key={i}>
              <span>{d.label}</span>
            </p>
          ))}
        </div>
      )}
      {'isLiveDataOn' in filters && (
        <div className="liveDataFilter">
          <p>
            Live data: <span>{filters.isLiveDataOn ? 'on' : 'off'}</span>
          </p>
        </div>
      )}
    </div>
  );
}
