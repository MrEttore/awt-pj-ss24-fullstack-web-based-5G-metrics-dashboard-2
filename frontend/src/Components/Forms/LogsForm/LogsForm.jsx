import { useState } from "react";
import "../Forms.css";

export default function LogsForm({ selectedTab }) {
  // pieces of state for the timespan inputs
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // piece of state for the toggle button
  const [isToggled, setIsToggled] = useState(false);

  function handleReset() {
    setStartTime("");
    setEndTime("");
  }

  function handleToggle() {
    setIsToggled(!isToggled);
    handleReset();
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
            placeholder={!isToggled ? "From ..." : ""}
            value={startTime}
            onChange={(e) => {
              setStartTime(Number(e.target.value));
            }}
            required
            disabled={isToggled}
          />
          <input
            className="time"
            type="text"
            id="time"
            placeholder={!isToggled ? "To ..." : ""}
            value={endTime}
            onChange={(e) => {
              setEndTime(Number(e.target.value));
            }}
            required
            disabled={isToggled}
          />
        </div>
      </div>

      {/* Toggle for live data */}
      <div className="toggleSwitchContainer">
        <label htmlFor="toggleSwitch">Live logs</label>

        <div className="toggleBtn" id="toggleSwitch">
          <input
            type="checkbox"
            id="toggle"
            className="toggleInput"
            checked={isToggled}
            onChange={handleToggle}
          />
          <label htmlFor="toggle" className="toggleLabel"></label>
        </div>
      </div>

      <div className="btnContainer">
        <button className="btnSubmit" type="submit" disabled={isToggled}>
          Submit
        </button>
        <button className="btnReset" onClick={handleReset} disabled={isToggled}>
          Reset
        </button>
      </div>
    </form>
  );
}
