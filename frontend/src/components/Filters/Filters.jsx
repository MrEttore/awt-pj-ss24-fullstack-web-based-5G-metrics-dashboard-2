import './Filters.css';

export default function Filters({ filters, isThereError }) {
  if (!filters || isThereError) return <div className="filters"></div>;

  const { startTime, endTime, devices, metrics, limitDatapoints } = filters;
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

      {'limitDatapoints' in filters && (
        <div className="limitFilter">
          <p>
            Max datapoints: <span>{limitDatapoints}</span>
          </p>
        </div>
      )}
    </div>
  );
}
