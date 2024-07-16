import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

import './TimespanSelector.css';

export default function TimespanSelector({
  label = 'timespan',
  startTime,
  endTime,
  onInputStartTime,
  onInputEndTime,
  isLiveDataOn,
}) {
  return (
    <div className="timeSpanContainer">
      <label htmlFor="time">{label}</label>
      <div className="inputContainer">
        {/* TODO: add "required"? */}

        <DatePicker
          selected={startTime}
          onChange={(date) => onInputStartTime(date)}
          showTimeSelect
          dateFormat="dd/MM/yyyy, HH:mm"
          placeholderText={`${isLiveDataOn ? '' : 'From ...'}`}
          disabled={isLiveDataOn}
        />
        <DatePicker
          selected={endTime}
          onChange={(date) => onInputEndTime(date)}
          showTimeSelect
          dateFormat="dd/MM/yyyy, HH:mm"
          placeholderText={`${isLiveDataOn ? '' : 'To ...'}`}
          disabled={isLiveDataOn}
        />
      </div>
    </div>
  );
}
