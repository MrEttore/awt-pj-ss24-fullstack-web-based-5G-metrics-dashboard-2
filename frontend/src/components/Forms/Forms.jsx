import { useEffect, useState } from 'react';

import Form from '../Form/Form';
import ToggleLiveDataSwitch from '../ToggleLiveDataSwitch/ToggleLiveDataSwitch';
import TimespanSelector from '../TimespanSelector/TimespanSelector';
import FormControlButtons from '../FormControlButtons/FormControlButtons';
import DropDown from '../DropDown/DropDown';

import './Forms.css';

export default function Forms({
  selectedTab,
  onDataRequest,
  onDataReset,
  isLiveDataToggled,
  onToggleLiveData,
  devices,
  metrics,
}) {
  const [startTime, setStartTime] = useState(null);

  const [endTime, setEndTime] = useState(null);

  const [selectedMetrics, setSelectedMetrics] = useState([]);

  const [selectedDevices, setSelectedDevices] = useState([]);

  function handleResetForm() {
    setStartTime(null);
    setEndTime(null);
    setSelectedMetrics([]);
    setSelectedDevices([]);
  }

  function handleSubmitHealth(e) {
    e.preventDefault();

    if (!startTime && !endTime) return;

    const requestedData = {
      startTime: startTime.getTime(),
      endTime: endTime.getTime(),
    };

    onDataRequest(requestedData);

    handleResetForm();
  }

  function handleSubmitLogs(e) {
    e.preventDefault();

    if (!startTime && !endTime) return;

    const requestedData = {
      startTime: startTime.getTime(),
      endTime: endTime.getTime(),
    };

    onDataRequest(requestedData);

    handleResetForm();
  }

  function handleSubmitTelemetry(e) {
    e.preventDefault();

    if (!startTime && !endTime) return;

    const requestedData = {
      startTime: startTime.getTime(),
      endTime: endTime.getTime(),
      devices: selectedDevices,
      metrics: selectedMetrics,
    };

    onDataRequest(requestedData);

    handleResetForm();
  }

  // CLEAR INPUT FIELDS WHEN LIVE DATA IS ON

  useEffect(() => {
    if (isLiveDataToggled) handleResetForm();
  }, [isLiveDataToggled]);

  return (
    <div className="formContainer">
      {selectedTab === 'healthStatus' && (
        <Form selectedTab={selectedTab} onSubmit={handleSubmitHealth}>
          <DropDown name="devices" label="devices" isActive={false} />

          <DropDown name="metrics" label="metrics" isActive={false} />

          <TimespanSelector
            startTime={startTime}
            endTime={endTime}
            onInputStartTime={setStartTime}
            onInputEndTime={setEndTime}
            isLiveDataOn={isLiveDataToggled}
          />

          <ToggleLiveDataSwitch
            label="Live data"
            isToggled={isLiveDataToggled}
            onToggle={onToggleLiveData}
          />

          <FormControlButtons
            isLiveDataOn={isLiveDataToggled}
            onReset={onDataReset}
          />
        </Form>
      )}

      {selectedTab === 'telemetry' && (
        <Form selectedTab={selectedTab} onSubmit={handleSubmitTelemetry}>
          <DropDown
            name="devices"
            label="devices"
            options={devices}
            selectedOptions={selectedDevices}
            onSelectOption={(selected) =>
              setSelectedDevices(
                Array.isArray(selected) ? selected : [selected]
              )
            }
            isMulti={true}
            isLiveDataOn={isLiveDataToggled}
            isActive={true}
          />

          <DropDown
            name="metrics"
            label="metrics"
            options={metrics}
            selectedOptions={selectedMetrics}
            onSelectOption={setSelectedMetrics}
            isMulti={true}
            isLiveDataOn={isLiveDataToggled}
            isActive={true}
          />

          <TimespanSelector
            startTime={startTime}
            endTime={endTime}
            onInputStartTime={setStartTime}
            onInputEndTime={setEndTime}
            isLiveDataOn={isLiveDataToggled}
          />

          <ToggleLiveDataSwitch
            label="Live data"
            isToggled={isLiveDataToggled}
            onToggle={onToggleLiveData}
          />

          <FormControlButtons
            isLiveDataOn={isLiveDataToggled}
            onReset={onDataReset}
          />
        </Form>
      )}

      {selectedTab === 'logs' && (
        <Form selectedTab={selectedTab} onSubmit={handleSubmitLogs}>
          <DropDown name="devices" label="devices" isActive={false} />

          <DropDown name="metrics" label="metrics" isActive={false} />

          <TimespanSelector
            startTime={startTime}
            endTime={endTime}
            onInputStartTime={setStartTime}
            onInputEndTime={setEndTime}
            isLiveDataOn={isLiveDataToggled}
          />

          <ToggleLiveDataSwitch
            label="Live logs"
            isToggled={isLiveDataToggled}
            onToggle={onToggleLiveData}
          />

          <FormControlButtons
            isLiveDataOn={isLiveDataToggled}
            onReset={onDataReset}
          />
        </Form>
      )}
    </div>
  );
}
