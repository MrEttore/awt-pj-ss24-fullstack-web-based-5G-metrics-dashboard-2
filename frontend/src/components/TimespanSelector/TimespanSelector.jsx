import DatePicker from 'react-datepicker';
import './TimespanSelector.css';

export default function TimespanSelector({
  label = 'time',
  startTime,
  endTime,
  onInputStartTime,
  onInputEndTime,
  isLiveDataOn,
  required = false,
  startError,
  endError,
}) {
  return (
    <div className="timeSpanContainer">
      <label htmlFor="time" className={`${isLiveDataOn ? 'inactive' : ''}`}>
        {label} {required && '*'}
      </label>
      <div className="inputContainer">
        <DatePicker
          selected={startTime}
          onChange={onInputStartTime}
          showTimeSelect
          dateFormat="dd/MM/yyyy, HH:mm"
          placeholderText={startError ? 'Start time is required!' : 'From ...'}
          disabled={isLiveDataOn}
          timeIntervals={15}
          className={startError ? 'error' : ''}
        />

        <DatePicker
          selected={endTime}
          onChange={onInputEndTime}
          showTimeSelect
          dateFormat="dd/MM/yyyy, HH:mm"
          placeholderText={endError ? 'End time is required!' : 'To ...'}
          disabled={isLiveDataOn}
          timeIntervals={15}
          className={endError ? 'error' : ''}
        />
      </div>
    </div>
  );
}
