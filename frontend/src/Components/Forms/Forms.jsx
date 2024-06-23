import { useState } from 'react';

import HealthForm from './HealthForm/HealthForm';
import TelemetryForm from './TelemetryForm/TelemetryForm';
import LogsForm from './LogsForm/LogsForm';
import ToggleLiveDataSwitch from '../ToggleLiveDataSwitch/ToggleLiveDataSwitch';
import SelectTimespan from '../SelectTimespan/SelectTimespan';
import FormControlButtons from '../FormControlButtons/FormControlButtons';

import './Forms.css';

export default function Forms({ selectedTab, onDataRequest }) {
  // Set state for <ToggleLiveDataSwitch/> component
  const [isLiveDataToggled, setIsLiveDataToggled] = useState(false);

  // Set state for the <SelectTimespan/> component
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  // Reset timespan input fields
  function handleResetTime() {
    setStartTime('');
    setEndTime('');
  }

  // Handle the functionality of the live data toggle
  function handleToggle() {
    setIsLiveDataToggled(!isLiveDataToggled);
    handleResetTime();
  }

  // TODO: handle live data

  // Handle submit of form
  function handleSubmitHealth(e) {
    // prevent the page to reload
    e.preventDefault();

    const timestamp = {
      startTime: startTime,
      endTime: endTime,
    };

    onDataRequest(timestamp);

    // console.log(timestamp);

    handleResetTime();
  }

  return (
    <div className="formContainer">
      {/* TODO: build handle submit function */}
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
            onReset={handleResetTime}
          />
        </HealthForm>
      )}

      {/* TODO: build handle submit function */}
      {selectedTab === 'telemetry' && (
        <TelemetryForm selectedTab={selectedTab} onSubmit={() => {}}>
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
            onReset={handleResetTime}
          />
        </TelemetryForm>
      )}

      {/* TODO: build handle submit function */}
      {selectedTab === 'logs' && (
        <LogsForm selectedTab={selectedTab} onSubmit={() => {}}>
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
            onReset={handleResetTime}
          />
        </LogsForm>
      )}
    </div>
  );
}
