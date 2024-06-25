import { useState } from 'react';

import HealthForm from './HealthForm/HealthForm';
import TelemetryForm from './TelemetryForm/TelemetryForm';
import LogsForm from './LogsForm/LogsForm';
import ToggleLiveDataSwitch from '../ToggleLiveDataSwitch/ToggleLiveDataSwitch';
import SelectTimespan from '../SelectTimespan/SelectTimespan';
import FormControlButtons from '../FormControlButtons/FormControlButtons';

import './Forms.css';

export default function Forms({ selectedTab, onDataRequest, onDataReset }) {
  // Set state for <ToggleLiveDataSwitch/> component
  const [isLiveDataToggled, setIsLiveDataToggled] = useState(false);

  // Set state for the <SelectTimespan/> component
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

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

    handleResetTimeSpan();
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
            onReset={onDataReset}
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
            onReset={onDataReset}
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
            onReset={onDataReset}
          />
        </LogsForm>
      )}
    </div>
  );
}
