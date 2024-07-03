import { useEffect, useState } from 'react';

import HealthForm from './HealthForm/HealthForm';
import TelemetryForm from './TelemetryForm/TelemetryForm';
import LogsForm from './LogsForm/LogsForm';
import ToggleLiveDataSwitch from '../ToggleLiveDataSwitch/ToggleLiveDataSwitch';
import SelectTimespan from '../SelectTimespan/SelectTimespan';
import FormControlButtons from '../FormControlButtons/FormControlButtons';
import DropDown from '../DropDown/DropDown';
import { DASHBOARD_METRICS } from '../../Utils/constants';

import './Forms.css';

export default function Forms({ selectedTab, onDataRequest, onDataReset }) {
  // Set state for <ToggleLiveDataSwitch/> component
  const [isLiveDataToggled, setIsLiveDataToggled] = useState(false);

  // Set state for the <SelectTimespan/> component
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  // Set metric state
  const [metrics, setMetrics] = useState([]);

  // Reset timespan input fields
  function handleResetTimeSpan() {
    setStartTime('');
    setEndTime('');
  }

  // Handle the functionality of the live data toggle
  function handleToggle() {
    setIsLiveDataToggled(!isLiveDataToggled);
    handleResetTimeSpan();
  }

  // Handle the selection of devices
  function handleSelect(e) {}

  // TODO: handle live data

  // Handle submit of health form
  function handleSubmitHealth(e) {
    // prevent the page to reload
    e.preventDefault();

    const timestamp = {
      startTime: startTime,
      endTime: endTime,
    };

    onDataRequest(timestamp);

    // console.log(timestamp);

    handleResetTimeSpan();
  }

  // Handle submit of logs form
  function handleSubmitLogs(e) {
    // prevent the page to reload
    e.preventDefault();

    const timestamp = {
      startTime: startTime,
      endTime: endTime,
    };

    onDataRequest(timestamp);

    // console.log(timestamp);

    handleResetTimeSpan();
  }

  // Load the devices
  // TODO: get devices with API
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

  // Load the metrics
  useEffect(() => {
    function getMetrics(metricsArray) {
      const metrics = metricsArray.map((m) => ({
        value: m,
        label: m,
      }));

      setMetrics(metrics);
    }

    getMetrics(DASHBOARD_METRICS);
  }, []);

  return (
    <div className="formContainer">
      {selectedTab === 'healthStatus' && (
        <HealthForm selectedTab={selectedTab} onSubmit={handleSubmitHealth}>
          {/* TIME */}
          <SelectTimespan
            isLiveDataOn={isLiveDataToggled}
            startTime={startTime}
            endTime={endTime}
            onInputStartTime={setStartTime}
            onInputEndTime={setEndTime}
          />

          {/* LIVE DATA */}
          <ToggleLiveDataSwitch
            label="Live data"
            isToggled={isLiveDataToggled}
            onToggle={handleToggle}
          />

          {/* BTNS */}
          <FormControlButtons
            isLiveDataOn={isLiveDataToggled}
            onReset={onDataReset}
          />
        </HealthForm>
      )}

      {/* TODO: build handle submit function */}
      {selectedTab === 'telemetry' && (
        <TelemetryForm selectedTab={selectedTab} onSubmit={() => {}}>
          {/* DEVICES */}
          <DropDown name="device" label="device" content={optionsDevices} />

          {/* METRICS */}
          <DropDown name="metrics" label="metrics" content={metrics} />

          {/* TIME */}
          <SelectTimespan
            isLiveDataOn={isLiveDataToggled}
            startTime={startTime}
            endTime={endTime}
            onInputStartTime={setStartTime}
            onInputEndTime={setEndTime}
          />

          {/* LIVE DATA */}
          <ToggleLiveDataSwitch
            label="Live data"
            isToggled={isLiveDataToggled}
            onToggle={handleToggle}
          />

          {/* BTNS */}
          <FormControlButtons
            isLiveDataOn={isLiveDataToggled}
            onReset={onDataReset}
          />
        </TelemetryForm>
      )}

      {selectedTab === 'logs' && (
        <LogsForm selectedTab={selectedTab} onSubmit={handleSubmitLogs}>
          {/* TIME */}
          <SelectTimespan
            isLiveDataOn={isLiveDataToggled}
            startTime={startTime}
            endTime={endTime}
            onInputStartTime={setStartTime}
            onInputEndTime={setEndTime}
          />

          {/* LIVE DATA */}
          <ToggleLiveDataSwitch
            label="Live logs"
            isToggled={isLiveDataToggled}
            onToggle={handleToggle}
          />

          {/* BTNS */}
          <FormControlButtons
            isLiveDataOn={isLiveDataToggled}
            onReset={onDataReset}
          />
        </LogsForm>
      )}
    </div>
  );
}
