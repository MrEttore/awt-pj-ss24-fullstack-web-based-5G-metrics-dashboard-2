import { CN5G_BASE_URL, GNB_LOGS_URL, GNB_TELEMETRY_URL } from './constants.js';

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
      console.error(`Failed to fetch the modules health data: ${err.message}`);
    }
  } else throw new Error('Select a valid start and endtime for the request!');
}

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

// TODO: ueId should be an arr of ids ...
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
