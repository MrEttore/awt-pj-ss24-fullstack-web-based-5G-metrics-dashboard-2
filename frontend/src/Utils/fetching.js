import { CN5G_BASE_URL } from './constants';

// Fetch cn5g telemetry
export async function getCn5gData(timeStart, timeEnd) {
  if (timeStart && timeEnd) {
    try {
      const response = await fetch(
        `${CN5G_BASE_URL}timeStart=${timeStart.toString()}&timeEnd=${timeEnd.toString()}`
      );

      if (!response.ok) throw new Error('Response not ok!');

      const data = await response.json();

      return data;
    } catch (err) {
      console.error(`Failed to fetch the data inside getCn5gData: ${err}`);
    }
  } else throw new Error('Select a valid start and endtime for the request!');
}
