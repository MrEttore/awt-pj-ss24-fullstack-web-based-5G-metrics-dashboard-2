import { useState } from "react";
import "./ControlBar.css";
import Select from "react-select";
import Tab from "../Tab/Tab";

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

// TODO: build form elements in separate React components

function ControlBar() {
  // piece of state to control the tab selection
  const [selectedTab, setSelectedTab] = useState("healthStatus");

  // piece of state to control the device selection
  const [selectedDevice, setSelectedDevice] = useState("iPhone15");

  function handleSelectedTab(e) {
    setSelectedTab(e.target.value);
  }

  return (
    <div className="controlBarContainer">
      <div className="selectTab">
        <Tab
          value="healthStatus"
          onSelect={handleSelectedTab}
          selectedTab={selectedTab}
        >
          Health Status
        </Tab>
        <Tab
          value="telemetry"
          onSelect={handleSelectedTab}
          selectedTab={selectedTab}
        >
          Telemetry
        </Tab>
        <Tab
          value="logs"
          onSelect={handleSelectedTab}
          selectedTab={selectedTab}
        >
          Logs
        </Tab>
      </div>

      {selectedTab === "healthStatus" && (
        <form
          className="healthStatusForm" /*  onSubmit={handleSubmit(event)} ... */
        >
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
      )}

      {selectedTab === "telemetry" && (
        <form
          className="telemetryForm" /*  onSubmit={handleSubmit(event)} ... */
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
          <label htmlFor="selectMetrics">Select device</label>
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
      )}

      {selectedTab === "logs" && (
        <form className="logsForm" /*  onSubmit={handleSubmit(event)} ... */>
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
      )}
    </div>
  );
}

export default ControlBar;
