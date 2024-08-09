const PORT = import.meta.env.VITE_PORT;

// Dashboards modules and metrics

export const CN5G_MODULES = [
  'amf',
  'ausf',
  'nrf',
  'smf',
  'upf',
  'udm',
  'udr',
  'nssf',
  'nef',
  'mysql',
  'extdn',
  'asterisk',
  'openspeedtest',
  'oaiExtDnUplinkState',
  'oaiExtDnDownlinkInstances',
];

export const DASHBOARD_UE_METRICS = [
  'rnti',
  'inSync',
  'dlBytes',
  'dlMcs',
  'dlBler',
  'ulBytes',
  'ulMcs',
  'ulBler',
  'ri',
  'pmi',
  'phr',
  'pcmax',
  'rsrq',
  'sinr',
  'rsrp',
  'rssi',
  'cqi',
  'pucchSnr',
  'puschSnr',
];

export const DASHBOARD_GENERAL_METRICS = [
  'frame',
  'slot',
  'pci',
  'dlCarrierFreq',
  'ulCarrierFreq',
  'avgLdpcIterations',
];

export const EMPTY_UE_TELEMETRY_STATUS = [
  {
    metricName: 'rnti',
    metricData: [],
  },
  {
    metricName: 'inSync',
    metricData: [],
  },
  {
    metricName: 'dlBytes',
    metricData: [],
  },
  {
    metricName: 'dlMcs',
    metricData: [],
  },
  {
    metricName: 'dlBler',
    metricData: [],
  },
  {
    metricName: 'ulBytes',
    metricData: [],
  },
  {
    metricName: 'ulMcs',
    metricData: [],
  },
  {
    metricName: 'ulBler',
    metricData: [],
  },
  {
    metricName: 'ri',
    metricData: [],
  },
  {
    metricName: 'pmi',
    metricData: [],
  },
  {
    metricName: 'phr',
    metricData: [],
  },
  {
    metricName: 'pcmax',
    metricData: [],
  },
  {
    metricName: 'rsrq',
    metricData: [],
  },
  {
    metricName: 'sinr',
    metricData: [],
  },
  {
    metricName: 'rsrp',
    metricData: [],
  },
  {
    metricName: 'rssi',
    metricData: [],
  },
  {
    metricName: 'cqi',
    metricData: [],
  },
  {
    metricName: 'pucchSnr',
    metricData: [],
  },
  {
    metricName: 'puschSnr',
    metricData: [],
  },
];

export const EMPTY_GENERAL_TELEMETRY_STATUS = [
  {
    metricName: 'frame',
    metricData: [],
  },
  {
    metricName: 'slot',
    metricData: [],
  },
  {
    metricName: 'pci',
    metricData: [],
  },
  {
    metricName: 'dlCarrierFreq',
    metricData: [],
  },
  {
    metricName: 'ulCarrierFreq',
    metricData: [],
  },
  {
    metricName: 'avgLdpcIterations',
    metricData: [],
  },
];

export const EMPTY_HEALTH_STATUS = [
  {
    moduleName: 'amf',
    moduleData: [],
  },
  {
    moduleName: 'ausf',
    moduleData: [],
  },
  {
    moduleName: 'nrf',
    moduleData: [],
  },
  {
    moduleName: 'smf',
    moduleData: [],
  },
  {
    moduleName: 'upf',
    moduleData: [],
  },
  {
    moduleName: 'udm',
    moduleData: [],
  },
  {
    moduleName: 'udr',
    moduleData: [],
  },
  {
    moduleName: 'nssf',
    moduleData: [],
  },
  {
    moduleName: 'nef',
    moduleData: [],
  },
  {
    moduleName: 'mysql',
    moduleData: [],
  },
  {
    moduleName: 'extdn',
    moduleData: [],
  },
  {
    moduleName: 'asterisk',
    moduleData: [],
  },
  {
    moduleName: 'openspeedtest',
    moduleData: [],
  },
  {
    moduleName: 'oaiExtDnUplinkState',
    moduleData: [],
  },
  {
    moduleName: 'oaiExtDnDownlinkInstances',
    moduleData: [],
  },
];

export const LIMITS = [
  { label: 10, value: 10 },
  { label: 25, value: 25 },
  { label: 50, value: 50 },
  { label: 75, value: 75 },
  { label: 100, value: 100 },
];

// API urls

export const CN5G_URL = `http://localhost:${PORT}/api/cn5g/telemetry`;

export const GNB_LOGS_URL = `http://localhost:${PORT}/api/gnb/logs`;

export const GNB_TELEMETRY_URL = `http://localhost:${PORT}/api/gnb/telemetry`;

export const UES_URL = `http://localhost:${PORT}/api/ues`;

export const LATEST_DATAPOINT_URL = `http://localhost:${PORT}/api/latest`;

// Warning i.e., error messages

export const EMPTY_MESSAGE = { type: null, text: '' };
