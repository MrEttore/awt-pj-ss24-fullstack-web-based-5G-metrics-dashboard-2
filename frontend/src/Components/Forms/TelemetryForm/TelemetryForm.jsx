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
  const [selectedDevice, setSelectedDevice] = useState("iPhone15");

  return (
    <form
      className={`${selectedTab}Form`} /*  onSubmit={handleSubmit(event)} ... */
    >
      {/* DEVICE */}
      <label htmlFor="selectDevice">Select device</label>
      <Select
        className="selectDevice"
        classNamePrefix="react-select"
        id="selectDevice"
        unstyled
        isMulti
        isSearchable
        defaultValue={selectedDevice}
        onChange={setSelectedDevice}
        options={optionsDevices}
        required
      />

      {/* METRICS */}
      <label htmlFor="selectMetrics">Select Metric</label>
      <Select
        className="selectMetrics"
        classNamePrefix="react-select"
        id="selectMetrics"
        unstyled
        isMulti
        isSearchable
        defaultValue={selectedDevice}
        onChange={setSelectedDevice}
        options={optionsMetrics}
        required
      />

      {/* TIME */}
      <label htmlFor="time">Select time</label>
      <input
        type="text"
        id="time"
        placeholder="Add an unix timestamp"
        required
      ></input>
      <div className="btnContainer">
        <button className="btnSubmit" type="submit">
          Submit
        </button>
        <button className="btnReset">Reset</button>
      </div>
    </form>
  );
}
