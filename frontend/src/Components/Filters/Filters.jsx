import './Filters.css';

export default function Filters({ filters, isThereError }) {
  if (!filters) return <div className="filters"></div>;

  if (isThereError) return <div className="filters"></div>;

  const { startTime, endTime, devices, metrics, isLiveDataOn } = filters;

  const startTimeString = new Date(startTime).toLocaleString();
  const startEndString = new Date(endTime).toLocaleString();

  return (
    <div className="filters">
      {'startTime' in filters && (
        <div className="startTimeFilter">
          <p>
            Start time: <span>{startTimeString}</span>
          </p>
        </div>
      )}
      {'endTime' in filters && (
        <div className="endTimeFilter">
          <p>
            End time: <span>{startEndString}</span>
          </p>
        </div>
      )}
      {'devices' in filters && (
        <div className="devicesFilter">
          <p>Devices: </p>
          {devices.map((d, i) => (
            <p key={i}>
              <span>{d.label}</span>
            </p>
          ))}
        </div>
      )}
      {'metrics' in filters && (
        <div className="metricsFilter">
          <p>Metrics: </p>
          {metrics.map((d, i) => (
            <p key={i}>
              <span>{d.label}</span>
            </p>
          ))}
        </div>
      )}
      {'isLiveDataOn' in filters && (
        <div className="liveDataFilter">
          <p>
            Live data: <span>{isLiveDataOn ? 'on' : 'off'}</span>
          </p>
        </div>
      )}
    </div>
  );
}
