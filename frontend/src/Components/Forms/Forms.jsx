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
  const [isLiveDataToggled, setIsLiveDataToggled] = useState(false);

  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const [selectedMetrics, setSelectedMetrics] = useState([]);

  const [selectedDevices, setSelectedDevices] = useState([]);

  const [metrics, setMetrics] = useState([]);

  const [devices, setDevices] = useState([]);

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

    if (!startTime && !endTime) return;

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

    if (!startTime && !endTime) return;

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

    if (!startTime && !endTime) return;

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
          <TimespanSelector
            startTime={startTime}
            endTime={endTime}
            onInputStartTime={setStartTime}
            onInputEndTime={setEndTime}
          />

          <ToggleLiveDataSwitch
            label="Live data"
            isToggled={isLiveDataToggled}
            onToggle={handleToggle}
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
            isMulti={false}
          />

          <DropDown
            name="metrics"
            label="metrics"
            options={metrics}
            selectedOptions={selectedMetrics}
            onSelectOption={setSelectedMetrics}
            isMulti={true}
          />

          <TimespanSelector
            startTime={startTime}
            endTime={endTime}
            onInputStartTime={setStartTime}
            onInputEndTime={setEndTime}
          />

          <ToggleLiveDataSwitch
            label="Live data"
            isToggled={isLiveDataToggled}
            onToggle={handleToggle}
          />

          <FormControlButtons
            isLiveDataOn={isLiveDataToggled}
            onReset={onDataReset}
          />
        </Form>
      )}

      {selectedTab === 'logs' && (
        <Form selectedTab={selectedTab} onSubmit={handleSubmitLogs}>
          <TimespanSelector
            startTime={startTime}
            endTime={endTime}
            onInputStartTime={setStartTime}
            onInputEndTime={setEndTime}
          />

          <ToggleLiveDataSwitch
            label="Live logs"
            isToggled={isLiveDataToggled}
            onToggle={handleToggle}
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
