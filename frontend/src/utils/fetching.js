import {
  CN5G_URL,
  GNB_LOGS_URL,
  GNB_TELEMETRY_URL,
  UES_URL,
  LATEST_DATAPOINT_URL,
} from './constants.js';

// CN5G

export async function getCn5gData(timeStart, timeEnd, limit) {
  if (!timeStart && !timeEnd && !limit)
    return {
      data: null,
      error: new Error('Select a valid start and endtime for the request!'),
    };

  try {
    const response = await fetch(
      `${CN5G_URL}?timeStart=${timeStart.toString()}&timeEnd=${timeEnd.toString()}&limit=${limit}`
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
    const response = await fetch(`${LATEST_DATAPOINT_URL}?topic=health`);

    if (!response.ok) throw new Error('Response not ok');

    const data = await response.json();

    return { data: [data], error: null };
  } catch (err) {
    return {
      data: null,
      error: `${err.message}. Please check your internet connection and try again`,
    };
  }
}

export async function getRecentCn5gData(limit = 30) {
  try {
    const response = await fetch(`${CN5G_URL}?limit=${limit}`);

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

export async function getGnbLogs(timeStart, timeEnd, limit) {
  if (!timeStart && !timeEnd)
    return {
      data: null,
      error: new Error('Select a valid start and endtime for the request!'),
    };

  try {
    const response = await fetch(
      `${GNB_LOGS_URL}?timeStart=${timeStart.toString()}&timeEnd=${timeEnd.toString()}&limit=${limit}`
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
    const response = await fetch(`${LATEST_DATAPOINT_URL}?topic=logs`);

    if (!response.ok) throw new Error('Response not ok');

    const data = await response.json();

    return { data: [data], error: null };
  } catch (err) {
    return {
      data: null,
      error: `${err.message}. Please check your internet connection and try again`,
    };
  }
}

export async function getRecentGnbLogs(limit = 30) {
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

// TELEMETRY

export async function getGnbTelemetry(timeStart, timeEnd, ueIds, limit) {
  if (!timeStart && !timeEnd && !ueIds)
    return {
      data: null,
      error: new Error('Select a valid start and endtime for the request!'),
    };

  try {
    const strUeIds = ueIds.join();

    const response = await fetch(
      `${GNB_TELEMETRY_URL}?timeStart=${timeStart.toString()}&timeEnd=${timeEnd.toString()}&ueIds=${strUeIds}&limit=${limit}`
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

export async function getLiveGnbTelemetry() {
  try {
    const response = await fetch(`${LATEST_DATAPOINT_URL}?topic=telemetry`);

    if (!response.ok) throw new Error('Response not ok');

    const data = await response.json();

    return { data: [data], error: null };
  } catch (err) {
    return {
      data: null,
      error: `${err.message}. Please check your internet connection and try again`,
    };
  }
}

export async function getGeneralGnbState() {
  try {
    const response = await fetch(`${LATEST_DATAPOINT_URL}?topic=gnbStatus`);

    if (!response.ok) throw new Error('Response not ok');

    const data = await response.json();

    return { data: [data], error: null };
  } catch (err) {
    return {
      data: null,
      error: `${err.message}. Please check your internet connection and try again`,
    };
  }
}

export async function getRecentGnbTelemetry(ues, limit = 30) {
  try {
    const uesStr = ues.join(',');

    const response = await fetch(
      `${GNB_TELEMETRY_URL}?ueIds=${uesStr}&limit=${limit}`
    );

    if (!response.ok) throw new Error('Response not ok');

    const data = await response.json();

    return { data: data, error: null };
  } catch (err) {
    return {
      data: [],
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