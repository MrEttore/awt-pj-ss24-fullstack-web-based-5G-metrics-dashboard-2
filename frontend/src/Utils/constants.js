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
];

export const DASHBOARD_METRICS = [
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

// API urls

export const CN5G_BASE_URL = 'http://localhost/api/cn5g/telemetry';

export const GNB_LOGS_URL = 'http://localhost/api/gnb/logs';

export const GNB_TELEMETRY_URL = 'http://localhost/api/gnb/telemetry';

// Warning i.e., error messages

export const EMPTY_MESSAGE = { type: null, text: '' };

export const WARNING_TIMESPAN_MISSING = {
  type: 'warning',
  text: 'No timespan specified. Specify a valid timespan to dislay the data!',
};
