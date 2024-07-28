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

// API urls

export const CN5G_URL = 'http://localhost:5173/api/cn5g/telemetry';

export const GNB_LOGS_URL = 'http://localhost:5173/api/gnb/logs';

export const GNB_TELEMETRY_URL = 'http://localhost:5173/api/gnb/telemetry';

export const UES_URL = 'http://localhost:5173/api/ues';

// Warning i.e., error messages

export const EMPTY_MESSAGE = { type: null, text: '' };