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

/// APIs ///

export const CN5G_BASE_URL = 'http://localhost:5173/api/cn5g/telemetry';

export const GNB_LOGS_URL = 'http://localhost:5173/api/gnb/logs';

export const GNB_TELEMETRY_URL = 'http://localhost:5173/api/gnb/telemetry';
