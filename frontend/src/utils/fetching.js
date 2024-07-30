import {
  CN5G_URL,
  GNB_LOGS_URL,
  GNB_TELEMETRY_URL,
  UES_URL,
} from './constants.js';

// CN5G

export async function getCn5gData(timeStart, timeEnd) {
  if (!timeStart && !timeEnd)
    return {
      data: null,
      error: new Error('Select a valid start and endtime for the request!'),
    };

  try {
    const response = await fetch(
      `${CN5G_URL}?timeStart=${timeStart.toString()}&timeEnd=${timeEnd.toString()}`
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
    const response = await fetch(`${CN5G_URL}`);

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
    const response = await fetch(`${CN5G_URL}?limit=10`);

    if (!response.ok) throw new Error('Response not ok');

    const recentData = await response.json();

    return { recentData: recentData, error: null };
  } catch (err) {
    return {
      recentData: [],
      error: `${err.message}. Please check your internet connection and try again`,
    };
  }
}

// LOGS

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

export async function getRecentGnbLogs(limit = 10) {
  try {
    const response = await fetch(`${GNB_LOGS_URL}?limit=${limit}`);

    if (!response.ok) throw new Error('Response not ok');

    const recentData = await response.json();

    return { recentData: recentData, error: null };
  } catch (err) {
    return {
      recentData: [],
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

// TELEMETRY

export async function getGnbTelemetry(timeStart, timeEnd, ueIds) {
  if (!timeStart && !timeEnd && !ueIds)
    return {
      data: null,
      error: new Error('Select a valid start and endtime for the request!'),
    };

  try {
    const strUeIds = ueIds.join();

    const response = await fetch(
      `${GNB_TELEMETRY_URL}?timeStart=${timeStart.toString()}&timeEnd=${timeEnd.toString()}&ueIds=${strUeIds}`
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

export async function getRecentGnbTelemetry(ues, limit = 10) {
  try {
    const uesStr = ues.join(',');

    const response = await fetch(
      `${GNB_TELEMETRY_URL}?ueIds=${uesStr}&limit=${limit}`
    );

    if (!response.ok) throw new Error('Response not ok');

    const recentData = await response.json();

    return { recentData: recentData, error: null };
  } catch (err) {
    return {
      recentData: [],
      error: `${err.message}. Please check your internet connection and try again`,
    };
  }
}

export async function getGnbUes() {
  try {
    const response = await fetch(`${UES_URL}`);

    if (!response.ok) throw new Error("API response not ok!'");

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(`Failed to fetch the data inside getGnbUes: ${err.message}`);
  }
}
