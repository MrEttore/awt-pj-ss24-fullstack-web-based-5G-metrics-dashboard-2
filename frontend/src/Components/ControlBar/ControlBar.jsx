import { useState } from "react";
import "./ControlBar.css";
import Select from "react-select";

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
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [selectedMetric, setSelectedMetric] = useState(null);

  return (
    <div className="formContainer">
      <form className="control" /*  onSubmit={handleSubmit(event)} ... */>
        {/* Select device */}
        <div className="device">
          <label htmlFor="selectDevice">Device:</label>
          <Select
            className="selectDevice"
            classNamePrefix="react-select"
            id="selectDevice"
            unstyled
            isMulti
            isSearchable
            defaultValue={selectedDevice}
            onChange={setSelectedDevice}
            options={optionsdevice}
          />
        </div>

        {/* Select time span */}
        <div className="time">
          <label htmlFor="selectTime">Time Span:</label>
          <p id="selectTime">[Here comes the time filter]</p>
        </div>

        {/* Select metrics */}
        <div className="metrics">
          <label htmlFor="selectMetrics">Metrics:</label>
          <Select
            className="selectMetrics"
            classNamePrefix="react-select"
            id="selectMetrics"
            unstyled
            isMulti
            isSearchable
            defaultValue={selectedMetric}
            onChange={setSelectedMetric}
            options={optionsMetrics}
          />
        </div>

        {/* Submit button */}
        <button className="btnForm" type="submit">
          Show Data
        </button>
      </form>
    </div>
  );
}

export default ControlBar;
