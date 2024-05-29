import { useState } from "react";
import "./ControlBar.css";
import Select from "react-select";
import Tab from "../Tab/Tab";

const optionsMetrics = [
  { value: "dlBytes", label: "DL Bytes" },
  { value: "ulBytes", label: "UL Bytes" },
];

const optionsdevice = [
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
  const [selectedTab, setSelectedTab] = useState("healthStatus");

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
          <button className="btnHealthForm" type="submit">
            Submit
          </button>
        </form>
      )}

      {selectedTab === "telemetry" && (
        <form
          className="telemetryForm" /*  onSubmit={handleSubmit(event)} ... */
        >
          <label>telemetryForm</label>
        </form>
      )}

      {selectedTab === "logs" && (
        <form className="logsForm" /*  onSubmit={handleSubmit(event)} ... */>
          <label>logsForm</label>
        </form>
      )}
    </div>
  );
}

export default ControlBar;

//  const [selectedDevice, setSelectedDevice] = useState(null);
//  const [selectedMetric, setSelectedMetric] = useState(null);

// {/* <form className="control" /*  onSubmit={handleSubmit(event)} ... */>
//   {/* Select device */}
//   <div className="device">
//     <label htmlFor="selectDevice">Device:</label>
//     <Select
//       className="selectDevice"
//       classNamePrefix="react-select"
//       id="selectDevice"
//       unstyled
//       isMulti
//       isSearchable
//       defaultValue={selectedDevice}
//       onChange={setSelectedDevice}
//       options={optionsdevice}
//     />
//   </div>

//   {/* Select time span */}
//   <div className="time">
//     <label htmlFor="selectTime">Time Span:</label>
//     <p id="selectTime">[Here comes the time filter]</p>
//   </div>

//   {/* Select metrics */}
//   <div className="metrics">
//     <label htmlFor="selectMetrics">Metrics:</label>
//     <Select
//       className="selectMetrics"
//       classNamePrefix="react-select"
//       id="selectMetrics"
//       unstyled
//       isMulti
//       isSearchable
//       defaultValue={selectedMetric}
//       onChange={setSelectedMetric}
//       options={optionsMetrics}
//     />
//   </div>

//   {/* Submit button */}
//   <button className="btnForm" type="submit">
//     Show Data
//   </button>
// </form>; */}
