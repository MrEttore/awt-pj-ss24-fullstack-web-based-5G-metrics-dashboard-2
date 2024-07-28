import {
  CN5G_MODULES,
  DASHBOARD_UE_METRICS,
  DASHBOARD_GENERAL_METRICS,
} from './constants.js';

export function transformHealthData(data) {
  const moduleData = {};
  CN5G_MODULES.forEach((module) => {
    moduleData[module] = [];
  });

  data.forEach((record) => {
    const timestamp = record.timestamp;
    CN5G_MODULES.forEach((module) => {
      if (record[module] && typeof record[module] === 'object') {
        const { status, message } = record[module];
        moduleData[module].push({ timestamp, status, message });
      } else if (record[module] === null) {
        moduleData[module].push({
          timestamp,
          status: 'null',
          message: 'retured status: null',
        });
      } else if (typeof record[module] === 'string') {
        moduleData[module].push({
          timestamp,
          status: record[module],
          message: '',
        });
      }
    });
  });

  const result = CN5G_MODULES.map((module) => ({
    moduleName: module,
    moduleData: moduleData[module],
  }));

  return result;
}

export function aggregateLiveHealthData(existingData, newData) {
  const aggregatedData = {};

  existingData.forEach((module) => {
    aggregatedData[module.moduleName] = {
      moduleName: module.moduleName,
      moduleData: [...module.moduleData],
    };
  });

  newData.forEach((module) => {
    const moduleName = module.moduleName;
    if (!aggregatedData[moduleName]) {
      aggregatedData[moduleName] = {
        moduleName: moduleName,
        moduleData: [],
      };
    }
    aggregatedData[moduleName].moduleData.push(...module.moduleData);

    if (aggregatedData[moduleName].moduleData.length > 6) {
      aggregatedData[moduleName].moduleData =
        aggregatedData[moduleName].moduleData.slice(-6);
    }
  });

  return Object.values(aggregatedData);
}

export function transformUeTelemetryData(data) {
  const metricData = {};
  DASHBOARD_UE_METRICS.forEach((metric) => {
    metricData[metric] = [];
  });

  data.forEach((record) => {
    const timestamp = record.timestamp;

    if (record.ues && record.ues.length > 0 && record.ues[0]) {
      DASHBOARD_UE_METRICS.forEach((metric) => {
        if (record.ues[0].hasOwnProperty(metric)) {
          const value = record.ues[0][metric];
          metricData[metric].push({ timestamp, value });
        }
      });
    }
  });

  const result = DASHBOARD_UE_METRICS.map((metric) => ({
    metricName: metric,
    metricData: metricData[metric],
  }));

  return result;
}

export function transformGeneralTelemetryData(data) {
  const metricData = {};
  DASHBOARD_GENERAL_METRICS.forEach((metric) => {
    metricData[metric] = [];
  });

  data.forEach((record) => {
    const timestamp = record.timestamp;

    DASHBOARD_GENERAL_METRICS.forEach((metric) => {
      if (record.hasOwnProperty(metric)) {
        const value = record[metric];
        metricData[metric].push({ timestamp, value });
      }
    });
  });
  const result = DASHBOARD_GENERAL_METRICS.map((metric) => ({
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
