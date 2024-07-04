import { CN5G_MODULES } from './constants';

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
    data: moduleData[module],
  }));

  return result;
}
