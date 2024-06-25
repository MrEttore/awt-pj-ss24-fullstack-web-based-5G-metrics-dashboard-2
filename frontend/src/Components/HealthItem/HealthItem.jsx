import { Line } from 'react-chartjs-2';

import './HealthItem.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components and scales
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function HealthItem({ name, rawData = [] }) {
  const color = '#F5F5F5';

  // Set the display options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    // which plugins we want to activate
    plugins: {
      title: {
        display: true,
        text:
          rawData.length !== 0
            ? name.toUpperCase()
            : `${name.toUpperCase()} (No data)`,
        color: rawData.length !== 0 ? color : '#FEBE10',
      },
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const dataIndex = tooltipItem.dataIndex;
            return messages[dataIndex]
              ? `Message: ${messages[dataIndex]}`
              : 'Message: no message available';
          },
        },
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          color: color,
        },
        ticks: {
          color: color,
        },
        border: {
          color: '#37446b',
          width: 2,
        },
        grid: {
          display: true,
          color: 'rgb(245, 245, 245, 0.1)',
          lineWidth: 1,
        },
      },
      y: {
        display: true,
        type: 'category',
        labels: ['ON', 'OFF'],
        offset: true,
        position: 'left',
        stack: 'demo',
        stackWeight: 1,
        ticks: {
          color: color,
        },
        border: {
          color: '#37446b',
          width: 2,
        },
      },
    },
  };

  /// Process the rawData array ///

  const labels = rawData.map((dp) => {
    const date = new Date(dp.timestamp);
    const dateString = date.toLocaleString();

    return dateString;
  });

  const healthData = rawData.map((dp) => dp.status);

  const messages = rawData.map((dp) => dp.message);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Health',
        data: healthData.map((value) => (value === 'Healthy' ? 'ON' : 'OFF')),
        borderColor: 'rgb(245, 245, 245, 0.1)',
        fill: false,
        stepped: true,
        pointBackgroundColor: healthData.map((value) =>
          value === 'Healthy' ? 'green' : 'red'
        ),
        pointBorderColor: healthData.map((value) =>
          value === 'Healthy' ? 'green' : 'red'
        ),
        pointRadius: 2,
        pointHoverRadius: 7,
      },
    ],
  };

  return (
    <div className={`healthItem ${rawData.length !== 0 ? '' : 'noData'}`}>
      <Line options={options} data={data} />
    </div>
  );
}
