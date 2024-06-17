import { useState } from 'react';
import '../Forms.css';

const apiUrl = '/api/cn5g/telemetry';

export default function HealthForm({ selectedTab }) {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  function handleReset() {
    setStartTime('');
    setEndTime('');
  }

  function handleSubmit(e) {
    // prevent the page to reload
    e.preventDefault();

    const timestamp = {
      startTime: startTime,
      endTime: endTime,
    };

    console.log(timestamp);

    // TODO: API call
  }

  return (
    <form className={`${selectedTab}Form`} onSubmit={handleSubmit}>
      <div className="timeSpanContainer">
        <label htmlFor="time">Select time</label>
        <div className="inputContainer">
          <input
            className="time"
            type="text"
            id="time"
            placeholder="From ..."
            value={startTime}
            onChange={(e) => {
              setStartTime(Number(e.target.value));
            }}
            required
          />
          <input
            className="time"
            type="text"
            id="time"
            placeholder="To ..."
            value={endTime}
            onChange={(e) => {
              setEndTime(Number(e.target.value));
            }}
            required
          />
        </div>
      </div>

      <div className="btnContainer">
        <button className="btnSubmit" type="submit">
          Submit
        </button>
        <button className="btnReset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
}
