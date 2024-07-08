import { CN5G_BASE_URL, GNB_LOGS_URL, GNB_TELEMETRY_URL } from './constants.js';

// Fetch cn5g telemetry using timespans
export async function getCn5gData(timeStart, timeEnd) {
  if (timeStart && timeEnd) {
    try {
      const response = await fetch(
        `${CN5G_BASE_URL}?timeStart=${timeStart.toString()}&timeEnd=${timeEnd.toString()}`
      );

      if (!response.ok) throw new Error('API response not ok!');

      const data = await response.json();

      return data;
    } catch (err) {
      console.error(
        `Failed to fetch the data inside getCn5gData: ${err.message}`
      );
    }
  } else throw new Error('Select a valid start and endtime for the request!');
}

// Fetch gnb logs using timespans
export async function getGnbLogs(timeStart, timeEnd) {
  if (timeStart && timeEnd) {
    try {
      const response = await fetch(
        `${GNB_LOGS_URL}?timeStart=${timeStart.toString()}&timeEnd=${timeEnd.toString()}`
      );

      if (!response.ok) throw new Error('API response not ok!');

      const data = await response.json();

      return data;
    } catch (err) {
      console.error(
        `Failed to fetch the data inside getGnbLogs: ${err.message}`
      );
    }
  }
}

// Fetch gnb telemetry using timespans
export async function getGnBTelemetry(timeStart, timeEnd, ueId) {
  if (timeStart && timeEnd && ueId) {
    try {
      const response = await fetch(
        `${GNB_TELEMETRY_URL}?timeStart=${timeStart.toString()}&timeEnd=${timeEnd.toString()}&ueId=${ueId.toString()}`
      );

      if (!response.ok) throw new Error('API response not ok!');

      const data = await response.json();

      return data;
    } catch (err) {
      console.error(
        `Failed to fetch the data inside getGnbLogs: ${err.message}`
      );
    }
  }
}

// http://localhost:3000/api/gnb/telemetry?timeStart=1&timeEnd=1715076984102&ueId=1  <-- !!
// or ...
// http://localhost:3000/api/gnb/telemetry/ue?ueId=1&timeStart=1&timeEnd=1715077195101

// Fetch available ues (devices)
export async function getGnbUes() {
  try {
    const response = await fetch(`${GNB_TELEMETRY_URL}?ues`);

    if (!response.ok) throw new Error("API response not ok!'");

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(`Failed to fetch the data inside getGnbUes: ${err.message}`);
  }
}
