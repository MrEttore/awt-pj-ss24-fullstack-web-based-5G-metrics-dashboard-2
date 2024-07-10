import { CN5G_MODULES, DASHBOARD_METRICS } from './constants.js';

export function transformHealthData(data) {
  // Initialize the structure to store each module's data
  const moduleData = {};
  CN5G_MODULES.forEach((module) => {
    moduleData[module] = [];
  });

  // Process each record
  data.forEach((record) => {
    const timestamp = record.timestamp;
    CN5G_MODULES.forEach((module) => {
      if (record[module]) {
        const { status, message } = record[module];
        moduleData[module].push({ timestamp, status, message });
      }
    });
  });

  // Convert the object to an array of objects
  const result = CN5G_MODULES.map((module) => ({
    moduleName: module,
    moduleData: moduleData[module],
  }));

  return result;
}

export function transformTelemetryData(data) {
  // Initialize the structure to store each module's data
  const metricData = {};
  DASHBOARD_METRICS.forEach((metric) => {
    metricData[metric] = [];
  });

  // Process each record
  data.forEach((record) => {
    const timestamp = record.timestamp;
    DASHBOARD_METRICS.forEach((metric) => {
      if (record.ues[0].hasOwnProperty(metric)) {
        const value = record.ues[0][metric];
        metricData[metric].push({ timestamp, value });
      }
    });
  });

  // Convert the object to an array of objects
  const result = DASHBOARD_METRICS.map((metric) => ({
    metricName: metric,
    metricData: metricData[metric],
  }));

  return result;
}

export function filterRequestedTelemetryData(data, filters) {
  if (filters.metrics[0].value === 'all') return data;

  const requestedMetrics = filters.metrics.map((m) => m.value);

  const filteredMetricData = data.filter((m) =>
    requestedMetrics.includes(m.metricName)
  );

  return filteredMetricData;
}
