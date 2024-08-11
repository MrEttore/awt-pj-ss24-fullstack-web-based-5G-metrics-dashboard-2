import DatePicker from 'react-datepicker';

import './TimespanSelector.css';

export default function TimespanSelector({
  label = 'time',
  startTime,
  endTime,
  onInputStartTime,
  onInputEndTime,
  isLiveDataOn,
}) {
  return (
    <div className="timeSpanContainer">
      <label htmlFor="time" className={`${isLiveDataOn ? 'inactive' : ''}`}>
        {label}
      </label>
      <div className="inputContainer">
        {/* TODO: add "required"? */}

        <DatePicker
          selected={startTime}
          onChange={(date) => onInputStartTime(date)}
          showTimeSelect
          dateFormat="dd/MM/yyyy, HH:mm"
          placeholderText="From ..."
          disabled={isLiveDataOn}
          timeIntervals={15}
        />
        <DatePicker
          selected={endTime}
          onChange={(date) => onInputEndTime(date)}
          showTimeSelect
          dateFormat="dd/MM/yyyy, HH:mm"
          placeholderText="To ..."
          disabled={isLiveDataOn}
          timeIntervals={15}
        />
      </div>
    </div>
  );
}
