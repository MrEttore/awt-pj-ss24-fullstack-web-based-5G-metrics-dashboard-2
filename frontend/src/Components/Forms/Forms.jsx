import { useEffect, useState } from 'react';

import Form from '../Form/Form';
import ToggleLiveDataSwitch from '../ToggleLiveDataSwitch/ToggleLiveDataSwitch';
import SelectTimespan from '../SelectTimespan/SelectTimespan';
import FormControlButtons from '../FormControlButtons/FormControlButtons';
import DropDown from '../DropDown/DropDown';

import { DASHBOARD_METRICS } from '../../Utils/constants';
import { getGnbUes } from '../../Utils/fetching';

import './Forms.css';

export default function Forms({ selectedTab, onDataRequest, onDataReset }) {
  // Set state for <ToggleLiveDataSwitch/> component
  const [isLiveDataToggled, setIsLiveDataToggled] = useState(false);

  // Set state for the <SelectTimespan/> component
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

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
    setStartTime('');
    setEndTime('');
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

  // Handle submit of health form
  function handleSubmitHealth(e) {
    // prevent the page to reload
    e.preventDefault();

    const requestedData = {
      startTime: startTime,
      endTime: endTime,
      isLiveDataOn: isLiveDataToggled,
    };

    onDataRequest(requestedData);

    // console.log(requestedData);

    handleResetForm();
  }

  // Handle submit of logs form
  function handleSubmitLogs(e) {
    // prevent the page to reload
    e.preventDefault();

    const requestedData = {
      startTime: startTime,
      endTime: endTime,
      isLiveDataOn: isLiveDataToggled,
    };

    onDataRequest(requestedData);

    // console.log(requestedData);

    handleResetForm();
  }

  // Handle submit of telemtry form
  function handleSubmitTelemetry(e) {
    // prevent the page to reload
    e.preventDefault();

    const requestedData = {
      startTime: startTime,
      endTime: endTime,
      devices: selectedDevices,
      metrics: selectedMetrics,
      isLiveDataOn: isLiveDataToggled,
    };

    onDataRequest(requestedData);

    console.log('requestedData: ', requestedData);

    handleResetForm();
  }

  // Load the devices for the dropdown
  useEffect(() => {
    const getDevices = async () => {
      try {
        const data = await getGnbUes();

        const daviceData = data.map((dev) => {
          return { value: dev, label: `UE${dev}` };
        });

        setDevices(daviceData);
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

      setMetrics(metrics);
    }

    getMetrics(DASHBOARD_METRICS);
  }, []);

  return (
    <div className="formContainer">
      {selectedTab === 'healthStatus' && (
        <Form selectedTab={selectedTab} onSubmit={handleSubmitHealth}>
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
        </Form>
      )}

      {selectedTab === 'telemetry' && (
        <Form selectedTab={selectedTab} onSubmit={handleSubmitTelemetry}>
          {/* DEVICES */}
          <DropDown
            name="device"
            label="device"
            options={devices}
            selectedOptions={selectedDevices}
            onSelectOption={setSelectedDevices}
          />

          {/* METRICS */}
          <DropDown
            name="metrics"
            label="metrics"
            options={metrics}
            selectedOptions={selectedMetrics}
            onSelectOption={setSelectedMetrics}
          />

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
        </Form>
      )}

      {selectedTab === 'logs' && (
        <Form selectedTab={selectedTab} onSubmit={handleSubmitLogs}>
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
        </Form>
      )}
    </div>
  );
}
