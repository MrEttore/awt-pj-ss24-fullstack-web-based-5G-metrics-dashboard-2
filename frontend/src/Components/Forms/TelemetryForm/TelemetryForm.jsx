import { useState } from "react";
import Select from "react-select";
import "../Forms.css";

const optionsMetrics = [
  { value: "dlBytes", label: "DL Bytes" },
  { value: "ulBytes", label: "UL Bytes" },
];

const optionsDevices = [
  {
    value: "iPhone15",
    label: "iPhone15",
  },

  {
    value: "Samsung S24",
    label: "Samsung S24",
  },
];

export default function TelemetryForm({ selectedTab }) {
  // piece of state to control the device selection
  const [selectedDevice, setSelectedDevice] = useState("");

  // pieces of state for the timespan inputs
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // piece of state for the toggle button

  function handleSelect(e) {}

  function handleReset() {
    setStartTime("");
    setEndTime("");
  }

  function handleSubmit(e) {
    // prevent the page to reload
    e.preventDefault();

    const timestamp = {
      startTime: startTime,
      endTime: endTime,
      device: selectedDevice,
    };

    console.log(timestamp);

    // TODO: API call
  }

  return (
    <form className={`${selectedTab}Form`} onSubmit={handleSubmit}>
      {/* TIME */}
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

      {/* DEVICE */}
      <div className="selectDeviceContainer">
        <label htmlFor="selectDevice">Select device</label>
        <Select
          className="selectDevice"
          classNamePrefix="react-select"
          id="selectDevice"
          unstyled
          isMulti
          isSearchable
          // defaultValue={selectedDevice}
          // value={selectedDevice}
          onChange={(e) => {
            console.log(e);
          }}
          options={optionsDevices}
          required
        />
      </div>

      {/* METRICS */}
      <div className="selectMetricsContainer">
        <label htmlFor="selectMetrics">Select Metric</label>
        <Select
          className="selectMetrics"
          classNamePrefix="react-select"
          id="selectMetrics"
          unstyled
          isMulti
          isSearchable
          // defaultValue={selectedDevice}
          onChange={setSelectedDevice}
          options={optionsMetrics}
          required
        />
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
