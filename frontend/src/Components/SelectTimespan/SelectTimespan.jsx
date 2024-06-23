import './SelectTimespan.css';

export default function SelectTimespan({
  label = 'Select time',
  isLiveDataOn,
  startTime,
  endTime,
  onInputStartTime,
  onInputEndTime,
}) {
  return (
    <div className="timeSpanContainer">
      <label htmlFor="time">{label}</label>
      <div className="inputContainer">
        <input
          className="time"
          type="text"
          id="time"
          placeholder={!isLiveDataOn ? 'From ...' : ''}
          value={startTime}
          onChange={(e) => {
            onInputStartTime(Number(e.target.value));
          }}
          required
          disabled={isLiveDataOn}
        />
        <input
          className="time"
          type="text"
          id="time"
          placeholder={!isLiveDataOn ? 'To ...' : ''}
          value={endTime}
          onChange={(e) => {
            onInputEndTime(Number(e.target.value));
          }}
          required
          disabled={isLiveDataOn}
        />
      </div>
    </div>
  );
}
