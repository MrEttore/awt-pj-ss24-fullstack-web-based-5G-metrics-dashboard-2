import { CN5G_BASE_URL, GNB_LOGS_URL, GNB_TELEMETRY_URL } from './constants.js';

export async function getCn5gData(timeStart, timeEnd) {
  if (!timeStart && !timeEnd)
    return {
      data: null,
      error: new Error('Select a valid start and endtime for the request!'),
    };

  try {
    const response = await fetch(
      `${CN5G_BASE_URL}?timeStart=${timeStart.toString()}&timeEnd=${timeEnd.toString()}`
    );

    if (!response.ok) throw new Error('Response not ok');

    const data = await response.json();

    return { data: data, error: null };
  } catch (err) {
    return {
      data: null,
      error: `${err.message}. Please check your internet connection and try again`,
    };
  }
}

export async function getLiveCn5gData() {
  try {
    const response = await fetch(`${CN5G_BASE_URL}`);

    if (!response.ok) throw new Error('Response not ok');

    const data = await response.json();

    const mostRecentDatapoint = data[data.length - 1];

    return mostRecentDatapoint ? [mostRecentDatapoint] : [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getRecentCn5gData() {
  try {
    const response = await fetch(`${CN5G_BASE_URL}`);

    if (!response.ok) throw new Error('Response not ok');

    const data = await response.json();

    // Get the last 6 elements of the data array
    const recentData = data.slice(-6);

    return { recentData: recentData, error: null };
  } catch (err) {
    return {
      recentData: [],
      error: `${err.message}. Please check your internet connection and try again`,
    };
  }
}

export async function getGnbLogs(timeStart, timeEnd) {
  if (!timeStart && !timeEnd)
    return {
      data: null,
      error: new Error('Select a valid start and endtime for the request!'),
    };

  try {
    const response = await fetch(
      `${GNB_LOGS_URL}?timeStart=${timeStart.toString()}&timeEnd=${timeEnd.toString()}`
    );

    if (!response.ok) throw new Error('Response not ok');

    const data = await response.json();

    return { data: data, error: null };
  } catch (err) {
    return {
      data: null,
      error: `${err.message}. Please check your internet connection and try again`,
    };
  }
}

export async function getLiveGnbLogs() {
  try {
    const response = await fetch(`${GNB_LOGS_URL}`);

    if (!response.ok) throw new Error('Response not ok');

    const data = await response.json();

    const mostRecentLog = data[data.length - 1];

    return mostRecentLog ? [mostRecentLog] : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

// TODO: ueId should be an arr of ids ...
export async function getGnBTelemetry(timeStart, timeEnd, ueId) {
  if (!timeStart && !timeEnd && !ueId)
    return {
      data: null,
      error: new Error('Select a valid start and endtime for the request!'),
    };

  try {
    const response = await fetch(
      `${GNB_TELEMETRY_URL}?timeStart=${timeStart.toString()}&timeEnd=${timeEnd.toString()}&ueId=${ueId.toString()}`
    );

    if (!response.ok) throw new Error('Response not ok');

    const data = await response.json();

    return { data: data, error: null };
  } catch (err) {
    return {
      data: null,
      error: `${err.message}. Please check your internet connection and try again`,
    };
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
