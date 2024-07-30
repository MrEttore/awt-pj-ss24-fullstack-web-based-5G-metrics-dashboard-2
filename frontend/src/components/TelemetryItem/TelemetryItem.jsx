import { Line } from 'react-chartjs-2';
import './TelemetryItem.css';
import {
  COLOR_LABEL_TEXT,
  COLOR_LABEL_TEXT_NO_DATA,
  COLOR_AXIS_BORDER,
  COLOR_GRAPH_GRID,
  DATASET_COLORS,
} from '../../styles/graphColors';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function TelemetryItem({ name, rawData = [] }) {
  const allValues = rawData.flatMap((dp) =>
    dp.data.map((entry) => entry.value)
  );
  const uniqueLabelsY = Array.from(new Set(allValues));

  const allValuesAreStrings = allValues.every(
    (value) => typeof value === 'string'
  );

  const allTimestamps = rawData.flatMap((dp) =>
    dp.data.map((entry) => new Date(entry.timestamp).toLocaleString())
  );

  const uniqueTimestamps = Array.from(new Set(allTimestamps));

  const pointRadiusMapping = (dataPoints) => {
    if (dataPoints <= 10) {
      return 3.5;
    } else if (dataPoints <= 50) {
      return 2;
    } else if (dataPoints <= 75) {
      return 1.8;
    } else if (dataPoints <= 100) {
      return 1.5;
    } else {
      return 0.5;
    }
  };

  const datasets = rawData.map((ue, index) => {
    const { ueId, data } = ue;

    const telemetryData = data.map((entry) => entry.value);

    const color = DATASET_COLORS[index % DATASET_COLORS.length];

    return {
      label: `UE ${ueId}`,
      data: telemetryData,
      borderColor: color,
      backgroundColor: color + '66',
      borderWidth: 2,
      pointBackgroundColor: color,
      pointBorderColor: color,
      pointRadius: pointRadiusMapping(telemetryData.length),
      pointHoverRadius: 6,
      borderDash: index % 2 === 0 ? [5, 5] : [],
      fill: false,
    };
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: name.toUpperCase(),
        color:
          rawData.length !== 0 ? COLOR_LABEL_TEXT : COLOR_LABEL_TEXT_NO_DATA,
      },
      legend: {
        display: true,
        position: 'top',
        align: 'center',
        labels: {
          color:
            rawData.length !== 0 ? COLOR_LABEL_TEXT : COLOR_LABEL_TEXT_NO_DATA,
          boxWidth: 20,
        },
        onHover: (event) => {
          event.native.target.style.cursor = 'pointer';
        },
        onLeave: (event) => {
          event.native.target.style.cursor = 'default';
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Value: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          color:
            rawData.length !== 0 ? COLOR_LABEL_TEXT : COLOR_LABEL_TEXT_NO_DATA,
        },
        ticks: {
          color:
            rawData.length !== 0 ? COLOR_LABEL_TEXT : COLOR_LABEL_TEXT_NO_DATA,
          autoSkip: true,
        },
        border: {
          color: COLOR_AXIS_BORDER,
          width: 2,
        },
        grid: {
          display: true,
          color: COLOR_GRAPH_GRID,
          lineWidth: 1,
        },
      },
      y: {
        display: true,
        type: allValuesAreStrings ? 'category' : 'linear',
        labels: allValuesAreStrings ? uniqueLabelsY : undefined,
        position: 'left',
        ticks: {
          color:
            rawData.length !== 0 ? COLOR_LABEL_TEXT : COLOR_LABEL_TEXT_NO_DATA,
        },
        border: {
          color: COLOR_AXIS_BORDER,
          width: 2,
        },
      },
    },
  };

  const data = {
    labels: uniqueTimestamps,
    datasets: datasets,
  };

  return (
    <div className={`telemetryItem ${rawData.length !== 0 ? '' : 'noData'}`}>
      <Line options={options} data={data} />
    </div>
  );
}
