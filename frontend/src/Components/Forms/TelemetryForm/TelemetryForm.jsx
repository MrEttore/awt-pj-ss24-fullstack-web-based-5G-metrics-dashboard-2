import { useState } from 'react';
import Select from 'react-select';
import '../Forms.css';

const optionsMetrics = [
  { value: 'dlBytes', label: 'DL Bytes' },
  { value: 'ulBytes', label: 'UL Bytes' },
];

const optionsDevices = [
  {
    value: 'iPhone15',
    label: 'iPhone15',
  },

  {
    value: 'Samsung S24',
    label: 'Samsung S24',
  },
];

export default function TelemetryForm({
  selectedTab,
  isLiveDataOn,
  onSubmit,
  children,
}) {
  // piece of state to control the device selection
  const [selectedDevice, setSelectedDevice] = useState('');

  // TODO: lift state
  function handleSelect(e) {}

  return (
    <form className={`${selectedTab}Form`} onSubmit={onSubmit}>
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
          isDisabled={isLiveDataOn}
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
          isDisabled={isLiveDataOn}
        />
      </div>

      {/* TIME + LIVE DATA + METRICS + BTNS */}
      {children}
    </form>
  );
}
