import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

import './TimespanSelector.css';

export default function TimespanSelector({
  label = 'timespan',
  startTime,
  endTime,
  onInputStartTime,
  onInputEndTime,
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
          placeholderText="From ..."
        />
        <DatePicker
          selected={endTime}
          onChange={(date) => onInputEndTime(date)}
          showTimeSelect
          dateFormat="dd/MM/yyyy, HH:mm"
          placeholderText="To ..."
        />
      </div>
    </div>
  );
}
