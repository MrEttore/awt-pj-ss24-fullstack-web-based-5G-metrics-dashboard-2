import {
  CN5G_MODULES,
  DASHBOARD_UE_METRICS,
  DASHBOARD_GENERAL_METRICS,
} from './constants.js';

export function getHealthData(data) {
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

export function getUeTelemetryData(data) {
  const metricData = {};

  DASHBOARD_UE_METRICS.forEach((metric) => {
    metricData[metric] = {};
  });

  data.forEach((record) => {
    const timestamp = record.timestamp;

    record.ues.forEach((ue) => {
      const ueId = ue.ueId;

      DASHBOARD_UE_METRICS.forEach((metric) => {
        if (ue.hasOwnProperty(metric)) {
          const value = ue[metric];
          if (!metricData[metric][ueId]) {
            metricData[metric][ueId] = [];
          }
          metricData[metric][ueId].push({ timestamp, value });
        }
      });
    });
  });

  const result = DASHBOARD_UE_METRICS.map((metric) => {
    const ueData = Object.keys(metricData[metric]).map((ueId) => ({
      ueId: Number(ueId),
      data: metricData[metric][ueId],
    }));

    return {
      metricName: metric,
      metricData: ueData,
    };
  });

  return result;
}

export function getGeneralTelemetryData(data) {
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

export function aggregateLiveHealthData(currentState, newData) {
  const aggregatedData = {};

  currentState.forEach((module) => {
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

    if (aggregatedData[moduleName].moduleData.length > 30)
      aggregatedData[moduleName].moduleData.shift();
  });

  return Object.values(aggregatedData);
}

export function aggregateLiveUeTelemetryData(currentState, newData) {
  const aggregatedData = {};

  currentState.forEach((metric) => {
    aggregatedData[metric.metricName] = {
      metricName: metric.metricName,
      metricData: [...metric.metricData],
    };
  });

  newData.forEach((metric) => {
    const metricName = metric.metricName;

    metric.metricData.forEach((ue) => {
      const ueIdNewData = ue.ueId;
      const newDataArr = ue.data;

      for (const ueInCurrentState of aggregatedData[metricName].metricData) {
        if (ueInCurrentState.ueId === ueIdNewData) {
          ueInCurrentState.data.push(...newDataArr);

          if (ueInCurrentState.data.length > 10)
            ueInCurrentState.data = ueInCurrentState.data.slice(-10);
        }
      }
    });
  });

  return Object.values(aggregatedData);
}

export function aggregateLiveGeneralTelemetryData(currentState, newData) {
  const aggregatedData = {};

  currentState.forEach((metric) => {
    aggregatedData[metric.metricName] = {
      metricName: metric.metricName,
      metricData: [...metric.metricData],
    };
  });

  newData.forEach((metric) => {
    const metricName = metric.metricName;

    if (!aggregatedData[metricName]) {
      aggregatedData[metricName] = {
        metricName: metricName,
        metricData: [],
      };
    }

    aggregatedData[metricName].metricData.push(...metric.metricData);

    if (aggregatedData[metricName].metricData.length > 30)
      aggregatedData[metricName].metricData.shift();
  });

  return Object.values(aggregatedData);
}

export function filterTelemetryData(data, filters) {
  if (filters.metrics[0].value === 'all') return data;

  const requestedMetrics = filters.metrics.map((m) => m.value);

  const filteredMetricData = data.filter((m) =>
    requestedMetrics.includes(m.metricName)
  );

  return filteredMetricData;
}
