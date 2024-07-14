import { useEffect, useState } from 'react';

import Form from '../Form/Form';
import ToggleLiveDataSwitch from '../ToggleLiveDataSwitch/ToggleLiveDataSwitch';
import TimespanSelector from '../TimespanSelector/TimespanSelector';
import FormControlButtons from '../FormControlButtons/FormControlButtons';
import DropDown from '../DropDown/DropDown';

import { DASHBOARD_METRICS } from '../../Utils/constants';
import { getGnbUes } from '../../Utils/fetching';

import './Forms.css';

export default function Forms({ selectedTab, onDataRequest, onDataReset }) {
  // Set state for <ToggleLiveDataSwitch/> component
  const [isLiveDataToggled, setIsLiveDataToggled] = useState(false);

  // Set state for the <SelectTimespan/> component
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  // Set state to manage the currently selected metric
  const [selectedMetrics, setSelectedMetrics] = useState([]);

  // Set state to manage the currently selected device
  const [selectedDevices, setSelectedDevices] = useState([]);

  // Set state to manage available metrics
  const [metrics, setMetrics] = useState([]);

  // Set state to manage available devices
  const [devices, setDevices] = useState([]);

  // Reset timespan input fields
  function handleResetForm() {
    setStartTime(null);
    setEndTime(null);
    setSelectedMetrics([]);
    setSelectedDevices([]);
  }

  // TODO: also update the dropdowns ...
  // Handle the functionality of the live data toggle
  function handleToggle() {
    setIsLiveDataToggled(!isLiveDataToggled);
    handleResetForm();
  }

  // TODO: handle live data
  // ...

  function handleSubmitHealth(e) {
    e.preventDefault();

    const requestedData = {
      startTime: startTime.getTime(),
      endTime: endTime.getTime(),
      isLiveDataOn: isLiveDataToggled,
    };

    onDataRequest(requestedData);

    handleResetForm();
  }

  function handleSubmitLogs(e) {
    e.preventDefault();

    const requestedData = {
      startTime: startTime.getTime(),
      endTime: endTime.getTime(),
      isLiveDataOn: isLiveDataToggled,
    };

    onDataRequest(requestedData);

    handleResetForm();
  }

  function handleSubmitTelemetry(e) {
    e.preventDefault();

    const requestedData = {
      startTime: startTime.getTime(),
      endTime: endTime.getTime(),
      devices: selectedDevices,
      metrics: selectedMetrics,
      isLiveDataOn: isLiveDataToggled,
    };

    onDataRequest(requestedData);

    handleResetForm();
  }

  // Load the devices for the dropdown
  useEffect(() => {
    const getDevices = async () => {
      try {
        const data = await getGnbUes();

        const deviceData = data.map((device) => {
          return { value: device, label: `UE${device}` };
        });

        setDevices(deviceData);
      } catch (err) {
        console.error(err.message);
      }
    };

    getDevices();
  }, []);

  // Load the metrics for the dropdown
  useEffect(() => {
    function getMetrics(metricsArray) {
      const metrics = metricsArray.map((m) => {
        return { value: m, label: m };
      });

      metrics.unshift({ value: 'all', label: 'All metrics' });

      setMetrics(metrics);
    }

    getMetrics(DASHBOARD_METRICS);
  }, []);

  return (
    <div className="formContainer">
      {selectedTab === 'healthStatus' && (
        <Form selectedTab={selectedTab} onSubmit={handleSubmitHealth}>
          {/* TIME */}
          <TimespanSelector
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
        </Form>
      )}

      {selectedTab === 'telemetry' && (
        <Form selectedTab={selectedTab} onSubmit={handleSubmitTelemetry}>
          {/* DEVICES */}
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
            isMulti={false}
          />

          {/* METRICS */}
          <DropDown
            name="metrics"
            label="metrics"
            options={metrics}
            selectedOptions={selectedMetrics}
            onSelectOption={setSelectedMetrics}
            isMulti={true}
          />

          {/* TIME */}
          <TimespanSelector
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
        </Form>
      )}

      {selectedTab === 'logs' && (
        <Form selectedTab={selectedTab} onSubmit={handleSubmitLogs}>
          {/* TIME */}
          <TimespanSelector
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
        </Form>
      )}
    </div>
  );
}
