const messages = [
    {
        "rowId": 1,
        "timestamp": 1715076981575,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 2,
        "timestamp": 1715076981575,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 22 dBm, average RSRP -98 (32 meas)"
    },
    {
        "rowId": 3,
        "timestamp": 1715076981575,
        "payload": "UE a393: CQI 12, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4,
        "timestamp": 1715076981575,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5,
        "timestamp": 1715076981575,
        "payload": "UE a393: dlsch_rounds 118118/7362/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 6,
        "timestamp": 1715076981575,
        "payload": "UE a393: ulsch_rounds 57569/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 7,
        "timestamp": 1715076981575,
        "payload": "UE a393: MAC:    TX      290837429 RX       81781189 bytes"
    },
    {
        "rowId": 8,
        "timestamp": 1715076981575,
        "payload": "UE a393: LCID 1: TX           9897 RX          62245 bytes"
    },
    {
        "rowId": 9,
        "timestamp": 1715076981575,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 10,
        "timestamp": 1715076981575,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 11,
        "timestamp": 1715076981575,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 12,
        "timestamp": 1715076982855,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 13,
        "timestamp": 1715076982855,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 14,
        "timestamp": 1715076982855,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 15,
        "timestamp": 1715076982855,
        "payload": "UE a393: CQI 12, RI 2, PMI (0,1)"
    },
    {
        "rowId": 16,
        "timestamp": 1715076982855,
        "payload": "UE a393: dlsch_rounds 118132/7362/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 17,
        "timestamp": 1715076982855,
        "payload": "UE a393: ulsch_rounds 57584/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 18,
        "timestamp": 1715076982855,
        "payload": "UE a393: MAC:    TX      290843275 RX       81783902 bytes"
    },
    {
        "rowId": 19,
        "timestamp": 1715076982855,
        "payload": "UE a393: LCID 1: TX           9900 RX          62267 bytes"
    },
    {
        "rowId": 20,
        "timestamp": 1715076982855,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 21,
        "timestamp": 1715076982855,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 22,
        "timestamp": 1715076982855,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 23,
        "timestamp": 1715076984135,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 22 dBm, average RSRP -98 (32 meas)"
    },
    {
        "rowId": 24,
        "timestamp": 1715076984135,
        "payload": "UE a393: CQI 12, RI 2, PMI (0,1)"
    },
    {
        "rowId": 25,
        "timestamp": 1715076984135,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 26,
        "timestamp": 1715076984135,
        "payload": "UE a393: dlsch_rounds 118146/7362/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 27,
        "timestamp": 1715076984135,
        "payload": "UE a393: ulsch_rounds 57599/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 28,
        "timestamp": 1715076984135,
        "payload": "UE a393: LCID 1: TX           9903 RX          62289 bytes"
    },
    {
        "rowId": 29,
        "timestamp": 1715076984135,
        "payload": "UE a393: MAC:    TX      290849121 RX       81786599 bytes"
    },
    {
        "rowId": 30,
        "timestamp": 1715076984135,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 31,
        "timestamp": 1715076984135,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 32,
        "timestamp": 1715076984135,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 33,
        "timestamp": 1715076984135,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 34,
        "timestamp": 1715076985415,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -98 (32 meas)"
    },
    {
        "rowId": 35,
        "timestamp": 1715076985415,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 36,
        "timestamp": 1715076985415,
        "payload": "UE a393: CQI 12, RI 2, PMI (0,1)"
    },
    {
        "rowId": 37,
        "timestamp": 1715076985415,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 38,
        "timestamp": 1715076985415,
        "payload": "UE a393: dlsch_rounds 118161/7362/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 39,
        "timestamp": 1715076985415,
        "payload": "UE a393: ulsch_rounds 57615/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 40,
        "timestamp": 1715076985415,
        "payload": "UE a393: MAC:    TX      290855132 RX       81789195 bytes"
    },
    {
        "rowId": 41,
        "timestamp": 1715076985415,
        "payload": "UE a393: LCID 1: TX           9909 RX          62333 bytes"
    },
    {
        "rowId": 42,
        "timestamp": 1715076985415,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 43,
        "timestamp": 1715076985415,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 44,
        "timestamp": 1715076985415,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 45,
        "timestamp": 1715076986695,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 46,
        "timestamp": 1715076986695,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 47,
        "timestamp": 1715076986695,
        "payload": "UE a393: CQI 12, RI 2, PMI (0,1)"
    },
    {
        "rowId": 48,
        "timestamp": 1715076986695,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 49,
        "timestamp": 1715076986695,
        "payload": "UE a393: dlsch_rounds 118174/7362/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 50,
        "timestamp": 1715076986695,
        "payload": "UE a393: ulsch_rounds 57630/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 51,
        "timestamp": 1715076986695,
        "payload": "UE a393: MAC:    TX      290860541 RX       81791908 bytes"
    },
    {
        "rowId": 52,
        "timestamp": 1715076986695,
        "payload": "UE a393: LCID 1: TX           9912 RX          62355 bytes"
    },
    {
        "rowId": 53,
        "timestamp": 1715076986695,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 54,
        "timestamp": 1715076986695,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 55,
        "timestamp": 1715076986695,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 56,
        "timestamp": 1715076987975,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLUULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 57,
        "timestamp": 1715076987975,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 22 dBm, average RSRP -98 (32 meas)"
    },
    {
        "rowId": 58,
        "timestamp": 1715076987975,
        "payload": "UE a393: CQI 12, RI 2, PMI (0,1)"
    },
    {
        "rowId": 59,
        "timestamp": 1715076987975,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 60,
        "timestamp": 1715076987975,
        "payload": "UE a393: dlsch_rounds 118188/7362/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 61,
        "timestamp": 1715076987975,
        "payload": "UE a393: ulsch_rounds 57644/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 62,
        "timestamp": 1715076987975,
        "payload": "UE a393: MAC:    TX      290866387 RX       81794396 bytes"
    },
    {
        "rowId": 63,
        "timestamp": 1715076987975,
        "payload": "UE a393: LCID 1: TX           9915 RX          62377 bytes"
    },
    {
        "rowId": 64,
        "timestamp": 1715076987975,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 65,
        "timestamp": 1715076987975,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 66,
        "timestamp": 1715076987975,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 67,
        "timestamp": 1715076989255,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 68,
        "timestamp": 1715076989255,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 22 dBm, average RSRP -98 (32 meas)"
    },
    {
        "rowId": 69,
        "timestamp": 1715076989255,
        "payload": "UE a393: CQI 11, RI 2, PMI (0,1)"
    },
    {
        "rowId": 70,
        "timestamp": 1715076989255,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 71,
        "timestamp": 1715076989255,
        "payload": "UE a393: dlsch_rounds 118202/7362/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 72,
        "timestamp": 1715076989255,
        "payload": "UE a393: ulsch_rounds 57659/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 73,
        "timestamp": 1715076989255,
        "payload": "UE a393: MAC:    TX      290872233 RX       81797109 bytes"
    },
    {
        "rowId": 74,
        "timestamp": 1715076989255,
        "payload": "UE a393: LCID 1: TX           9918 RX          62399 bytes"
    },
    {
        "rowId": 75,
        "timestamp": 1715076989255,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 76,
        "timestamp": 1715076989255,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 77,
        "timestamp": 1715076989255,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 78,
        "timestamp": 1715076990535,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 79,
        "timestamp": 1715076990535,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 44 dB PCMAX 22 dBm, average RSRP -98 (32 meas)"
    },
    {
        "rowId": 80,
        "timestamp": 1715076990535,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 81,
        "timestamp": 1715076990535,
        "payload": "UE a393: CQI 12, RI 2, PMI (0,1)"
    },
    {
        "rowId": 82,
        "timestamp": 1715076990535,
        "payload": "UE a393: dlsch_rounds 118217/7362/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 83,
        "timestamp": 1715076990535,
        "payload": "UE a393: ulsch_rounds 57675/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 84,
        "timestamp": 1715076990535,
        "payload": "UE a393: MAC:    TX      290878244 RX       81799705 bytes"
    },
    {
        "rowId": 85,
        "timestamp": 1715076990535,
        "payload": "UE a393: LCID 1: TX           9924 RX          62443 bytes"
    },
    {
        "rowId": 86,
        "timestamp": 1715076990535,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 87,
        "timestamp": 1715076990535,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 88,
        "timestamp": 1715076990535,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 89,
        "timestamp": 1715076991814,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 90,
        "timestamp": 1715076991815,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 91,
        "timestamp": 1715076991815,
        "payload": "UE a393: CQI 11, RI 2, PMI (0,1)"
    },
    {
        "rowId": 92,
        "timestamp": 1715076991815,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 93,
        "timestamp": 1715076991815,
        "payload": "UE a393: dlsch_rounds 118231/7362/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 94,
        "timestamp": 1715076991815,
        "payload": "UE a393: MAC:    TX      290884090 RX       81802402 bytes"
    },
    {
        "rowId": 95,
        "timestamp": 1715076991815,
        "payload": "UE a393: LCID 1: TX           9927 RX          62465 bytes"
    },
    {
        "rowId": 96,
        "timestamp": 1715076991815,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 97,
        "timestamp": 1715076991815,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 98,
        "timestamp": 1715076991815,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 99,
        "timestamp": 1715076991815,
        "payload": "UE a393: ulsch_rounds 57690/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 100,
        "timestamp": 1715076993095,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 101,
        "timestamp": 1715076993095,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -98 (32 meas)"
    },
    {
        "rowId": 102,
        "timestamp": 1715076993095,
        "payload": "UE a393: CQI 9, RI 2, PMI (0,1)"
    },
    {
        "rowId": 103,
        "timestamp": 1715076993095,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 104,
        "timestamp": 1715076993095,
        "payload": "UE a393: dlsch_rounds 118244/7362/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 105,
        "timestamp": 1715076993095,
        "payload": "UE a393: ulsch_rounds 57704/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 106,
        "timestamp": 1715076993095,
        "payload": "UE a393: MAC:    TX      290889499 RX       81804922 bytes"
    },
    {
        "rowId": 107,
        "timestamp": 1715076993095,
        "payload": "UE a393: LCID 1: TX           9930 RX          62487 bytes"
    },
    {
        "rowId": 108,
        "timestamp": 1715076993095,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 109,
        "timestamp": 1715076993095,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 110,
        "timestamp": 1715076993095,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 111,
        "timestamp": 1715076994375,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 112,
        "timestamp": 1715076994375,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -96 (32 meas)"
    },
    {
        "rowId": 113,
        "timestamp": 1715076994375,
        "payload": "UE a393: CQI 9, RI 2, PMI (0,1)"
    },
    {
        "rowId": 114,
        "timestamp": 1715076994375,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 115,
        "timestamp": 1715076994375,
        "payload": "UE a393: dlsch_rounds 118258/7362/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 116,
        "timestamp": 1715076994375,
        "payload": "UE a393: ulsch_rounds 57719/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 117,
        "timestamp": 1715076994375,
        "payload": "UE a393: MAC:    TX      290895345 RX       81807619 bytes"
    },
    {
        "rowId": 118,
        "timestamp": 1715076994375,
        "payload": "UE a393: LCID 1: TX           9933 RX          62509 bytes"
    },
    {
        "rowId": 119,
        "timestamp": 1715076994375,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 120,
        "timestamp": 1715076994375,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 121,
        "timestamp": 1715076994375,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 122,
        "timestamp": 1715076995655,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 123,
        "timestamp": 1715076995655,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 39 dB PCMAX 23 dBm, average RSRP -96 (32 meas)"
    },
    {
        "rowId": 124,
        "timestamp": 1715076995655,
        "payload": "UE a393: CQI 9, RI 2, PMI (0,1)"
    },
    {
        "rowId": 125,
        "timestamp": 1715076995655,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 126,
        "timestamp": 1715076995655,
        "payload": "UE a393: dlsch_rounds 118273/7362/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 127,
        "timestamp": 1715076995655,
        "payload": "UE a393: ulsch_rounds 57735/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 128,
        "timestamp": 1715076995655,
        "payload": "UE a393: MAC:    TX      290901356 RX       81810215 bytes"
    },
    {
        "rowId": 129,
        "timestamp": 1715076995655,
        "payload": "UE a393: LCID 1: TX           9939 RX          62553 bytes"
    },
    {
        "rowId": 130,
        "timestamp": 1715076995655,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 131,
        "timestamp": 1715076995655,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 132,
        "timestamp": 1715076995655,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 133,
        "timestamp": 1715076996935,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 134,
        "timestamp": 1715076996935,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -97 (32 meas)"
    },
    {
        "rowId": 135,
        "timestamp": 1715076996935,
        "payload": "UE a393: CQI 9, RI 2, PMI (0,1)"
    },
    {
        "rowId": 136,
        "timestamp": 1715076996935,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 137,
        "timestamp": 1715076996935,
        "payload": "UE a393: dlsch_rounds 118287/7362/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 138,
        "timestamp": 1715076996935,
        "payload": "UE a393: ulsch_rounds 57750/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 139,
        "timestamp": 1715076996935,
        "payload": "UE a393: MAC:    TX      290907202 RX       81812928 bytes"
    },
    {
        "rowId": 140,
        "timestamp": 1715076996935,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 141,
        "timestamp": 1715076996935,
        "payload": "UE a393: LCID 1: TX           9942 RX          62575 bytes"
    },
    {
        "rowId": 142,
        "timestamp": 1715076996935,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 143,
        "timestamp": 1715076996935,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 144,
        "timestamp": 1715076998215,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 145,
        "timestamp": 1715076998215,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 146,
        "timestamp": 1715076998215,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -97 (32 meas)"
    },
    {
        "rowId": 147,
        "timestamp": 1715076998215,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 148,
        "timestamp": 1715076998215,
        "payload": "UE a393: dlsch_rounds 118301/7362/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 149,
        "timestamp": 1715076998215,
        "payload": "UE a393: ulsch_rounds 57765/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 150,
        "timestamp": 1715076998215,
        "payload": "UE a393: MAC:    TX      290913048 RX       81815625 bytes"
    },
    {
        "rowId": 151,
        "timestamp": 1715076998215,
        "payload": "UE a393: LCID 1: TX           9945 RX          62597 bytes"
    },
    {
        "rowId": 152,
        "timestamp": 1715076998215,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 153,
        "timestamp": 1715076998215,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 154,
        "timestamp": 1715076998215,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 155,
        "timestamp": 1715076999495,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 156,
        "timestamp": 1715076999495,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 23 dBm, average RSRP -97 (32 meas)"
    },
    {
        "rowId": 157,
        "timestamp": 1715076999495,
        "payload": "UE a393: CQI 9, RI 2, PMI (0,1)"
    },
    {
        "rowId": 158,
        "timestamp": 1715076999495,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 159,
        "timestamp": 1715076999495,
        "payload": "UE a393: dlsch_rounds 118314/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.27100 MCS (1) 7"
    },
    {
        "rowId": 160,
        "timestamp": 1715076999495,
        "payload": "UE a393: ulsch_rounds 57779/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 161,
        "timestamp": 1715076999495,
        "payload": "UE a393: MAC:    TX      290918320 RX       81818129 bytes"
    },
    {
        "rowId": 162,
        "timestamp": 1715076999495,
        "payload": "UE a393: LCID 1: TX           9948 RX          62619 bytes"
    },
    {
        "rowId": 163,
        "timestamp": 1715076999495,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 164,
        "timestamp": 1715076999495,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 165,
        "timestamp": 1715076999495,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 166,
        "timestamp": 1715077000774,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 167,
        "timestamp": 1715077000774,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -97 (32 meas)"
    },
    {
        "rowId": 168,
        "timestamp": 1715077000775,
        "payload": "UE a393: CQI 9, RI 2, PMI (0,1)"
    },
    {
        "rowId": 169,
        "timestamp": 1715077000775,
        "payload": "UE a393: dlsch_rounds 118329/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.09713 MCS (1) 6"
    },
    {
        "rowId": 170,
        "timestamp": 1715077000775,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 171,
        "timestamp": 1715077000775,
        "payload": "UE a393: ulsch_rounds 57796/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 172,
        "timestamp": 1715077000775,
        "payload": "UE a393: MAC:    TX      290922569 RX       81820934 bytes"
    },
    {
        "rowId": 173,
        "timestamp": 1715077000775,
        "payload": "UE a393: LCID 1: TX           9954 RX          62663 bytes"
    },
    {
        "rowId": 174,
        "timestamp": 1715077000775,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 175,
        "timestamp": 1715077000775,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 176,
        "timestamp": 1715077000775,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 177,
        "timestamp": 1715077002055,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLUULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 178,
        "timestamp": 1715077002055,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -97 (32 meas)"
    },
    {
        "rowId": 179,
        "timestamp": 1715077002055,
        "payload": "UE a393: CQI 9, RI 2, PMI (0,1)"
    },
    {
        "rowId": 180,
        "timestamp": 1715077002055,
        "payload": "UE a393: dlsch_rounds 118343/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.02469 MCS (1) 6"
    },
    {
        "rowId": 181,
        "timestamp": 1715077002055,
        "payload": "UE a393: ulsch_rounds 57810/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 182,
        "timestamp": 1715077002055,
        "payload": "UE a393: MAC:    TX      290926702 RX       81823422 bytes"
    },
    {
        "rowId": 183,
        "timestamp": 1715077002055,
        "payload": "UE a393: LCID 1: TX           9957 RX          62685 bytes"
    },
    {
        "rowId": 184,
        "timestamp": 1715077002055,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 185,
        "timestamp": 1715077002055,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 186,
        "timestamp": 1715077002055,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 187,
        "timestamp": 1715077002055,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 188,
        "timestamp": 1715077003335,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -97 (32 meas)"
    },
    {
        "rowId": 189,
        "timestamp": 1715077003334,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLUULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 190,
        "timestamp": 1715077003335,
        "payload": "UE a393: CQI 9, RI 2, PMI (0,1)"
    },
    {
        "rowId": 191,
        "timestamp": 1715077003335,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 192,
        "timestamp": 1715077003335,
        "payload": "UE a393: dlsch_rounds 118357/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00628 MCS (1) 6"
    },
    {
        "rowId": 193,
        "timestamp": 1715077003335,
        "payload": "UE a393: ulsch_rounds 57825/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 194,
        "timestamp": 1715077003335,
        "payload": "UE a393: MAC:    TX      290930835 RX       81826135 bytes"
    },
    {
        "rowId": 195,
        "timestamp": 1715077003335,
        "payload": "UE a393: LCID 1: TX           9960 RX          62707 bytes"
    },
    {
        "rowId": 196,
        "timestamp": 1715077003335,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 197,
        "timestamp": 1715077003335,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 198,
        "timestamp": 1715077003335,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 199,
        "timestamp": 1715077004614,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 200,
        "timestamp": 1715077004615,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 23 dBm, average RSRP -96 (32 meas)"
    },
    {
        "rowId": 201,
        "timestamp": 1715077004615,
        "payload": "UE a393: CQI 9, RI 2, PMI (0,1)"
    },
    {
        "rowId": 202,
        "timestamp": 1715077004615,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 203,
        "timestamp": 1715077004615,
        "payload": "UE a393: dlsch_rounds 118371/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00160 MCS (1) 6"
    },
    {
        "rowId": 204,
        "timestamp": 1715077004615,
        "payload": "UE a393: ulsch_rounds 57839/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 205,
        "timestamp": 1715077004615,
        "payload": "UE a393: MAC:    TX      290934968 RX       81828639 bytes"
    },
    {
        "rowId": 206,
        "timestamp": 1715077004615,
        "payload": "UE a393: LCID 1: TX           9963 RX          62729 bytes"
    },
    {
        "rowId": 207,
        "timestamp": 1715077004615,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 208,
        "timestamp": 1715077004615,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 209,
        "timestamp": 1715077004615,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 210,
        "timestamp": 1715077005894,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 211,
        "timestamp": 1715077005895,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 212,
        "timestamp": 1715077005895,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 213,
        "timestamp": 1715077005895,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -98 (32 meas)"
    },
    {
        "rowId": 214,
        "timestamp": 1715077005895,
        "payload": "UE a393: ulsch_rounds 57856/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 215,
        "timestamp": 1715077005895,
        "payload": "UE a393: MAC:    TX      290938908 RX       81831428 bytes"
    },
    {
        "rowId": 216,
        "timestamp": 1715077005895,
        "payload": "UE a393: dlsch_rounds 118385/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00045 MCS (1) 6"
    },
    {
        "rowId": 217,
        "timestamp": 1715077005895,
        "payload": "UE a393: LCID 1: TX           9969 RX          62773 bytes"
    },
    {
        "rowId": 218,
        "timestamp": 1715077005895,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 219,
        "timestamp": 1715077005895,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 220,
        "timestamp": 1715077005895,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 221,
        "timestamp": 1715077007174,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 222,
        "timestamp": 1715077007175,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 23 dBm, average RSRP -97 (32 meas)"
    },
    {
        "rowId": 223,
        "timestamp": 1715077007175,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 224,
        "timestamp": 1715077007175,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 225,
        "timestamp": 1715077007175,
        "payload": "UE a393: dlsch_rounds 118399/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00011 MCS (1) 6"
    },
    {
        "rowId": 226,
        "timestamp": 1715077007175,
        "payload": "UE a393: ulsch_rounds 57870/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 227,
        "timestamp": 1715077007175,
        "payload": "UE a393: MAC:    TX      290943041 RX       81833948 bytes"
    },
    {
        "rowId": 228,
        "timestamp": 1715077007175,
        "payload": "UE a393: LCID 1: TX           9972 RX          62795 bytes"
    },
    {
        "rowId": 229,
        "timestamp": 1715077007175,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 230,
        "timestamp": 1715077007175,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 231,
        "timestamp": 1715077007175,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 232,
        "timestamp": 1715077008454,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 233,
        "timestamp": 1715077008455,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 52 dB PCMAX 22 dBm, average RSRP -97 (32 meas)"
    },
    {
        "rowId": 234,
        "timestamp": 1715077008455,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 235,
        "timestamp": 1715077008455,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 236,
        "timestamp": 1715077008455,
        "payload": "UE a393: dlsch_rounds 118413/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00003 MCS (1) 6"
    },
    {
        "rowId": 237,
        "timestamp": 1715077008455,
        "payload": "UE a393: ulsch_rounds 57885/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 238,
        "timestamp": 1715077008455,
        "payload": "UE a393: MAC:    TX      290947174 RX       81836645 bytes"
    },
    {
        "rowId": 239,
        "timestamp": 1715077008455,
        "payload": "UE a393: LCID 1: TX           9975 RX          62817 bytes"
    },
    {
        "rowId": 240,
        "timestamp": 1715077008455,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 241,
        "timestamp": 1715077008455,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 242,
        "timestamp": 1715077008455,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 243,
        "timestamp": 1715077009735,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 244,
        "timestamp": 1715077009735,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 52 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 245,
        "timestamp": 1715077009735,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 246,
        "timestamp": 1715077009735,
        "payload": "UE a393: dlsch_rounds 118427/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00001 MCS (1) 6"
    },
    {
        "rowId": 247,
        "timestamp": 1715077009735,
        "payload": "UE a393: ulsch_rounds 57900/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 248,
        "timestamp": 1715077009735,
        "payload": "UE a393: MAC:    TX      290951307 RX       81839358 bytes"
    },
    {
        "rowId": 249,
        "timestamp": 1715077009735,
        "payload": "UE a393: LCID 1: TX           9978 RX          62839 bytes"
    },
    {
        "rowId": 250,
        "timestamp": 1715077009735,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 251,
        "timestamp": 1715077009735,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 252,
        "timestamp": 1715077009735,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 253,
        "timestamp": 1715077009735,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 254,
        "timestamp": 1715077011014,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 255,
        "timestamp": 1715077011015,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 256,
        "timestamp": 1715077011015,
        "payload": "UE a393: CQI 11, RI 2, PMI (0,1)"
    },
    {
        "rowId": 257,
        "timestamp": 1715077011015,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 258,
        "timestamp": 1715077011015,
        "payload": "UE a393: dlsch_rounds 118442/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 6"
    },
    {
        "rowId": 259,
        "timestamp": 1715077011015,
        "payload": "UE a393: ulsch_rounds 57916/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 260,
        "timestamp": 1715077011015,
        "payload": "UE a393: MAC:    TX      290955556 RX       81841954 bytes"
    },
    {
        "rowId": 261,
        "timestamp": 1715077011015,
        "payload": "UE a393: LCID 1: TX           9984 RX          62883 bytes"
    },
    {
        "rowId": 262,
        "timestamp": 1715077011015,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 263,
        "timestamp": 1715077011015,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 264,
        "timestamp": 1715077011015,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 265,
        "timestamp": 1715077012295,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 266,
        "timestamp": 1715077012295,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 52 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 267,
        "timestamp": 1715077012295,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 268,
        "timestamp": 1715077012295,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 269,
        "timestamp": 1715077012295,
        "payload": "UE a393: dlsch_rounds 118455/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 6"
    },
    {
        "rowId": 270,
        "timestamp": 1715077012295,
        "payload": "UE a393: MAC:    TX      290959380 RX       81844651 bytes"
    },
    {
        "rowId": 271,
        "timestamp": 1715077012295,
        "payload": "UE a393: ulsch_rounds 57931/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 272,
        "timestamp": 1715077012295,
        "payload": "UE a393: LCID 1: TX           9987 RX          62905 bytes"
    },
    {
        "rowId": 273,
        "timestamp": 1715077012295,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 274,
        "timestamp": 1715077012295,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 275,
        "timestamp": 1715077012295,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 276,
        "timestamp": 1715077013575,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 277,
        "timestamp": 1715077013575,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 22 dBm, average RSRP -100 (32 meas)"
    },
    {
        "rowId": 278,
        "timestamp": 1715077013575,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 279,
        "timestamp": 1715077013575,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 280,
        "timestamp": 1715077013575,
        "payload": "UE a393: dlsch_rounds 118469/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 6"
    },
    {
        "rowId": 281,
        "timestamp": 1715077013575,
        "payload": "UE a393: ulsch_rounds 57945/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 282,
        "timestamp": 1715077013575,
        "payload": "UE a393: LCID 1: TX           9990 RX          62927 bytes"
    },
    {
        "rowId": 283,
        "timestamp": 1715077013575,
        "payload": "UE a393: MAC:    TX      290963513 RX       81847155 bytes"
    },
    {
        "rowId": 284,
        "timestamp": 1715077013575,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 285,
        "timestamp": 1715077013575,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 286,
        "timestamp": 1715077013575,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 287,
        "timestamp": 1715077014854,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 288,
        "timestamp": 1715077014855,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 22 dBm, average RSRP -98 (32 meas)"
    },
    {
        "rowId": 289,
        "timestamp": 1715077014855,
        "payload": "UE a393: CQI 9, RI 2, PMI (0,1)"
    },
    {
        "rowId": 290,
        "timestamp": 1715077014855,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 291,
        "timestamp": 1715077014855,
        "payload": "UE a393: dlsch_rounds 118483/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 6"
    },
    {
        "rowId": 292,
        "timestamp": 1715077014855,
        "payload": "UE a393: ulsch_rounds 57960/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 293,
        "timestamp": 1715077014855,
        "payload": "UE a393: MAC:    TX      290967646 RX       81849852 bytes"
    },
    {
        "rowId": 294,
        "timestamp": 1715077014855,
        "payload": "UE a393: LCID 1: TX           9993 RX          62949 bytes"
    },
    {
        "rowId": 295,
        "timestamp": 1715077014855,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 296,
        "timestamp": 1715077014855,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 297,
        "timestamp": 1715077014855,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 298,
        "timestamp": 1715077016134,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 299,
        "timestamp": 1715077016135,
        "payload": "UE a393: CQI 9, RI 2, PMI (0,1)"
    },
    {
        "rowId": 300,
        "timestamp": 1715077016135,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 301,
        "timestamp": 1715077016135,
        "payload": "UE a393: dlsch_rounds 118498/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 6"
    },
    {
        "rowId": 302,
        "timestamp": 1715077016135,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -100 (32 meas)"
    },
    {
        "rowId": 303,
        "timestamp": 1715077016135,
        "payload": "UE a393: ulsch_rounds 57976/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 304,
        "timestamp": 1715077016135,
        "payload": "UE a393: MAC:    TX      290971895 RX       81852448 bytes"
    },
    {
        "rowId": 305,
        "timestamp": 1715077016135,
        "payload": "UE a393: LCID 1: TX           9999 RX          62993 bytes"
    },
    {
        "rowId": 306,
        "timestamp": 1715077016135,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 307,
        "timestamp": 1715077016135,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 308,
        "timestamp": 1715077016135,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 309,
        "timestamp": 1715077017415,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 310,
        "timestamp": 1715077017415,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 52 dB PCMAX 22 dBm, average RSRP -101 (32 meas)"
    },
    {
        "rowId": 311,
        "timestamp": 1715077017415,
        "payload": "UE a393: CQI 9, RI 2, PMI (0,1)"
    },
    {
        "rowId": 312,
        "timestamp": 1715077017415,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 313,
        "timestamp": 1715077017415,
        "payload": "UE a393: dlsch_rounds 118512/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 6"
    },
    {
        "rowId": 314,
        "timestamp": 1715077017415,
        "payload": "UE a393: ulsch_rounds 57991/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 315,
        "timestamp": 1715077017415,
        "payload": "UE a393: MAC:    TX      290976028 RX       81855161 bytes"
    },
    {
        "rowId": 316,
        "timestamp": 1715077017415,
        "payload": "UE a393: LCID 1: TX          10002 RX          63015 bytes"
    },
    {
        "rowId": 317,
        "timestamp": 1715077017415,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 318,
        "timestamp": 1715077017415,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 319,
        "timestamp": 1715077017415,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 320,
        "timestamp": 1715077018695,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 321,
        "timestamp": 1715077018695,
        "payload": "UE a393: CQI 9, RI 2, PMI (0,1)"
    },
    {
        "rowId": 322,
        "timestamp": 1715077018695,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 323,
        "timestamp": 1715077018695,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 52 dB PCMAX 22 dBm, average RSRP -100 (32 meas)"
    },
    {
        "rowId": 324,
        "timestamp": 1715077018695,
        "payload": "UE a393: dlsch_rounds 118525/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 6"
    },
    {
        "rowId": 325,
        "timestamp": 1715077018695,
        "payload": "UE a393: ulsch_rounds 58005/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 326,
        "timestamp": 1715077018695,
        "payload": "UE a393: MAC:    TX      290979852 RX       81857665 bytes"
    },
    {
        "rowId": 327,
        "timestamp": 1715077018695,
        "payload": "UE a393: LCID 1: TX          10005 RX          63037 bytes"
    },
    {
        "rowId": 328,
        "timestamp": 1715077018695,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 329,
        "timestamp": 1715077018695,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 330,
        "timestamp": 1715077018695,
        "payload": "UE a393: LCID 4: TX      267166063 RX       75578934 bytes"
    },
    {
        "rowId": 331,
        "timestamp": 1715077019975,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 332,
        "timestamp": 1715077019975,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 54 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 333,
        "timestamp": 1715077019975,
        "payload": "UE a393: CQI 9, RI 2, PMI (0,1)"
    },
    {
        "rowId": 334,
        "timestamp": 1715077019975,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 335,
        "timestamp": 1715077019975,
        "payload": "UE a393: dlsch_rounds 118562/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 336,
        "timestamp": 1715077019975,
        "payload": "UE a393: ulsch_rounds 58038/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 337,
        "timestamp": 1715077019975,
        "payload": "UE a393: MAC:    TX      291001622 RX       81863147 bytes"
    },
    {
        "rowId": 338,
        "timestamp": 1715077019975,
        "payload": "UE a393: LCID 1: TX          10008 RX          63059 bytes"
    },
    {
        "rowId": 339,
        "timestamp": 1715077019975,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 340,
        "timestamp": 1715077019975,
        "payload": "UE a393: LCID 4: TX      267179143 RX       75581702 bytes"
    },
    {
        "rowId": 341,
        "timestamp": 1715077019975,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 342,
        "timestamp": 1715077021254,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 343,
        "timestamp": 1715077021255,
        "payload": "UE a393: CQI 9, RI 2, PMI (0,1)"
    },
    {
        "rowId": 344,
        "timestamp": 1715077021255,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 345,
        "timestamp": 1715077021255,
        "payload": "UE a393: dlsch_rounds 118581/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 346,
        "timestamp": 1715077021255,
        "payload": "UE a393: ulsch_rounds 58057/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 11"
    },
    {
        "rowId": 347,
        "timestamp": 1715077021255,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 52 dB PCMAX 22 dBm, average RSRP -100 (32 meas)"
    },
    {
        "rowId": 348,
        "timestamp": 1715077021255,
        "payload": "UE a393: MAC:    TX      291009141 RX       81865702 bytes"
    },
    {
        "rowId": 349,
        "timestamp": 1715077021255,
        "payload": "UE a393: LCID 1: TX          10014 RX          63103 bytes"
    },
    {
        "rowId": 350,
        "timestamp": 1715077021255,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 351,
        "timestamp": 1715077021255,
        "payload": "UE a393: LCID 4: TX      267179475 RX       75581904 bytes"
    },
    {
        "rowId": 352,
        "timestamp": 1715077021255,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 353,
        "timestamp": 1715077022534,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 354,
        "timestamp": 1715077022535,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 54 dB PCMAX 22 dBm, average RSRP -100 (32 meas)"
    },
    {
        "rowId": 355,
        "timestamp": 1715077022535,
        "payload": "UE a393: CQI 9, RI 2, PMI (0,1)"
    },
    {
        "rowId": 356,
        "timestamp": 1715077022535,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 357,
        "timestamp": 1715077022535,
        "payload": "UE a393: dlsch_rounds 118595/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 358,
        "timestamp": 1715077022535,
        "payload": "UE a393: ulsch_rounds 58071/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 359,
        "timestamp": 1715077022535,
        "payload": "UE a393: MAC:    TX      291014987 RX       81868206 bytes"
    },
    {
        "rowId": 360,
        "timestamp": 1715077022535,
        "payload": "UE a393: LCID 1: TX          10017 RX          63125 bytes"
    },
    {
        "rowId": 361,
        "timestamp": 1715077022535,
        "payload": "UE a393: LCID 4: TX      267179475 RX       75581904 bytes"
    },
    {
        "rowId": 362,
        "timestamp": 1715077022535,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 363,
        "timestamp": 1715077022535,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 364,
        "timestamp": 1715077023814,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 365,
        "timestamp": 1715077023815,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 366,
        "timestamp": 1715077023815,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 54 dB PCMAX 22 dBm, average RSRP -100 (32 meas)"
    },
    {
        "rowId": 367,
        "timestamp": 1715077023815,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 368,
        "timestamp": 1715077023815,
        "payload": "UE a393: dlsch_rounds 118609/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 369,
        "timestamp": 1715077023815,
        "payload": "UE a393: ulsch_rounds 58086/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 370,
        "timestamp": 1715077023815,
        "payload": "UE a393: MAC:    TX      291020833 RX       81870919 bytes"
    },
    {
        "rowId": 371,
        "timestamp": 1715077023815,
        "payload": "UE a393: LCID 1: TX          10020 RX          63147 bytes"
    },
    {
        "rowId": 372,
        "timestamp": 1715077023815,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 373,
        "timestamp": 1715077023815,
        "payload": "UE a393: LCID 4: TX      267179475 RX       75581904 bytes"
    },
    {
        "rowId": 374,
        "timestamp": 1715077023815,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 375,
        "timestamp": 1715077025095,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 376,
        "timestamp": 1715077025095,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 52 dB PCMAX 22 dBm, average RSRP -100 (32 meas)"
    },
    {
        "rowId": 377,
        "timestamp": 1715077025095,
        "payload": "UE a393: CQI 11, RI 2, PMI (0,1)"
    },
    {
        "rowId": 378,
        "timestamp": 1715077025095,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 379,
        "timestamp": 1715077025095,
        "payload": "UE a393: dlsch_rounds 118622/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 380,
        "timestamp": 1715077025095,
        "payload": "UE a393: ulsch_rounds 58100/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 381,
        "timestamp": 1715077025095,
        "payload": "UE a393: MAC:    TX      291026242 RX       81873407 bytes"
    },
    {
        "rowId": 382,
        "timestamp": 1715077025095,
        "payload": "UE a393: LCID 1: TX          10023 RX          63169 bytes"
    },
    {
        "rowId": 383,
        "timestamp": 1715077025095,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 384,
        "timestamp": 1715077025095,
        "payload": "UE a393: LCID 4: TX      267179475 RX       75581904 bytes"
    },
    {
        "rowId": 385,
        "timestamp": 1715077025095,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 386,
        "timestamp": 1715077026375,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 54 dB PCMAX 22 dBm, average RSRP -98 (32 meas)"
    },
    {
        "rowId": 387,
        "timestamp": 1715077026374,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 388,
        "timestamp": 1715077026375,
        "payload": "UE a393: CQI 11, RI 2, PMI (0,1)"
    },
    {
        "rowId": 389,
        "timestamp": 1715077026375,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 390,
        "timestamp": 1715077026375,
        "payload": "UE a393: dlsch_rounds 118637/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 391,
        "timestamp": 1715077026375,
        "payload": "UE a393: ulsch_rounds 58117/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 392,
        "timestamp": 1715077026375,
        "payload": "UE a393: MAC:    TX      291032253 RX       81876212 bytes"
    },
    {
        "rowId": 393,
        "timestamp": 1715077026375,
        "payload": "UE a393: LCID 1: TX          10029 RX          63213 bytes"
    },
    {
        "rowId": 394,
        "timestamp": 1715077026375,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 395,
        "timestamp": 1715077026375,
        "payload": "UE a393: LCID 4: TX      267179475 RX       75581904 bytes"
    },
    {
        "rowId": 396,
        "timestamp": 1715077026375,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 397,
        "timestamp": 1715077027655,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 398,
        "timestamp": 1715077027655,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 52 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 399,
        "timestamp": 1715077027655,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 400,
        "timestamp": 1715077027655,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 401,
        "timestamp": 1715077027655,
        "payload": "UE a393: dlsch_rounds 118651/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 402,
        "timestamp": 1715077027655,
        "payload": "UE a393: ulsch_rounds 58131/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 403,
        "timestamp": 1715077027655,
        "payload": "UE a393: MAC:    TX      291038099 RX       81878716 bytes"
    },
    {
        "rowId": 404,
        "timestamp": 1715077027655,
        "payload": "UE a393: LCID 1: TX          10032 RX          63235 bytes"
    },
    {
        "rowId": 405,
        "timestamp": 1715077027655,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 406,
        "timestamp": 1715077027655,
        "payload": "UE a393: LCID 4: TX      267179475 RX       75581904 bytes"
    },
    {
        "rowId": 407,
        "timestamp": 1715077027655,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 408,
        "timestamp": 1715077028935,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 409,
        "timestamp": 1715077028935,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 410,
        "timestamp": 1715077028935,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 411,
        "timestamp": 1715077028935,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 412,
        "timestamp": 1715077028935,
        "payload": "UE a393: dlsch_rounds 118665/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 413,
        "timestamp": 1715077028935,
        "payload": "UE a393: ulsch_rounds 58146/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 414,
        "timestamp": 1715077028935,
        "payload": "UE a393: MAC:    TX      291043945 RX       81881413 bytes"
    },
    {
        "rowId": 415,
        "timestamp": 1715077028935,
        "payload": "UE a393: LCID 1: TX          10035 RX          63257 bytes"
    },
    {
        "rowId": 416,
        "timestamp": 1715077028935,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 417,
        "timestamp": 1715077028935,
        "payload": "UE a393: LCID 4: TX      267179475 RX       75581904 bytes"
    },
    {
        "rowId": 418,
        "timestamp": 1715077028935,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 419,
        "timestamp": 1715077030215,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 420,
        "timestamp": 1715077030215,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 421,
        "timestamp": 1715077030215,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 422,
        "timestamp": 1715077030215,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 423,
        "timestamp": 1715077030215,
        "payload": "UE a393: dlsch_rounds 118684/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 424,
        "timestamp": 1715077030215,
        "payload": "UE a393: ulsch_rounds 58164/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 425,
        "timestamp": 1715077030215,
        "payload": "UE a393: MAC:    TX      291050920 RX       81884111 bytes"
    },
    {
        "rowId": 426,
        "timestamp": 1715077030215,
        "payload": "UE a393: LCID 1: TX          10038 RX          63279 bytes"
    },
    {
        "rowId": 427,
        "timestamp": 1715077030215,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 428,
        "timestamp": 1715077030215,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 429,
        "timestamp": 1715077030215,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 430,
        "timestamp": 1715077031495,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 431,
        "timestamp": 1715077031495,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 432,
        "timestamp": 1715077031495,
        "payload": "UE a393: CQI 11, RI 2, PMI (0,1)"
    },
    {
        "rowId": 433,
        "timestamp": 1715077031495,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 434,
        "timestamp": 1715077031495,
        "payload": "UE a393: dlsch_rounds 118698/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 435,
        "timestamp": 1715077031495,
        "payload": "UE a393: ulsch_rounds 58181/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 436,
        "timestamp": 1715077031495,
        "payload": "UE a393: MAC:    TX      291056494 RX       81886900 bytes"
    },
    {
        "rowId": 437,
        "timestamp": 1715077031495,
        "payload": "UE a393: LCID 1: TX          10044 RX          63323 bytes"
    },
    {
        "rowId": 438,
        "timestamp": 1715077031495,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 439,
        "timestamp": 1715077031495,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 440,
        "timestamp": 1715077031495,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 441,
        "timestamp": 1715077032775,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 442,
        "timestamp": 1715077032775,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 52 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 443,
        "timestamp": 1715077032775,
        "payload": "UE a393: CQI 12, RI 2, PMI (0,1)"
    },
    {
        "rowId": 444,
        "timestamp": 1715077032775,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 445,
        "timestamp": 1715077032775,
        "payload": "UE a393: dlsch_rounds 118712/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 446,
        "timestamp": 1715077032775,
        "payload": "UE a393: ulsch_rounds 58195/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 447,
        "timestamp": 1715077032775,
        "payload": "UE a393: MAC:    TX      291062340 RX       81889404 bytes"
    },
    {
        "rowId": 448,
        "timestamp": 1715077032775,
        "payload": "UE a393: LCID 1: TX          10047 RX          63345 bytes"
    },
    {
        "rowId": 449,
        "timestamp": 1715077032775,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 450,
        "timestamp": 1715077032775,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 451,
        "timestamp": 1715077032775,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 452,
        "timestamp": 1715077034054,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 453,
        "timestamp": 1715077034055,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 52 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 454,
        "timestamp": 1715077034055,
        "payload": "UE a393: CQI 12, RI 2, PMI (0,1)"
    },
    {
        "rowId": 455,
        "timestamp": 1715077034055,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 456,
        "timestamp": 1715077034055,
        "payload": "UE a393: dlsch_rounds 118726/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 457,
        "timestamp": 1715077034055,
        "payload": "UE a393: ulsch_rounds 58210/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 458,
        "timestamp": 1715077034055,
        "payload": "UE a393: MAC:    TX      291068186 RX       81892117 bytes"
    },
    {
        "rowId": 459,
        "timestamp": 1715077034055,
        "payload": "UE a393: LCID 1: TX          10050 RX          63367 bytes"
    },
    {
        "rowId": 460,
        "timestamp": 1715077034055,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 461,
        "timestamp": 1715077034055,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 462,
        "timestamp": 1715077034055,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 463,
        "timestamp": 1715077035334,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLUULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 464,
        "timestamp": 1715077035335,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 465,
        "timestamp": 1715077035335,
        "payload": "UE a393: CQI 11, RI 2, PMI (0,1)"
    },
    {
        "rowId": 466,
        "timestamp": 1715077035335,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 467,
        "timestamp": 1715077035335,
        "payload": "UE a393: dlsch_rounds 118741/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 468,
        "timestamp": 1715077035335,
        "payload": "UE a393: ulsch_rounds 58226/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 469,
        "timestamp": 1715077035335,
        "payload": "UE a393: MAC:    TX      291074197 RX       81894860 bytes"
    },
    {
        "rowId": 470,
        "timestamp": 1715077035335,
        "payload": "UE a393: LCID 1: TX          10056 RX          63411 bytes"
    },
    {
        "rowId": 471,
        "timestamp": 1715077035335,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 472,
        "timestamp": 1715077035335,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 473,
        "timestamp": 1715077035335,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 474,
        "timestamp": 1715077036615,
        "payload": "ULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 475,
        "timestamp": 1715077036615,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 52 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 476,
        "timestamp": 1715077036615,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 477,
        "timestamp": 1715077036615,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 478,
        "timestamp": 1715077036615,
        "payload": "UE a393: dlsch_rounds 118755/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 479,
        "timestamp": 1715077036615,
        "payload": "UE a393: ulsch_rounds 58241/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 480,
        "timestamp": 1715077036615,
        "payload": "UE a393: MAC:    TX      291080043 RX       81897410 bytes"
    },
    {
        "rowId": 481,
        "timestamp": 1715077036615,
        "payload": "UE a393: LCID 1: TX          10059 RX          63433 bytes"
    },
    {
        "rowId": 482,
        "timestamp": 1715077036615,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 483,
        "timestamp": 1715077036615,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 484,
        "timestamp": 1715077036615,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 485,
        "timestamp": 1715077037895,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 486,
        "timestamp": 1715077037895,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 487,
        "timestamp": 1715077037895,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 488,
        "timestamp": 1715077037895,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 489,
        "timestamp": 1715077037895,
        "payload": "UE a393: dlsch_rounds 118768/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 490,
        "timestamp": 1715077037895,
        "payload": "UE a393: ulsch_rounds 58256/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 491,
        "timestamp": 1715077037895,
        "payload": "UE a393: MAC:    TX      291085452 RX       81900123 bytes"
    },
    {
        "rowId": 492,
        "timestamp": 1715077037895,
        "payload": "UE a393: LCID 1: TX          10062 RX          63455 bytes"
    },
    {
        "rowId": 493,
        "timestamp": 1715077037895,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 494,
        "timestamp": 1715077037895,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 495,
        "timestamp": 1715077037895,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 496,
        "timestamp": 1715077039174,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 497,
        "timestamp": 1715077039175,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 52 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 498,
        "timestamp": 1715077039175,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 499,
        "timestamp": 1715077039175,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 500,
        "timestamp": 1715077039175,
        "payload": "UE a393: dlsch_rounds 118782/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 501,
        "timestamp": 1715077039175,
        "payload": "UE a393: ulsch_rounds 58270/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 502,
        "timestamp": 1715077039175,
        "payload": "UE a393: MAC:    TX      291091298 RX       81902611 bytes"
    },
    {
        "rowId": 503,
        "timestamp": 1715077039175,
        "payload": "UE a393: LCID 1: TX          10065 RX          63477 bytes"
    },
    {
        "rowId": 504,
        "timestamp": 1715077039175,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 505,
        "timestamp": 1715077039175,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 506,
        "timestamp": 1715077039175,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 507,
        "timestamp": 1715077040454,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 508,
        "timestamp": 1715077040455,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 509,
        "timestamp": 1715077040455,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 510,
        "timestamp": 1715077040455,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 511,
        "timestamp": 1715077040455,
        "payload": "UE a393: dlsch_rounds 118797/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 512,
        "timestamp": 1715077040455,
        "payload": "UE a393: ulsch_rounds 58287/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 513,
        "timestamp": 1715077040455,
        "payload": "UE a393: MAC:    TX      291097309 RX       81905416 bytes"
    },
    {
        "rowId": 514,
        "timestamp": 1715077040455,
        "payload": "UE a393: LCID 1: TX          10071 RX          63521 bytes"
    },
    {
        "rowId": 515,
        "timestamp": 1715077040455,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 516,
        "timestamp": 1715077040455,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 517,
        "timestamp": 1715077040455,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 518,
        "timestamp": 1715077041734,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 519,
        "timestamp": 1715077041735,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 52 dB PCMAX 22 dBm, average RSRP -100 (32 meas)"
    },
    {
        "rowId": 520,
        "timestamp": 1715077041735,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 521,
        "timestamp": 1715077041735,
        "payload": "UE a393: dlsch_rounds 118811/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 522,
        "timestamp": 1715077041735,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 523,
        "timestamp": 1715077041735,
        "payload": "UE a393: ulsch_rounds 58301/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 524,
        "timestamp": 1715077041735,
        "payload": "UE a393: MAC:    TX      291103155 RX       81907920 bytes"
    },
    {
        "rowId": 525,
        "timestamp": 1715077041735,
        "payload": "UE a393: LCID 1: TX          10074 RX          63543 bytes"
    },
    {
        "rowId": 526,
        "timestamp": 1715077041735,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 527,
        "timestamp": 1715077041735,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 528,
        "timestamp": 1715077041735,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 529,
        "timestamp": 1715077043015,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 530,
        "timestamp": 1715077043015,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 52 dB PCMAX 22 dBm, average RSRP -100 (32 meas)"
    },
    {
        "rowId": 531,
        "timestamp": 1715077043015,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 532,
        "timestamp": 1715077043015,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 533,
        "timestamp": 1715077043015,
        "payload": "UE a393: dlsch_rounds 118825/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 534,
        "timestamp": 1715077043015,
        "payload": "UE a393: ulsch_rounds 58316/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 535,
        "timestamp": 1715077043015,
        "payload": "UE a393: MAC:    TX      291109001 RX       81910617 bytes"
    },
    {
        "rowId": 536,
        "timestamp": 1715077043015,
        "payload": "UE a393: LCID 1: TX          10077 RX          63565 bytes"
    },
    {
        "rowId": 537,
        "timestamp": 1715077043015,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 538,
        "timestamp": 1715077043015,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 539,
        "timestamp": 1715077043015,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 540,
        "timestamp": 1715077044295,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 541,
        "timestamp": 1715077044295,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 52 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 542,
        "timestamp": 1715077044295,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 543,
        "timestamp": 1715077044295,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 544,
        "timestamp": 1715077044295,
        "payload": "UE a393: dlsch_rounds 118838/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 545,
        "timestamp": 1715077044295,
        "payload": "UE a393: ulsch_rounds 58330/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 546,
        "timestamp": 1715077044295,
        "payload": "UE a393: MAC:    TX      291114410 RX       81913137 bytes"
    },
    {
        "rowId": 547,
        "timestamp": 1715077044295,
        "payload": "UE a393: LCID 1: TX          10080 RX          63587 bytes"
    },
    {
        "rowId": 548,
        "timestamp": 1715077044295,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 549,
        "timestamp": 1715077044295,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 550,
        "timestamp": 1715077044295,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 551,
        "timestamp": 1715077045575,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 552,
        "timestamp": 1715077045575,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -100 (32 meas)"
    },
    {
        "rowId": 553,
        "timestamp": 1715077045575,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 554,
        "timestamp": 1715077045575,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 555,
        "timestamp": 1715077045575,
        "payload": "UE a393: dlsch_rounds 118853/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 556,
        "timestamp": 1715077045575,
        "payload": "UE a393: MAC:    TX      291120421 RX       81915926 bytes"
    },
    {
        "rowId": 557,
        "timestamp": 1715077045575,
        "payload": "UE a393: LCID 1: TX          10086 RX          63631 bytes"
    },
    {
        "rowId": 558,
        "timestamp": 1715077045575,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 559,
        "timestamp": 1715077045575,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 560,
        "timestamp": 1715077045575,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 561,
        "timestamp": 1715077045575,
        "payload": "UE a393: ulsch_rounds 58347/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 562,
        "timestamp": 1715077046855,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 563,
        "timestamp": 1715077046855,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 52 dB PCMAX 22 dBm, average RSRP -100 (32 meas)"
    },
    {
        "rowId": 564,
        "timestamp": 1715077046855,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 565,
        "timestamp": 1715077046855,
        "payload": "UE a393: CQI 11, RI 2, PMI (0,1)"
    },
    {
        "rowId": 566,
        "timestamp": 1715077046855,
        "payload": "UE a393: dlsch_rounds 118867/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 567,
        "timestamp": 1715077046855,
        "payload": "UE a393: ulsch_rounds 58361/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 568,
        "timestamp": 1715077046855,
        "payload": "UE a393: MAC:    TX      291126267 RX       81918430 bytes"
    },
    {
        "rowId": 569,
        "timestamp": 1715077046855,
        "payload": "UE a393: LCID 1: TX          10089 RX          63653 bytes"
    },
    {
        "rowId": 570,
        "timestamp": 1715077046855,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 571,
        "timestamp": 1715077046855,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 572,
        "timestamp": 1715077046855,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 573,
        "timestamp": 1715077048135,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 574,
        "timestamp": 1715077048135,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 52 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 575,
        "timestamp": 1715077048135,
        "payload": "UE a393: CQI 11, RI 2, PMI (0,0)"
    },
    {
        "rowId": 576,
        "timestamp": 1715077048135,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 577,
        "timestamp": 1715077048135,
        "payload": "UE a393: dlsch_rounds 118881/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 578,
        "timestamp": 1715077048135,
        "payload": "UE a393: ulsch_rounds 58376/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 579,
        "timestamp": 1715077048135,
        "payload": "UE a393: MAC:    TX      291132113 RX       81921143 bytes"
    },
    {
        "rowId": 580,
        "timestamp": 1715077048135,
        "payload": "UE a393: LCID 1: TX          10092 RX          63675 bytes"
    },
    {
        "rowId": 581,
        "timestamp": 1715077048135,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 582,
        "timestamp": 1715077048135,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 583,
        "timestamp": 1715077048135,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 584,
        "timestamp": 1715077049414,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 585,
        "timestamp": 1715077049415,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 52 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 586,
        "timestamp": 1715077049415,
        "payload": "UE a393: CQI 11, RI 2, PMI (0,0)"
    },
    {
        "rowId": 587,
        "timestamp": 1715077049415,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 588,
        "timestamp": 1715077049415,
        "payload": "UE a393: dlsch_rounds 118895/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 589,
        "timestamp": 1715077049415,
        "payload": "UE a393: ulsch_rounds 58391/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 590,
        "timestamp": 1715077049415,
        "payload": "UE a393: MAC:    TX      291137959 RX       81923840 bytes"
    },
    {
        "rowId": 591,
        "timestamp": 1715077049415,
        "payload": "UE a393: LCID 1: TX          10095 RX          63697 bytes"
    },
    {
        "rowId": 592,
        "timestamp": 1715077049415,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 593,
        "timestamp": 1715077049415,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 594,
        "timestamp": 1715077049415,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 595,
        "timestamp": 1715077050695,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 596,
        "timestamp": 1715077050695,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,0)"
    },
    {
        "rowId": 597,
        "timestamp": 1715077050695,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 598,
        "timestamp": 1715077050695,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 22 dBm, average RSRP -100 (32 meas)"
    },
    {
        "rowId": 599,
        "timestamp": 1715077050695,
        "payload": "UE a393: dlsch_rounds 118909/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 600,
        "timestamp": 1715077050695,
        "payload": "UE a393: ulsch_rounds 58407/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 601,
        "timestamp": 1715077050695,
        "payload": "UE a393: LCID 1: TX          10101 RX          63741 bytes"
    },
    {
        "rowId": 602,
        "timestamp": 1715077050695,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 603,
        "timestamp": 1715077050695,
        "payload": "UE a393: MAC:    TX      291143533 RX       81926436 bytes"
    },
    {
        "rowId": 604,
        "timestamp": 1715077050695,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 605,
        "timestamp": 1715077050695,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 606,
        "timestamp": 1715077051974,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 607,
        "timestamp": 1715077051975,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 52 dB PCMAX 22 dBm, average RSRP -100 (32 meas)"
    },
    {
        "rowId": 608,
        "timestamp": 1715077051975,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 609,
        "timestamp": 1715077051975,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 610,
        "timestamp": 1715077051975,
        "payload": "UE a393: dlsch_rounds 118923/7366/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 611,
        "timestamp": 1715077051975,
        "payload": "UE a393: ulsch_rounds 58422/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 612,
        "timestamp": 1715077051975,
        "payload": "UE a393: MAC:    TX      291149379 RX       81929149 bytes"
    },
    {
        "rowId": 613,
        "timestamp": 1715077051975,
        "payload": "UE a393: LCID 1: TX          10104 RX          63763 bytes"
    },
    {
        "rowId": 614,
        "timestamp": 1715077051975,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 615,
        "timestamp": 1715077051975,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 616,
        "timestamp": 1715077051975,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 617,
        "timestamp": 1715077053255,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 618,
        "timestamp": 1715077053255,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 619,
        "timestamp": 1715077053255,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,0)"
    },
    {
        "rowId": 620,
        "timestamp": 1715077053255,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 621,
        "timestamp": 1715077053255,
        "payload": "UE a393: dlsch_rounds 118937/7367/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.09000 MCS (1) 9"
    },
    {
        "rowId": 622,
        "timestamp": 1715077053255,
        "payload": "UE a393: ulsch_rounds 58436/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 623,
        "timestamp": 1715077053255,
        "payload": "UE a393: MAC:    TX      291155225 RX       81931637 bytes"
    },
    {
        "rowId": 624,
        "timestamp": 1715077053255,
        "payload": "UE a393: LCID 1: TX          10107 RX          63785 bytes"
    },
    {
        "rowId": 625,
        "timestamp": 1715077053255,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 626,
        "timestamp": 1715077053255,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 627,
        "timestamp": 1715077053255,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 628,
        "timestamp": 1715077054534,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 629,
        "timestamp": 1715077054535,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 52 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 630,
        "timestamp": 1715077054535,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 631,
        "timestamp": 1715077054535,
        "payload": "UE a393: dlsch_rounds 118951/7367/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.02288 MCS (1) 9"
    },
    {
        "rowId": 632,
        "timestamp": 1715077054535,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 633,
        "timestamp": 1715077054535,
        "payload": "UE a393: ulsch_rounds 58451/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 634,
        "timestamp": 1715077054535,
        "payload": "UE a393: MAC:    TX      291161071 RX       81934350 bytes"
    },
    {
        "rowId": 635,
        "timestamp": 1715077054535,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 636,
        "timestamp": 1715077054535,
        "payload": "UE a393: LCID 1: TX          10110 RX          63807 bytes"
    },
    {
        "rowId": 637,
        "timestamp": 1715077054535,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 638,
        "timestamp": 1715077054535,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 639,
        "timestamp": 1715077055814,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 640,
        "timestamp": 1715077055815,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -98 (32 meas)"
    },
    {
        "rowId": 641,
        "timestamp": 1715077055815,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 642,
        "timestamp": 1715077055815,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 643,
        "timestamp": 1715077055815,
        "payload": "UE a393: dlsch_rounds 118966/7367/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00581 MCS (1) 9"
    },
    {
        "rowId": 644,
        "timestamp": 1715077055815,
        "payload": "UE a393: ulsch_rounds 58467/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 645,
        "timestamp": 1715077055815,
        "payload": "UE a393: MAC:    TX      291167082 RX       81936946 bytes"
    },
    {
        "rowId": 646,
        "timestamp": 1715077055815,
        "payload": "UE a393: LCID 1: TX          10116 RX          63851 bytes"
    },
    {
        "rowId": 647,
        "timestamp": 1715077055815,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 648,
        "timestamp": 1715077055815,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 649,
        "timestamp": 1715077055815,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 650,
        "timestamp": 1715077057094,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 651,
        "timestamp": 1715077057095,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -98 (32 meas)"
    },
    {
        "rowId": 652,
        "timestamp": 1715077057095,
        "payload": "UE a393: CQI 11, RI 2, PMI (0,1)"
    },
    {
        "rowId": 653,
        "timestamp": 1715077057095,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 654,
        "timestamp": 1715077057095,
        "payload": "UE a393: dlsch_rounds 118979/7367/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00164 MCS (1) 9"
    },
    {
        "rowId": 655,
        "timestamp": 1715077057095,
        "payload": "UE a393: ulsch_rounds 58482/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 656,
        "timestamp": 1715077057095,
        "payload": "UE a393: MAC:    TX      291172491 RX       81939643 bytes"
    },
    {
        "rowId": 657,
        "timestamp": 1715077057095,
        "payload": "UE a393: LCID 1: TX          10119 RX          63873 bytes"
    },
    {
        "rowId": 658,
        "timestamp": 1715077057095,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 659,
        "timestamp": 1715077057095,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 660,
        "timestamp": 1715077057095,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 661,
        "timestamp": 1715077058375,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 662,
        "timestamp": 1715077058375,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 44 dB PCMAX 22 dBm, average RSRP -98 (32 meas)"
    },
    {
        "rowId": 663,
        "timestamp": 1715077058375,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 664,
        "timestamp": 1715077058375,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 665,
        "timestamp": 1715077058375,
        "payload": "UE a393: dlsch_rounds 118993/7367/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00042 MCS (1) 9"
    },
    {
        "rowId": 666,
        "timestamp": 1715077058375,
        "payload": "UE a393: ulsch_rounds 58496/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 667,
        "timestamp": 1715077058375,
        "payload": "UE a393: MAC:    TX      291178337 RX       81942163 bytes"
    },
    {
        "rowId": 668,
        "timestamp": 1715077058375,
        "payload": "UE a393: LCID 1: TX          10122 RX          63895 bytes"
    },
    {
        "rowId": 669,
        "timestamp": 1715077058375,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 670,
        "timestamp": 1715077058375,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 671,
        "timestamp": 1715077058375,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 672,
        "timestamp": 1715077059654,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 673,
        "timestamp": 1715077059655,
        "payload": "UE a393: CQI 11, RI 2, PMI (0,1)"
    },
    {
        "rowId": 674,
        "timestamp": 1715077059655,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 675,
        "timestamp": 1715077059655,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -98 (32 meas)"
    },
    {
        "rowId": 676,
        "timestamp": 1715077059655,
        "payload": "UE a393: dlsch_rounds 119007/7367/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00011 MCS (1) 9"
    },
    {
        "rowId": 677,
        "timestamp": 1715077059655,
        "payload": "UE a393: ulsch_rounds 58511/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 678,
        "timestamp": 1715077059655,
        "payload": "UE a393: MAC:    TX      291184183 RX       81944860 bytes"
    },
    {
        "rowId": 679,
        "timestamp": 1715077059655,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 680,
        "timestamp": 1715077059655,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 681,
        "timestamp": 1715077059655,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 682,
        "timestamp": 1715077059655,
        "payload": "UE a393: LCID 1: TX          10125 RX          63917 bytes"
    },
    {
        "rowId": 683,
        "timestamp": 1715077060935,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 684,
        "timestamp": 1715077060935,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -97 (32 meas)"
    },
    {
        "rowId": 685,
        "timestamp": 1715077060935,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 686,
        "timestamp": 1715077060935,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 687,
        "timestamp": 1715077060935,
        "payload": "UE a393: dlsch_rounds 119022/7368/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.03141 MCS (1) 9"
    },
    {
        "rowId": 688,
        "timestamp": 1715077060935,
        "payload": "UE a393: ulsch_rounds 58527/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 689,
        "timestamp": 1715077060935,
        "payload": "UE a393: MAC:    TX      291190194 RX       81947456 bytes"
    },
    {
        "rowId": 690,
        "timestamp": 1715077060935,
        "payload": "UE a393: LCID 1: TX          10131 RX          63961 bytes"
    },
    {
        "rowId": 691,
        "timestamp": 1715077060935,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 692,
        "timestamp": 1715077060935,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 693,
        "timestamp": 1715077060935,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 694,
        "timestamp": 1715077062214,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 695,
        "timestamp": 1715077062215,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -98 (32 meas)"
    },
    {
        "rowId": 696,
        "timestamp": 1715077062215,
        "payload": "UE a393: CQI 12, RI 2, PMI (0,1)"
    },
    {
        "rowId": 697,
        "timestamp": 1715077062215,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 698,
        "timestamp": 1715077062215,
        "payload": "UE a393: dlsch_rounds 119036/7368/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00798 MCS (1) 9"
    },
    {
        "rowId": 699,
        "timestamp": 1715077062215,
        "payload": "UE a393: ulsch_rounds 58542/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 700,
        "timestamp": 1715077062215,
        "payload": "UE a393: MAC:    TX      291196040 RX       81950169 bytes"
    },
    {
        "rowId": 701,
        "timestamp": 1715077062215,
        "payload": "UE a393: LCID 1: TX          10134 RX          63983 bytes"
    },
    {
        "rowId": 702,
        "timestamp": 1715077062215,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 703,
        "timestamp": 1715077062215,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 704,
        "timestamp": 1715077062215,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 705,
        "timestamp": 1715077063494,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 706,
        "timestamp": 1715077063495,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -97 (32 meas)"
    },
    {
        "rowId": 707,
        "timestamp": 1715077063495,
        "payload": "UE a393: CQI 11, RI 2, PMI (0,1)"
    },
    {
        "rowId": 708,
        "timestamp": 1715077063495,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 709,
        "timestamp": 1715077063495,
        "payload": "UE a393: dlsch_rounds 119049/7368/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00225 MCS (1) 9"
    },
    {
        "rowId": 710,
        "timestamp": 1715077063495,
        "payload": "UE a393: ulsch_rounds 58557/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 711,
        "timestamp": 1715077063495,
        "payload": "UE a393: MAC:    TX      291201449 RX       81952866 bytes"
    },
    {
        "rowId": 712,
        "timestamp": 1715077063495,
        "payload": "UE a393: LCID 1: TX          10137 RX          64005 bytes"
    },
    {
        "rowId": 713,
        "timestamp": 1715077063495,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 714,
        "timestamp": 1715077063495,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 715,
        "timestamp": 1715077063495,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 716,
        "timestamp": 1715077064774,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 717,
        "timestamp": 1715077064775,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -97 (32 meas)"
    },
    {
        "rowId": 718,
        "timestamp": 1715077064775,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 719,
        "timestamp": 1715077064775,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 720,
        "timestamp": 1715077064775,
        "payload": "UE a393: dlsch_rounds 119063/7368/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00057 MCS (1) 9"
    },
    {
        "rowId": 721,
        "timestamp": 1715077064775,
        "payload": "UE a393: ulsch_rounds 58571/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 722,
        "timestamp": 1715077064775,
        "payload": "UE a393: MAC:    TX      291207295 RX       81955370 bytes"
    },
    {
        "rowId": 723,
        "timestamp": 1715077064775,
        "payload": "UE a393: LCID 1: TX          10140 RX          64027 bytes"
    },
    {
        "rowId": 724,
        "timestamp": 1715077064775,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 725,
        "timestamp": 1715077064775,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 726,
        "timestamp": 1715077064775,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 727,
        "timestamp": 1715077066054,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 728,
        "timestamp": 1715077066055,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 22 dBm, average RSRP -97 (32 meas)"
    },
    {
        "rowId": 729,
        "timestamp": 1715077066055,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 730,
        "timestamp": 1715077066055,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 731,
        "timestamp": 1715077066055,
        "payload": "UE a393: dlsch_rounds 119078/7368/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00015 MCS (1) 9"
    },
    {
        "rowId": 732,
        "timestamp": 1715077066055,
        "payload": "UE a393: ulsch_rounds 58588/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 733,
        "timestamp": 1715077066055,
        "payload": "UE a393: MAC:    TX      291213306 RX       81958175 bytes"
    },
    {
        "rowId": 734,
        "timestamp": 1715077066055,
        "payload": "UE a393: LCID 1: TX          10146 RX          64071 bytes"
    },
    {
        "rowId": 735,
        "timestamp": 1715077066055,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 736,
        "timestamp": 1715077066055,
        "payload": "UE a393: LCID 4: TX      267179749 RX       75582176 bytes"
    },
    {
        "rowId": 737,
        "timestamp": 1715077066055,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 738,
        "timestamp": 1715077067334,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 739,
        "timestamp": 1715077067335,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,0)"
    },
    {
        "rowId": 740,
        "timestamp": 1715077067335,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 741,
        "timestamp": 1715077067335,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 742,
        "timestamp": 1715077067335,
        "payload": "UE a393: dlsch_rounds 119112/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.07800 MCS (1) 9"
    },
    {
        "rowId": 743,
        "timestamp": 1715077067335,
        "payload": "UE a393: ulsch_rounds 58616/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 744,
        "timestamp": 1715077067335,
        "payload": "UE a393: MAC:    TX      291235177 RX       81963746 bytes"
    },
    {
        "rowId": 745,
        "timestamp": 1715077067335,
        "payload": "UE a393: LCID 1: TX          10149 RX          64093 bytes"
    },
    {
        "rowId": 746,
        "timestamp": 1715077067335,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 747,
        "timestamp": 1715077067335,
        "payload": "UE a393: LCID 4: TX      267192825 RX       75584929 bytes"
    },
    {
        "rowId": 748,
        "timestamp": 1715077067335,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 749,
        "timestamp": 1715077068614,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 750,
        "timestamp": 1715077068615,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 751,
        "timestamp": 1715077068615,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 752,
        "timestamp": 1715077068615,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 753,
        "timestamp": 1715077068615,
        "payload": "UE a393: dlsch_rounds 119126/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.01983 MCS (1) 9"
    },
    {
        "rowId": 754,
        "timestamp": 1715077068615,
        "payload": "UE a393: ulsch_rounds 58631/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 755,
        "timestamp": 1715077068615,
        "payload": "UE a393: MAC:    TX      291241023 RX       81966507 bytes"
    },
    {
        "rowId": 756,
        "timestamp": 1715077068615,
        "payload": "UE a393: LCID 1: TX          10152 RX          64115 bytes"
    },
    {
        "rowId": 757,
        "timestamp": 1715077068615,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 758,
        "timestamp": 1715077068615,
        "payload": "UE a393: LCID 4: TX      267192825 RX       75584929 bytes"
    },
    {
        "rowId": 759,
        "timestamp": 1715077068615,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 760,
        "timestamp": 1715077069894,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 761,
        "timestamp": 1715077069895,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 762,
        "timestamp": 1715077069895,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 763,
        "timestamp": 1715077069895,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 764,
        "timestamp": 1715077069895,
        "payload": "UE a393: dlsch_rounds 119143/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00560 MCS (1) 9"
    },
    {
        "rowId": 765,
        "timestamp": 1715077069895,
        "payload": "UE a393: ulsch_rounds 58649/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 766,
        "timestamp": 1715077069895,
        "payload": "UE a393: MAC:    TX      291247668 RX       81969324 bytes"
    },
    {
        "rowId": 767,
        "timestamp": 1715077069895,
        "payload": "UE a393: LCID 1: TX          10155 RX          64137 bytes"
    },
    {
        "rowId": 768,
        "timestamp": 1715077069895,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 769,
        "timestamp": 1715077069895,
        "payload": "UE a393: LCID 4: TX      267193096 RX       75585077 bytes"
    },
    {
        "rowId": 770,
        "timestamp": 1715077069895,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 771,
        "timestamp": 1715077071174,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 772,
        "timestamp": 1715077071174,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 773,
        "timestamp": 1715077071174,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 774,
        "timestamp": 1715077071175,
        "payload": "UE a393: ulsch_rounds 58665/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 775,
        "timestamp": 1715077071175,
        "payload": "UE a393: dlsch_rounds 119158/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00142 MCS (1) 9"
    },
    {
        "rowId": 776,
        "timestamp": 1715077071175,
        "payload": "UE a393: MAC:    TX      291253679 RX       81971920 bytes"
    },
    {
        "rowId": 777,
        "timestamp": 1715077071175,
        "payload": "UE a393: LCID 1: TX          10161 RX          64181 bytes"
    },
    {
        "rowId": 778,
        "timestamp": 1715077071175,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 779,
        "timestamp": 1715077071175,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 780,
        "timestamp": 1715077071175,
        "payload": "UE a393: LCID 4: TX      267193096 RX       75585077 bytes"
    },
    {
        "rowId": 781,
        "timestamp": 1715077071175,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 782,
        "timestamp": 1715077072454,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 783,
        "timestamp": 1715077072455,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 784,
        "timestamp": 1715077072455,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 785,
        "timestamp": 1715077072455,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 786,
        "timestamp": 1715077072455,
        "payload": "UE a393: dlsch_rounds 119172/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00036 MCS (1) 9"
    },
    {
        "rowId": 787,
        "timestamp": 1715077072455,
        "payload": "UE a393: ulsch_rounds 58679/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 788,
        "timestamp": 1715077072455,
        "payload": "UE a393: LCID 1: TX          10164 RX          64203 bytes"
    },
    {
        "rowId": 789,
        "timestamp": 1715077072455,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 790,
        "timestamp": 1715077072455,
        "payload": "UE a393: LCID 4: TX      267193096 RX       75585077 bytes"
    },
    {
        "rowId": 791,
        "timestamp": 1715077072455,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 792,
        "timestamp": 1715077072455,
        "payload": "UE a393: MAC:    TX      291259525 RX       81974440 bytes"
    },
    {
        "rowId": 793,
        "timestamp": 1715077073734,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 794,
        "timestamp": 1715077073734,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 795,
        "timestamp": 1715077073735,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 796,
        "timestamp": 1715077073735,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 797,
        "timestamp": 1715077073735,
        "payload": "UE a393: dlsch_rounds 119186/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00009 MCS (1) 9"
    },
    {
        "rowId": 798,
        "timestamp": 1715077073735,
        "payload": "UE a393: ulsch_rounds 58694/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 799,
        "timestamp": 1715077073735,
        "payload": "UE a393: MAC:    TX      291265371 RX       81977137 bytes"
    },
    {
        "rowId": 800,
        "timestamp": 1715077073735,
        "payload": "UE a393: LCID 1: TX          10167 RX          64225 bytes"
    },
    {
        "rowId": 801,
        "timestamp": 1715077073735,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 802,
        "timestamp": 1715077073735,
        "payload": "UE a393: LCID 4: TX      267193096 RX       75585077 bytes"
    },
    {
        "rowId": 803,
        "timestamp": 1715077073735,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 804,
        "timestamp": 1715077075014,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 805,
        "timestamp": 1715077075015,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 806,
        "timestamp": 1715077075015,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 807,
        "timestamp": 1715077075015,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 808,
        "timestamp": 1715077075015,
        "payload": "UE a393: dlsch_rounds 119200/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00002 MCS (1) 9"
    },
    {
        "rowId": 809,
        "timestamp": 1715077075015,
        "payload": "UE a393: ulsch_rounds 58709/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 810,
        "timestamp": 1715077075015,
        "payload": "UE a393: MAC:    TX      291271217 RX       81979850 bytes"
    },
    {
        "rowId": 811,
        "timestamp": 1715077075015,
        "payload": "UE a393: LCID 1: TX          10170 RX          64247 bytes"
    },
    {
        "rowId": 812,
        "timestamp": 1715077075015,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 813,
        "timestamp": 1715077075015,
        "payload": "UE a393: LCID 4: TX      267193096 RX       75585077 bytes"
    },
    {
        "rowId": 814,
        "timestamp": 1715077075015,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 815,
        "timestamp": 1715077076294,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 816,
        "timestamp": 1715077076295,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 817,
        "timestamp": 1715077076295,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 818,
        "timestamp": 1715077076295,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 819,
        "timestamp": 1715077076295,
        "payload": "UE a393: dlsch_rounds 119214/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00001 MCS (1) 9"
    },
    {
        "rowId": 820,
        "timestamp": 1715077076295,
        "payload": "UE a393: ulsch_rounds 58725/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 821,
        "timestamp": 1715077076295,
        "payload": "UE a393: MAC:    TX      291276791 RX       81982446 bytes"
    },
    {
        "rowId": 822,
        "timestamp": 1715077076295,
        "payload": "UE a393: LCID 1: TX          10176 RX          64291 bytes"
    },
    {
        "rowId": 823,
        "timestamp": 1715077076295,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 824,
        "timestamp": 1715077076295,
        "payload": "UE a393: LCID 4: TX      267193096 RX       75585077 bytes"
    },
    {
        "rowId": 825,
        "timestamp": 1715077076295,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 826,
        "timestamp": 1715077077574,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 827,
        "timestamp": 1715077077575,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 828,
        "timestamp": 1715077077575,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 829,
        "timestamp": 1715077077575,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 830,
        "timestamp": 1715077077575,
        "payload": "UE a393: dlsch_rounds 119233/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 831,
        "timestamp": 1715077077575,
        "payload": "UE a393: ulsch_rounds 58744/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 832,
        "timestamp": 1715077077575,
        "payload": "UE a393: MAC:    TX      291283778 RX       81985335 bytes"
    },
    {
        "rowId": 833,
        "timestamp": 1715077077575,
        "payload": "UE a393: LCID 1: TX          10179 RX          64313 bytes"
    },
    {
        "rowId": 834,
        "timestamp": 1715077077575,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 835,
        "timestamp": 1715077077575,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 836,
        "timestamp": 1715077077575,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 837,
        "timestamp": 1715077078854,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 838,
        "timestamp": 1715077078854,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 839,
        "timestamp": 1715077078854,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 840,
        "timestamp": 1715077078855,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 841,
        "timestamp": 1715077078855,
        "payload": "UE a393: dlsch_rounds 119247/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 842,
        "timestamp": 1715077078855,
        "payload": "UE a393: ulsch_rounds 58758/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 843,
        "timestamp": 1715077078855,
        "payload": "UE a393: MAC:    TX      291289624 RX       81987839 bytes"
    },
    {
        "rowId": 844,
        "timestamp": 1715077078855,
        "payload": "UE a393: LCID 1: TX          10182 RX          64335 bytes"
    },
    {
        "rowId": 845,
        "timestamp": 1715077078855,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 846,
        "timestamp": 1715077078855,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 847,
        "timestamp": 1715077078855,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 848,
        "timestamp": 1715077080134,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 849,
        "timestamp": 1715077080134,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 850,
        "timestamp": 1715077080134,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 851,
        "timestamp": 1715077080134,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 852,
        "timestamp": 1715077080134,
        "payload": "UE a393: dlsch_rounds 119261/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 853,
        "timestamp": 1715077080135,
        "payload": "UE a393: ulsch_rounds 58773/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 854,
        "timestamp": 1715077080135,
        "payload": "UE a393: MAC:    TX      291295470 RX       81990536 bytes"
    },
    {
        "rowId": 855,
        "timestamp": 1715077080135,
        "payload": "UE a393: LCID 1: TX          10185 RX          64357 bytes"
    },
    {
        "rowId": 856,
        "timestamp": 1715077080135,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 857,
        "timestamp": 1715077080135,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 858,
        "timestamp": 1715077080135,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 859,
        "timestamp": 1715077081414,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 860,
        "timestamp": 1715077081415,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 861,
        "timestamp": 1715077081415,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 862,
        "timestamp": 1715077081415,
        "payload": "UE a393: ulsch_rounds 58789/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 863,
        "timestamp": 1715077081415,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 864,
        "timestamp": 1715077081415,
        "payload": "UE a393: dlsch_rounds 119276/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 865,
        "timestamp": 1715077081415,
        "payload": "UE a393: MAC:    TX      291301481 RX       81993132 bytes"
    },
    {
        "rowId": 866,
        "timestamp": 1715077081415,
        "payload": "UE a393: LCID 1: TX          10191 RX          64401 bytes"
    },
    {
        "rowId": 867,
        "timestamp": 1715077081415,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 868,
        "timestamp": 1715077081415,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 869,
        "timestamp": 1715077081415,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 870,
        "timestamp": 1715077082694,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 871,
        "timestamp": 1715077082695,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 872,
        "timestamp": 1715077082695,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 873,
        "timestamp": 1715077082695,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 874,
        "timestamp": 1715077082695,
        "payload": "UE a393: dlsch_rounds 119289/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 875,
        "timestamp": 1715077082695,
        "payload": "UE a393: ulsch_rounds 58804/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 876,
        "timestamp": 1715077082695,
        "payload": "UE a393: LCID 1: TX          10194 RX          64423 bytes"
    },
    {
        "rowId": 877,
        "timestamp": 1715077082695,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 878,
        "timestamp": 1715077082695,
        "payload": "UE a393: MAC:    TX      291306890 RX       81995845 bytes"
    },
    {
        "rowId": 879,
        "timestamp": 1715077082695,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 880,
        "timestamp": 1715077082695,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 881,
        "timestamp": 1715077083975,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 882,
        "timestamp": 1715077083975,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 883,
        "timestamp": 1715077083975,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 884,
        "timestamp": 1715077083975,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 885,
        "timestamp": 1715077083975,
        "payload": "UE a393: dlsch_rounds 119303/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 886,
        "timestamp": 1715077083975,
        "payload": "UE a393: ulsch_rounds 58818/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 887,
        "timestamp": 1715077083975,
        "payload": "UE a393: MAC:    TX      291312736 RX       81998349 bytes"
    },
    {
        "rowId": 888,
        "timestamp": 1715077083975,
        "payload": "UE a393: LCID 1: TX          10197 RX          64445 bytes"
    },
    {
        "rowId": 889,
        "timestamp": 1715077083975,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 890,
        "timestamp": 1715077083975,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 891,
        "timestamp": 1715077083975,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 892,
        "timestamp": 1715077085254,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 893,
        "timestamp": 1715077085255,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 894,
        "timestamp": 1715077085255,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 895,
        "timestamp": 1715077085255,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 896,
        "timestamp": 1715077085255,
        "payload": "UE a393: dlsch_rounds 119317/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 897,
        "timestamp": 1715077085255,
        "payload": "UE a393: ulsch_rounds 58833/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 898,
        "timestamp": 1715077085255,
        "payload": "UE a393: MAC:    TX      291318582 RX       82001062 bytes"
    },
    {
        "rowId": 899,
        "timestamp": 1715077085255,
        "payload": "UE a393: LCID 1: TX          10200 RX          64467 bytes"
    },
    {
        "rowId": 900,
        "timestamp": 1715077085255,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 901,
        "timestamp": 1715077085255,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 902,
        "timestamp": 1715077085255,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 903,
        "timestamp": 1715077086534,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLUULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 904,
        "timestamp": 1715077086535,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -100 (32 meas)"
    },
    {
        "rowId": 905,
        "timestamp": 1715077086535,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 906,
        "timestamp": 1715077086535,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 907,
        "timestamp": 1715077086535,
        "payload": "UE a393: dlsch_rounds 119332/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 908,
        "timestamp": 1715077086535,
        "payload": "UE a393: ulsch_rounds 58849/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 909,
        "timestamp": 1715077086535,
        "payload": "UE a393: MAC:    TX      291324593 RX       82003658 bytes"
    },
    {
        "rowId": 910,
        "timestamp": 1715077086535,
        "payload": "UE a393: LCID 1: TX          10206 RX          64511 bytes"
    },
    {
        "rowId": 911,
        "timestamp": 1715077086535,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 912,
        "timestamp": 1715077086535,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 913,
        "timestamp": 1715077086535,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 914,
        "timestamp": 1715077087814,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 915,
        "timestamp": 1715077087814,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 916,
        "timestamp": 1715077087814,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 917,
        "timestamp": 1715077087814,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 918,
        "timestamp": 1715077087814,
        "payload": "UE a393: dlsch_rounds 119346/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 919,
        "timestamp": 1715077087815,
        "payload": "UE a393: ulsch_rounds 58864/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 920,
        "timestamp": 1715077087815,
        "payload": "UE a393: MAC:    TX      291330439 RX       82006355 bytes"
    },
    {
        "rowId": 921,
        "timestamp": 1715077087815,
        "payload": "UE a393: LCID 1: TX          10209 RX          64533 bytes"
    },
    {
        "rowId": 922,
        "timestamp": 1715077087815,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 923,
        "timestamp": 1715077087815,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 924,
        "timestamp": 1715077087815,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 925,
        "timestamp": 1715077089094,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 926,
        "timestamp": 1715077089094,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 927,
        "timestamp": 1715077089094,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 928,
        "timestamp": 1715077089094,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 929,
        "timestamp": 1715077089095,
        "payload": "UE a393: ulsch_rounds 58879/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 930,
        "timestamp": 1715077089095,
        "payload": "UE a393: MAC:    TX      291335848 RX       82009068 bytes"
    },
    {
        "rowId": 931,
        "timestamp": 1715077089095,
        "payload": "UE a393: LCID 1: TX          10212 RX          64555 bytes"
    },
    {
        "rowId": 932,
        "timestamp": 1715077089095,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 933,
        "timestamp": 1715077089095,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 934,
        "timestamp": 1715077089095,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 935,
        "timestamp": 1715077089095,
        "payload": "UE a393: dlsch_rounds 119359/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 936,
        "timestamp": 1715077090374,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 937,
        "timestamp": 1715077090374,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 44 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 938,
        "timestamp": 1715077090375,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 939,
        "timestamp": 1715077090375,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 940,
        "timestamp": 1715077090375,
        "payload": "UE a393: dlsch_rounds 119373/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 941,
        "timestamp": 1715077090375,
        "payload": "UE a393: ulsch_rounds 58893/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 942,
        "timestamp": 1715077090375,
        "payload": "UE a393: MAC:    TX      291341694 RX       82011556 bytes"
    },
    {
        "rowId": 943,
        "timestamp": 1715077090375,
        "payload": "UE a393: LCID 1: TX          10215 RX          64577 bytes"
    },
    {
        "rowId": 944,
        "timestamp": 1715077090375,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 945,
        "timestamp": 1715077090375,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 946,
        "timestamp": 1715077090375,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 947,
        "timestamp": 1715077091654,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 948,
        "timestamp": 1715077091655,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 44 dB PCMAX 22 dBm, average RSRP -98 (32 meas)"
    },
    {
        "rowId": 949,
        "timestamp": 1715077091655,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 950,
        "timestamp": 1715077091655,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 951,
        "timestamp": 1715077091655,
        "payload": "UE a393: dlsch_rounds 119388/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 952,
        "timestamp": 1715077091655,
        "payload": "UE a393: MAC:    TX      291347705 RX       82014361 bytes"
    },
    {
        "rowId": 953,
        "timestamp": 1715077091655,
        "payload": "UE a393: LCID 1: TX          10221 RX          64621 bytes"
    },
    {
        "rowId": 954,
        "timestamp": 1715077091655,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 955,
        "timestamp": 1715077091655,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 956,
        "timestamp": 1715077091655,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 957,
        "timestamp": 1715077091655,
        "payload": "UE a393: ulsch_rounds 58910/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 958,
        "timestamp": 1715077092934,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 959,
        "timestamp": 1715077092934,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -97 (32 meas)"
    },
    {
        "rowId": 960,
        "timestamp": 1715077092935,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 961,
        "timestamp": 1715077092935,
        "payload": "UE a393: ulsch_rounds 58924/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 962,
        "timestamp": 1715077092935,
        "payload": "UE a393: MAC:    TX      291353551 RX       82016865 bytes"
    },
    {
        "rowId": 963,
        "timestamp": 1715077092935,
        "payload": "UE a393: LCID 1: TX          10224 RX          64643 bytes"
    },
    {
        "rowId": 964,
        "timestamp": 1715077092935,
        "payload": "UE a393: dlsch_rounds 119402/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 965,
        "timestamp": 1715077092935,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 966,
        "timestamp": 1715077092935,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 967,
        "timestamp": 1715077092935,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 968,
        "timestamp": 1715077092935,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 969,
        "timestamp": 1715077094214,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -98 (32 meas)"
    },
    {
        "rowId": 970,
        "timestamp": 1715077094214,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 971,
        "timestamp": 1715077094214,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 972,
        "timestamp": 1715077094214,
        "payload": "UE a393: dlsch_rounds 119416/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 973,
        "timestamp": 1715077094214,
        "payload": "UE a393: ulsch_rounds 58939/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 974,
        "timestamp": 1715077094214,
        "payload": "UE a393: MAC:    TX      291359397 RX       82019562 bytes"
    },
    {
        "rowId": 975,
        "timestamp": 1715077094214,
        "payload": "UE a393: LCID 1: TX          10227 RX          64665 bytes"
    },
    {
        "rowId": 976,
        "timestamp": 1715077094214,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 977,
        "timestamp": 1715077094214,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 978,
        "timestamp": 1715077094214,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 979,
        "timestamp": 1715077094214,
        "payload": "UULLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 980,
        "timestamp": 1715077095494,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 981,
        "timestamp": 1715077095494,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -98 (32 meas)"
    },
    {
        "rowId": 982,
        "timestamp": 1715077095495,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 983,
        "timestamp": 1715077095495,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 984,
        "timestamp": 1715077095495,
        "payload": "UE a393: dlsch_rounds 119429/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 985,
        "timestamp": 1715077095495,
        "payload": "UE a393: ulsch_rounds 58953/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 986,
        "timestamp": 1715077095495,
        "payload": "UE a393: MAC:    TX      291364806 RX       82022082 bytes"
    },
    {
        "rowId": 987,
        "timestamp": 1715077095495,
        "payload": "UE a393: LCID 1: TX          10230 RX          64687 bytes"
    },
    {
        "rowId": 988,
        "timestamp": 1715077095495,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 989,
        "timestamp": 1715077095495,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 990,
        "timestamp": 1715077095495,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 991,
        "timestamp": 1715077096774,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 992,
        "timestamp": 1715077096774,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 993,
        "timestamp": 1715077096775,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 994,
        "timestamp": 1715077096775,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 995,
        "timestamp": 1715077096775,
        "payload": "UE a393: dlsch_rounds 119444/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 996,
        "timestamp": 1715077096775,
        "payload": "UE a393: ulsch_rounds 58970/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 997,
        "timestamp": 1715077096775,
        "payload": "UE a393: MAC:    TX      291370817 RX       82024871 bytes"
    },
    {
        "rowId": 998,
        "timestamp": 1715077096775,
        "payload": "UE a393: LCID 1: TX          10236 RX          64731 bytes"
    },
    {
        "rowId": 999,
        "timestamp": 1715077096775,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1000,
        "timestamp": 1715077096775,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 1001,
        "timestamp": 1715077096775,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1002,
        "timestamp": 1715077098054,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 1003,
        "timestamp": 1715077098055,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1004,
        "timestamp": 1715077098055,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1005,
        "timestamp": 1715077098055,
        "payload": "UE a393: dlsch_rounds 119458/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1006,
        "timestamp": 1715077098055,
        "payload": "UE a393: ulsch_rounds 58984/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1007,
        "timestamp": 1715077098055,
        "payload": "UE a393: MAC:    TX      291376663 RX       82027375 bytes"
    },
    {
        "rowId": 1008,
        "timestamp": 1715077098055,
        "payload": "UE a393: LCID 1: TX          10239 RX          64753 bytes"
    },
    {
        "rowId": 1009,
        "timestamp": 1715077098055,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1010,
        "timestamp": 1715077098055,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1011,
        "timestamp": 1715077098055,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 1012,
        "timestamp": 1715077098054,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1013,
        "timestamp": 1715077099334,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 1014,
        "timestamp": 1715077099334,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1015,
        "timestamp": 1715077099334,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1016,
        "timestamp": 1715077099334,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1017,
        "timestamp": 1715077099334,
        "payload": "UE a393: dlsch_rounds 119472/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1018,
        "timestamp": 1715077099334,
        "payload": "UE a393: ulsch_rounds 58999/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1019,
        "timestamp": 1715077099334,
        "payload": "UE a393: MAC:    TX      291382509 RX       82030088 bytes"
    },
    {
        "rowId": 1020,
        "timestamp": 1715077099334,
        "payload": "UE a393: LCID 1: TX          10242 RX          64775 bytes"
    },
    {
        "rowId": 1021,
        "timestamp": 1715077099334,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1022,
        "timestamp": 1715077099334,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 1023,
        "timestamp": 1715077099334,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1024,
        "timestamp": 1715077100615,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1025,
        "timestamp": 1715077100615,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1026,
        "timestamp": 1715077100615,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1027,
        "timestamp": 1715077100615,
        "payload": "UE a393: dlsch_rounds 119487/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1028,
        "timestamp": 1715077100615,
        "payload": "UE a393: ulsch_rounds 59015/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1029,
        "timestamp": 1715077100615,
        "payload": "UE a393: MAC:    TX      291388520 RX       82032831 bytes"
    },
    {
        "rowId": 1030,
        "timestamp": 1715077100615,
        "payload": "UE a393: LCID 1: TX          10248 RX          64819 bytes"
    },
    {
        "rowId": 1031,
        "timestamp": 1715077100615,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1032,
        "timestamp": 1715077100615,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 1033,
        "timestamp": 1715077100615,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1034,
        "timestamp": 1715077100614,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 1035,
        "timestamp": 1715077101894,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 1036,
        "timestamp": 1715077101895,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1037,
        "timestamp": 1715077101895,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1038,
        "timestamp": 1715077101895,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1039,
        "timestamp": 1715077101895,
        "payload": "UE a393: dlsch_rounds 119500/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1040,
        "timestamp": 1715077101895,
        "payload": "UE a393: ulsch_rounds 59030/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1041,
        "timestamp": 1715077101895,
        "payload": "UE a393: MAC:    TX      291393929 RX       82035381 bytes"
    },
    {
        "rowId": 1042,
        "timestamp": 1715077101895,
        "payload": "UE a393: LCID 1: TX          10251 RX          64841 bytes"
    },
    {
        "rowId": 1043,
        "timestamp": 1715077101895,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 1044,
        "timestamp": 1715077101895,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1045,
        "timestamp": 1715077101895,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1046,
        "timestamp": 1715077103174,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 1047,
        "timestamp": 1715077103175,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1048,
        "timestamp": 1715077103175,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1049,
        "timestamp": 1715077103175,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1050,
        "timestamp": 1715077103175,
        "payload": "UE a393: dlsch_rounds 119514/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1051,
        "timestamp": 1715077103175,
        "payload": "UE a393: ulsch_rounds 59045/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1052,
        "timestamp": 1715077103175,
        "payload": "UE a393: MAC:    TX      291399775 RX       82038094 bytes"
    },
    {
        "rowId": 1053,
        "timestamp": 1715077103175,
        "payload": "UE a393: LCID 1: TX          10254 RX          64863 bytes"
    },
    {
        "rowId": 1054,
        "timestamp": 1715077103175,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1055,
        "timestamp": 1715077103175,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 1056,
        "timestamp": 1715077103175,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1057,
        "timestamp": 1715077104454,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 1058,
        "timestamp": 1715077104455,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1059,
        "timestamp": 1715077104455,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1060,
        "timestamp": 1715077104455,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1061,
        "timestamp": 1715077104455,
        "payload": "UE a393: dlsch_rounds 119528/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1062,
        "timestamp": 1715077104455,
        "payload": "UE a393: ulsch_rounds 59059/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1063,
        "timestamp": 1715077104455,
        "payload": "UE a393: MAC:    TX      291405621 RX       82040582 bytes"
    },
    {
        "rowId": 1064,
        "timestamp": 1715077104455,
        "payload": "UE a393: LCID 1: TX          10257 RX          64885 bytes"
    },
    {
        "rowId": 1065,
        "timestamp": 1715077104455,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1066,
        "timestamp": 1715077104455,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 1067,
        "timestamp": 1715077104455,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1068,
        "timestamp": 1715077105734,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 1069,
        "timestamp": 1715077105734,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 44 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1070,
        "timestamp": 1715077105734,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1071,
        "timestamp": 1715077105734,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1072,
        "timestamp": 1715077105735,
        "payload": "UE a393: dlsch_rounds 119543/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1073,
        "timestamp": 1715077105735,
        "payload": "UE a393: ulsch_rounds 59076/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1074,
        "timestamp": 1715077105735,
        "payload": "UE a393: MAC:    TX      291411632 RX       82043387 bytes"
    },
    {
        "rowId": 1075,
        "timestamp": 1715077105735,
        "payload": "UE a393: LCID 1: TX          10263 RX          64929 bytes"
    },
    {
        "rowId": 1076,
        "timestamp": 1715077105735,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1077,
        "timestamp": 1715077105735,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 1078,
        "timestamp": 1715077105735,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1079,
        "timestamp": 1715077107014,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 1080,
        "timestamp": 1715077107014,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1081,
        "timestamp": 1715077107014,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1082,
        "timestamp": 1715077107015,
        "payload": "UE a393: dlsch_rounds 119557/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1083,
        "timestamp": 1715077107015,
        "payload": "UE a393: ulsch_rounds 59090/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1084,
        "timestamp": 1715077107015,
        "payload": "UE a393: MAC:    TX      291417478 RX       82045891 bytes"
    },
    {
        "rowId": 1085,
        "timestamp": 1715077107015,
        "payload": "UE a393: LCID 1: TX          10266 RX          64951 bytes"
    },
    {
        "rowId": 1086,
        "timestamp": 1715077107015,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1087,
        "timestamp": 1715077107015,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 1088,
        "timestamp": 1715077107015,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1089,
        "timestamp": 1715077107015,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1090,
        "timestamp": 1715077108294,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 1091,
        "timestamp": 1715077108294,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 50 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1092,
        "timestamp": 1715077108294,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1093,
        "timestamp": 1715077108294,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1094,
        "timestamp": 1715077108294,
        "payload": "UE a393: dlsch_rounds 119570/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1095,
        "timestamp": 1715077108294,
        "payload": "UE a393: ulsch_rounds 59105/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1096,
        "timestamp": 1715077108294,
        "payload": "UE a393: MAC:    TX      291422887 RX       82048588 bytes"
    },
    {
        "rowId": 1097,
        "timestamp": 1715077108295,
        "payload": "UE a393: LCID 1: TX          10269 RX          64973 bytes"
    },
    {
        "rowId": 1098,
        "timestamp": 1715077108295,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1099,
        "timestamp": 1715077108295,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 1100,
        "timestamp": 1715077108295,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1101,
        "timestamp": 1715077109574,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 1102,
        "timestamp": 1715077109575,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1103,
        "timestamp": 1715077109575,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1104,
        "timestamp": 1715077109575,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1105,
        "timestamp": 1715077109575,
        "payload": "UE a393: dlsch_rounds 119584/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1106,
        "timestamp": 1715077109575,
        "payload": "UE a393: ulsch_rounds 59119/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1107,
        "timestamp": 1715077109575,
        "payload": "UE a393: MAC:    TX      291428733 RX       82051108 bytes"
    },
    {
        "rowId": 1108,
        "timestamp": 1715077109575,
        "payload": "UE a393: LCID 1: TX          10272 RX          64995 bytes"
    },
    {
        "rowId": 1109,
        "timestamp": 1715077109575,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1110,
        "timestamp": 1715077109575,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 1111,
        "timestamp": 1715077109575,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1112,
        "timestamp": 1715077110854,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 1113,
        "timestamp": 1715077110855,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 44 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1114,
        "timestamp": 1715077110855,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1115,
        "timestamp": 1715077110855,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1116,
        "timestamp": 1715077110855,
        "payload": "UE a393: dlsch_rounds 119599/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1117,
        "timestamp": 1715077110855,
        "payload": "UE a393: ulsch_rounds 59136/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1118,
        "timestamp": 1715077110855,
        "payload": "UE a393: MAC:    TX      291434744 RX       82053897 bytes"
    },
    {
        "rowId": 1119,
        "timestamp": 1715077110855,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1120,
        "timestamp": 1715077110855,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 1121,
        "timestamp": 1715077110855,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1122,
        "timestamp": 1715077110855,
        "payload": "UE a393: LCID 1: TX          10278 RX          65039 bytes"
    },
    {
        "rowId": 1123,
        "timestamp": 1715077112134,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 1124,
        "timestamp": 1715077112134,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1125,
        "timestamp": 1715077112134,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1126,
        "timestamp": 1715077112134,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1127,
        "timestamp": 1715077112134,
        "payload": "UE a393: dlsch_rounds 119613/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1128,
        "timestamp": 1715077112135,
        "payload": "UE a393: ulsch_rounds 59150/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1129,
        "timestamp": 1715077112135,
        "payload": "UE a393: MAC:    TX      291440590 RX       82056401 bytes"
    },
    {
        "rowId": 1130,
        "timestamp": 1715077112135,
        "payload": "UE a393: LCID 1: TX          10281 RX          65061 bytes"
    },
    {
        "rowId": 1131,
        "timestamp": 1715077112135,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1132,
        "timestamp": 1715077112135,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 1133,
        "timestamp": 1715077112135,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1134,
        "timestamp": 1715077113414,
        "payload": "UULLLLLLLLLLLLLLLLUULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 1135,
        "timestamp": 1715077113415,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1136,
        "timestamp": 1715077113415,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1137,
        "timestamp": 1715077113415,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1138,
        "timestamp": 1715077113415,
        "payload": "UE a393: dlsch_rounds 119627/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1139,
        "timestamp": 1715077113415,
        "payload": "UE a393: ulsch_rounds 59165/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1140,
        "timestamp": 1715077113415,
        "payload": "UE a393: MAC:    TX      291446436 RX       82059114 bytes"
    },
    {
        "rowId": 1141,
        "timestamp": 1715077113415,
        "payload": "UE a393: LCID 1: TX          10284 RX          65083 bytes"
    },
    {
        "rowId": 1142,
        "timestamp": 1715077113415,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1143,
        "timestamp": 1715077113415,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 1144,
        "timestamp": 1715077113415,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1145,
        "timestamp": 1715077114694,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 1146,
        "timestamp": 1715077114695,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1147,
        "timestamp": 1715077114695,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1148,
        "timestamp": 1715077114695,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1149,
        "timestamp": 1715077114695,
        "payload": "UE a393: dlsch_rounds 119640/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1150,
        "timestamp": 1715077114695,
        "payload": "UE a393: ulsch_rounds 59180/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1151,
        "timestamp": 1715077114695,
        "payload": "UE a393: MAC:    TX      291451845 RX       82061811 bytes"
    },
    {
        "rowId": 1152,
        "timestamp": 1715077114695,
        "payload": "UE a393: LCID 1: TX          10287 RX          65105 bytes"
    },
    {
        "rowId": 1153,
        "timestamp": 1715077114695,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1154,
        "timestamp": 1715077114695,
        "payload": "UE a393: LCID 4: TX      267193428 RX       75585349 bytes"
    },
    {
        "rowId": 1155,
        "timestamp": 1715077114695,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1156,
        "timestamp": 1715077115975,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 44 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1157,
        "timestamp": 1715077115975,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1158,
        "timestamp": 1715077115975,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1159,
        "timestamp": 1715077115975,
        "payload": "UE a393: dlsch_rounds 119676/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1160,
        "timestamp": 1715077115975,
        "payload": "UE a393: ulsch_rounds 59210/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1161,
        "timestamp": 1715077115975,
        "payload": "UE a393: MAC:    TX      291475450 RX       82066830 bytes"
    },
    {
        "rowId": 1162,
        "timestamp": 1715077115975,
        "payload": "UE a393: LCID 1: TX          10293 RX          65149 bytes"
    },
    {
        "rowId": 1163,
        "timestamp": 1715077115975,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1164,
        "timestamp": 1715077115975,
        "payload": "UE a393: LCID 4: TX      267206636 RX       75588054 bytes"
    },
    {
        "rowId": 1165,
        "timestamp": 1715077115975,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1166,
        "timestamp": 1715077115974,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 1167,
        "timestamp": 1715077117254,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 1168,
        "timestamp": 1715077117254,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 44 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1169,
        "timestamp": 1715077117254,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1170,
        "timestamp": 1715077117254,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1171,
        "timestamp": 1715077117254,
        "payload": "UE a393: dlsch_rounds 119695/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1172,
        "timestamp": 1715077117255,
        "payload": "UE a393: ulsch_rounds 59230/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1173,
        "timestamp": 1715077117255,
        "payload": "UE a393: MAC:    TX      291482765 RX       82069528 bytes"
    },
    {
        "rowId": 1174,
        "timestamp": 1715077117255,
        "payload": "UE a393: LCID 1: TX          10296 RX          65171 bytes"
    },
    {
        "rowId": 1175,
        "timestamp": 1715077117255,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1176,
        "timestamp": 1715077117255,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1177,
        "timestamp": 1715077117255,
        "payload": "UE a393: LCID 4: TX      267206968 RX       75588256 bytes"
    },
    {
        "rowId": 1178,
        "timestamp": 1715077118535,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1179,
        "timestamp": 1715077118535,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1180,
        "timestamp": 1715077118535,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1181,
        "timestamp": 1715077118535,
        "payload": "UE a393: dlsch_rounds 119709/7372/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1182,
        "timestamp": 1715077118535,
        "payload": "UE a393: ulsch_rounds 59244/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1183,
        "timestamp": 1715077118535,
        "payload": "UE a393: MAC:    TX      291488611 RX       82072080 bytes"
    },
    {
        "rowId": 1184,
        "timestamp": 1715077118535,
        "payload": "UE a393: LCID 1: TX          10299 RX          65193 bytes"
    },
    {
        "rowId": 1185,
        "timestamp": 1715077118534,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 1186,
        "timestamp": 1715077118535,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1187,
        "timestamp": 1715077118535,
        "payload": "UE a393: LCID 4: TX      267206968 RX       75588256 bytes"
    },
    {
        "rowId": 1188,
        "timestamp": 1715077118535,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1189,
        "timestamp": 1715077119814,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1190,
        "timestamp": 1715077119815,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1191,
        "timestamp": 1715077119815,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1192,
        "timestamp": 1715077119815,
        "payload": "UE a393: dlsch_rounds 119723/7374/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.04305 MCS (1) 9"
    },
    {
        "rowId": 1193,
        "timestamp": 1715077119815,
        "payload": "UE a393: ulsch_rounds 59259/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1194,
        "timestamp": 1715077119815,
        "payload": "UE a393: MAC:    TX      291494457 RX       82074793 bytes"
    },
    {
        "rowId": 1195,
        "timestamp": 1715077119815,
        "payload": "UE a393: LCID 1: TX          10302 RX          65215 bytes"
    },
    {
        "rowId": 1196,
        "timestamp": 1715077119815,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1197,
        "timestamp": 1715077119815,
        "payload": "UE a393: LCID 4: TX      267206968 RX       75588256 bytes"
    },
    {
        "rowId": 1198,
        "timestamp": 1715077119815,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1199,
        "timestamp": 1715077119814,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 1200,
        "timestamp": 1715077121094,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 1201,
        "timestamp": 1715077121095,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 44 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1202,
        "timestamp": 1715077121095,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1203,
        "timestamp": 1715077121095,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1204,
        "timestamp": 1715077121095,
        "payload": "UE a393: dlsch_rounds 119737/7374/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.01216 MCS (1) 9"
    },
    {
        "rowId": 1205,
        "timestamp": 1715077121095,
        "payload": "UE a393: ulsch_rounds 59275/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1206,
        "timestamp": 1715077121095,
        "payload": "UE a393: MAC:    TX      291500031 RX       82077389 bytes"
    },
    {
        "rowId": 1207,
        "timestamp": 1715077121095,
        "payload": "UE a393: LCID 1: TX          10308 RX          65259 bytes"
    },
    {
        "rowId": 1208,
        "timestamp": 1715077121095,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1209,
        "timestamp": 1715077121095,
        "payload": "UE a393: LCID 4: TX      267206968 RX       75588256 bytes"
    },
    {
        "rowId": 1210,
        "timestamp": 1715077121095,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1211,
        "timestamp": 1715077122374,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 1212,
        "timestamp": 1715077122374,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1213,
        "timestamp": 1715077122375,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1214,
        "timestamp": 1715077122375,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1215,
        "timestamp": 1715077122375,
        "payload": "UE a393: dlsch_rounds 119751/7374/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00309 MCS (1) 9"
    },
    {
        "rowId": 1216,
        "timestamp": 1715077122375,
        "payload": "UE a393: ulsch_rounds 59290/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1217,
        "timestamp": 1715077122375,
        "payload": "UE a393: MAC:    TX      291505877 RX       82080086 bytes"
    },
    {
        "rowId": 1218,
        "timestamp": 1715077122375,
        "payload": "UE a393: LCID 1: TX          10311 RX          65281 bytes"
    },
    {
        "rowId": 1219,
        "timestamp": 1715077122375,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1220,
        "timestamp": 1715077122375,
        "payload": "UE a393: LCID 4: TX      267206968 RX       75588256 bytes"
    },
    {
        "rowId": 1221,
        "timestamp": 1715077122375,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1222,
        "timestamp": 1715077123655,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1223,
        "timestamp": 1715077123655,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1224,
        "timestamp": 1715077123654,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 1225,
        "timestamp": 1715077123655,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1226,
        "timestamp": 1715077123655,
        "payload": "UE a393: dlsch_rounds 119765/7374/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00079 MCS (1) 9"
    },
    {
        "rowId": 1227,
        "timestamp": 1715077123655,
        "payload": "UE a393: ulsch_rounds 59304/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1228,
        "timestamp": 1715077123655,
        "payload": "UE a393: MAC:    TX      291511723 RX       82082606 bytes"
    },
    {
        "rowId": 1229,
        "timestamp": 1715077123655,
        "payload": "UE a393: LCID 1: TX          10314 RX          65303 bytes"
    },
    {
        "rowId": 1230,
        "timestamp": 1715077123655,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1231,
        "timestamp": 1715077123655,
        "payload": "UE a393: LCID 4: TX      267206968 RX       75588256 bytes"
    },
    {
        "rowId": 1232,
        "timestamp": 1715077123655,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1233,
        "timestamp": 1715077124934,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 1234,
        "timestamp": 1715077124935,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1235,
        "timestamp": 1715077124935,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1236,
        "timestamp": 1715077124935,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1237,
        "timestamp": 1715077124935,
        "payload": "UE a393: dlsch_rounds 119779/7374/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00020 MCS (1) 9"
    },
    {
        "rowId": 1238,
        "timestamp": 1715077124935,
        "payload": "UE a393: ulsch_rounds 59319/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1239,
        "timestamp": 1715077124935,
        "payload": "UE a393: MAC:    TX      291517569 RX       82085303 bytes"
    },
    {
        "rowId": 1240,
        "timestamp": 1715077124935,
        "payload": "UE a393: LCID 1: TX          10317 RX          65325 bytes"
    },
    {
        "rowId": 1241,
        "timestamp": 1715077124935,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1242,
        "timestamp": 1715077124935,
        "payload": "UE a393: LCID 4: TX      267206968 RX       75588256 bytes"
    },
    {
        "rowId": 1243,
        "timestamp": 1715077124935,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1244,
        "timestamp": 1715077126214,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 1245,
        "timestamp": 1715077126215,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 44 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1246,
        "timestamp": 1715077126215,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1247,
        "timestamp": 1715077126215,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1248,
        "timestamp": 1715077126215,
        "payload": "UE a393: dlsch_rounds 119799/7374/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00005 MCS (1) 9"
    },
    {
        "rowId": 1249,
        "timestamp": 1715077126215,
        "payload": "UE a393: ulsch_rounds 59337/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1250,
        "timestamp": 1715077126215,
        "payload": "UE a393: MAC:    TX      291524981 RX       82087991 bytes"
    },
    {
        "rowId": 1251,
        "timestamp": 1715077126215,
        "payload": "UE a393: LCID 1: TX          10323 RX          65369 bytes"
    },
    {
        "rowId": 1252,
        "timestamp": 1715077126215,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1253,
        "timestamp": 1715077126215,
        "payload": "UE a393: LCID 4: TX      267207242 RX       75588533 bytes"
    },
    {
        "rowId": 1254,
        "timestamp": 1715077126215,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1255,
        "timestamp": 1715077127494,
        "payload": "ULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 1256,
        "timestamp": 1715077127495,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1257,
        "timestamp": 1715077127495,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1258,
        "timestamp": 1715077127495,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1259,
        "timestamp": 1715077127495,
        "payload": "UE a393: dlsch_rounds 119812/7374/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00001 MCS (1) 9"
    },
    {
        "rowId": 1260,
        "timestamp": 1715077127495,
        "payload": "UE a393: ulsch_rounds 59352/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1261,
        "timestamp": 1715077127495,
        "payload": "UE a393: MAC:    TX      291530390 RX       82090704 bytes"
    },
    {
        "rowId": 1262,
        "timestamp": 1715077127495,
        "payload": "UE a393: LCID 1: TX          10326 RX          65391 bytes"
    },
    {
        "rowId": 1263,
        "timestamp": 1715077127495,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1264,
        "timestamp": 1715077127495,
        "payload": "UE a393: LCID 4: TX      267207242 RX       75588533 bytes"
    },
    {
        "rowId": 1265,
        "timestamp": 1715077137735,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1266,
        "timestamp": 1715077137734,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 1267,
        "timestamp": 1715077137735,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1268,
        "timestamp": 1715077137735,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1269,
        "timestamp": 1715077137735,
        "payload": "UE a393: dlsch_rounds 119925/7374/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1270,
        "timestamp": 1715077137735,
        "payload": "UE a393: ulsch_rounds 59472/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1271,
        "timestamp": 1715077137735,
        "payload": "UE a393: MAC:    TX      291577051 RX       82111724 bytes"
    },
    {
        "rowId": 1272,
        "timestamp": 1715077137735,
        "payload": "UE a393: LCID 1: TX          10356 RX          65611 bytes"
    },
    {
        "rowId": 1273,
        "timestamp": 1715077137735,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1274,
        "timestamp": 1715077137735,
        "payload": "UE a393: LCID 4: TX      267207242 RX       75588533 bytes"
    },
    {
        "rowId": 1275,
        "timestamp": 1715077137735,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1276,
        "timestamp": 1715077139014,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 1277,
        "timestamp": 1715077139014,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1278,
        "timestamp": 1715077139014,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1279,
        "timestamp": 1715077139015,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1280,
        "timestamp": 1715077139015,
        "payload": "UE a393: dlsch_rounds 119939/7374/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1281,
        "timestamp": 1715077139015,
        "payload": "UE a393: ulsch_rounds 59487/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1282,
        "timestamp": 1715077139015,
        "payload": "UE a393: MAC:    TX      291582897 RX       82114421 bytes"
    },
    {
        "rowId": 1283,
        "timestamp": 1715077139015,
        "payload": "UE a393: LCID 1: TX          10359 RX          65633 bytes"
    },
    {
        "rowId": 1284,
        "timestamp": 1715077139015,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1285,
        "timestamp": 1715077139015,
        "payload": "UE a393: LCID 4: TX      267207242 RX       75588533 bytes"
    },
    {
        "rowId": 1286,
        "timestamp": 1715077139015,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1287,
        "timestamp": 1715077140294,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 1288,
        "timestamp": 1715077140294,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1289,
        "timestamp": 1715077140294,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1290,
        "timestamp": 1715077140294,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1291,
        "timestamp": 1715077140294,
        "payload": "UE a393: dlsch_rounds 119952/7374/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1292,
        "timestamp": 1715077140294,
        "payload": "UE a393: ulsch_rounds 59502/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1293,
        "timestamp": 1715077140294,
        "payload": "UE a393: MAC:    TX      291588306 RX       82117134 bytes"
    },
    {
        "rowId": 1294,
        "timestamp": 1715077140294,
        "payload": "UE a393: LCID 1: TX          10362 RX          65655 bytes"
    },
    {
        "rowId": 1295,
        "timestamp": 1715077140294,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1296,
        "timestamp": 1715077140295,
        "payload": "UE a393: LCID 4: TX      267207242 RX       75588533 bytes"
    },
    {
        "rowId": 1297,
        "timestamp": 1715077140295,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1298,
        "timestamp": 1715077141574,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 1299,
        "timestamp": 1715077141574,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1300,
        "timestamp": 1715077141574,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1301,
        "timestamp": 1715077141574,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1302,
        "timestamp": 1715077141574,
        "payload": "UE a393: dlsch_rounds 119967/7374/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1303,
        "timestamp": 1715077141574,
        "payload": "UE a393: ulsch_rounds 59518/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1304,
        "timestamp": 1715077141574,
        "payload": "UE a393: MAC:    TX      291594317 RX       82119730 bytes"
    },
    {
        "rowId": 1305,
        "timestamp": 1715077141574,
        "payload": "UE a393: LCID 1: TX          10368 RX          65699 bytes"
    },
    {
        "rowId": 1306,
        "timestamp": 1715077141574,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1307,
        "timestamp": 1715077141574,
        "payload": "UE a393: LCID 4: TX      267207242 RX       75588533 bytes"
    },
    {
        "rowId": 1308,
        "timestamp": 1715077141574,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1309,
        "timestamp": 1715077142854,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 1310,
        "timestamp": 1715077142854,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1311,
        "timestamp": 1715077142854,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1312,
        "timestamp": 1715077142854,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1313,
        "timestamp": 1715077142854,
        "payload": "UE a393: dlsch_rounds 119981/7374/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1314,
        "timestamp": 1715077142854,
        "payload": "UE a393: ulsch_rounds 59533/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1315,
        "timestamp": 1715077142855,
        "payload": "UE a393: MAC:    TX      291600163 RX       82122427 bytes"
    },
    {
        "rowId": 1316,
        "timestamp": 1715077142855,
        "payload": "UE a393: LCID 1: TX          10371 RX          65721 bytes"
    },
    {
        "rowId": 1317,
        "timestamp": 1715077142855,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1318,
        "timestamp": 1715077142855,
        "payload": "UE a393: LCID 4: TX      267207242 RX       75588533 bytes"
    },
    {
        "rowId": 1319,
        "timestamp": 1715077142855,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1320,
        "timestamp": 1715077144134,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 1321,
        "timestamp": 1715077144134,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1322,
        "timestamp": 1715077144134,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1323,
        "timestamp": 1715077144134,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1324,
        "timestamp": 1715077144134,
        "payload": "UE a393: dlsch_rounds 119995/7374/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1325,
        "timestamp": 1715077144134,
        "payload": "UE a393: LCID 1: TX          10374 RX          65743 bytes"
    },
    {
        "rowId": 1326,
        "timestamp": 1715077144134,
        "payload": "UE a393: MAC:    TX      291606009 RX       82124931 bytes"
    },
    {
        "rowId": 1327,
        "timestamp": 1715077144134,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1328,
        "timestamp": 1715077144134,
        "payload": "UE a393: LCID 4: TX      267207242 RX       75588533 bytes"
    },
    {
        "rowId": 1329,
        "timestamp": 1715077144134,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1330,
        "timestamp": 1715077144134,
        "payload": "UE a393: ulsch_rounds 59547/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1331,
        "timestamp": 1715077145414,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 1332,
        "timestamp": 1715077145414,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 48 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1333,
        "timestamp": 1715077145414,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1334,
        "timestamp": 1715077145414,
        "payload": "UE a393: dlsch_rounds 120009/7374/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1335,
        "timestamp": 1715077145414,
        "payload": "UE a393: ulsch_rounds 59562/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1336,
        "timestamp": 1715077145414,
        "payload": "UE a393: MAC:    TX      291611855 RX       82127628 bytes"
    },
    {
        "rowId": 1337,
        "timestamp": 1715077145414,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1338,
        "timestamp": 1715077145414,
        "payload": "UE a393: LCID 1: TX          10377 RX          65765 bytes"
    },
    {
        "rowId": 1339,
        "timestamp": 1715077145415,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1340,
        "timestamp": 1715077145415,
        "payload": "UE a393: LCID 4: TX      267207242 RX       75588533 bytes"
    },
    {
        "rowId": 1341,
        "timestamp": 1715077145415,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1342,
        "timestamp": 1715077195334,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 1343,
        "timestamp": 1715077195334,
        "payload": "UE RNTI a393 CU-UE-ID 1 in-sync PH 46 dB PCMAX 22 dBm, average RSRP -99 (32 meas)"
    },
    {
        "rowId": 1344,
        "timestamp": 1715077195334,
        "payload": "UE a393: CQI 10, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1345,
        "timestamp": 1715077195334,
        "payload": "UE a393: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1346,
        "timestamp": 1715077195335,
        "payload": "UE a393: ulsch_rounds 60149/1505/115/20, ulsch_errors 1, ulsch_DTX 15, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1347,
        "timestamp": 1715077195334,
        "payload": "UE a393: dlsch_rounds 120557/7374/91/8, dlsch_errors 5, pucch0_DTX 42, BLER 0.00000 MCS (1) 9"
    },
    {
        "rowId": 1348,
        "timestamp": 1715077195335,
        "payload": "UE a393: MAC:    TX      291838003 RX       82230433 bytes"
    },
    {
        "rowId": 1349,
        "timestamp": 1715077195335,
        "payload": "UE a393: LCID 2: TX            399 RX            285 bytes"
    },
    {
        "rowId": 1350,
        "timestamp": 1715077195335,
        "payload": "UE a393: LCID 1: TX          10524 RX          66843 bytes"
    },
    {
        "rowId": 1351,
        "timestamp": 1715077195335,
        "payload": "UE a393: LCID 4: TX      267207242 RX       75588533 bytes"
    },
    {
        "rowId": 1352,
        "timestamp": 1715077195335,
        "payload": "UE a393: LCID 5: TX           1218 RX           2635 bytes"
    },
    {
        "rowId": 1353,
        "timestamp": 1720605854656,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 1354,
        "timestamp": 1720605854656,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1355,
        "timestamp": 1720605854656,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1356,
        "timestamp": 1720605854656,
        "payload": "UE 1a29: dlsch_rounds 1614018/157154/3787/312, dlsch_errors 69, pucch0_DTX 1237, BLER 0.15107 MCS (1) 7"
    },
    {
        "rowId": 1357,
        "timestamp": 1720605854656,
        "payload": "UE 1a29: ulsch_rounds 199141/1231/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00156 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.0 dB"
    },
    {
        "rowId": 1358,
        "timestamp": 1720605854656,
        "payload": "UE 1a29: LCID 1: TX          11922 RX          85738 bytes"
    },
    {
        "rowId": 1359,
        "timestamp": 1720605854656,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1360,
        "timestamp": 1720605854656,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1361,
        "timestamp": 1720605854656,
        "payload": "UE 1a29: MAC:    TX     4747125104 RX       42394124 bytes"
    },
    {
        "rowId": 1362,
        "timestamp": 1720605854656,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1363,
        "timestamp": 1720605854656,
        "payload": "UE 1a29: LCID 4: TX     4601529293 RX       11238182 bytes"
    },
    {
        "rowId": 1364,
        "timestamp": 1720605855936,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 1365,
        "timestamp": 1720605855936,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1366,
        "timestamp": 1720605855936,
        "payload": "UE 1a29: LCID 1: TX          11925 RX          85760 bytes"
    },
    {
        "rowId": 1367,
        "timestamp": 1720605855936,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1368,
        "timestamp": 1720605855936,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1369,
        "timestamp": 1720605855936,
        "payload": "UE 1a29: LCID 4: TX     4603080058 RX       11244240 bytes"
    },
    {
        "rowId": 1370,
        "timestamp": 1720605855936,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1371,
        "timestamp": 1720605855936,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1372,
        "timestamp": 1720605855936,
        "payload": "UE 1a29: dlsch_rounds 1614560/157199/3787/312, dlsch_errors 69, pucch0_DTX 1237, BLER 0.10452 MCS (1) 7"
    },
    {
        "rowId": 1373,
        "timestamp": 1720605855936,
        "payload": "UE 1a29: ulsch_rounds 199220/1232/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00538 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 1374,
        "timestamp": 1720605855936,
        "payload": "UE 1a29: MAC:    TX     4748718968 RX       42413141 bytes"
    },
    {
        "rowId": 1375,
        "timestamp": 1720605857216,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 1376,
        "timestamp": 1720605857216,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1377,
        "timestamp": 1720605857216,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1378,
        "timestamp": 1720605857216,
        "payload": "UE 1a29: dlsch_rounds 1615136/157324/3790/312, dlsch_errors 69, pucch0_DTX 1237, BLER 0.18039 MCS (1) 6"
    },
    {
        "rowId": 1379,
        "timestamp": 1720605857216,
        "payload": "UE 1a29: MAC:    TX     4750517430 RX       42428650 bytes"
    },
    {
        "rowId": 1380,
        "timestamp": 1720605857216,
        "payload": "UE 1a29: LCID 1: TX          11928 RX          85782 bytes"
    },
    {
        "rowId": 1381,
        "timestamp": 1720605857216,
        "payload": "UE 1a29: ulsch_rounds 199291/1233/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.01819 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 1382,
        "timestamp": 1720605857216,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1383,
        "timestamp": 1720605857216,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1384,
        "timestamp": 1720605857216,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1385,
        "timestamp": 1720605857216,
        "payload": "UE 1a29: LCID 4: TX     4604835600 RX       11248870 bytes"
    },
    {
        "rowId": 1386,
        "timestamp": 1720605858496,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1387,
        "timestamp": 1720605858496,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1388,
        "timestamp": 1720605858496,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 1389,
        "timestamp": 1720605858496,
        "payload": "UE 1a29: MAC:    TX     4751855069 RX       42443023 bytes"
    },
    {
        "rowId": 1390,
        "timestamp": 1720605858496,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1391,
        "timestamp": 1720605858496,
        "payload": "UE 1a29: LCID 4: TX     4606132625 RX       11252402 bytes"
    },
    {
        "rowId": 1392,
        "timestamp": 1720605858496,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1393,
        "timestamp": 1720605858496,
        "payload": "UE 1a29: LCID 1: TX          11934 RX          85826 bytes"
    },
    {
        "rowId": 1394,
        "timestamp": 1720605858496,
        "payload": "UE 1a29: ulsch_rounds 199360/1233/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00462 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 1395,
        "timestamp": 1720605858496,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1396,
        "timestamp": 1720605858496,
        "payload": "UE 1a29: dlsch_rounds 1615624/157359/3790/312, dlsch_errors 69, pucch0_DTX 1237, BLER 0.08041 MCS (1) 6"
    },
    {
        "rowId": 1397,
        "timestamp": 1720605859776,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1398,
        "timestamp": 1720605859776,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1399,
        "timestamp": 1720605859776,
        "payload": "UE 1a29: ulsch_rounds 199431/1233/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00131 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 1400,
        "timestamp": 1720605859776,
        "payload": "UE 1a29: LCID 4: TX     4607493932 RX       11255712 bytes"
    },
    {
        "rowId": 1401,
        "timestamp": 1720605859776,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1402,
        "timestamp": 1720605859776,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1403,
        "timestamp": 1720605859776,
        "payload": "UE 1a29: dlsch_rounds 1616119/157420/3792/312, dlsch_errors 69, pucch0_DTX 1237, BLER 0.11849 MCS (1) 6"
    },
    {
        "rowId": 1404,
        "timestamp": 1720605859776,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 1405,
        "timestamp": 1720605859776,
        "payload": "UE 1a29: LCID 1: TX          11937 RX          85848 bytes"
    },
    {
        "rowId": 1406,
        "timestamp": 1720605859776,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1407,
        "timestamp": 1720605859776,
        "payload": "UE 1a29: MAC:    TX     4753254445 RX       42458165 bytes"
    },
    {
        "rowId": 1408,
        "timestamp": 1720605861056,
        "payload": "ULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 1409,
        "timestamp": 1720605861056,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1410,
        "timestamp": 1720605861056,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1411,
        "timestamp": 1720605861056,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1412,
        "timestamp": 1720605861056,
        "payload": "UE 1a29: dlsch_rounds 1616647/157515/3796/312, dlsch_errors 69, pucch0_DTX 1237, BLER 0.15958 MCS (1) 6"
    },
    {
        "rowId": 1413,
        "timestamp": 1720605861056,
        "payload": "UE 1a29: ulsch_rounds 199504/1233/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00033 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 1414,
        "timestamp": 1720605861056,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1415,
        "timestamp": 1720605861056,
        "payload": "UE 1a29: LCID 1: TX          11940 RX          85870 bytes"
    },
    {
        "rowId": 1416,
        "timestamp": 1720605861056,
        "payload": "UE 1a29: MAC:    TX     4754830808 RX       42473677 bytes"
    },
    {
        "rowId": 1417,
        "timestamp": 1720605861056,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1418,
        "timestamp": 1720605861056,
        "payload": "UE 1a29: LCID 4: TX     4609031549 RX       11259333 bytes"
    },
    {
        "rowId": 1419,
        "timestamp": 1720605862336,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 1420,
        "timestamp": 1720605862336,
        "payload": "UE 1a29: dlsch_rounds 1617232/157568/3796/312, dlsch_errors 69, pucch0_DTX 1237, BLER 0.12771 MCS (1) 6"
    },
    {
        "rowId": 1421,
        "timestamp": 1720605862336,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1422,
        "timestamp": 1720605862336,
        "payload": "UE 1a29: MAC:    TX     4756661811 RX       42487777 bytes"
    },
    {
        "rowId": 1423,
        "timestamp": 1720605862336,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1424,
        "timestamp": 1720605862336,
        "payload": "UE 1a29: ulsch_rounds 199572/1233/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00008 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 1425,
        "timestamp": 1720605862336,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1426,
        "timestamp": 1720605862336,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1427,
        "timestamp": 1720605862336,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 1428,
        "timestamp": 1720605862336,
        "payload": "UE 1a29: LCID 4: TX     4610818722 RX       11262894 bytes"
    },
    {
        "rowId": 1429,
        "timestamp": 1720605862336,
        "payload": "UE 1a29: LCID 1: TX          11943 RX          85892 bytes"
    },
    {
        "rowId": 1430,
        "timestamp": 1720605863616,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1431,
        "timestamp": 1720605863616,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 1432,
        "timestamp": 1720605863616,
        "payload": "UE 1a29: ulsch_rounds 199644/1234/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.01096 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 1433,
        "timestamp": 1720605863616,
        "payload": "UE 1a29: MAC:    TX     4758035317 RX       42503192 bytes"
    },
    {
        "rowId": 1434,
        "timestamp": 1720605863616,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1435,
        "timestamp": 1720605863616,
        "payload": "UE 1a29: dlsch_rounds 1617725/157605/3798/312, dlsch_errors 69, pucch0_DTX 1237, BLER 0.09118 MCS (1) 6"
    },
    {
        "rowId": 1436,
        "timestamp": 1720605863616,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1437,
        "timestamp": 1720605863616,
        "payload": "UE 1a29: LCID 1: TX          11949 RX          85936 bytes"
    },
    {
        "rowId": 1438,
        "timestamp": 1720605863616,
        "payload": "UE 1a29: LCID 4: TX     4612153493 RX       11266343 bytes"
    },
    {
        "rowId": 1439,
        "timestamp": 1720605863616,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1440,
        "timestamp": 1720605863616,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1441,
        "timestamp": 1720605864896,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 1442,
        "timestamp": 1720605864896,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 1443,
        "timestamp": 1720605864896,
        "payload": "UE 1a29: MAC:    TX     4759452602 RX       42518572 bytes"
    },
    {
        "rowId": 1444,
        "timestamp": 1720605864896,
        "payload": "UE 1a29: dlsch_rounds 1618209/157624/3798/312, dlsch_errors 69, pucch0_DTX 1237, BLER 0.05297 MCS (1) 6"
    },
    {
        "rowId": 1445,
        "timestamp": 1720605864896,
        "payload": "UE 1a29: ulsch_rounds 199714/1235/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00996 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.5 dB"
    },
    {
        "rowId": 1446,
        "timestamp": 1720605864896,
        "payload": "UE 1a29: LCID 1: TX          11952 RX          85958 bytes"
    },
    {
        "rowId": 1447,
        "timestamp": 1720605864896,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1448,
        "timestamp": 1720605864896,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1449,
        "timestamp": 1720605864896,
        "payload": "UE 1a29: LCID 4: TX     4613534250 RX       11269778 bytes"
    },
    {
        "rowId": 1450,
        "timestamp": 1720605864896,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1451,
        "timestamp": 1720605864896,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1452,
        "timestamp": 1720605866176,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1453,
        "timestamp": 1720605866176,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 1454,
        "timestamp": 1720605866176,
        "payload": "UE 1a29: ulsch_rounds 199786/1235/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00253 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 1455,
        "timestamp": 1720605866176,
        "payload": "UE 1a29: LCID 1: TX          11955 RX          85980 bytes"
    },
    {
        "rowId": 1456,
        "timestamp": 1720605866176,
        "payload": "UE 1a29: LCID 4: TX     4615201760 RX       11273861 bytes"
    },
    {
        "rowId": 1457,
        "timestamp": 1720605866176,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1458,
        "timestamp": 1720605866176,
        "payload": "UE 1a29: dlsch_rounds 1618770/157717/3798/312, dlsch_errors 69, pucch0_DTX 1237, BLER 0.15635 MCS (1) 6"
    },
    {
        "rowId": 1459,
        "timestamp": 1720605866176,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1460,
        "timestamp": 1720605866176,
        "payload": "UE 1a29: MAC:    TX     4761171882 RX       42533396 bytes"
    },
    {
        "rowId": 1461,
        "timestamp": 1720605866176,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1462,
        "timestamp": 1720605866176,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1463,
        "timestamp": 1720605867456,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 1464,
        "timestamp": 1720605867456,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1465,
        "timestamp": 1720605867456,
        "payload": "UE 1a29: dlsch_rounds 1619352/157740/3798/312, dlsch_errors 69, pucch0_DTX 1237, BLER 0.07505 MCS (1) 6"
    },
    {
        "rowId": 1466,
        "timestamp": 1720605867456,
        "payload": "UE 1a29: MAC:    TX     4763004365 RX       42548570 bytes"
    },
    {
        "rowId": 1467,
        "timestamp": 1720605867456,
        "payload": "UE 1a29: LCID 1: TX          11958 RX          86002 bytes"
    },
    {
        "rowId": 1468,
        "timestamp": 1720605867456,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1469,
        "timestamp": 1720605867456,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1470,
        "timestamp": 1720605867456,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1471,
        "timestamp": 1720605867456,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1472,
        "timestamp": 1720605867456,
        "payload": "UE 1a29: ulsch_rounds 199857/1236/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.01009 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 1473,
        "timestamp": 1720605867456,
        "payload": "UE 1a29: LCID 4: TX     4616992656 RX       11277614 bytes"
    },
    {
        "rowId": 1474,
        "timestamp": 1720605868736,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 1475,
        "timestamp": 1720605868736,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 1476,
        "timestamp": 1720605868736,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1477,
        "timestamp": 1720605868736,
        "payload": "UE 1a29: ulsch_rounds 199928/1236/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00256 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 1478,
        "timestamp": 1720605868736,
        "payload": "UE 1a29: LCID 1: TX          11964 RX          86046 bytes"
    },
    {
        "rowId": 1479,
        "timestamp": 1720605868736,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1480,
        "timestamp": 1720605868736,
        "payload": "UE 1a29: MAC:    TX     4764285142 RX       42563313 bytes"
    },
    {
        "rowId": 1481,
        "timestamp": 1720605868736,
        "payload": "UE 1a29: LCID 4: TX     4618236502 RX       11280889 bytes"
    },
    {
        "rowId": 1482,
        "timestamp": 1720605868736,
        "payload": "UE 1a29: dlsch_rounds 1619819/157778/3798/312, dlsch_errors 69, pucch0_DTX 1237, BLER 0.08562 MCS (1) 6"
    },
    {
        "rowId": 1483,
        "timestamp": 1720605868736,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1484,
        "timestamp": 1720605868736,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1485,
        "timestamp": 1720605870016,
        "payload": "ULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 1486,
        "timestamp": 1720605870016,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 1487,
        "timestamp": 1720605870016,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1488,
        "timestamp": 1720605870016,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1489,
        "timestamp": 1720605870016,
        "payload": "UE 1a29: MAC:    TX     4765719891 RX       42578037 bytes"
    },
    {
        "rowId": 1490,
        "timestamp": 1720605870016,
        "payload": "UE 1a29: LCID 1: TX          11967 RX          86068 bytes"
    },
    {
        "rowId": 1491,
        "timestamp": 1720605870016,
        "payload": "UE 1a29: dlsch_rounds 1620315/157790/3798/312, dlsch_errors 69, pucch0_DTX 1237, BLER 0.04076 MCS (1) 10"
    },
    {
        "rowId": 1492,
        "timestamp": 1720605870016,
        "payload": "UE 1a29: ulsch_rounds 199997/1236/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00072 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 1493,
        "timestamp": 1720605870016,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1494,
        "timestamp": 1720605870016,
        "payload": "UE 1a29: LCID 4: TX     4619630814 RX       11284419 bytes"
    },
    {
        "rowId": 1495,
        "timestamp": 1720605870016,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1496,
        "timestamp": 1720605871296,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 1497,
        "timestamp": 1720605871296,
        "payload": "UE 1a29: ulsch_rounds 200067/1236/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00020 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 1498,
        "timestamp": 1720605871296,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1499,
        "timestamp": 1720605871296,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1500,
        "timestamp": 1720605871296,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1501,
        "timestamp": 1720605871296,
        "payload": "UE 1a29: LCID 1: TX          11970 RX          86090 bytes"
    },
    {
        "rowId": 1502,
        "timestamp": 1720605871296,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1503,
        "timestamp": 1720605871296,
        "payload": "UE 1a29: LCID 4: TX     4621322640 RX       11288023 bytes"
    },
    {
        "rowId": 1504,
        "timestamp": 1720605871296,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1505,
        "timestamp": 1720605871296,
        "payload": "UE 1a29: dlsch_rounds 1620883/157869/3798/312, dlsch_errors 69, pucch0_DTX 1237, BLER 0.08103 MCS (1) 7"
    },
    {
        "rowId": 1506,
        "timestamp": 1720605871296,
        "payload": "UE 1a29: MAC:    TX     4767464309 RX       42592603 bytes"
    },
    {
        "rowId": 1507,
        "timestamp": 1720605872576,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1508,
        "timestamp": 1720605872576,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1509,
        "timestamp": 1720605872576,
        "payload": "UE 1a29: LCID 1: TX          11973 RX          86112 bytes"
    },
    {
        "rowId": 1510,
        "timestamp": 1720605872576,
        "payload": "UE 1a29: dlsch_rounds 1621448/157925/3800/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.11161 MCS (1) 8"
    },
    {
        "rowId": 1511,
        "timestamp": 1720605872576,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 1512,
        "timestamp": 1720605872576,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1513,
        "timestamp": 1720605872576,
        "payload": "UE 1a29: MAC:    TX     4769185343 RX       42606957 bytes"
    },
    {
        "rowId": 1514,
        "timestamp": 1720605872576,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1515,
        "timestamp": 1720605872576,
        "payload": "UE 1a29: LCID 4: TX     4622996868 RX       11291750 bytes"
    },
    {
        "rowId": 1516,
        "timestamp": 1720605872576,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1517,
        "timestamp": 1720605872576,
        "payload": "UE 1a29: ulsch_rounds 200134/1236/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00005 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 1518,
        "timestamp": 1720605873856,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 1519,
        "timestamp": 1720605873856,
        "payload": "UE 1a29: CQI 11, RI 1, PMI (0,3)"
    },
    {
        "rowId": 1520,
        "timestamp": 1720605873856,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1521,
        "timestamp": 1720605873856,
        "payload": "UE 1a29: ulsch_rounds 200200/1236/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00001 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 1522,
        "timestamp": 1720605873856,
        "payload": "UE 1a29: dlsch_rounds 1621940/157930/3800/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.04040 MCS (1) 11"
    },
    {
        "rowId": 1523,
        "timestamp": 1720605873856,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1524,
        "timestamp": 1720605873856,
        "payload": "UE 1a29: LCID 1: TX          11979 RX          86156 bytes"
    },
    {
        "rowId": 1525,
        "timestamp": 1720605873856,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1526,
        "timestamp": 1720605873856,
        "payload": "UE 1a29: LCID 4: TX     4624264953 RX       11295121 bytes"
    },
    {
        "rowId": 1527,
        "timestamp": 1720605873856,
        "payload": "UE 1a29: MAC:    TX     4770486594 RX       42620655 bytes"
    },
    {
        "rowId": 1528,
        "timestamp": 1720605873856,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1529,
        "timestamp": 1720605875136,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 1530,
        "timestamp": 1720605875136,
        "payload": "UE 1a29: ulsch_rounds 200269/1236/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 1531,
        "timestamp": 1720605875136,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1532,
        "timestamp": 1720605875136,
        "payload": "UE 1a29: dlsch_rounds 1622448/158008/3800/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.11619 MCS (1) 7"
    },
    {
        "rowId": 1533,
        "timestamp": 1720605875136,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1534,
        "timestamp": 1720605875136,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 1535,
        "timestamp": 1720605875136,
        "payload": "UE 1a29: MAC:    TX     4771927136 RX       42634980 bytes"
    },
    {
        "rowId": 1536,
        "timestamp": 1720605875136,
        "payload": "UE 1a29: LCID 4: TX     4625661260 RX       11298464 bytes"
    },
    {
        "rowId": 1537,
        "timestamp": 1720605875136,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1538,
        "timestamp": 1720605875136,
        "payload": "UE 1a29: LCID 1: TX          11982 RX          86178 bytes"
    },
    {
        "rowId": 1539,
        "timestamp": 1720605875136,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1540,
        "timestamp": 1720605876416,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 1541,
        "timestamp": 1720605876416,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1542,
        "timestamp": 1720605876416,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1543,
        "timestamp": 1720605876416,
        "payload": "UE 1a29: dlsch_rounds 1623002/158021/3800/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.04566 MCS (1) 9"
    },
    {
        "rowId": 1544,
        "timestamp": 1720605876416,
        "payload": "UE 1a29: LCID 4: TX     4627365972 RX       11302150 bytes"
    },
    {
        "rowId": 1545,
        "timestamp": 1720605876416,
        "payload": "UE 1a29: LCID 1: TX          11985 RX          86200 bytes"
    },
    {
        "rowId": 1546,
        "timestamp": 1720605876416,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1547,
        "timestamp": 1720605876416,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1548,
        "timestamp": 1720605876416,
        "payload": "UE 1a29: MAC:    TX     4773676670 RX       42649125 bytes"
    },
    {
        "rowId": 1549,
        "timestamp": 1720605876416,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1550,
        "timestamp": 1720605876416,
        "payload": "UE 1a29: ulsch_rounds 200335/1236/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 1551,
        "timestamp": 1720605877696,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1552,
        "timestamp": 1720605877696,
        "payload": "UE 1a29: dlsch_rounds 1623555/158089/3800/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.06362 MCS (1) 9"
    },
    {
        "rowId": 1553,
        "timestamp": 1720605877696,
        "payload": "UE 1a29: LCID 4: TX     4628931709 RX       11305732 bytes"
    },
    {
        "rowId": 1554,
        "timestamp": 1720605877696,
        "payload": "UE 1a29: LCID 1: TX          11988 RX          86222 bytes"
    },
    {
        "rowId": 1555,
        "timestamp": 1720605877696,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1556,
        "timestamp": 1720605877696,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1557,
        "timestamp": 1720605877696,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1558,
        "timestamp": 1720605877696,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1559,
        "timestamp": 1720605877696,
        "payload": "UE 1a29: MAC:    TX     4775291652 RX       42661746 bytes"
    },
    {
        "rowId": 1560,
        "timestamp": 1720605877696,
        "payload": "UE 1a29: ulsch_rounds 200396/1236/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.5 dB"
    },
    {
        "rowId": 1561,
        "timestamp": 1720605877696,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 1562,
        "timestamp": 1720605878976,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 1563,
        "timestamp": 1720605878976,
        "payload": "UE 1a29: dlsch_rounds 1624047/158150/3800/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.10088 MCS (1) 6"
    },
    {
        "rowId": 1564,
        "timestamp": 1720605878976,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1565,
        "timestamp": 1720605878976,
        "payload": "UE 1a29: ulsch_rounds 200461/1236/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.5 dB"
    },
    {
        "rowId": 1566,
        "timestamp": 1720605878976,
        "payload": "UE 1a29: LCID 4: TX     4630276751 RX       11309264 bytes"
    },
    {
        "rowId": 1567,
        "timestamp": 1720605878976,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 1568,
        "timestamp": 1720605878976,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1569,
        "timestamp": 1720605878976,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1570,
        "timestamp": 1720605878976,
        "payload": "UE 1a29: MAC:    TX     4776681285 RX       42675203 bytes"
    },
    {
        "rowId": 1571,
        "timestamp": 1720605878976,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1572,
        "timestamp": 1720605878976,
        "payload": "UE 1a29: LCID 1: TX          11994 RX          86266 bytes"
    },
    {
        "rowId": 1573,
        "timestamp": 1720605880256,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 1574,
        "timestamp": 1720605880256,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1575,
        "timestamp": 1720605880256,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 1576,
        "timestamp": 1720605880256,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1577,
        "timestamp": 1720605880256,
        "payload": "UE 1a29: MAC:    TX     4778190864 RX       42688821 bytes"
    },
    {
        "rowId": 1578,
        "timestamp": 1720605880256,
        "payload": "UE 1a29: ulsch_rounds 200527/1236/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 21.5 dB"
    },
    {
        "rowId": 1579,
        "timestamp": 1720605880256,
        "payload": "UE 1a29: dlsch_rounds 1624558/158164/3800/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.04752 MCS (1) 9"
    },
    {
        "rowId": 1580,
        "timestamp": 1720605880256,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1581,
        "timestamp": 1720605880256,
        "payload": "UE 1a29: LCID 4: TX     4631740733 RX       11312845 bytes"
    },
    {
        "rowId": 1582,
        "timestamp": 1720605880256,
        "payload": "UE 1a29: LCID 1: TX          11997 RX          86288 bytes"
    },
    {
        "rowId": 1583,
        "timestamp": 1720605880256,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1584,
        "timestamp": 1720605881536,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1585,
        "timestamp": 1720605881536,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1586,
        "timestamp": 1720605881536,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 1587,
        "timestamp": 1720605881536,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1588,
        "timestamp": 1720605881536,
        "payload": "UE 1a29: LCID 1: TX          12000 RX          86310 bytes"
    },
    {
        "rowId": 1589,
        "timestamp": 1720605881536,
        "payload": "UE 1a29: ulsch_rounds 200589/1237/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.02000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.5 dB"
    },
    {
        "rowId": 1590,
        "timestamp": 1720605881536,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1591,
        "timestamp": 1720605881536,
        "payload": "UE 1a29: dlsch_rounds 1625153/158248/3800/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.09650 MCS (1) 8"
    },
    {
        "rowId": 1592,
        "timestamp": 1720605881536,
        "payload": "UE 1a29: LCID 4: TX     4633550851 RX       11316605 bytes"
    },
    {
        "rowId": 1593,
        "timestamp": 1720605881536,
        "payload": "UE 1a29: MAC:    TX     4780052802 RX       42702098 bytes"
    },
    {
        "rowId": 1594,
        "timestamp": 1720605881536,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1595,
        "timestamp": 1720605882816,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1596,
        "timestamp": 1720605882816,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1597,
        "timestamp": 1720605882816,
        "payload": "UE 1a29: ulsch_rounds 200651/1238/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.01451 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 1598,
        "timestamp": 1720605882816,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 1599,
        "timestamp": 1720605882816,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1600,
        "timestamp": 1720605882816,
        "payload": "UE 1a29: MAC:    TX     4781501202 RX       42715407 bytes"
    },
    {
        "rowId": 1601,
        "timestamp": 1720605882816,
        "payload": "UE 1a29: LCID 1: TX          12003 RX          86332 bytes"
    },
    {
        "rowId": 1602,
        "timestamp": 1720605882816,
        "payload": "UE 1a29: dlsch_rounds 1625639/158319/3800/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.11987 MCS (1) 7"
    },
    {
        "rowId": 1603,
        "timestamp": 1720605882816,
        "payload": "UE 1a29: LCID 4: TX     4634956580 RX       11319988 bytes"
    },
    {
        "rowId": 1604,
        "timestamp": 1720605882816,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1605,
        "timestamp": 1720605882816,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1606,
        "timestamp": 1720605884096,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1607,
        "timestamp": 1720605884096,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1608,
        "timestamp": 1720605884096,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 1609,
        "timestamp": 1720605884096,
        "payload": "UE 1a29: dlsch_rounds 1626133/158371/3800/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.11325 MCS (1) 7"
    },
    {
        "rowId": 1610,
        "timestamp": 1720605884096,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1611,
        "timestamp": 1720605884096,
        "payload": "UE 1a29: MAC:    TX     4782859129 RX       42727996 bytes"
    },
    {
        "rowId": 1612,
        "timestamp": 1720605884096,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1613,
        "timestamp": 1720605884096,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1614,
        "timestamp": 1720605884096,
        "payload": "UE 1a29: LCID 1: TX          12009 RX          86376 bytes"
    },
    {
        "rowId": 1615,
        "timestamp": 1720605884096,
        "payload": "UE 1a29: ulsch_rounds 200712/1238/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00410 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 1616,
        "timestamp": 1720605884096,
        "payload": "UE 1a29: LCID 4: TX     4636272916 RX       11323483 bytes"
    },
    {
        "rowId": 1617,
        "timestamp": 1720605885376,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 1618,
        "timestamp": 1720605885377,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1619,
        "timestamp": 1720605885377,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1620,
        "timestamp": 1720605885377,
        "payload": "UE 1a29: dlsch_rounds 1626647/158438/3800/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.17376 MCS (1) 8"
    },
    {
        "rowId": 1621,
        "timestamp": 1720605885377,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1622,
        "timestamp": 1720605885377,
        "payload": "UE 1a29: LCID 1: TX          12012 RX          86398 bytes"
    },
    {
        "rowId": 1623,
        "timestamp": 1720605885377,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1624,
        "timestamp": 1720605885377,
        "payload": "UE 1a29: ulsch_rounds 200764/1238/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00116 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 1625,
        "timestamp": 1720605885377,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1626,
        "timestamp": 1720605885377,
        "payload": "UE 1a29: MAC:    TX     4784380795 RX       42738800 bytes"
    },
    {
        "rowId": 1627,
        "timestamp": 1720605885377,
        "payload": "UE 1a29: LCID 4: TX     4637750974 RX       11326870 bytes"
    },
    {
        "rowId": 1628,
        "timestamp": 1720605886656,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 1629,
        "timestamp": 1720605886656,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1630,
        "timestamp": 1720605886656,
        "payload": "UE 1a29: CQI 12, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1631,
        "timestamp": 1720605886656,
        "payload": "UE 1a29: dlsch_rounds 1627257/158438/3800/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.04476 MCS (1) 9"
    },
    {
        "rowId": 1632,
        "timestamp": 1720605886656,
        "payload": "UE 1a29: ulsch_rounds 200826/1244/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.05739 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 1633,
        "timestamp": 1720605886656,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1634,
        "timestamp": 1720605886656,
        "payload": "UE 1a29: LCID 4: TX     4639543483 RX       11333325 bytes"
    },
    {
        "rowId": 1635,
        "timestamp": 1720605886656,
        "payload": "UE 1a29: LCID 1: TX          12015 RX          86420 bytes"
    },
    {
        "rowId": 1636,
        "timestamp": 1720605886656,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1637,
        "timestamp": 1720605886656,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1638,
        "timestamp": 1720605886656,
        "payload": "UE 1a29: MAC:    TX     4786215331 RX       42754903 bytes"
    },
    {
        "rowId": 1639,
        "timestamp": 1720605887936,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 1640,
        "timestamp": 1720605887936,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1641,
        "timestamp": 1720605887936,
        "payload": "UE 1a29: ulsch_rounds 200889/1245/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.03561 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 1642,
        "timestamp": 1720605887936,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1643,
        "timestamp": 1720605887936,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1644,
        "timestamp": 1720605887936,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1645,
        "timestamp": 1720605887936,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1646,
        "timestamp": 1720605887936,
        "payload": "UE 1a29: dlsch_rounds 1627719/158631/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.33747 MCS (1) 6"
    },
    {
        "rowId": 1647,
        "timestamp": 1720605887936,
        "payload": "UE 1a29: LCID 4: TX     4640834946 RX       11336744 bytes"
    },
    {
        "rowId": 1648,
        "timestamp": 1720605887936,
        "payload": "UE 1a29: LCID 1: TX          12018 RX          86442 bytes"
    },
    {
        "rowId": 1649,
        "timestamp": 1720605887936,
        "payload": "UE 1a29: MAC:    TX     4787555272 RX       42768341 bytes"
    },
    {
        "rowId": 1650,
        "timestamp": 1720605889216,
        "payload": "UE 1a29: ulsch_rounds 200956/1247/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.02689 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 1651,
        "timestamp": 1720605889216,
        "payload": "UE 1a29: dlsch_rounds 1628228/158696/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.15093 MCS (1) 6"
    },
    {
        "rowId": 1652,
        "timestamp": 1720605889216,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1653,
        "timestamp": 1720605889216,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 1654,
        "timestamp": 1720605889216,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1655,
        "timestamp": 1720605889216,
        "payload": "UE 1a29: MAC:    TX     4788956308 RX       42783062 bytes"
    },
    {
        "rowId": 1656,
        "timestamp": 1720605889216,
        "payload": "UE 1a29: LCID 4: TX     4642195604 RX       11340463 bytes"
    },
    {
        "rowId": 1657,
        "timestamp": 1720605889216,
        "payload": "UE 1a29: LCID 1: TX          12024 RX          86486 bytes"
    },
    {
        "rowId": 1658,
        "timestamp": 1720605889216,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1659,
        "timestamp": 1720605889216,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1660,
        "timestamp": 1720605889216,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1661,
        "timestamp": 1720605890496,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 1662,
        "timestamp": 1720605890496,
        "payload": "UE 1a29: MAC:    TX     4790523263 RX       42796082 bytes"
    },
    {
        "rowId": 1663,
        "timestamp": 1720605890496,
        "payload": "UE 1a29: LCID 1: TX          12027 RX          86508 bytes"
    },
    {
        "rowId": 1664,
        "timestamp": 1720605890496,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1665,
        "timestamp": 1720605890496,
        "payload": "UE 1a29: LCID 4: TX     4643721818 RX       11343983 bytes"
    },
    {
        "rowId": 1666,
        "timestamp": 1720605890496,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1667,
        "timestamp": 1720605890496,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1668,
        "timestamp": 1720605890496,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1669,
        "timestamp": 1720605890496,
        "payload": "UE 1a29: ulsch_rounds 201017/1247/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00683 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 1670,
        "timestamp": 1720605890496,
        "payload": "UE 1a29: dlsch_rounds 1628752/158741/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.10064 MCS (1) 6"
    },
    {
        "rowId": 1671,
        "timestamp": 1720605890496,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1672,
        "timestamp": 1720605891776,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 1673,
        "timestamp": 1720605891776,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1674,
        "timestamp": 1720605891776,
        "payload": "UE 1a29: dlsch_rounds 1629330/158779/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.07685 MCS (1) 7"
    },
    {
        "rowId": 1675,
        "timestamp": 1720605891776,
        "payload": "UE 1a29: ulsch_rounds 201068/1247/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00193 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 1676,
        "timestamp": 1720605891776,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1677,
        "timestamp": 1720605891776,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1678,
        "timestamp": 1720605891776,
        "payload": "UE 1a29: MAC:    TX     4792340524 RX       42806677 bytes"
    },
    {
        "rowId": 1679,
        "timestamp": 1720605891776,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1680,
        "timestamp": 1720605891776,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1681,
        "timestamp": 1720605891776,
        "payload": "UE 1a29: LCID 4: TX     4645500705 RX       11347651 bytes"
    },
    {
        "rowId": 1682,
        "timestamp": 1720605891776,
        "payload": "UE 1a29: LCID 1: TX          12030 RX          86530 bytes"
    },
    {
        "rowId": 1683,
        "timestamp": 1720605893056,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 1684,
        "timestamp": 1720605893056,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1685,
        "timestamp": 1720605893056,
        "payload": "UE 1a29: ulsch_rounds 201122/1247/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00055 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 1686,
        "timestamp": 1720605893056,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1687,
        "timestamp": 1720605893056,
        "payload": "UE 1a29: MAC:    TX     4793672843 RX       42817883 bytes"
    },
    {
        "rowId": 1688,
        "timestamp": 1720605893056,
        "payload": "UE 1a29: LCID 1: TX          12033 RX          86552 bytes"
    },
    {
        "rowId": 1689,
        "timestamp": 1720605893056,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1690,
        "timestamp": 1720605893056,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1691,
        "timestamp": 1720605893056,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 1692,
        "timestamp": 1720605893056,
        "payload": "UE 1a29: LCID 4: TX     4646794502 RX       11351038 bytes"
    },
    {
        "rowId": 1693,
        "timestamp": 1720605893056,
        "payload": "UE 1a29: dlsch_rounds 1629814/158856/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.11672 MCS (1) 6"
    },
    {
        "rowId": 1694,
        "timestamp": 1720605894336,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1695,
        "timestamp": 1720605894336,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1696,
        "timestamp": 1720605894336,
        "payload": "UE 1a29: MAC:    TX     4795068274 RX       42829922 bytes"
    },
    {
        "rowId": 1697,
        "timestamp": 1720605894336,
        "payload": "UE 1a29: LCID 1: TX          12039 RX          86596 bytes"
    },
    {
        "rowId": 1698,
        "timestamp": 1720605894336,
        "payload": "UE 1a29: LCID 4: TX     4648154371 RX       11354486 bytes"
    },
    {
        "rowId": 1699,
        "timestamp": 1720605894336,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1700,
        "timestamp": 1720605894336,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 1701,
        "timestamp": 1720605894336,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1702,
        "timestamp": 1720605894336,
        "payload": "UE 1a29: dlsch_rounds 1630297/158884/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.06789 MCS (1) 6"
    },
    {
        "rowId": 1703,
        "timestamp": 1720605894336,
        "payload": "UE 1a29: ulsch_rounds 201178/1247/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00014 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 1704,
        "timestamp": 1720605894336,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1705,
        "timestamp": 1720605895616,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 1706,
        "timestamp": 1720605895616,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1707,
        "timestamp": 1720605895616,
        "payload": "UE 1a29: LCID 1: TX          12042 RX          86618 bytes"
    },
    {
        "rowId": 1708,
        "timestamp": 1720605895616,
        "payload": "UE 1a29: LCID 4: TX     4649686191 RX       11357930 bytes"
    },
    {
        "rowId": 1709,
        "timestamp": 1720605895616,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1710,
        "timestamp": 1720605895616,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1711,
        "timestamp": 1720605895616,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1712,
        "timestamp": 1720605895616,
        "payload": "UE 1a29: dlsch_rounds 1630825/158968/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.13853 MCS (1) 6"
    },
    {
        "rowId": 1713,
        "timestamp": 1720605895616,
        "payload": "UE 1a29: ulsch_rounds 201235/1248/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.01185 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 1714,
        "timestamp": 1720605895616,
        "payload": "UE 1a29: MAC:    TX     4796641254 RX       42842106 bytes"
    },
    {
        "rowId": 1715,
        "timestamp": 1720605895616,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1716,
        "timestamp": 1720605896896,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 1717,
        "timestamp": 1720605896896,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1718,
        "timestamp": 1720605896896,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1719,
        "timestamp": 1720605896896,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1720,
        "timestamp": 1720605896896,
        "payload": "UE 1a29: LCID 4: TX     4651474382 RX       11361949 bytes"
    },
    {
        "rowId": 1721,
        "timestamp": 1720605896896,
        "payload": "UE 1a29: MAC:    TX     4798473481 RX       42855383 bytes"
    },
    {
        "rowId": 1722,
        "timestamp": 1720605896896,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1723,
        "timestamp": 1720605896896,
        "payload": "UE 1a29: dlsch_rounds 1631420/158975/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.04357 MCS (1) 9"
    },
    {
        "rowId": 1724,
        "timestamp": 1720605896896,
        "payload": "UE 1a29: ulsch_rounds 201297/1249/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.01258 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 1725,
        "timestamp": 1720605896896,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1726,
        "timestamp": 1720605896896,
        "payload": "UE 1a29: LCID 1: TX          12045 RX          86640 bytes"
    },
    {
        "rowId": 1727,
        "timestamp": 1720605898176,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 1728,
        "timestamp": 1720605898176,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1729,
        "timestamp": 1720605898176,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1730,
        "timestamp": 1720605898176,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1731,
        "timestamp": 1720605898176,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1732,
        "timestamp": 1720605898176,
        "payload": "UE 1a29: ulsch_rounds 201351/1249/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00355 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 1733,
        "timestamp": 1720605898176,
        "payload": "UE 1a29: MAC:    TX     4799817536 RX       42867004 bytes"
    },
    {
        "rowId": 1734,
        "timestamp": 1720605898176,
        "payload": "UE 1a29: LCID 4: TX     4652765091 RX       11365197 bytes"
    },
    {
        "rowId": 1735,
        "timestamp": 1720605898176,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1736,
        "timestamp": 1720605898176,
        "payload": "UE 1a29: LCID 1: TX          12048 RX          86662 bytes"
    },
    {
        "rowId": 1737,
        "timestamp": 1720605898176,
        "payload": "UE 1a29: dlsch_rounds 1631910/159014/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.05816 MCS (1) 10"
    },
    {
        "rowId": 1738,
        "timestamp": 1720605899456,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1739,
        "timestamp": 1720605899456,
        "payload": "UE 1a29: dlsch_rounds 1632408/159075/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.08602 MCS (1) 9"
    },
    {
        "rowId": 1740,
        "timestamp": 1720605899456,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1741,
        "timestamp": 1720605899456,
        "payload": "UE 1a29: LCID 1: TX          12054 RX          86706 bytes"
    },
    {
        "rowId": 1742,
        "timestamp": 1720605899456,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1743,
        "timestamp": 1720605899456,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1744,
        "timestamp": 1720605899456,
        "payload": "UE 1a29: LCID 4: TX     4654113061 RX       11368707 bytes"
    },
    {
        "rowId": 1745,
        "timestamp": 1720605899456,
        "payload": "UE 1a29: MAC:    TX     4801223480 RX       42879030 bytes"
    },
    {
        "rowId": 1746,
        "timestamp": 1720605899456,
        "payload": "UE 1a29: ulsch_rounds 201409/1249/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00100 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 1747,
        "timestamp": 1720605899456,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 1748,
        "timestamp": 1720605899456,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1749,
        "timestamp": 1720605900736,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 1750,
        "timestamp": 1720605900736,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1751,
        "timestamp": 1720605900736,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1752,
        "timestamp": 1720605900736,
        "payload": "UE 1a29: dlsch_rounds 1632949/159143/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.15868 MCS (1) 9"
    },
    {
        "rowId": 1753,
        "timestamp": 1720605900736,
        "payload": "UE 1a29: ulsch_rounds 201459/1249/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00028 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 1754,
        "timestamp": 1720605900736,
        "payload": "UE 1a29: MAC:    TX     4802859644 RX       42889416 bytes"
    },
    {
        "rowId": 1755,
        "timestamp": 1720605900736,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1756,
        "timestamp": 1720605900736,
        "payload": "UE 1a29: LCID 1: TX          12057 RX          86728 bytes"
    },
    {
        "rowId": 1757,
        "timestamp": 1720605900736,
        "payload": "UE 1a29: LCID 4: TX     4655695576 RX       11372175 bytes"
    },
    {
        "rowId": 1758,
        "timestamp": 1720605900736,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1759,
        "timestamp": 1720605900736,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1760,
        "timestamp": 1720605902016,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 1761,
        "timestamp": 1720605902016,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1762,
        "timestamp": 1720605902016,
        "payload": "UE 1a29: ulsch_rounds 201514/1250/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.01466 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 1763,
        "timestamp": 1720605902016,
        "payload": "UE 1a29: LCID 4: TX     4657479930 RX       11375933 bytes"
    },
    {
        "rowId": 1764,
        "timestamp": 1720605902016,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1765,
        "timestamp": 1720605902016,
        "payload": "UE 1a29: dlsch_rounds 1633522/159163/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.06071 MCS (1) 7"
    },
    {
        "rowId": 1766,
        "timestamp": 1720605902016,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1767,
        "timestamp": 1720605902016,
        "payload": "UE 1a29: LCID 1: TX          12060 RX          86750 bytes"
    },
    {
        "rowId": 1768,
        "timestamp": 1720605902016,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1769,
        "timestamp": 1720605902016,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1770,
        "timestamp": 1720605902016,
        "payload": "UE 1a29: MAC:    TX     4804688618 RX       42901693 bytes"
    },
    {
        "rowId": 1771,
        "timestamp": 1720605903296,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 1772,
        "timestamp": 1720605903296,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 1773,
        "timestamp": 1720605903296,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1774,
        "timestamp": 1720605903296,
        "payload": "UE 1a29: dlsch_rounds 1633994/159225/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.12977 MCS (1) 8"
    },
    {
        "rowId": 1775,
        "timestamp": 1720605903296,
        "payload": "UE 1a29: LCID 4: TX     4658778372 RX       11379255 bytes"
    },
    {
        "rowId": 1776,
        "timestamp": 1720605903296,
        "payload": "UE 1a29: LCID 1: TX          12063 RX          86772 bytes"
    },
    {
        "rowId": 1777,
        "timestamp": 1720605903296,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1778,
        "timestamp": 1720605903296,
        "payload": "UE 1a29: MAC:    TX     4806028648 RX       42912706 bytes"
    },
    {
        "rowId": 1779,
        "timestamp": 1720605903296,
        "payload": "UE 1a29: ulsch_rounds 201567/1250/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00373 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 28.0 dB"
    },
    {
        "rowId": 1780,
        "timestamp": 1720605903296,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1781,
        "timestamp": 1720605903296,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1782,
        "timestamp": 1720605904576,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 1783,
        "timestamp": 1720605904576,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1784,
        "timestamp": 1720605904576,
        "payload": "UE 1a29: dlsch_rounds 1634487/159256/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.06843 MCS (1) 6"
    },
    {
        "rowId": 1785,
        "timestamp": 1720605904576,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1786,
        "timestamp": 1720605904576,
        "payload": "UE 1a29: LCID 4: TX     4660120163 RX       11382572 bytes"
    },
    {
        "rowId": 1787,
        "timestamp": 1720605904576,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1788,
        "timestamp": 1720605905856,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 1789,
        "timestamp": 1720605905856,
        "payload": "UE 1a29: dlsch_rounds 1635032/159330/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.17312 MCS (1) 10"
    },
    {
        "rowId": 1790,
        "timestamp": 1720605904576,
        "payload": "UE 1a29: LCID 1: TX          12069 RX          86816 bytes"
    },
    {
        "rowId": 1791,
        "timestamp": 1720605905856,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1792,
        "timestamp": 1720605905856,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1793,
        "timestamp": 1720605905856,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1794,
        "timestamp": 1720605905856,
        "payload": "UE 1a29: MAC:    TX     4809111964 RX       42937057 bytes"
    },
    {
        "rowId": 1795,
        "timestamp": 1720605905856,
        "payload": "UE 1a29: ulsch_rounds 201680/1251/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00675 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 1796,
        "timestamp": 1720605905856,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1797,
        "timestamp": 1720605904576,
        "payload": "UE 1a29: ulsch_rounds 201621/1250/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00105 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 1798,
        "timestamp": 1720605905856,
        "payload": "UE 1a29: LCID 1: TX          12072 RX          86838 bytes"
    },
    {
        "rowId": 1799,
        "timestamp": 1720605904576,
        "payload": "UE 1a29: MAC:    TX     4807401841 RX       42924343 bytes"
    },
    {
        "rowId": 1800,
        "timestamp": 1720605904576,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1801,
        "timestamp": 1720605904576,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1802,
        "timestamp": 1720605905856,
        "payload": "UE 1a29: LCID 4: TX     4661781642 RX       11386181 bytes"
    },
    {
        "rowId": 1803,
        "timestamp": 1720605905856,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1804,
        "timestamp": 1720605907136,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1805,
        "timestamp": 1720605907136,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1806,
        "timestamp": 1720605907136,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 1807,
        "timestamp": 1720605907136,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1808,
        "timestamp": 1720605907136,
        "payload": "UE 1a29: LCID 1: TX          12075 RX          86860 bytes"
    },
    {
        "rowId": 1809,
        "timestamp": 1720605907136,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1810,
        "timestamp": 1720605907136,
        "payload": "UE 1a29: LCID 4: TX     4663477515 RX       11389925 bytes"
    },
    {
        "rowId": 1811,
        "timestamp": 1720605907136,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1812,
        "timestamp": 1720605907136,
        "payload": "UE 1a29: ulsch_rounds 201732/1252/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00818 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 1813,
        "timestamp": 1720605907136,
        "payload": "UE 1a29: MAC:    TX     4810865120 RX       42948292 bytes"
    },
    {
        "rowId": 1814,
        "timestamp": 1720605907136,
        "payload": "UE 1a29: dlsch_rounds 1635605/159365/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.08201 MCS (1) 9"
    },
    {
        "rowId": 1815,
        "timestamp": 1720605908416,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 1816,
        "timestamp": 1720605908416,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1817,
        "timestamp": 1720605908416,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1818,
        "timestamp": 1720605908416,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1819,
        "timestamp": 1720605908416,
        "payload": "UE 1a29: ulsch_rounds 201783/1253/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.01092 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 1820,
        "timestamp": 1720605908416,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1821,
        "timestamp": 1720605908416,
        "payload": "UE 1a29: LCID 4: TX     4664808824 RX       11393194 bytes"
    },
    {
        "rowId": 1822,
        "timestamp": 1720605908416,
        "payload": "UE 1a29: MAC:    TX     4812248903 RX       42959302 bytes"
    },
    {
        "rowId": 1823,
        "timestamp": 1720605908416,
        "payload": "UE 1a29: LCID 1: TX          12078 RX          86882 bytes"
    },
    {
        "rowId": 1824,
        "timestamp": 1720605908416,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1825,
        "timestamp": 1720605908416,
        "payload": "UE 1a29: dlsch_rounds 1636090/159391/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.06233 MCS (1) 9"
    },
    {
        "rowId": 1826,
        "timestamp": 1720605909696,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 1827,
        "timestamp": 1720605909696,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1828,
        "timestamp": 1720605909696,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1829,
        "timestamp": 1720605909696,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1830,
        "timestamp": 1720605909696,
        "payload": "UE 1a29: dlsch_rounds 1636600/159468/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.14327 MCS (1) 7"
    },
    {
        "rowId": 1831,
        "timestamp": 1720605909696,
        "payload": "UE 1a29: LCID 1: TX          12084 RX          86926 bytes"
    },
    {
        "rowId": 1832,
        "timestamp": 1720605909696,
        "payload": "UE 1a29: ulsch_rounds 201835/1253/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00308 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 1833,
        "timestamp": 1720605909696,
        "payload": "UE 1a29: MAC:    TX     4813725167 RX       42970106 bytes"
    },
    {
        "rowId": 1834,
        "timestamp": 1720605909696,
        "payload": "UE 1a29: LCID 4: TX     4666233763 RX       11396570 bytes"
    },
    {
        "rowId": 1835,
        "timestamp": 1720605909696,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1836,
        "timestamp": 1720605909696,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1837,
        "timestamp": 1720605910976,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1838,
        "timestamp": 1720605910976,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1839,
        "timestamp": 1720605910976,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1840,
        "timestamp": 1720605910976,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 1841,
        "timestamp": 1720605910976,
        "payload": "UE 1a29: dlsch_rounds 1637183/159482/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.04897 MCS (1) 8"
    },
    {
        "rowId": 1842,
        "timestamp": 1720605910976,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1843,
        "timestamp": 1720605910976,
        "payload": "UE 1a29: LCID 1: TX          12087 RX          86948 bytes"
    },
    {
        "rowId": 1844,
        "timestamp": 1720605910976,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1845,
        "timestamp": 1720605912256,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 1846,
        "timestamp": 1720605912256,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1847,
        "timestamp": 1720605912256,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1848,
        "timestamp": 1720605912256,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1849,
        "timestamp": 1720605912256,
        "payload": "UE 1a29: dlsch_rounds 1637728/159574/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.14598 MCS (1) 6"
    },
    {
        "rowId": 1850,
        "timestamp": 1720605912256,
        "payload": "UE 1a29: ulsch_rounds 201955/1260/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.02770 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 1851,
        "timestamp": 1720605912257,
        "payload": "UE 1a29: MAC:    TX     4817134181 RX       42998171 bytes"
    },
    {
        "rowId": 1852,
        "timestamp": 1720605912257,
        "payload": "UE 1a29: LCID 1: TX          12090 RX          86970 bytes"
    },
    {
        "rowId": 1853,
        "timestamp": 1720605912257,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1854,
        "timestamp": 1720605912257,
        "payload": "UE 1a29: LCID 4: TX     4669548535 RX       11406641 bytes"
    },
    {
        "rowId": 1855,
        "timestamp": 1720605912257,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1856,
        "timestamp": 1720605910976,
        "payload": "UE 1a29: ulsch_rounds 201896/1256/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00733 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 1857,
        "timestamp": 1720605910976,
        "payload": "UE 1a29: LCID 4: TX     4667958180 RX       11401444 bytes"
    },
    {
        "rowId": 1858,
        "timestamp": 1720605910976,
        "payload": "UE 1a29: MAC:    TX     4815493888 RX       42984164 bytes"
    },
    {
        "rowId": 1859,
        "timestamp": 1720605913536,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 1860,
        "timestamp": 1720605913536,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1861,
        "timestamp": 1720605913536,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1862,
        "timestamp": 1720605913536,
        "payload": "UE 1a29: dlsch_rounds 1638251/159587/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.07062 MCS (1) 7"
    },
    {
        "rowId": 1863,
        "timestamp": 1720605913536,
        "payload": "UE 1a29: CQI 11, RI 1, PMI (0,3)"
    },
    {
        "rowId": 1864,
        "timestamp": 1720605913537,
        "payload": "UE 1a29: LCID 4: TX     4670907079 RX       11410526 bytes"
    },
    {
        "rowId": 1865,
        "timestamp": 1720605913537,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1866,
        "timestamp": 1720605913537,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1867,
        "timestamp": 1720605913537,
        "payload": "UE 1a29: MAC:    TX     4818526326 RX       43010628 bytes"
    },
    {
        "rowId": 1868,
        "timestamp": 1720605913537,
        "payload": "UE 1a29: LCID 1: TX          12093 RX          86992 bytes"
    },
    {
        "rowId": 1869,
        "timestamp": 1720605913537,
        "payload": "UE 1a29: ulsch_rounds 202013/1261/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.01227 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 1870,
        "timestamp": 1720605914816,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1871,
        "timestamp": 1720605914816,
        "payload": "UE 1a29: MAC:    TX     4819996750 RX       43022442 bytes"
    },
    {
        "rowId": 1872,
        "timestamp": 1720605914816,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 1873,
        "timestamp": 1720605914816,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1874,
        "timestamp": 1720605914816,
        "payload": "UE 1a29: ulsch_rounds 202068/1262/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.01967 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 1875,
        "timestamp": 1720605914816,
        "payload": "UE 1a29: CQI 11, RI 1, PMI (0,3)"
    },
    {
        "rowId": 1876,
        "timestamp": 1720605914816,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1877,
        "timestamp": 1720605914816,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1878,
        "timestamp": 1720605914816,
        "payload": "UE 1a29: LCID 4: TX     4672344255 RX       11413773 bytes"
    },
    {
        "rowId": 1879,
        "timestamp": 1720605914816,
        "payload": "UE 1a29: dlsch_rounds 1638757/159587/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.01795 MCS (1) 17"
    },
    {
        "rowId": 1880,
        "timestamp": 1720605914816,
        "payload": "UE 1a29: LCID 1: TX          12099 RX          87036 bytes"
    },
    {
        "rowId": 1881,
        "timestamp": 1720605916096,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 1882,
        "timestamp": 1720605916096,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1883,
        "timestamp": 1720605916096,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1884,
        "timestamp": 1720605916096,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1885,
        "timestamp": 1720605916096,
        "payload": "UE 1a29: dlsch_rounds 1639325/159624/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.06571 MCS (1) 9"
    },
    {
        "rowId": 1886,
        "timestamp": 1720605916096,
        "payload": "UE 1a29: ulsch_rounds 202118/1262/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00555 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 1887,
        "timestamp": 1720605916096,
        "payload": "UE 1a29: LCID 1: TX          12102 RX          87058 bytes"
    },
    {
        "rowId": 1888,
        "timestamp": 1720605916097,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1889,
        "timestamp": 1720605916096,
        "payload": "UE 1a29: MAC:    TX     4821848935 RX       43032828 bytes"
    },
    {
        "rowId": 1890,
        "timestamp": 1720605916097,
        "payload": "UE 1a29: LCID 4: TX     4674142073 RX       11417531 bytes"
    },
    {
        "rowId": 1891,
        "timestamp": 1720605916097,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1892,
        "timestamp": 1720605917376,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 1893,
        "timestamp": 1720605917376,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1894,
        "timestamp": 1720605917376,
        "payload": "UE 1a29: ulsch_rounds 202172/1262/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00141 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 1895,
        "timestamp": 1720605917377,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1896,
        "timestamp": 1720605917377,
        "payload": "UE 1a29: LCID 1: TX          12105 RX          87080 bytes"
    },
    {
        "rowId": 1897,
        "timestamp": 1720605917376,
        "payload": "UE 1a29: MAC:    TX     4823279858 RX       43044018 bytes"
    },
    {
        "rowId": 1898,
        "timestamp": 1720605917377,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1899,
        "timestamp": 1720605917377,
        "payload": "UE 1a29: LCID 4: TX     4675529057 RX       11420856 bytes"
    },
    {
        "rowId": 1900,
        "timestamp": 1720605917376,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1901,
        "timestamp": 1720605917376,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1902,
        "timestamp": 1720605917376,
        "payload": "UE 1a29: dlsch_rounds 1639803/159737/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.18225 MCS (1) 6"
    },
    {
        "rowId": 1903,
        "timestamp": 1720605918656,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 1904,
        "timestamp": 1720605918656,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 1905,
        "timestamp": 1720605918656,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1906,
        "timestamp": 1720605918656,
        "payload": "UE 1a29: dlsch_rounds 1640299/159766/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.08424 MCS (1) 6"
    },
    {
        "rowId": 1907,
        "timestamp": 1720605918656,
        "payload": "UE 1a29: ulsch_rounds 202231/1263/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00737 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.5 dB"
    },
    {
        "rowId": 1908,
        "timestamp": 1720605918656,
        "payload": "UE 1a29: MAC:    TX     4824646507 RX       43056732 bytes"
    },
    {
        "rowId": 1909,
        "timestamp": 1720605918656,
        "payload": "UE 1a29: LCID 1: TX          12108 RX          87124 bytes"
    },
    {
        "rowId": 1910,
        "timestamp": 1720605918656,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1911,
        "timestamp": 1720605918656,
        "payload": "UE 1a29: LCID 4: TX     4676858085 RX       11424394 bytes"
    },
    {
        "rowId": 1912,
        "timestamp": 1720605918656,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1913,
        "timestamp": 1720605918656,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1914,
        "timestamp": 1720605919936,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 1915,
        "timestamp": 1720605919936,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1916,
        "timestamp": 1720605919936,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1917,
        "timestamp": 1720605919936,
        "payload": "UE 1a29: dlsch_rounds 1640826/159784/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.05052 MCS (1) 9"
    },
    {
        "rowId": 1918,
        "timestamp": 1720605919936,
        "payload": "UE 1a29: MAC:    TX     4826198389 RX       43067118 bytes"
    },
    {
        "rowId": 1919,
        "timestamp": 1720605919936,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1920,
        "timestamp": 1720605919936,
        "payload": "UE 1a29: LCID 1: TX          12114 RX          87146 bytes"
    },
    {
        "rowId": 1921,
        "timestamp": 1720605919936,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1922,
        "timestamp": 1720605919936,
        "payload": "UE 1a29: ulsch_rounds 202281/1263/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00208 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 1923,
        "timestamp": 1720605919936,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1924,
        "timestamp": 1720605919936,
        "payload": "UE 1a29: LCID 4: TX     4678366365 RX       11427684 bytes"
    },
    {
        "rowId": 1925,
        "timestamp": 1720605921216,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 1926,
        "timestamp": 1720605921216,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1927,
        "timestamp": 1720605921216,
        "payload": "UE 1a29: dlsch_rounds 1641403/159874/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.14007 MCS (1) 9"
    },
    {
        "rowId": 1928,
        "timestamp": 1720605921216,
        "payload": "UE 1a29: ulsch_rounds 202335/1263/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00053 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 1929,
        "timestamp": 1720605921216,
        "payload": "UE 1a29: MAC:    TX     4828023524 RX       43078739 bytes"
    },
    {
        "rowId": 1930,
        "timestamp": 1720605921216,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1931,
        "timestamp": 1720605921216,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1932,
        "timestamp": 1720605921216,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1933,
        "timestamp": 1720605921216,
        "payload": "UE 1a29: LCID 1: TX          12117 RX          87168 bytes"
    },
    {
        "rowId": 1934,
        "timestamp": 1720605921216,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1935,
        "timestamp": 1720605921216,
        "payload": "UE 1a29: LCID 4: TX     4680134395 RX       11431690 bytes"
    },
    {
        "rowId": 1936,
        "timestamp": 1720605922496,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 1937,
        "timestamp": 1720605922496,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1938,
        "timestamp": 1720605922496,
        "payload": "UE 1a29: dlsch_rounds 1641878/159898/3809/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.07202 MCS (1) 7"
    },
    {
        "rowId": 1939,
        "timestamp": 1720605922496,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1940,
        "timestamp": 1720605922496,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1941,
        "timestamp": 1720605922496,
        "payload": "UE 1a29: MAC:    TX     4829356149 RX       43090122 bytes"
    },
    {
        "rowId": 1942,
        "timestamp": 1720605922496,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1943,
        "timestamp": 1720605922496,
        "payload": "UE 1a29: ulsch_rounds 202390/1263/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00015 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 1944,
        "timestamp": 1720605922496,
        "payload": "UE 1a29: LCID 1: TX          12120 RX          87190 bytes"
    },
    {
        "rowId": 1945,
        "timestamp": 1720605922496,
        "payload": "UE 1a29: LCID 4: TX     4681425102 RX       11434948 bytes"
    },
    {
        "rowId": 1946,
        "timestamp": 1720605922496,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1947,
        "timestamp": 1720605923776,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 1948,
        "timestamp": 1720605923776,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 1949,
        "timestamp": 1720605923776,
        "payload": "UE 1a29: dlsch_rounds 1642376/159975/3818/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.12375 MCS (1) 6"
    },
    {
        "rowId": 1950,
        "timestamp": 1720605923776,
        "payload": "UE 1a29: LCID 4: TX     4682809707 RX       11438500 bytes"
    },
    {
        "rowId": 1951,
        "timestamp": 1720605923776,
        "payload": "UE 1a29: LCID 1: TX          12126 RX          87234 bytes"
    },
    {
        "rowId": 1952,
        "timestamp": 1720605923776,
        "payload": "UE 1a29: MAC:    TX     4830779757 RX       43101778 bytes"
    },
    {
        "rowId": 1953,
        "timestamp": 1720605923776,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 1954,
        "timestamp": 1720605923776,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1955,
        "timestamp": 1720605923776,
        "payload": "UE 1a29: ulsch_rounds 202446/1263/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00004 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 1956,
        "timestamp": 1720605923776,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1957,
        "timestamp": 1720605923776,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1958,
        "timestamp": 1720605925056,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1959,
        "timestamp": 1720605925056,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 1960,
        "timestamp": 1720605925056,
        "payload": "UE 1a29: ulsch_rounds 202499/1265/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.01870 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 1961,
        "timestamp": 1720605925056,
        "payload": "UE 1a29: LCID 1: TX          12129 RX          87256 bytes"
    },
    {
        "rowId": 1962,
        "timestamp": 1720605925056,
        "payload": "UE 1a29: dlsch_rounds 1642888/160011/3818/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.07869 MCS (1) 9"
    },
    {
        "rowId": 1963,
        "timestamp": 1720605925056,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1964,
        "timestamp": 1720605925056,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1965,
        "timestamp": 1720605925056,
        "payload": "UE 1a29: MAC:    TX     4832365206 RX       43114100 bytes"
    },
    {
        "rowId": 1966,
        "timestamp": 1720605925056,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1967,
        "timestamp": 1720605925056,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1968,
        "timestamp": 1720605925056,
        "payload": "UE 1a29: LCID 4: TX     4684354378 RX       11442039 bytes"
    },
    {
        "rowId": 1969,
        "timestamp": 1720605926336,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1970,
        "timestamp": 1720605926337,
        "payload": "UE 1a29: LCID 1: TX          12132 RX          87278 bytes"
    },
    {
        "rowId": 1971,
        "timestamp": 1720605926337,
        "payload": "UE 1a29: ulsch_rounds 202551/1265/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00475 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 1972,
        "timestamp": 1720605926336,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1973,
        "timestamp": 1720605926337,
        "payload": "UE 1a29: MAC:    TX     4834143366 RX       43124888 bytes"
    },
    {
        "rowId": 1974,
        "timestamp": 1720605926336,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1975,
        "timestamp": 1720605926337,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1976,
        "timestamp": 1720605926337,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1977,
        "timestamp": 1720605926337,
        "payload": "UE 1a29: dlsch_rounds 1643466/160043/3818/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.06111 MCS (1) 6"
    },
    {
        "rowId": 1978,
        "timestamp": 1720605926337,
        "payload": "UE 1a29: LCID 4: TX     4686087341 RX       11445747 bytes"
    },
    {
        "rowId": 1979,
        "timestamp": 1720605926336,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 1980,
        "timestamp": 1720605927616,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 1981,
        "timestamp": 1720605927616,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1982,
        "timestamp": 1720605927616,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1983,
        "timestamp": 1720605927616,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1984,
        "timestamp": 1720605927616,
        "payload": "UE 1a29: ulsch_rounds 202605/1265/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00134 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 1985,
        "timestamp": 1720605927616,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 1986,
        "timestamp": 1720605928896,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 1987,
        "timestamp": 1720605927616,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 1988,
        "timestamp": 1720605928896,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 1989,
        "timestamp": 1720605928896,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 1990,
        "timestamp": 1720605928896,
        "payload": "UE 1a29: dlsch_rounds 1644450/160118/3818/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.06262 MCS (1) 10"
    },
    {
        "rowId": 1991,
        "timestamp": 1720605927616,
        "payload": "UE 1a29: dlsch_rounds 1643956/160093/3818/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.09106 MCS (1) 8"
    },
    {
        "rowId": 1992,
        "timestamp": 1720605928896,
        "payload": "UE 1a29: MAC:    TX     4836938837 RX       43147329 bytes"
    },
    {
        "rowId": 1993,
        "timestamp": 1720605927616,
        "payload": "UE 1a29: LCID 1: TX          12135 RX          87300 bytes"
    },
    {
        "rowId": 1994,
        "timestamp": 1720605927616,
        "payload": "UE 1a29: LCID 4: TX     4687422730 RX       11449010 bytes"
    },
    {
        "rowId": 1995,
        "timestamp": 1720605928896,
        "payload": "UE 1a29: ulsch_rounds 202657/1266/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.01654 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.5 dB"
    },
    {
        "rowId": 1996,
        "timestamp": 1720605928896,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 1997,
        "timestamp": 1720605927616,
        "payload": "UE 1a29: MAC:    TX     4835523240 RX       43136094 bytes"
    },
    {
        "rowId": 1998,
        "timestamp": 1720605928896,
        "payload": "UE 1a29: LCID 1: TX          12141 RX          87344 bytes"
    },
    {
        "rowId": 1999,
        "timestamp": 1720605928896,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2000,
        "timestamp": 1720605928896,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2001,
        "timestamp": 1720605928896,
        "payload": "UE 1a29: LCID 4: TX     4688794176 RX       11452351 bytes"
    },
    {
        "rowId": 2002,
        "timestamp": 1720605930176,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 2003,
        "timestamp": 1720605930176,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 2004,
        "timestamp": 1720605930176,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2005,
        "timestamp": 1720605930176,
        "payload": "UE 1a29: LCID 1: TX          12144 RX          87366 bytes"
    },
    {
        "rowId": 2006,
        "timestamp": 1720605930176,
        "payload": "UE 1a29: ulsch_rounds 202707/1266/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00467 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 2007,
        "timestamp": 1720605930176,
        "payload": "UE 1a29: dlsch_rounds 1644985/160200/3818/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.10451 MCS (1) 6"
    },
    {
        "rowId": 2008,
        "timestamp": 1720605930176,
        "payload": "UE 1a29: LCID 4: TX     4690328427 RX       11455803 bytes"
    },
    {
        "rowId": 2009,
        "timestamp": 1720605930176,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2010,
        "timestamp": 1720605931456,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2011,
        "timestamp": 1720605931456,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 2012,
        "timestamp": 1720605931456,
        "payload": "UE 1a29: MAC:    TX     4840370122 RX       43169159 bytes"
    },
    {
        "rowId": 2013,
        "timestamp": 1720605931456,
        "payload": "UE 1a29: ulsch_rounds 202760/1267/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.01932 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 2014,
        "timestamp": 1720605931456,
        "payload": "UE 1a29: dlsch_rounds 1645569/160225/3818/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.08152 MCS (1) 9"
    },
    {
        "rowId": 2015,
        "timestamp": 1720605931456,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 2016,
        "timestamp": 1720605931456,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2017,
        "timestamp": 1720605931456,
        "payload": "UE 1a29: LCID 1: TX          12147 RX          87388 bytes"
    },
    {
        "rowId": 2018,
        "timestamp": 1720605931456,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2019,
        "timestamp": 1720605931456,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2020,
        "timestamp": 1720605931456,
        "payload": "UE 1a29: LCID 4: TX     4692128769 RX       11459743 bytes"
    },
    {
        "rowId": 2021,
        "timestamp": 1720605932736,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 2022,
        "timestamp": 1720605932736,
        "payload": "UE 1a29: ulsch_rounds 202811/1267/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00491 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 2023,
        "timestamp": 1720605932736,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2024,
        "timestamp": 1720605932736,
        "payload": "UE 1a29: MAC:    TX     4841745859 RX       43179754 bytes"
    },
    {
        "rowId": 2025,
        "timestamp": 1720605932736,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2026,
        "timestamp": 1720605932736,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2027,
        "timestamp": 1720605930176,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2028,
        "timestamp": 1720605932736,
        "payload": "UE 1a29: LCID 1: TX          12150 RX          87410 bytes"
    },
    {
        "rowId": 2029,
        "timestamp": 1720605932737,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2030,
        "timestamp": 1720605932736,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 2031,
        "timestamp": 1720605932736,
        "payload": "UE 1a29: dlsch_rounds 1646066/160285/3818/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.11698 MCS (1) 7"
    },
    {
        "rowId": 2032,
        "timestamp": 1720605932737,
        "payload": "UE 1a29: LCID 4: TX     4693454907 RX       11463007 bytes"
    },
    {
        "rowId": 2033,
        "timestamp": 1720605930176,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2034,
        "timestamp": 1720605930176,
        "payload": "UE 1a29: MAC:    TX     4838519525 RX       43157731 bytes"
    },
    {
        "rowId": 2035,
        "timestamp": 1720605934016,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 2036,
        "timestamp": 1720605934016,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 2037,
        "timestamp": 1720605934016,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2038,
        "timestamp": 1720605934016,
        "payload": "UE 1a29: LCID 1: TX          12156 RX          87454 bytes"
    },
    {
        "rowId": 2039,
        "timestamp": 1720605934016,
        "payload": "UE 1a29: MAC:    TX     4843146963 RX       43191169 bytes"
    },
    {
        "rowId": 2040,
        "timestamp": 1720605934016,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2041,
        "timestamp": 1720605934016,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2042,
        "timestamp": 1720605934016,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2043,
        "timestamp": 1720605935296,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 2044,
        "timestamp": 1720605935296,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 2045,
        "timestamp": 1720605935296,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2046,
        "timestamp": 1720605935296,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2047,
        "timestamp": 1720605934016,
        "payload": "UE 1a29: LCID 4: TX     4694811677 RX       11466409 bytes"
    },
    {
        "rowId": 2048,
        "timestamp": 1720605935296,
        "payload": "UE 1a29: dlsch_rounds 1647102/160363/3818/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.06242 MCS (1) 7"
    },
    {
        "rowId": 2049,
        "timestamp": 1720605935296,
        "payload": "UE 1a29: MAC:    TX     4844787995 RX       43202822 bytes"
    },
    {
        "rowId": 2050,
        "timestamp": 1720605935296,
        "payload": "UE 1a29: LCID 1: TX          12159 RX          87476 bytes"
    },
    {
        "rowId": 2051,
        "timestamp": 1720605935296,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2052,
        "timestamp": 1720605935296,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2053,
        "timestamp": 1720605934016,
        "payload": "UE 1a29: dlsch_rounds 1646564/160345/3818/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.16507 MCS (1) 7"
    },
    {
        "rowId": 2054,
        "timestamp": 1720605935296,
        "payload": "UE 1a29: ulsch_rounds 202920/1267/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00039 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 2055,
        "timestamp": 1720605935296,
        "payload": "UE 1a29: LCID 4: TX     4696407696 RX       11469974 bytes"
    },
    {
        "rowId": 2056,
        "timestamp": 1720605934016,
        "payload": "UE 1a29: ulsch_rounds 202866/1267/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00154 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 2057,
        "timestamp": 1720605936576,
        "payload": "UE 1a29: LCID 4: TX     4698233481 RX       11473815 bytes"
    },
    {
        "rowId": 2058,
        "timestamp": 1720605936576,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2059,
        "timestamp": 1720605936576,
        "payload": "UE 1a29: MAC:    TX     4846661426 RX       43214681 bytes"
    },
    {
        "rowId": 2060,
        "timestamp": 1720605936576,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2061,
        "timestamp": 1720605936576,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 2062,
        "timestamp": 1720605936576,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 2063,
        "timestamp": 1720605936576,
        "payload": "UE 1a29: LCID 1: TX          12162 RX          87498 bytes"
    },
    {
        "rowId": 2064,
        "timestamp": 1720605936576,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2065,
        "timestamp": 1720605936576,
        "payload": "UE 1a29: ulsch_rounds 202973/1267/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00011 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 2066,
        "timestamp": 1720605937856,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 2067,
        "timestamp": 1720605937856,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2068,
        "timestamp": 1720605937856,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 2069,
        "timestamp": 1720605937856,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 2070,
        "timestamp": 1720605937856,
        "payload": "UE 1a29: ulsch_rounds 203026/1267/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00003 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 2071,
        "timestamp": 1720605937856,
        "payload": "UE 1a29: MAC:    TX     4847971427 RX       43226125 bytes"
    },
    {
        "rowId": 2072,
        "timestamp": 1720605937856,
        "payload": "UE 1a29: LCID 1: TX          12165 RX          87520 bytes"
    },
    {
        "rowId": 2073,
        "timestamp": 1720605937856,
        "payload": "UE 1a29: LCID 4: TX     4699498853 RX       11477036 bytes"
    },
    {
        "rowId": 2074,
        "timestamp": 1720605937856,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2075,
        "timestamp": 1720605937856,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2076,
        "timestamp": 1720605936576,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2077,
        "timestamp": 1720605936576,
        "payload": "UE 1a29: dlsch_rounds 1647689/160418/3818/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.10444 MCS (1) 8"
    },
    {
        "rowId": 2078,
        "timestamp": 1720605937856,
        "payload": "UE 1a29: dlsch_rounds 1648149/160467/3818/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.09658 MCS (1) 8"
    },
    {
        "rowId": 2079,
        "timestamp": 1720605939136,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 2080,
        "timestamp": 1720605939136,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 2081,
        "timestamp": 1720605939136,
        "payload": "UE 1a29: ulsch_rounds 203084/1267/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00001 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 2082,
        "timestamp": 1720605939136,
        "payload": "UE 1a29: MAC:    TX     4849381324 RX       43238598 bytes"
    },
    {
        "rowId": 2083,
        "timestamp": 1720605939136,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2084,
        "timestamp": 1720605939136,
        "payload": "UE 1a29: LCID 4: TX     4700859346 RX       11480452 bytes"
    },
    {
        "rowId": 2085,
        "timestamp": 1720605939136,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2086,
        "timestamp": 1720605939136,
        "payload": "UE 1a29: dlsch_rounds 1648649/160483/3818/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.05823 MCS (1) 9"
    },
    {
        "rowId": 2087,
        "timestamp": 1720605939136,
        "payload": "UE 1a29: LCID 1: TX          12171 RX          87564 bytes"
    },
    {
        "rowId": 2088,
        "timestamp": 1720605940416,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 2089,
        "timestamp": 1720605940416,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 2090,
        "timestamp": 1720605940416,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 2091,
        "timestamp": 1720605940416,
        "payload": "UE 1a29: dlsch_rounds 1649210/160523/3818/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.07312 MCS (1) 11"
    },
    {
        "rowId": 2092,
        "timestamp": 1720605939136,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2093,
        "timestamp": 1720605939136,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 2094,
        "timestamp": 1720605940416,
        "payload": "UE 1a29: ulsch_rounds 203136/1267/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.5 dB"
    },
    {
        "rowId": 2095,
        "timestamp": 1720605940416,
        "payload": "UE 1a29: MAC:    TX     4851157336 RX       43249354 bytes"
    },
    {
        "rowId": 2096,
        "timestamp": 1720605940416,
        "payload": "UE 1a29: LCID 4: TX     4702575995 RX       11484003 bytes"
    },
    {
        "rowId": 2097,
        "timestamp": 1720605940416,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2098,
        "timestamp": 1720605940416,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2099,
        "timestamp": 1720605940416,
        "payload": "UE 1a29: LCID 1: TX          12174 RX          87586 bytes"
    },
    {
        "rowId": 2100,
        "timestamp": 1720605940416,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2101,
        "timestamp": 1720605941696,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 2102,
        "timestamp": 1720605941696,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 2103,
        "timestamp": 1720605941696,
        "payload": "UE 1a29: dlsch_rounds 1649774/160592/3818/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.06739 MCS (1) 7"
    },
    {
        "rowId": 2104,
        "timestamp": 1720605941696,
        "payload": "UE 1a29: MAC:    TX     4852868330 RX       43260351 bytes"
    },
    {
        "rowId": 2105,
        "timestamp": 1720605941696,
        "payload": "UE 1a29: LCID 4: TX     4704238730 RX       11487797 bytes"
    },
    {
        "rowId": 2106,
        "timestamp": 1720605941696,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2107,
        "timestamp": 1720605941696,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 2108,
        "timestamp": 1720605941696,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2109,
        "timestamp": 1720605941696,
        "payload": "UE 1a29: LCID 1: TX          12177 RX          87608 bytes"
    },
    {
        "rowId": 2110,
        "timestamp": 1720605941696,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2111,
        "timestamp": 1720605941696,
        "payload": "UE 1a29: ulsch_rounds 203189/1267/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 28.0 dB"
    },
    {
        "rowId": 2112,
        "timestamp": 1720605942976,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 2113,
        "timestamp": 1720605942976,
        "payload": "UE 1a29: ulsch_rounds 203244/1267/33/7, ulsch_errors 4, ulsch_DTX 120, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 2114,
        "timestamp": 1720605942976,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2115,
        "timestamp": 1720605942976,
        "payload": "UE 1a29: LCID 1: TX          12180 RX          87630 bytes"
    },
    {
        "rowId": 2116,
        "timestamp": 1720605942976,
        "payload": "UE 1a29: LCID 4: TX     4705520823 RX       11491149 bytes"
    },
    {
        "rowId": 2117,
        "timestamp": 1720605942976,
        "payload": "UE 1a29: MAC:    TX     4854200980 RX       43272181 bytes"
    },
    {
        "rowId": 2118,
        "timestamp": 1720605942976,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2119,
        "timestamp": 1720605942976,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2120,
        "timestamp": 1720605942976,
        "payload": "UE 1a29: dlsch_rounds 1650250/160661/3818/313, dlsch_errors 69, pucch0_DTX 1237, BLER 0.13960 MCS (1) 10"
    },
    {
        "rowId": 2121,
        "timestamp": 1720605942976,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 2122,
        "timestamp": 1720605942976,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 2123,
        "timestamp": 1720605944256,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 2124,
        "timestamp": 1720605944256,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 2125,
        "timestamp": 1720605944256,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2126,
        "timestamp": 1720605944256,
        "payload": "UE 1a29: dlsch_rounds 1650752/160690/3822/313, dlsch_errors 69, pucch0_DTX 1241, BLER 0.07345 MCS (1) 8"
    },
    {
        "rowId": 2127,
        "timestamp": 1720605944256,
        "payload": "UE 1a29: MAC:    TX     4855635383 RX       43284268 bytes"
    },
    {
        "rowId": 2128,
        "timestamp": 1720605944256,
        "payload": "UE 1a29: LCID 1: TX          12186 RX          87674 bytes"
    },
    {
        "rowId": 2129,
        "timestamp": 1720605944256,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2130,
        "timestamp": 1720605944257,
        "payload": "UE 1a29: LCID 4: TX     4706907235 RX       11494493 bytes"
    },
    {
        "rowId": 2131,
        "timestamp": 1720605944257,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2132,
        "timestamp": 1720605944256,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 2133,
        "timestamp": 1720605944256,
        "payload": "UE 1a29: ulsch_rounds 203300/1269/34/7, ulsch_errors 4, ulsch_DTX 122, BLER 0.02508 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 2134,
        "timestamp": 1720605945536,
        "payload": "UE 1a29: CQI 12, RI 1, PMI (0,3)"
    },
    {
        "rowId": 2135,
        "timestamp": 1720605945536,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 2136,
        "timestamp": 1720605945536,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2137,
        "timestamp": 1720605945536,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 2138,
        "timestamp": 1720605945536,
        "payload": "UE 1a29: dlsch_rounds 1651336/160764/3822/313, dlsch_errors 69, pucch0_DTX 1241, BLER 0.13399 MCS (1) 9"
    },
    {
        "rowId": 2139,
        "timestamp": 1720605945536,
        "payload": "UE 1a29: ulsch_rounds 203353/1269/34/7, ulsch_errors 4, ulsch_DTX 122, BLER 0.00708 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 2140,
        "timestamp": 1720605945536,
        "payload": "UE 1a29: LCID 4: TX     4708671974 RX       11498073 bytes"
    },
    {
        "rowId": 2141,
        "timestamp": 1720605945536,
        "payload": "UE 1a29: LCID 1: TX          12189 RX          87696 bytes"
    },
    {
        "rowId": 2142,
        "timestamp": 1720605945536,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2143,
        "timestamp": 1720605945536,
        "payload": "UE 1a29: MAC:    TX     4857446613 RX       43295297 bytes"
    },
    {
        "rowId": 2144,
        "timestamp": 1720605945536,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2145,
        "timestamp": 1720605946816,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2146,
        "timestamp": 1720605946816,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 2147,
        "timestamp": 1720605946816,
        "payload": "UE 1a29: ulsch_rounds 203409/1270/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.01529 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.5 dB"
    },
    {
        "rowId": 2148,
        "timestamp": 1720605946816,
        "payload": "UE 1a29: MAC:    TX     4859020780 RX       43306905 bytes"
    },
    {
        "rowId": 2149,
        "timestamp": 1720605946816,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2150,
        "timestamp": 1720605946817,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2151,
        "timestamp": 1720605946817,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2152,
        "timestamp": 1720605946817,
        "payload": "UE 1a29: LCID 4: TX     4710193615 RX       11501629 bytes"
    },
    {
        "rowId": 2153,
        "timestamp": 1720605946816,
        "payload": "UE 1a29: LCID 1: TX          12192 RX          87718 bytes"
    },
    {
        "rowId": 2154,
        "timestamp": 1720605946816,
        "payload": "UE 1a29: dlsch_rounds 1651857/160817/3824/314, dlsch_errors 69, pucch0_DTX 1244, BLER 0.10158 MCS (1) 9"
    },
    {
        "rowId": 2155,
        "timestamp": 1720605948096,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 2156,
        "timestamp": 1720605948096,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 2157,
        "timestamp": 1720605948096,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2158,
        "timestamp": 1720605948096,
        "payload": "UE 1a29: dlsch_rounds 1652330/160834/3824/314, dlsch_errors 69, pucch0_DTX 1244, BLER 0.04798 MCS (1) 10"
    },
    {
        "rowId": 2159,
        "timestamp": 1720605948096,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2160,
        "timestamp": 1720605948096,
        "payload": "UE 1a29: ulsch_rounds 203464/1271/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.01106 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 29.5 dB"
    },
    {
        "rowId": 2161,
        "timestamp": 1720605948096,
        "payload": "UE 1a29: LCID 1: TX          12195 RX          87740 bytes"
    },
    {
        "rowId": 2162,
        "timestamp": 1720605948096,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2163,
        "timestamp": 1720605948096,
        "payload": "UE 1a29: LCID 4: TX     4711515702 RX       11505093 bytes"
    },
    {
        "rowId": 2164,
        "timestamp": 1720605948096,
        "payload": "UE 1a29: MAC:    TX     4860392857 RX       43318767 bytes"
    },
    {
        "rowId": 2165,
        "timestamp": 1720605948097,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2166,
        "timestamp": 1720605946816,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 2167,
        "timestamp": 1720605949376,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2168,
        "timestamp": 1720605949376,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2169,
        "timestamp": 1720605949376,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 2170,
        "timestamp": 1720605949376,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2171,
        "timestamp": 1720605949376,
        "payload": "UE 1a29: dlsch_rounds 1652838/160926/3826/314, dlsch_errors 69, pucch0_DTX 1244, BLER 0.17969 MCS (1) 8"
    },
    {
        "rowId": 2172,
        "timestamp": 1720605949376,
        "payload": "UE 1a29: MAC:    TX     4861881227 RX       43330825 bytes"
    },
    {
        "rowId": 2173,
        "timestamp": 1720605949376,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2174,
        "timestamp": 1720605949376,
        "payload": "UE 1a29: LCID 1: TX          12201 RX          87784 bytes"
    },
    {
        "rowId": 2175,
        "timestamp": 1720605949376,
        "payload": "UE 1a29: LCID 4: TX     4712950160 RX       11508645 bytes"
    },
    {
        "rowId": 2176,
        "timestamp": 1720605949376,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2177,
        "timestamp": 1720605949376,
        "payload": "UE 1a29: ulsch_rounds 203522/1271/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00312 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.5 dB"
    },
    {
        "rowId": 2178,
        "timestamp": 1720605950656,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 2179,
        "timestamp": 1720605950656,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 2180,
        "timestamp": 1720605950656,
        "payload": "UE 1a29: dlsch_rounds 1653439/160930/3826/314, dlsch_errors 69, pucch0_DTX 1244, BLER 0.04852 MCS (1) 8"
    },
    {
        "rowId": 2181,
        "timestamp": 1720605950656,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2182,
        "timestamp": 1720605950656,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2183,
        "timestamp": 1720605950656,
        "payload": "UE 1a29: ulsch_rounds 203574/1272/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.01269 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.5 dB"
    },
    {
        "rowId": 2184,
        "timestamp": 1720605950656,
        "payload": "UE 1a29: LCID 4: TX     4714763642 RX       11512309 bytes"
    },
    {
        "rowId": 2185,
        "timestamp": 1720605950656,
        "payload": "UE 1a29: LCID 1: TX          12204 RX          87806 bytes"
    },
    {
        "rowId": 2186,
        "timestamp": 1720605950656,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2187,
        "timestamp": 1720605950656,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2188,
        "timestamp": 1720605950656,
        "payload": "UE 1a29: MAC:    TX     4863742076 RX       43342044 bytes"
    },
    {
        "rowId": 2189,
        "timestamp": 1720605951936,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 2190,
        "timestamp": 1720605951936,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2191,
        "timestamp": 1720605951936,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2192,
        "timestamp": 1720605951936,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2193,
        "timestamp": 1720605951936,
        "payload": "UE 1a29: ulsch_rounds 203625/1272/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00323 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 2194,
        "timestamp": 1720605951936,
        "payload": "UE 1a29: dlsch_rounds 1653944/160970/3826/314, dlsch_errors 69, pucch0_DTX 1244, BLER 0.05245 MCS (1) 10"
    },
    {
        "rowId": 2195,
        "timestamp": 1720605951936,
        "payload": "UE 1a29: MAC:    TX     4865168530 RX       43352623 bytes"
    },
    {
        "rowId": 2196,
        "timestamp": 1720605951936,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2197,
        "timestamp": 1720605951936,
        "payload": "UE 1a29: LCID 4: TX     4716133939 RX       11515673 bytes"
    },
    {
        "rowId": 2198,
        "timestamp": 1720605951936,
        "payload": "UE 1a29: LCID 1: TX          12207 RX          87828 bytes"
    },
    {
        "rowId": 2199,
        "timestamp": 1720605951936,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2200,
        "timestamp": 1720605953216,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2201,
        "timestamp": 1720605953216,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2202,
        "timestamp": 1720605953216,
        "payload": "UE 1a29: dlsch_rounds 1654422/161031/3826/314, dlsch_errors 69, pucch0_DTX 1244, BLER 0.10276 MCS (1) 11"
    },
    {
        "rowId": 2203,
        "timestamp": 1720605953216,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2204,
        "timestamp": 1720605953216,
        "payload": "UE 1a29: ulsch_rounds 203680/1272/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00091 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 2205,
        "timestamp": 1720605953216,
        "payload": "UE 1a29: MAC:    TX     4866594777 RX       43364006 bytes"
    },
    {
        "rowId": 2206,
        "timestamp": 1720605953216,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 2207,
        "timestamp": 1720605953216,
        "payload": "UE 1a29: LCID 1: TX          12210 RX          87850 bytes"
    },
    {
        "rowId": 2208,
        "timestamp": 1720605953216,
        "payload": "UE 1a29: LCID 4: TX     4717505239 RX       11519071 bytes"
    },
    {
        "rowId": 2209,
        "timestamp": 1720605953216,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2210,
        "timestamp": 1720605953216,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2211,
        "timestamp": 1720605954496,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 2212,
        "timestamp": 1720605954496,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2213,
        "timestamp": 1720605954496,
        "payload": "UE 1a29: MAC:    TX     4868192891 RX       43375624 bytes"
    },
    {
        "rowId": 2214,
        "timestamp": 1720605954496,
        "payload": "UE 1a29: ulsch_rounds 203732/1274/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.03007 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 2215,
        "timestamp": 1720605954496,
        "payload": "UE 1a29: dlsch_rounds 1654944/161083/3826/314, dlsch_errors 69, pucch0_DTX 1244, BLER 0.11123 MCS (1) 13"
    },
    {
        "rowId": 2216,
        "timestamp": 1720605954496,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2217,
        "timestamp": 1720605954496,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2218,
        "timestamp": 1720605954496,
        "payload": "UE 1a29: LCID 1: TX          12216 RX          87894 bytes"
    },
    {
        "rowId": 2219,
        "timestamp": 1720605954496,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2220,
        "timestamp": 1720605954496,
        "payload": "UE 1a29: LCID 4: TX     4719041971 RX       11522597 bytes"
    },
    {
        "rowId": 2221,
        "timestamp": 1720605954496,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2222,
        "timestamp": 1720605955776,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2223,
        "timestamp": 1720605955776,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 2224,
        "timestamp": 1720605955776,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2225,
        "timestamp": 1720605955776,
        "payload": "UE 1a29: dlsch_rounds 1655544/161125/3826/314, dlsch_errors 69, pucch0_DTX 1244, BLER 0.07278 MCS (1) 8"
    },
    {
        "rowId": 2226,
        "timestamp": 1720605955776,
        "payload": "UE 1a29: MAC:    TX     4870036262 RX       43387261 bytes"
    },
    {
        "rowId": 2227,
        "timestamp": 1720605955776,
        "payload": "UE 1a29: ulsch_rounds 203786/1275/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.02076 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 2228,
        "timestamp": 1720605955776,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2229,
        "timestamp": 1720605955776,
        "payload": "UE 1a29: LCID 4: TX     4720826593 RX       11526257 bytes"
    },
    {
        "rowId": 2230,
        "timestamp": 1720605955776,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2231,
        "timestamp": 1720605955776,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2232,
        "timestamp": 1720605955776,
        "payload": "UE 1a29: LCID 1: TX          12219 RX          87916 bytes"
    },
    {
        "rowId": 2233,
        "timestamp": 1720605957056,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2234,
        "timestamp": 1720605957056,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2235,
        "timestamp": 1720605957056,
        "payload": "UE 1a29: ulsch_rounds 203841/1275/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00586 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 2236,
        "timestamp": 1720605957056,
        "payload": "UE 1a29: LCID 4: TX     4722116620 RX       11529541 bytes"
    },
    {
        "rowId": 2237,
        "timestamp": 1720605957056,
        "payload": "UE 1a29: LCID 1: TX          12222 RX          87938 bytes"
    },
    {
        "rowId": 2238,
        "timestamp": 1720605957056,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2239,
        "timestamp": 1720605957056,
        "payload": "UE 1a29: MAC:    TX     4871385085 RX       43398660 bytes"
    },
    {
        "rowId": 2240,
        "timestamp": 1720605957056,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2241,
        "timestamp": 1720605957056,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2242,
        "timestamp": 1720605957056,
        "payload": "UE 1a29: dlsch_rounds 1656010/161205/3826/314, dlsch_errors 69, pucch0_DTX 1244, BLER 0.17876 MCS (1) 12"
    },
    {
        "rowId": 2243,
        "timestamp": 1720605957056,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 2244,
        "timestamp": 1720605958336,
        "payload": "UULLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 2245,
        "timestamp": 1720605958336,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 2246,
        "timestamp": 1720605958336,
        "payload": "UE 1a29: dlsch_rounds 1656513/161244/3827/314, dlsch_errors 69, pucch0_DTX 1244, BLER 0.09730 MCS (1) 6"
    },
    {
        "rowId": 2247,
        "timestamp": 1720605958336,
        "payload": "UE 1a29: MAC:    TX     4872799941 RX       43410313 bytes"
    },
    {
        "rowId": 2248,
        "timestamp": 1720605958336,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2249,
        "timestamp": 1720605958336,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2250,
        "timestamp": 1720605958336,
        "payload": "UE 1a29: LCID 1: TX          12225 RX          87960 bytes"
    },
    {
        "rowId": 2251,
        "timestamp": 1720605958336,
        "payload": "UE 1a29: LCID 4: TX     4723487360 RX       11533045 bytes"
    },
    {
        "rowId": 2252,
        "timestamp": 1720605958336,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2253,
        "timestamp": 1720605958336,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2254,
        "timestamp": 1720605958336,
        "payload": "UE 1a29: ulsch_rounds 203895/1275/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00166 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 2255,
        "timestamp": 1720605959616,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2256,
        "timestamp": 1720605959616,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 2257,
        "timestamp": 1720605959616,
        "payload": "UE 1a29: dlsch_rounds 1657055/161277/3827/314, dlsch_errors 69, pucch0_DTX 1244, BLER 0.08117 MCS (1) 12"
    },
    {
        "rowId": 2258,
        "timestamp": 1720605959616,
        "payload": "UE 1a29: ulsch_rounds 203946/1275/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00047 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 2259,
        "timestamp": 1720605959616,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2260,
        "timestamp": 1720605959616,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2261,
        "timestamp": 1720605959616,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2262,
        "timestamp": 1720605959616,
        "payload": "UE 1a29: LCID 1: TX          12231 RX          88004 bytes"
    },
    {
        "rowId": 2263,
        "timestamp": 1720605959616,
        "payload": "UE 1a29: LCID 4: TX     4725037138 RX       11536437 bytes"
    },
    {
        "rowId": 2264,
        "timestamp": 1720605959616,
        "payload": "UE 1a29: MAC:    TX     4874398193 RX       43420892 bytes"
    },
    {
        "rowId": 2265,
        "timestamp": 1720605959616,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2266,
        "timestamp": 1720605960896,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 2267,
        "timestamp": 1720605960896,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 2268,
        "timestamp": 1720605960896,
        "payload": "UE 1a29: dlsch_rounds 1657632/161341/3827/314, dlsch_errors 69, pucch0_DTX 1244, BLER 0.08170 MCS (1) 6"
    },
    {
        "rowId": 2269,
        "timestamp": 1720605960896,
        "payload": "UE 1a29: LCID 1: TX          12234 RX          88026 bytes"
    },
    {
        "rowId": 2270,
        "timestamp": 1720605960896,
        "payload": "UE 1a29: MAC:    TX     4876185718 RX       43433204 bytes"
    },
    {
        "rowId": 2271,
        "timestamp": 1720605960896,
        "payload": "UE 1a29: ulsch_rounds 204003/1275/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00013 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 2272,
        "timestamp": 1720605960896,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2273,
        "timestamp": 1720605960896,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2274,
        "timestamp": 1720605960896,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2275,
        "timestamp": 1720605960896,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2276,
        "timestamp": 1720605960896,
        "payload": "UE 1a29: LCID 4: TX     4726771661 RX       11540205 bytes"
    },
    {
        "rowId": 2277,
        "timestamp": 1720605962176,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 2278,
        "timestamp": 1720605962176,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2279,
        "timestamp": 1720605962176,
        "payload": "UE 1a29: dlsch_rounds 1658130/161383/3827/314, dlsch_errors 69, pucch0_DTX 1244, BLER 0.10625 MCS (1) 12"
    },
    {
        "rowId": 2280,
        "timestamp": 1720605962176,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2281,
        "timestamp": 1720605962176,
        "payload": "UE 1a29: ulsch_rounds 204060/1275/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00004 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 2282,
        "timestamp": 1720605962176,
        "payload": "UE 1a29: LCID 4: TX     4728090106 RX       11543576 bytes"
    },
    {
        "rowId": 2283,
        "timestamp": 1720605962176,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2284,
        "timestamp": 1720605962176,
        "payload": "UE 1a29: LCID 1: TX          12237 RX          88048 bytes"
    },
    {
        "rowId": 2285,
        "timestamp": 1720605962176,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2286,
        "timestamp": 1720605962176,
        "payload": "UE 1a29: MAC:    TX     4877550110 RX       43445021 bytes"
    },
    {
        "rowId": 2287,
        "timestamp": 1720605962176,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2288,
        "timestamp": 1720605963456,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 2289,
        "timestamp": 1720605963456,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2290,
        "timestamp": 1720605963456,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2291,
        "timestamp": 1720605963456,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2292,
        "timestamp": 1720605963457,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2293,
        "timestamp": 1720605963457,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2294,
        "timestamp": 1720605963457,
        "payload": "UE 1a29: LCID 4: TX     4729427798 RX       11546936 bytes"
    },
    {
        "rowId": 2295,
        "timestamp": 1720605963456,
        "payload": "UE 1a29: ulsch_rounds 204117/1275/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00001 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 2296,
        "timestamp": 1720605963456,
        "payload": "UE 1a29: dlsch_rounds 1658619/161490/3827/314, dlsch_errors 69, pucch0_DTX 1244, BLER 0.22117 MCS (1) 8"
    },
    {
        "rowId": 2297,
        "timestamp": 1720605963457,
        "payload": "UE 1a29: MAC:    TX     4878948394 RX       43456870 bytes"
    },
    {
        "rowId": 2298,
        "timestamp": 1720605963457,
        "payload": "UE 1a29: LCID 1: TX          12240 RX          88070 bytes"
    },
    {
        "rowId": 2299,
        "timestamp": 1720605964736,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 2300,
        "timestamp": 1720605964736,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 2301,
        "timestamp": 1720605964736,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2302,
        "timestamp": 1720605964736,
        "payload": "UE 1a29: ulsch_rounds 204170/1275/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 2303,
        "timestamp": 1720605964736,
        "payload": "UE 1a29: LCID 4: TX     4730976120 RX       11550615 bytes"
    },
    {
        "rowId": 2304,
        "timestamp": 1720605964736,
        "payload": "UE 1a29: LCID 1: TX          12246 RX          88114 bytes"
    },
    {
        "rowId": 2305,
        "timestamp": 1720605964736,
        "payload": "UE 1a29: MAC:    TX     4880536359 RX       43467867 bytes"
    },
    {
        "rowId": 2306,
        "timestamp": 1720605964736,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2307,
        "timestamp": 1720605964736,
        "payload": "UE 1a29: dlsch_rounds 1659164/161500/3827/314, dlsch_errors 69, pucch0_DTX 1244, BLER 0.07396 MCS (1) 6"
    },
    {
        "rowId": 2308,
        "timestamp": 1720605964736,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2309,
        "timestamp": 1720605964736,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2310,
        "timestamp": 1720605966016,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 2311,
        "timestamp": 1720605966016,
        "payload": "UE 1a29: dlsch_rounds 1659734/161534/3831/316, dlsch_errors 71, pucch0_DTX 1244, BLER 0.07911 MCS (1) 11"
    },
    {
        "rowId": 2312,
        "timestamp": 1720605966017,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2313,
        "timestamp": 1720605966016,
        "payload": "UE 1a29: LCID 1: TX          12249 RX          88136 bytes"
    },
    {
        "rowId": 2314,
        "timestamp": 1720605966017,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2315,
        "timestamp": 1720605966016,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2316,
        "timestamp": 1720605966016,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 2317,
        "timestamp": 1720605966016,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 2318,
        "timestamp": 1720605966017,
        "payload": "UE 1a29: LCID 4: TX     4732777299 RX       11554227 bytes"
    },
    {
        "rowId": 2319,
        "timestamp": 1720605966016,
        "payload": "UE 1a29: ulsch_rounds 204223/1275/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 2320,
        "timestamp": 1720605966016,
        "payload": "UE 1a29: MAC:    TX     4882388812 RX       43478880 bytes"
    },
    {
        "rowId": 2321,
        "timestamp": 1720605967296,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 2322,
        "timestamp": 1720605967296,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 2323,
        "timestamp": 1720605967296,
        "payload": "UE 1a29: dlsch_rounds 1660210/161583/3831/316, dlsch_errors 71, pucch0_DTX 1244, BLER 0.08202 MCS (1) 9"
    },
    {
        "rowId": 2324,
        "timestamp": 1720605967297,
        "payload": "UE 1a29: MAC:    TX     4883761596 RX       43490697 bytes"
    },
    {
        "rowId": 2325,
        "timestamp": 1720605967297,
        "payload": "UE 1a29: LCID 1: TX          12252 RX          88158 bytes"
    },
    {
        "rowId": 2326,
        "timestamp": 1720605967296,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 2327,
        "timestamp": 1720605967296,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2328,
        "timestamp": 1720605967297,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2329,
        "timestamp": 1720605967297,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2330,
        "timestamp": 1720605967296,
        "payload": "UE 1a29: ulsch_rounds 204280/1275/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.5 dB"
    },
    {
        "rowId": 2331,
        "timestamp": 1720605967297,
        "payload": "UE 1a29: LCID 4: TX     4734097413 RX       11557546 bytes"
    },
    {
        "rowId": 2332,
        "timestamp": 1720605968576,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 2333,
        "timestamp": 1720605968576,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 2334,
        "timestamp": 1720605968576,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,1)"
    },
    {
        "rowId": 2335,
        "timestamp": 1720605968576,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2336,
        "timestamp": 1720605968576,
        "payload": "UE 1a29: LCID 1: TX          12255 RX          88180 bytes"
    },
    {
        "rowId": 2337,
        "timestamp": 1720605968576,
        "payload": "UE 1a29: dlsch_rounds 1660695/161619/3831/316, dlsch_errors 71, pucch0_DTX 1244, BLER 0.08200 MCS (1) 9"
    },
    {
        "rowId": 2338,
        "timestamp": 1720605968576,
        "payload": "UE 1a29: ulsch_rounds 204333/1276/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00697 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 2339,
        "timestamp": 1720605968576,
        "payload": "UE 1a29: MAC:    TX     4885128090 RX       43502141 bytes"
    },
    {
        "rowId": 2340,
        "timestamp": 1720605968576,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2341,
        "timestamp": 1720605968576,
        "payload": "UE 1a29: LCID 4: TX     4735413719 RX       11560815 bytes"
    },
    {
        "rowId": 2342,
        "timestamp": 1720605968576,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2343,
        "timestamp": 1720605969856,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 2344,
        "timestamp": 1720605969857,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 2345,
        "timestamp": 1720605969857,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,1)"
    },
    {
        "rowId": 2346,
        "timestamp": 1720605969857,
        "payload": "UE 1a29: ulsch_rounds 204386/1276/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00197 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 2347,
        "timestamp": 1720605969857,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2348,
        "timestamp": 1720605969857,
        "payload": "UE 1a29: dlsch_rounds 1661226/161654/3831/316, dlsch_errors 71, pucch0_DTX 1244, BLER 0.08094 MCS (1) 10"
    },
    {
        "rowId": 2349,
        "timestamp": 1720605969857,
        "payload": "UE 1a29: LCID 1: TX          12261 RX          88224 bytes"
    },
    {
        "rowId": 2350,
        "timestamp": 1720605969857,
        "payload": "UE 1a29: LCID 4: TX     4737002706 RX       11564515 bytes"
    },
    {
        "rowId": 2351,
        "timestamp": 1720605969857,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2352,
        "timestamp": 1720605969857,
        "payload": "UE 1a29: MAC:    TX     4886772285 RX       43513521 bytes"
    },
    {
        "rowId": 2353,
        "timestamp": 1720605969857,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2354,
        "timestamp": 1720605971136,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 2355,
        "timestamp": 1720605971136,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 2356,
        "timestamp": 1720605971136,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2357,
        "timestamp": 1720605971136,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,1)"
    },
    {
        "rowId": 2358,
        "timestamp": 1720605971136,
        "payload": "UE 1a29: ulsch_rounds 204440/1276/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00056 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 2359,
        "timestamp": 1720605971137,
        "payload": "UE 1a29: LCID 4: TX     4738745976 RX       11568184 bytes"
    },
    {
        "rowId": 2360,
        "timestamp": 1720605971136,
        "payload": "UE 1a29: MAC:    TX     4888570238 RX       43525174 bytes"
    },
    {
        "rowId": 2361,
        "timestamp": 1720605971136,
        "payload": "UE 1a29: dlsch_rounds 1661796/161744/3832/316, dlsch_errors 71, pucch0_DTX 1244, BLER 0.14045 MCS (1) 7"
    },
    {
        "rowId": 2362,
        "timestamp": 1720605971137,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2363,
        "timestamp": 1720605971136,
        "payload": "UE 1a29: LCID 1: TX          12264 RX          88246 bytes"
    },
    {
        "rowId": 2364,
        "timestamp": 1720605971136,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2365,
        "timestamp": 1720605972416,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 48 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 2366,
        "timestamp": 1720605972416,
        "payload": "UULLLLUULLLL[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 2367,
        "timestamp": 1720605972416,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2368,
        "timestamp": 1720605972416,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,1)"
    },
    {
        "rowId": 2369,
        "timestamp": 1720605972416,
        "payload": "UE 1a29: dlsch_rounds 1662287/161764/3832/316, dlsch_errors 71, pucch0_DTX 1244, BLER 0.06017 MCS (1) 7"
    },
    {
        "rowId": 2370,
        "timestamp": 1720605972417,
        "payload": "UE 1a29: MAC:    TX     4889860652 RX       43537052 bytes"
    },
    {
        "rowId": 2371,
        "timestamp": 1720605972417,
        "payload": "UE 1a29: LCID 1: TX          12267 RX          88268 bytes"
    },
    {
        "rowId": 2372,
        "timestamp": 1720605972417,
        "payload": "UE 1a29: LCID 4: TX     4739995107 RX       11571611 bytes"
    },
    {
        "rowId": 2373,
        "timestamp": 1720605972417,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2374,
        "timestamp": 1720605972416,
        "payload": "UE 1a29: ulsch_rounds 204495/1277/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00713 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 2375,
        "timestamp": 1720605972417,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2376,
        "timestamp": 1720605973697,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2377,
        "timestamp": 1720605973697,
        "payload": "UE 1a29: MAC:    TX     4891234203 RX       43548271 bytes"
    },
    {
        "rowId": 2378,
        "timestamp": 1720605973696,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2379,
        "timestamp": 1720605973697,
        "payload": "UE 1a29: LCID 1: TX          12270 RX          88290 bytes"
    },
    {
        "rowId": 2380,
        "timestamp": 1720605973697,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2381,
        "timestamp": 1720605973697,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2382,
        "timestamp": 1720605973696,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 2383,
        "timestamp": 1720605973697,
        "payload": "UE 1a29: LCID 4: TX     4741320247 RX       11574872 bytes"
    },
    {
        "rowId": 2384,
        "timestamp": 1720605973696,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2385,
        "timestamp": 1720605973697,
        "payload": "UE 1a29: ulsch_rounds 204547/1278/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.01701 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 2386,
        "timestamp": 1720605973697,
        "payload": "UE 1a29: dlsch_rounds 1662765/161892/3832/316, dlsch_errors 71, pucch0_DTX 1244, BLER 0.26996 MCS (1) 6"
    },
    {
        "rowId": 2387,
        "timestamp": 1720605974976,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 2388,
        "timestamp": 1720605974976,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2389,
        "timestamp": 1720605974977,
        "payload": "UE 1a29: MAC:    TX     4892925519 RX       43559490 bytes"
    },
    {
        "rowId": 2390,
        "timestamp": 1720605974977,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2391,
        "timestamp": 1720605974977,
        "payload": "UE 1a29: LCID 4: TX     4742969452 RX       11578599 bytes"
    },
    {
        "rowId": 2392,
        "timestamp": 1720605974977,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2393,
        "timestamp": 1720605974977,
        "payload": "UE 1a29: ulsch_rounds 204599/1278/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00481 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 2394,
        "timestamp": 1720605974976,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2395,
        "timestamp": 1720605974977,
        "payload": "UE 1a29: LCID 1: TX          12276 RX          88334 bytes"
    },
    {
        "rowId": 2396,
        "timestamp": 1720605974977,
        "payload": "UE 1a29: dlsch_rounds 1663335/161892/3832/316, dlsch_errors 71, pucch0_DTX 1244, BLER 0.07693 MCS (1) 6"
    },
    {
        "rowId": 2397,
        "timestamp": 1720605974976,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2398,
        "timestamp": 1720605976256,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 2399,
        "timestamp": 1720605976256,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 2400,
        "timestamp": 1720605976256,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2401,
        "timestamp": 1720605976256,
        "payload": "UE 1a29: dlsch_rounds 1663890/161934/3832/316, dlsch_errors 71, pucch0_DTX 1244, BLER 0.04153 MCS (1) 11"
    },
    {
        "rowId": 2402,
        "timestamp": 1720605976256,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2403,
        "timestamp": 1720605976256,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2404,
        "timestamp": 1720605976256,
        "payload": "UE 1a29: MAC:    TX     4894592790 RX       43570854 bytes"
    },
    {
        "rowId": 2405,
        "timestamp": 1720605976256,
        "payload": "UE 1a29: ulsch_rounds 204652/1278/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00122 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 2406,
        "timestamp": 1720605976256,
        "payload": "UE 1a29: LCID 1: TX          12279 RX          88356 bytes"
    },
    {
        "rowId": 2407,
        "timestamp": 1720605976256,
        "payload": "UE 1a29: LCID 4: TX     4744591735 RX       11582137 bytes"
    },
    {
        "rowId": 2408,
        "timestamp": 1720605976256,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2409,
        "timestamp": 1720605977536,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 2410,
        "timestamp": 1720605977536,
        "payload": "UE 1a29: ulsch_rounds 204708/1278/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00034 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 2411,
        "timestamp": 1720605977536,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2412,
        "timestamp": 1720605977536,
        "payload": "UE 1a29: dlsch_rounds 1664362/161969/3832/316, dlsch_errors 71, pucch0_DTX 1244, BLER 0.06427 MCS (1) 8"
    },
    {
        "rowId": 2413,
        "timestamp": 1720605977536,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2414,
        "timestamp": 1720605977536,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2415,
        "timestamp": 1720605977536,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2416,
        "timestamp": 1720605977536,
        "payload": "UE 1a29: LCID 4: TX     4745878262 RX       11585594 bytes"
    },
    {
        "rowId": 2417,
        "timestamp": 1720605977536,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2418,
        "timestamp": 1720605977536,
        "payload": "UE 1a29: MAC:    TX     4895926395 RX       43582462 bytes"
    },
    {
        "rowId": 2419,
        "timestamp": 1720605977536,
        "payload": "UE 1a29: LCID 1: TX          12282 RX          88378 bytes"
    },
    {
        "rowId": 2420,
        "timestamp": 1720605978816,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2421,
        "timestamp": 1720605978816,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2422,
        "timestamp": 1720605978816,
        "payload": "UE 1a29: dlsch_rounds 1664866/162032/3832/316, dlsch_errors 71, pucch0_DTX 1244, BLER 0.10822 MCS (1) 10"
    },
    {
        "rowId": 2423,
        "timestamp": 1720605978816,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 48 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 2424,
        "timestamp": 1720605978816,
        "payload": "UE 1a29: LCID 1: TX          12285 RX          88400 bytes"
    },
    {
        "rowId": 2425,
        "timestamp": 1720605978816,
        "payload": "UE 1a29: MAC:    TX     4897401426 RX       43593250 bytes"
    },
    {
        "rowId": 2426,
        "timestamp": 1720605978816,
        "payload": "UE 1a29: ulsch_rounds 204760/1278/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00010 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 2427,
        "timestamp": 1720605978817,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2428,
        "timestamp": 1720605978817,
        "payload": "UE 1a29: LCID 4: TX     4747299148 RX       11588892 bytes"
    },
    {
        "rowId": 2429,
        "timestamp": 1720605978817,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2430,
        "timestamp": 1720605978816,
        "payload": "UULLLL[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 2431,
        "timestamp": 1720605980096,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 2432,
        "timestamp": 1720605980096,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 2433,
        "timestamp": 1720605980096,
        "payload": "UE 1a29: ulsch_rounds 204813/1278/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00002 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 2434,
        "timestamp": 1720605980096,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2435,
        "timestamp": 1720605980096,
        "payload": "UE 1a29: dlsch_rounds 1665448/162091/3832/316, dlsch_errors 71, pucch0_DTX 1244, BLER 0.11951 MCS (1) 11"
    },
    {
        "rowId": 2436,
        "timestamp": 1720605980096,
        "payload": "UE 1a29: MAC:    TX     4899202255 RX       43604263 bytes"
    },
    {
        "rowId": 2437,
        "timestamp": 1720605980096,
        "payload": "UE 1a29: LCID 1: TX          12291 RX          88444 bytes"
    },
    {
        "rowId": 2438,
        "timestamp": 1720605980096,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2439,
        "timestamp": 1720605980096,
        "payload": "UE 1a29: LCID 4: TX     4749040742 RX       11592674 bytes"
    },
    {
        "rowId": 2440,
        "timestamp": 1720605980096,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2441,
        "timestamp": 1720605980096,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2442,
        "timestamp": 1720605981376,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 2443,
        "timestamp": 1720605981376,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 2444,
        "timestamp": 1720605981376,
        "payload": "UE 1a29: ulsch_rounds 204868/1278/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00001 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 2445,
        "timestamp": 1720605981377,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2446,
        "timestamp": 1720605981376,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2447,
        "timestamp": 1720605981376,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2448,
        "timestamp": 1720605981376,
        "payload": "UE 1a29: dlsch_rounds 1665974/162121/3832/316, dlsch_errors 71, pucch0_DTX 1244, BLER 0.06862 MCS (1) 12"
    },
    {
        "rowId": 2449,
        "timestamp": 1720605981377,
        "payload": "UE 1a29: LCID 1: TX          12294 RX          88466 bytes"
    },
    {
        "rowId": 2450,
        "timestamp": 1720605981377,
        "payload": "UE 1a29: LCID 4: TX     4750562380 RX       11596239 bytes"
    },
    {
        "rowId": 2451,
        "timestamp": 1720605981377,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2452,
        "timestamp": 1720605981376,
        "payload": "UE 1a29: MAC:    TX     4900785048 RX       43615662 bytes"
    },
    {
        "rowId": 2453,
        "timestamp": 1720605982656,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 2454,
        "timestamp": 1720605982656,
        "payload": "UE 1a29: dlsch_rounds 1666489/162165/3832/316, dlsch_errors 71, pucch0_DTX 1244, BLER 0.07261 MCS (1) 11"
    },
    {
        "rowId": 2455,
        "timestamp": 1720605982656,
        "payload": "UE 1a29: ulsch_rounds 204930/1282/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.02053 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 2456,
        "timestamp": 1720605982656,
        "payload": "UE 1a29: MAC:    TX     4902216487 RX       43630839 bytes"
    },
    {
        "rowId": 2457,
        "timestamp": 1720605982656,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2458,
        "timestamp": 1720605982656,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2459,
        "timestamp": 1720605982656,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2460,
        "timestamp": 1720605982656,
        "payload": "UE 1a29: LCID 1: TX          12297 RX          88488 bytes"
    },
    {
        "rowId": 2461,
        "timestamp": 1720605982656,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2462,
        "timestamp": 1720605982656,
        "payload": "UE 1a29: LCID 4: TX     4751934981 RX       11602438 bytes"
    },
    {
        "rowId": 2463,
        "timestamp": 1720605982656,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2464,
        "timestamp": 1720605983936,
        "payload": "UULLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 2465,
        "timestamp": 1720605983936,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2466,
        "timestamp": 1720605983936,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2467,
        "timestamp": 1720605983936,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2468,
        "timestamp": 1720605983936,
        "payload": "UE 1a29: ulsch_rounds 204985/1283/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.01459 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 2469,
        "timestamp": 1720605983936,
        "payload": "UE 1a29: dlsch_rounds 1667001/162245/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.14216 MCS (1) 10"
    },
    {
        "rowId": 2470,
        "timestamp": 1720605983936,
        "payload": "UE 1a29: MAC:    TX     4903771375 RX       43642701 bytes"
    },
    {
        "rowId": 2471,
        "timestamp": 1720605983936,
        "payload": "UE 1a29: LCID 1: TX          12303 RX          88532 bytes"
    },
    {
        "rowId": 2472,
        "timestamp": 1720605983936,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2473,
        "timestamp": 1720605983936,
        "payload": "UE 1a29: LCID 4: TX     4753428727 RX       11606085 bytes"
    },
    {
        "rowId": 2474,
        "timestamp": 1720605983937,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2475,
        "timestamp": 1720605985216,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 2476,
        "timestamp": 1720605985217,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2477,
        "timestamp": 1720605985217,
        "payload": "UE 1a29: LCID 4: TX     4755258742 RX       11609768 bytes"
    },
    {
        "rowId": 2478,
        "timestamp": 1720605985216,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2479,
        "timestamp": 1720605985217,
        "payload": "UE 1a29: ulsch_rounds 205037/1284/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.02212 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.5 dB"
    },
    {
        "rowId": 2480,
        "timestamp": 1720605985216,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2481,
        "timestamp": 1720605985217,
        "payload": "UE 1a29: LCID 1: TX          12306 RX          88554 bytes"
    },
    {
        "rowId": 2482,
        "timestamp": 1720605985217,
        "payload": "UE 1a29: MAC:    TX     4905660934 RX       43653856 bytes"
    },
    {
        "rowId": 2483,
        "timestamp": 1720605985216,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 2484,
        "timestamp": 1720605985217,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2485,
        "timestamp": 1720605985216,
        "payload": "UE 1a29: dlsch_rounds 1667591/162276/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.09522 MCS (1) 13"
    },
    {
        "rowId": 2486,
        "timestamp": 1720605986496,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 2487,
        "timestamp": 1720605986496,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2488,
        "timestamp": 1720605986497,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2489,
        "timestamp": 1720605986497,
        "payload": "UE 1a29: MAC:    TX     4907099032 RX       43665300 bytes"
    },
    {
        "rowId": 2490,
        "timestamp": 1720605986497,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2491,
        "timestamp": 1720605986497,
        "payload": "UE 1a29: dlsch_rounds 1668083/162350/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.08641 MCS (1) 7"
    },
    {
        "rowId": 2492,
        "timestamp": 1720605986497,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2493,
        "timestamp": 1720605986497,
        "payload": "UE 1a29: LCID 1: TX          12309 RX          88576 bytes"
    },
    {
        "rowId": 2494,
        "timestamp": 1720605986497,
        "payload": "UE 1a29: LCID 4: TX     4756646644 RX       11613131 bytes"
    },
    {
        "rowId": 2495,
        "timestamp": 1720605986497,
        "payload": "UE 1a29: ulsch_rounds 205090/1285/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.02425 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.0 dB"
    },
    {
        "rowId": 2496,
        "timestamp": 1720605986497,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2497,
        "timestamp": 1720605987776,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 2498,
        "timestamp": 1720605987776,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2499,
        "timestamp": 1720605987776,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2500,
        "timestamp": 1720605987776,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2501,
        "timestamp": 1720605987776,
        "payload": "UE 1a29: ulsch_rounds 205146/1285/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00616 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 2502,
        "timestamp": 1720605987776,
        "payload": "UE 1a29: LCID 4: TX     4757996302 RX       11616740 bytes"
    },
    {
        "rowId": 2503,
        "timestamp": 1720605987776,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2504,
        "timestamp": 1720605987776,
        "payload": "UE 1a29: MAC:    TX     4908498363 RX       43676908 bytes"
    },
    {
        "rowId": 2505,
        "timestamp": 1720605987776,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2506,
        "timestamp": 1720605987776,
        "payload": "UE 1a29: LCID 1: TX          12312 RX          88598 bytes"
    },
    {
        "rowId": 2507,
        "timestamp": 1720605987776,
        "payload": "UE 1a29: dlsch_rounds 1668565/162380/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.07262 MCS (1) 13"
    },
    {
        "rowId": 2508,
        "timestamp": 1720605989056,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2509,
        "timestamp": 1720605989056,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 2510,
        "timestamp": 1720605989057,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2511,
        "timestamp": 1720605989057,
        "payload": "UE 1a29: MAC:    TX     4910073668 RX       43687921 bytes"
    },
    {
        "rowId": 2512,
        "timestamp": 1720605989057,
        "payload": "UE 1a29: ulsch_rounds 205199/1285/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00174 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 2513,
        "timestamp": 1720605989057,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2514,
        "timestamp": 1720605989057,
        "payload": "UE 1a29: LCID 1: TX          12318 RX          88642 bytes"
    },
    {
        "rowId": 2515,
        "timestamp": 1720605989057,
        "payload": "UE 1a29: dlsch_rounds 1669077/162429/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.06966 MCS (1) 9"
    },
    {
        "rowId": 2516,
        "timestamp": 1720605989057,
        "payload": "UE 1a29: LCID 4: TX     4759519175 RX       11620057 bytes"
    },
    {
        "rowId": 2517,
        "timestamp": 1720605989057,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2518,
        "timestamp": 1720605989057,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2519,
        "timestamp": 1720605990336,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 2520,
        "timestamp": 1720605990336,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 2521,
        "timestamp": 1720605990337,
        "payload": "UE 1a29: MAC:    TX     4911920349 RX       43699574 bytes"
    },
    {
        "rowId": 2522,
        "timestamp": 1720605990337,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2523,
        "timestamp": 1720605990337,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2524,
        "timestamp": 1720605990337,
        "payload": "UE 1a29: LCID 4: TX     4761306303 RX       11623832 bytes"
    },
    {
        "rowId": 2525,
        "timestamp": 1720605990337,
        "payload": "UE 1a29: dlsch_rounds 1669658/162542/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.18298 MCS (1) 8"
    },
    {
        "rowId": 2526,
        "timestamp": 1720605990337,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2527,
        "timestamp": 1720605990337,
        "payload": "UE 1a29: ulsch_rounds 205253/1285/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00044 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 2528,
        "timestamp": 1720605990337,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2529,
        "timestamp": 1720605990337,
        "payload": "UE 1a29: LCID 1: TX          12321 RX          88664 bytes"
    },
    {
        "rowId": 2530,
        "timestamp": 1720605991616,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2531,
        "timestamp": 1720605991616,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 2532,
        "timestamp": 1720605991616,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 2533,
        "timestamp": 1720605991616,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2534,
        "timestamp": 1720605991616,
        "payload": "UE 1a29: ulsch_rounds 205306/1286/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.01679 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 2535,
        "timestamp": 1720605991617,
        "payload": "UE 1a29: LCID 1: TX          12324 RX          88686 bytes"
    },
    {
        "rowId": 2536,
        "timestamp": 1720605991617,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2537,
        "timestamp": 1720605991617,
        "payload": "UE 1a29: MAC:    TX     4913269445 RX       43710986 bytes"
    },
    {
        "rowId": 2538,
        "timestamp": 1720605991616,
        "payload": "UE 1a29: dlsch_rounds 1670164/162543/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.04824 MCS (1) 7"
    },
    {
        "rowId": 2539,
        "timestamp": 1720605991617,
        "payload": "UE 1a29: LCID 4: TX     4762619622 RX       11627456 bytes"
    },
    {
        "rowId": 2540,
        "timestamp": 1720605991617,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2541,
        "timestamp": 1720605992896,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2542,
        "timestamp": 1720605992896,
        "payload": "UE 1a29: dlsch_rounds 1670667/162610/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.11787 MCS (1) 10"
    },
    {
        "rowId": 2543,
        "timestamp": 1720605992896,
        "payload": "UE 1a29: MAC:    TX     4914697124 RX       43723263 bytes"
    },
    {
        "rowId": 2544,
        "timestamp": 1720605992896,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2545,
        "timestamp": 1720605992896,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 2546,
        "timestamp": 1720605992896,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2547,
        "timestamp": 1720605992896,
        "payload": "UE 1a29: ulsch_rounds 205361/1287/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.01689 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 2548,
        "timestamp": 1720605992896,
        "payload": "UE 1a29: LCID 1: TX          12327 RX          88708 bytes"
    },
    {
        "rowId": 2549,
        "timestamp": 1720605992896,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2550,
        "timestamp": 1720605992897,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2551,
        "timestamp": 1720605992896,
        "payload": "UE 1a29: LCID 4: TX     4763990768 RX       11630965 bytes"
    },
    {
        "rowId": 2552,
        "timestamp": 1720605994176,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 2553,
        "timestamp": 1720605994177,
        "payload": "UE 1a29: dlsch_rounds 1671195/162631/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.05831 MCS (1) 10"
    },
    {
        "rowId": 2554,
        "timestamp": 1720605994177,
        "payload": "UE 1a29: LCID 4: TX     4765515432 RX       11634449 bytes"
    },
    {
        "rowId": 2555,
        "timestamp": 1720605994177,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2556,
        "timestamp": 1720605994177,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2557,
        "timestamp": 1720605994176,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2558,
        "timestamp": 1720605994176,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2559,
        "timestamp": 1720605994176,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2560,
        "timestamp": 1720605994177,
        "payload": "UE 1a29: ulsch_rounds 205412/1287/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00429 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 21.5 dB"
    },
    {
        "rowId": 2561,
        "timestamp": 1720605994177,
        "payload": "UE 1a29: LCID 1: TX          12333 RX          88752 bytes"
    },
    {
        "rowId": 2562,
        "timestamp": 1720605994177,
        "payload": "UE 1a29: MAC:    TX     4916277346 RX       43733842 bytes"
    },
    {
        "rowId": 2563,
        "timestamp": 1720605995456,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2564,
        "timestamp": 1720605995456,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 2565,
        "timestamp": 1720605995456,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2566,
        "timestamp": 1720605995456,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2567,
        "timestamp": 1720605995457,
        "payload": "UE 1a29: dlsch_rounds 1671762/162708/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.09256 MCS (1) 10"
    },
    {
        "rowId": 2568,
        "timestamp": 1720605995457,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2569,
        "timestamp": 1720605995457,
        "payload": "UE 1a29: LCID 4: TX     4767285033 RX       11638126 bytes"
    },
    {
        "rowId": 2570,
        "timestamp": 1720605995457,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2571,
        "timestamp": 1720605995457,
        "payload": "UE 1a29: ulsch_rounds 205464/1287/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00121 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.5 dB"
    },
    {
        "rowId": 2572,
        "timestamp": 1720605995457,
        "payload": "UE 1a29: LCID 1: TX          12336 RX          88774 bytes"
    },
    {
        "rowId": 2573,
        "timestamp": 1720605995457,
        "payload": "UE 1a29: MAC:    TX     4918106218 RX       43745077 bytes"
    },
    {
        "rowId": 2574,
        "timestamp": 1720605996736,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 2575,
        "timestamp": 1720605996736,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2576,
        "timestamp": 1720605996736,
        "payload": "UE 1a29: dlsch_rounds 1672258/162748/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.05922 MCS (1) 10"
    },
    {
        "rowId": 2577,
        "timestamp": 1720605996737,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2578,
        "timestamp": 1720605996737,
        "payload": "UE 1a29: LCID 4: TX     4768612135 RX       11641434 bytes"
    },
    {
        "rowId": 2579,
        "timestamp": 1720605996736,
        "payload": "UE 1a29: ulsch_rounds 205516/1287/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00034 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 2580,
        "timestamp": 1720605996737,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2581,
        "timestamp": 1720605996736,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2582,
        "timestamp": 1720605996736,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 2583,
        "timestamp": 1720605996736,
        "payload": "UE 1a29: LCID 1: TX          12339 RX          88796 bytes"
    },
    {
        "rowId": 2584,
        "timestamp": 1720605996736,
        "payload": "UE 1a29: MAC:    TX     4919489035 RX       43756280 bytes"
    },
    {
        "rowId": 2585,
        "timestamp": 1720605998016,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 2586,
        "timestamp": 1720605998016,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2587,
        "timestamp": 1720605998017,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2588,
        "timestamp": 1720605998017,
        "payload": "UE 1a29: ulsch_rounds 205567/1287/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00009 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 2589,
        "timestamp": 1720605998017,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2590,
        "timestamp": 1720605998017,
        "payload": "UE 1a29: dlsch_rounds 1672754/162777/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.04789 MCS (1) 11"
    },
    {
        "rowId": 2591,
        "timestamp": 1720605998017,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2592,
        "timestamp": 1720605998017,
        "payload": "UE 1a29: LCID 1: TX          12342 RX          88818 bytes"
    },
    {
        "rowId": 2593,
        "timestamp": 1720605998017,
        "payload": "UE 1a29: LCID 4: TX     4769961944 RX       11644722 bytes"
    },
    {
        "rowId": 2594,
        "timestamp": 1720605998017,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2595,
        "timestamp": 1720605998017,
        "payload": "UE 1a29: MAC:    TX     4920890211 RX       43766875 bytes"
    },
    {
        "rowId": 2596,
        "timestamp": 1720605999296,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 2597,
        "timestamp": 1720605999297,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2598,
        "timestamp": 1720605999296,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 2599,
        "timestamp": 1720605999297,
        "payload": "UE 1a29: MAC:    TX     4922512843 RX       43777856 bytes"
    },
    {
        "rowId": 2600,
        "timestamp": 1720605999297,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2601,
        "timestamp": 1720605999297,
        "payload": "UE 1a29: LCID 4: TX     4771517150 RX       11648401 bytes"
    },
    {
        "rowId": 2602,
        "timestamp": 1720605999297,
        "payload": "UE 1a29: ulsch_rounds 205620/1287/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00002 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.5 dB"
    },
    {
        "rowId": 2603,
        "timestamp": 1720605999297,
        "payload": "UE 1a29: LCID 1: TX          12348 RX          88862 bytes"
    },
    {
        "rowId": 2604,
        "timestamp": 1720605999297,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2605,
        "timestamp": 1720605999297,
        "payload": "UE 1a29: dlsch_rounds 1673268/162858/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.11973 MCS (1) 11"
    },
    {
        "rowId": 2606,
        "timestamp": 1720605999297,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2607,
        "timestamp": 1720606000576,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 2608,
        "timestamp": 1720606000577,
        "payload": "UE 1a29: LCID 4: TX     4773328417 RX       11652055 bytes"
    },
    {
        "rowId": 2609,
        "timestamp": 1720606000576,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2610,
        "timestamp": 1720606000577,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2611,
        "timestamp": 1720606000576,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2612,
        "timestamp": 1720606000576,
        "payload": "UE 1a29: MAC:    TX     4924388719 RX       43789522 bytes"
    },
    {
        "rowId": 2613,
        "timestamp": 1720606000576,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2614,
        "timestamp": 1720606000576,
        "payload": "UE 1a29: ulsch_rounds 205672/1289/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.01869 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.0 dB"
    },
    {
        "rowId": 2615,
        "timestamp": 1720606000576,
        "payload": "UE 1a29: dlsch_rounds 1673849/162920/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.18077 MCS (1) 12"
    },
    {
        "rowId": 2616,
        "timestamp": 1720606000577,
        "payload": "UE 1a29: LCID 1: TX          12351 RX          88884 bytes"
    },
    {
        "rowId": 2617,
        "timestamp": 1720606000577,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2618,
        "timestamp": 1720606001856,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 2619,
        "timestamp": 1720606001856,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2620,
        "timestamp": 1720606001856,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2621,
        "timestamp": 1720606001856,
        "payload": "UE 1a29: ulsch_rounds 205731/1291/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.03475 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 2622,
        "timestamp": 1720606001856,
        "payload": "UE 1a29: MAC:    TX     4925729555 RX       43802619 bytes"
    },
    {
        "rowId": 2623,
        "timestamp": 1720606001856,
        "payload": "UE 1a29: dlsch_rounds 1674336/162924/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.05454 MCS (1) 10"
    },
    {
        "rowId": 2624,
        "timestamp": 1720606001856,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2625,
        "timestamp": 1720606001856,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2626,
        "timestamp": 1720606001856,
        "payload": "UE 1a29: LCID 1: TX          12354 RX          88906 bytes"
    },
    {
        "rowId": 2627,
        "timestamp": 1720606001856,
        "payload": "UE 1a29: LCID 4: TX     4774615462 RX       11655622 bytes"
    },
    {
        "rowId": 2628,
        "timestamp": 1720606001857,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2629,
        "timestamp": 1720606003136,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2630,
        "timestamp": 1720606003136,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2631,
        "timestamp": 1720606003136,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 2632,
        "timestamp": 1720606003137,
        "payload": "UE 1a29: MAC:    TX     4927132749 RX       43815121 bytes"
    },
    {
        "rowId": 2633,
        "timestamp": 1720606003137,
        "payload": "UE 1a29: LCID 1: TX          12357 RX          88928 bytes"
    },
    {
        "rowId": 2634,
        "timestamp": 1720606003137,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2635,
        "timestamp": 1720606003136,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2636,
        "timestamp": 1720606003137,
        "payload": "UE 1a29: dlsch_rounds 1674839/162946/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.05297 MCS (1) 13"
    },
    {
        "rowId": 2637,
        "timestamp": 1720606003137,
        "payload": "UE 1a29: LCID 4: TX     4775951433 RX       11658980 bytes"
    },
    {
        "rowId": 2638,
        "timestamp": 1720606003137,
        "payload": "UE 1a29: ulsch_rounds 205787/1292/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.02601 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 2639,
        "timestamp": 1720606003137,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2640,
        "timestamp": 1720606004416,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 2641,
        "timestamp": 1720606004416,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2642,
        "timestamp": 1720606004416,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2643,
        "timestamp": 1720606004416,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2644,
        "timestamp": 1720606004417,
        "payload": "UE 1a29: MAC:    TX     4928802992 RX       43828234 bytes"
    },
    {
        "rowId": 2645,
        "timestamp": 1720606004417,
        "payload": "UE 1a29: ulsch_rounds 205846/1294/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.03693 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 2646,
        "timestamp": 1720606004417,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2647,
        "timestamp": 1720606004417,
        "payload": "UE 1a29: LCID 4: TX     4777549174 RX       11662717 bytes"
    },
    {
        "rowId": 2648,
        "timestamp": 1720606004417,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2649,
        "timestamp": 1720606004417,
        "payload": "UE 1a29: LCID 1: TX          12363 RX          88972 bytes"
    },
    {
        "rowId": 2650,
        "timestamp": 1720606004417,
        "payload": "UE 1a29: dlsch_rounds 1675379/162995/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.06852 MCS (1) 13"
    },
    {
        "rowId": 2651,
        "timestamp": 1720606005696,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 2652,
        "timestamp": 1720606005697,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2653,
        "timestamp": 1720606005697,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2654,
        "timestamp": 1720606005697,
        "payload": "UE 1a29: LCID 4: TX     4779268158 RX       11666313 bytes"
    },
    {
        "rowId": 2655,
        "timestamp": 1720606005697,
        "payload": "UE 1a29: dlsch_rounds 1675952/163091/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.14527 MCS (1) 12"
    },
    {
        "rowId": 2656,
        "timestamp": 1720606005697,
        "payload": "UE 1a29: MAC:    TX     4930594006 RX       43839456 bytes"
    },
    {
        "rowId": 2657,
        "timestamp": 1720606005696,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2658,
        "timestamp": 1720606005697,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2659,
        "timestamp": 1720606005696,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2660,
        "timestamp": 1720606005697,
        "payload": "UE 1a29: LCID 1: TX          12366 RX          88994 bytes"
    },
    {
        "rowId": 2661,
        "timestamp": 1720606005697,
        "payload": "UE 1a29: ulsch_rounds 205900/1294/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00939 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 2662,
        "timestamp": 1720606006976,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2663,
        "timestamp": 1720606006976,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2664,
        "timestamp": 1720606006977,
        "payload": "UE 1a29: LCID 1: TX          12369 RX          89016 bytes"
    },
    {
        "rowId": 2665,
        "timestamp": 1720606006977,
        "payload": "UE 1a29: MAC:    TX     4931904707 RX       43850820 bytes"
    },
    {
        "rowId": 2666,
        "timestamp": 1720606006977,
        "payload": "UE 1a29: ulsch_rounds 205953/1294/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00265 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 28.5 dB"
    },
    {
        "rowId": 2667,
        "timestamp": 1720606006977,
        "payload": "UE 1a29: LCID 4: TX     4780531094 RX       11669662 bytes"
    },
    {
        "rowId": 2668,
        "timestamp": 1720606006977,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2669,
        "timestamp": 1720606006977,
        "payload": "UE 1a29: dlsch_rounds 1676415/163116/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.06745 MCS (1) 9"
    },
    {
        "rowId": 2670,
        "timestamp": 1720606006977,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2671,
        "timestamp": 1720606006977,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2672,
        "timestamp": 1720606006976,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 2673,
        "timestamp": 1720606008256,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 2674,
        "timestamp": 1720606008256,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2675,
        "timestamp": 1720606008257,
        "payload": "UE 1a29: ulsch_rounds 206006/1294/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00075 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 2676,
        "timestamp": 1720606008256,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2677,
        "timestamp": 1720606008256,
        "payload": "UE 1a29: dlsch_rounds 1676890/163140/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.06422 MCS (1) 13"
    },
    {
        "rowId": 2678,
        "timestamp": 1720606008256,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2679,
        "timestamp": 1720606008257,
        "payload": "UE 1a29: MAC:    TX     4933312271 RX       43861817 bytes"
    },
    {
        "rowId": 2680,
        "timestamp": 1720606008257,
        "payload": "UE 1a29: LCID 1: TX          12372 RX          89038 bytes"
    },
    {
        "rowId": 2681,
        "timestamp": 1720606008257,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2682,
        "timestamp": 1720606008257,
        "payload": "UE 1a29: LCID 4: TX     4781879966 RX       11672909 bytes"
    },
    {
        "rowId": 2683,
        "timestamp": 1720606008257,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2684,
        "timestamp": 1720606009536,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 2685,
        "timestamp": 1720606009536,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2686,
        "timestamp": 1720606009536,
        "payload": "UE 1a29: ulsch_rounds 206059/1296/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.03441 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 2687,
        "timestamp": 1720606009537,
        "payload": "UE 1a29: LCID 4: TX     4783572551 RX       11676507 bytes"
    },
    {
        "rowId": 2688,
        "timestamp": 1720606009537,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2689,
        "timestamp": 1720606009536,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2690,
        "timestamp": 1720606009536,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2691,
        "timestamp": 1720606009536,
        "payload": "UE 1a29: dlsch_rounds 1677440/163155/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.03451 MCS (1) 13"
    },
    {
        "rowId": 2692,
        "timestamp": 1720606009537,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2693,
        "timestamp": 1720606009537,
        "payload": "UE 1a29: MAC:    TX     4935073921 RX       43873676 bytes"
    },
    {
        "rowId": 2694,
        "timestamp": 1720606009537,
        "payload": "UE 1a29: LCID 1: TX          12378 RX          89082 bytes"
    },
    {
        "rowId": 2695,
        "timestamp": 1720606010816,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 2696,
        "timestamp": 1720606010816,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2697,
        "timestamp": 1720606010817,
        "payload": "UE 1a29: ulsch_rounds 206114/1296/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00875 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 2698,
        "timestamp": 1720606010817,
        "payload": "UE 1a29: dlsch_rounds 1677995/163176/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.03464 MCS (1) 13"
    },
    {
        "rowId": 2699,
        "timestamp": 1720606010817,
        "payload": "UE 1a29: LCID 4: TX     4785145800 RX       11680135 bytes"
    },
    {
        "rowId": 2700,
        "timestamp": 1720606010816,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2701,
        "timestamp": 1720606010817,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2702,
        "timestamp": 1720606010817,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2703,
        "timestamp": 1720606010817,
        "payload": "UE 1a29: MAC:    TX     4936719265 RX       43885538 bytes"
    },
    {
        "rowId": 2704,
        "timestamp": 1720606010817,
        "payload": "UE 1a29: LCID 1: TX          12381 RX          89104 bytes"
    },
    {
        "rowId": 2705,
        "timestamp": 1720606010816,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2706,
        "timestamp": 1720606012096,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 2707,
        "timestamp": 1720606012096,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2708,
        "timestamp": 1720606012097,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2709,
        "timestamp": 1720606012097,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2710,
        "timestamp": 1720606012097,
        "payload": "UE 1a29: MAC:    TX     4938068299 RX       43897786 bytes"
    },
    {
        "rowId": 2711,
        "timestamp": 1720606012097,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2712,
        "timestamp": 1720606012097,
        "payload": "UE 1a29: dlsch_rounds 1678488/163224/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.10914 MCS (1) 13"
    },
    {
        "rowId": 2713,
        "timestamp": 1720606012097,
        "payload": "UE 1a29: ulsch_rounds 206171/1297/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.01597 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 2714,
        "timestamp": 1720606012097,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2715,
        "timestamp": 1720606012097,
        "payload": "UE 1a29: LCID 4: TX     4786425579 RX       11683471 bytes"
    },
    {
        "rowId": 2716,
        "timestamp": 1720606012097,
        "payload": "UE 1a29: LCID 1: TX          12384 RX          89126 bytes"
    },
    {
        "rowId": 2717,
        "timestamp": 1720606013376,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2718,
        "timestamp": 1720606013377,
        "payload": "UE 1a29: MAC:    TX     4939504131 RX       43910066 bytes"
    },
    {
        "rowId": 2719,
        "timestamp": 1720606013377,
        "payload": "UE 1a29: LCID 4: TX     4787794301 RX       11686787 bytes"
    },
    {
        "rowId": 2720,
        "timestamp": 1720606013377,
        "payload": "UE 1a29: dlsch_rounds 1678975/163271/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.12644 MCS (1) 13"
    },
    {
        "rowId": 2721,
        "timestamp": 1720606013377,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2722,
        "timestamp": 1720606013377,
        "payload": "UE 1a29: ulsch_rounds 206228/1298/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00929 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 2723,
        "timestamp": 1720606013377,
        "payload": "UE 1a29: LCID 1: TX          12387 RX          89148 bytes"
    },
    {
        "rowId": 2724,
        "timestamp": 1720606013376,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 2725,
        "timestamp": 1720606013377,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2726,
        "timestamp": 1720606013376,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 2727,
        "timestamp": 1720606013377,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2728,
        "timestamp": 1720606014656,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 2729,
        "timestamp": 1720606014656,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 2730,
        "timestamp": 1720606014656,
        "payload": "UE 1a29: LCID 1: TX          12393 RX          89192 bytes"
    },
    {
        "rowId": 2731,
        "timestamp": 1720606014656,
        "payload": "UE 1a29: MAC:    TX     4941321403 RX       43922893 bytes"
    },
    {
        "rowId": 2732,
        "timestamp": 1720606014656,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2733,
        "timestamp": 1720606014656,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2734,
        "timestamp": 1720606014656,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2735,
        "timestamp": 1720606014656,
        "payload": "UE 1a29: dlsch_rounds 1679571/163349/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.14676 MCS (1) 7"
    },
    {
        "rowId": 2736,
        "timestamp": 1720606014656,
        "payload": "UE 1a29: ulsch_rounds 206288/1299/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00292 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 2737,
        "timestamp": 1720606014656,
        "payload": "UE 1a29: LCID 4: TX     4789544242 RX       11690576 bytes"
    },
    {
        "rowId": 2738,
        "timestamp": 1720606014656,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2739,
        "timestamp": 1720606015936,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 2740,
        "timestamp": 1720606015937,
        "payload": "UE 1a29: MAC:    TX     4942835665 RX       43936189 bytes"
    },
    {
        "rowId": 2741,
        "timestamp": 1720606015936,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2742,
        "timestamp": 1720606015936,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2743,
        "timestamp": 1720606015936,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2744,
        "timestamp": 1720606015937,
        "payload": "UE 1a29: LCID 1: TX          12396 RX          89214 bytes"
    },
    {
        "rowId": 2745,
        "timestamp": 1720606015937,
        "payload": "UE 1a29: ulsch_rounds 206352/1299/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00478 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 2746,
        "timestamp": 1720606015936,
        "payload": "UE 1a29: dlsch_rounds 1680102/163351/3833/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.03730 MCS (1) 10"
    },
    {
        "rowId": 2747,
        "timestamp": 1720606015937,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2748,
        "timestamp": 1720606015937,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2749,
        "timestamp": 1720606015937,
        "payload": "UE 1a29: LCID 4: TX     4791011679 RX       11694091 bytes"
    },
    {
        "rowId": 2750,
        "timestamp": 1720606017216,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 2751,
        "timestamp": 1720606017216,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 2752,
        "timestamp": 1720606017216,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2753,
        "timestamp": 1720606017217,
        "payload": "UE 1a29: ulsch_rounds 206407/1299/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00135 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 2754,
        "timestamp": 1720606017216,
        "payload": "UE 1a29: dlsch_rounds 1680577/163434/3835/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.15491 MCS (1) 12"
    },
    {
        "rowId": 2755,
        "timestamp": 1720606017217,
        "payload": "UE 1a29: LCID 1: TX          12399 RX          89236 bytes"
    },
    {
        "rowId": 2756,
        "timestamp": 1720606017217,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2757,
        "timestamp": 1720606017217,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2758,
        "timestamp": 1720606017217,
        "payload": "UE 1a29: LCID 4: TX     4792305483 RX       11697374 bytes"
    },
    {
        "rowId": 2759,
        "timestamp": 1720606017217,
        "payload": "UE 1a29: MAC:    TX     4944192435 RX       43947588 bytes"
    },
    {
        "rowId": 2760,
        "timestamp": 1720606017216,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2761,
        "timestamp": 1720606018496,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 2762,
        "timestamp": 1720606018496,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 2763,
        "timestamp": 1720606018497,
        "payload": "UE 1a29: LCID 4: TX     4793766602 RX       11700884 bytes"
    },
    {
        "rowId": 2764,
        "timestamp": 1720606018496,
        "payload": "UE 1a29: MAC:    TX     4945703763 RX       43960450 bytes"
    },
    {
        "rowId": 2765,
        "timestamp": 1720606018496,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2766,
        "timestamp": 1720606018496,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2767,
        "timestamp": 1720606018496,
        "payload": "UE 1a29: LCID 1: TX          12402 RX          89258 bytes"
    },
    {
        "rowId": 2768,
        "timestamp": 1720606018497,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2769,
        "timestamp": 1720606018496,
        "payload": "UE 1a29: ulsch_rounds 206469/1299/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00038 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 2770,
        "timestamp": 1720606018496,
        "payload": "UE 1a29: dlsch_rounds 1681107/163450/3835/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.06017 MCS (1) 8"
    },
    {
        "rowId": 2771,
        "timestamp": 1720606018497,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2772,
        "timestamp": 1720606019776,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 2773,
        "timestamp": 1720606019776,
        "payload": "UE 1a29: ulsch_rounds 206525/1299/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00010 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 2774,
        "timestamp": 1720606019777,
        "payload": "UE 1a29: MAC:    TX     4947538633 RX       43972489 bytes"
    },
    {
        "rowId": 2775,
        "timestamp": 1720606019777,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2776,
        "timestamp": 1720606019777,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2777,
        "timestamp": 1720606019777,
        "payload": "UE 1a29: LCID 4: TX     4795537673 RX       11704537 bytes"
    },
    {
        "rowId": 2778,
        "timestamp": 1720606019776,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2779,
        "timestamp": 1720606019776,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2780,
        "timestamp": 1720606019777,
        "payload": "UE 1a29: LCID 1: TX          12408 RX          89302 bytes"
    },
    {
        "rowId": 2781,
        "timestamp": 1720606019776,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2782,
        "timestamp": 1720606019776,
        "payload": "UE 1a29: dlsch_rounds 1681672/163520/3835/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.11598 MCS (1) 13"
    },
    {
        "rowId": 2783,
        "timestamp": 1720606021056,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 2784,
        "timestamp": 1720606021056,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 2785,
        "timestamp": 1720606021057,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2786,
        "timestamp": 1720606021057,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2787,
        "timestamp": 1720606021057,
        "payload": "UE 1a29: dlsch_rounds 1682160/163572/3835/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.13160 MCS (1) 13"
    },
    {
        "rowId": 2788,
        "timestamp": 1720606021057,
        "payload": "UE 1a29: ulsch_rounds 206585/1299/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00003 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 2789,
        "timestamp": 1720606021057,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2790,
        "timestamp": 1720606021057,
        "payload": "UE 1a29: LCID 1: TX          12411 RX          89324 bytes"
    },
    {
        "rowId": 2791,
        "timestamp": 1720606021057,
        "payload": "UE 1a29: LCID 4: TX     4796853577 RX       11708018 bytes"
    },
    {
        "rowId": 2792,
        "timestamp": 1720606021057,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2793,
        "timestamp": 1720606021057,
        "payload": "UE 1a29: MAC:    TX     4948920013 RX       43984981 bytes"
    },
    {
        "rowId": 2794,
        "timestamp": 1720606022336,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2795,
        "timestamp": 1720606022336,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2796,
        "timestamp": 1720606022336,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 2797,
        "timestamp": 1720606022337,
        "payload": "UE 1a29: ulsch_rounds 206644/1299/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00001 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 2798,
        "timestamp": 1720606022337,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2799,
        "timestamp": 1720606022337,
        "payload": "UE 1a29: dlsch_rounds 1682654/163627/3835/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.11975 MCS (1) 13"
    },
    {
        "rowId": 2800,
        "timestamp": 1720606022337,
        "payload": "UE 1a29: LCID 1: TX          12414 RX          89346 bytes"
    },
    {
        "rowId": 2801,
        "timestamp": 1720606022337,
        "payload": "UE 1a29: MAC:    TX     4950308629 RX       43997216 bytes"
    },
    {
        "rowId": 2802,
        "timestamp": 1720606022337,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2803,
        "timestamp": 1720606022337,
        "payload": "UE 1a29: LCID 4: TX     4798174087 RX       11711312 bytes"
    },
    {
        "rowId": 2804,
        "timestamp": 1720606022337,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2805,
        "timestamp": 1720606023616,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2806,
        "timestamp": 1720606023616,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2807,
        "timestamp": 1720606023616,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 2808,
        "timestamp": 1720606023617,
        "payload": "UE 1a29: ulsch_rounds 206701/1299/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 2809,
        "timestamp": 1720606023616,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2810,
        "timestamp": 1720606023617,
        "payload": "UE 1a29: MAC:    TX     4951864350 RX       44009097 bytes"
    },
    {
        "rowId": 2811,
        "timestamp": 1720606023617,
        "payload": "UE 1a29: dlsch_rounds 1683186/163664/3835/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.06880 MCS (1) 11"
    },
    {
        "rowId": 2812,
        "timestamp": 1720606023617,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2813,
        "timestamp": 1720606023617,
        "payload": "UE 1a29: LCID 4: TX     4799669332 RX       11714799 bytes"
    },
    {
        "rowId": 2814,
        "timestamp": 1720606023617,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2815,
        "timestamp": 1720606023617,
        "payload": "UE 1a29: LCID 1: TX          12417 RX          89368 bytes"
    },
    {
        "rowId": 2816,
        "timestamp": 1720606024896,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 2817,
        "timestamp": 1720606024896,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2818,
        "timestamp": 1720606024896,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2819,
        "timestamp": 1720606024896,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2820,
        "timestamp": 1720606024896,
        "payload": "UE 1a29: dlsch_rounds 1683779/163771/3835/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.19960 MCS (1) 13"
    },
    {
        "rowId": 2821,
        "timestamp": 1720606024897,
        "payload": "UE 1a29: ulsch_rounds 206753/1299/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 2822,
        "timestamp": 1720606024897,
        "payload": "UE 1a29: MAC:    TX     4953686454 RX       44019885 bytes"
    },
    {
        "rowId": 2823,
        "timestamp": 1720606024897,
        "payload": "UE 1a29: LCID 1: TX          12423 RX          89412 bytes"
    },
    {
        "rowId": 2824,
        "timestamp": 1720606024897,
        "payload": "UE 1a29: LCID 4: TX     4801421787 RX       11718526 bytes"
    },
    {
        "rowId": 2825,
        "timestamp": 1720606024897,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2826,
        "timestamp": 1720606024897,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2827,
        "timestamp": 1720606026176,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 2828,
        "timestamp": 1720606026176,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2829,
        "timestamp": 1720606026176,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2830,
        "timestamp": 1720606026177,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2831,
        "timestamp": 1720606026177,
        "payload": "UE 1a29: dlsch_rounds 1684260/163771/3835/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.05712 MCS (1) 11"
    },
    {
        "rowId": 2832,
        "timestamp": 1720606026177,
        "payload": "UE 1a29: ulsch_rounds 206811/1300/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00861 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 2833,
        "timestamp": 1720606026177,
        "payload": "UE 1a29: MAC:    TX     4954987831 RX       44032310 bytes"
    },
    {
        "rowId": 2834,
        "timestamp": 1720606026177,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2835,
        "timestamp": 1720606026177,
        "payload": "UE 1a29: LCID 1: TX          12426 RX          89434 bytes"
    },
    {
        "rowId": 2836,
        "timestamp": 1720606027456,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 2837,
        "timestamp": 1720606027456,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2838,
        "timestamp": 1720606027456,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2839,
        "timestamp": 1720606026177,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2840,
        "timestamp": 1720606026177,
        "payload": "UE 1a29: LCID 4: TX     4802664131 RX       11721830 bytes"
    },
    {
        "rowId": 2841,
        "timestamp": 1720606027456,
        "payload": "UE 1a29: dlsch_rounds 1684730/163842/3835/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.12464 MCS (1) 11"
    },
    {
        "rowId": 2842,
        "timestamp": 1720606027456,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2843,
        "timestamp": 1720606027456,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2844,
        "timestamp": 1720606027456,
        "payload": "UE 1a29: MAC:    TX     4956378215 RX       44043706 bytes"
    },
    {
        "rowId": 2845,
        "timestamp": 1720606027456,
        "payload": "UE 1a29: LCID 1: TX          12429 RX          89456 bytes"
    },
    {
        "rowId": 2846,
        "timestamp": 1720606027456,
        "payload": "UE 1a29: ulsch_rounds 206864/1300/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00243 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 2847,
        "timestamp": 1720606027456,
        "payload": "UE 1a29: LCID 4: TX     4803994914 RX       11725126 bytes"
    },
    {
        "rowId": 2848,
        "timestamp": 1720606027456,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2849,
        "timestamp": 1720606028736,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2850,
        "timestamp": 1720606028736,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2851,
        "timestamp": 1720606028736,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2852,
        "timestamp": 1720606028737,
        "payload": "UE 1a29: ulsch_rounds 206919/1300/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00069 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 2853,
        "timestamp": 1720606028737,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2854,
        "timestamp": 1720606028737,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2855,
        "timestamp": 1720606028737,
        "payload": "UE 1a29: LCID 1: TX          12432 RX          89478 bytes"
    },
    {
        "rowId": 2856,
        "timestamp": 1720606028737,
        "payload": "UE 1a29: dlsch_rounds 1685274/163866/3835/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.08637 MCS (1) 13"
    },
    {
        "rowId": 2857,
        "timestamp": 1720606028737,
        "payload": "UE 1a29: LCID 4: TX     4805502683 RX       11728662 bytes"
    },
    {
        "rowId": 2858,
        "timestamp": 1720606028737,
        "payload": "UE 1a29: MAC:    TX     4957952755 RX       44055552 bytes"
    },
    {
        "rowId": 2859,
        "timestamp": 1720606030016,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 2860,
        "timestamp": 1720606030016,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2861,
        "timestamp": 1720606030017,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2862,
        "timestamp": 1720606030016,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2863,
        "timestamp": 1720606030017,
        "payload": "UE 1a29: LCID 1: TX          12438 RX          89522 bytes"
    },
    {
        "rowId": 2864,
        "timestamp": 1720606030017,
        "payload": "UE 1a29: LCID 4: TX     4807217564 RX       11732515 bytes"
    },
    {
        "rowId": 2865,
        "timestamp": 1720606030017,
        "payload": "UE 1a29: dlsch_rounds 1685860/163939/3835/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.12179 MCS (1) 13"
    },
    {
        "rowId": 2866,
        "timestamp": 1720606030017,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2867,
        "timestamp": 1720606030017,
        "payload": "UE 1a29: MAC:    TX     4959743636 RX       44067594 bytes"
    },
    {
        "rowId": 2868,
        "timestamp": 1720606030017,
        "payload": "UE 1a29: ulsch_rounds 206977/1300/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00017 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 2869,
        "timestamp": 1720606031297,
        "payload": "UE 1a29: LCID 1: TX          12441 RX          89544 bytes"
    },
    {
        "rowId": 2870,
        "timestamp": 1720606031296,
        "payload": "UE 1a29: ulsch_rounds 207040/1304/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.04601 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 2871,
        "timestamp": 1720606031296,
        "payload": "UE 1a29: dlsch_rounds 1686350/163990/3835/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.09983 MCS (1) 10"
    },
    {
        "rowId": 2872,
        "timestamp": 1720606031297,
        "payload": "UE 1a29: MAC:    TX     4961094557 RX       44083156 bytes"
    },
    {
        "rowId": 2873,
        "timestamp": 1720606031296,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 2874,
        "timestamp": 1720606031296,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2875,
        "timestamp": 1720606031297,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2876,
        "timestamp": 1720606031296,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 2877,
        "timestamp": 1720606031296,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2878,
        "timestamp": 1720606030016,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 2879,
        "timestamp": 1720606028736,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 2880,
        "timestamp": 1720606031297,
        "payload": "UE 1a29: LCID 4: TX     4808502417 RX       11738301 bytes"
    },
    {
        "rowId": 2881,
        "timestamp": 1720606032576,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2882,
        "timestamp": 1720606032577,
        "payload": "UE 1a29: dlsch_rounds 1686851/164020/3835/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.05877 MCS (1) 15"
    },
    {
        "rowId": 2883,
        "timestamp": 1720606032577,
        "payload": "UE 1a29: LCID 4: TX     4809806096 RX       11742016 bytes"
    },
    {
        "rowId": 2884,
        "timestamp": 1720606032577,
        "payload": "UE 1a29: ulsch_rounds 207100/1305/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.02031 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 2885,
        "timestamp": 1720606032577,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2886,
        "timestamp": 1720606032577,
        "payload": "UE 1a29: LCID 1: TX          12444 RX          89566 bytes"
    },
    {
        "rowId": 2887,
        "timestamp": 1720606032577,
        "payload": "UE 1a29: MAC:    TX     4962457597 RX       44096047 bytes"
    },
    {
        "rowId": 2888,
        "timestamp": 1720606032576,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2889,
        "timestamp": 1720606032577,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2890,
        "timestamp": 1720606032576,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 2891,
        "timestamp": 1720606032576,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2892,
        "timestamp": 1720606031297,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2893,
        "timestamp": 1720606033856,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 2894,
        "timestamp": 1720606033857,
        "payload": "UE 1a29: dlsch_rounds 1687399/164070/3835/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.07401 MCS (1) 13"
    },
    {
        "rowId": 2895,
        "timestamp": 1720606033856,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2896,
        "timestamp": 1720606033857,
        "payload": "UE 1a29: ulsch_rounds 207157/1305/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00573 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 2897,
        "timestamp": 1720606033857,
        "payload": "UE 1a29: MAC:    TX     4964070216 RX       44108311 bytes"
    },
    {
        "rowId": 2898,
        "timestamp": 1720606033857,
        "payload": "UE 1a29: LCID 1: TX          12447 RX          89588 bytes"
    },
    {
        "rowId": 2899,
        "timestamp": 1720606033857,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2900,
        "timestamp": 1720606033857,
        "payload": "UE 1a29: LCID 4: TX     4811346501 RX       11745716 bytes"
    },
    {
        "rowId": 2901,
        "timestamp": 1720606033857,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2902,
        "timestamp": 1720606033856,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2903,
        "timestamp": 1720606033856,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2904,
        "timestamp": 1720606035137,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2905,
        "timestamp": 1720606035137,
        "payload": "UE 1a29: dlsch_rounds 1687973/164114/3835/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.06727 MCS (1) 14"
    },
    {
        "rowId": 2906,
        "timestamp": 1720606035137,
        "payload": "UE 1a29: ulsch_rounds 207227/1305/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00162 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 2907,
        "timestamp": 1720606035137,
        "payload": "UE 1a29: MAC:    TX     4965914153 RX       44123595 bytes"
    },
    {
        "rowId": 2908,
        "timestamp": 1720606035137,
        "payload": "UE 1a29: LCID 1: TX          12453 RX          89632 bytes"
    },
    {
        "rowId": 2909,
        "timestamp": 1720606035136,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2910,
        "timestamp": 1720606035137,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2911,
        "timestamp": 1720606035137,
        "payload": "UE 1a29: LCID 4: TX     4813117636 RX       11749487 bytes"
    },
    {
        "rowId": 2912,
        "timestamp": 1720606035137,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2913,
        "timestamp": 1720606036416,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2914,
        "timestamp": 1720606036416,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 2915,
        "timestamp": 1720606035136,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2916,
        "timestamp": 1720606035136,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 2917,
        "timestamp": 1720606036416,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2918,
        "timestamp": 1720606036417,
        "payload": "UE 1a29: LCID 1: TX          12456 RX          89654 bytes"
    },
    {
        "rowId": 2919,
        "timestamp": 1720606036417,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2920,
        "timestamp": 1720606036417,
        "payload": "UE 1a29: LCID 4: TX     4814348913 RX       11752689 bytes"
    },
    {
        "rowId": 2921,
        "timestamp": 1720606036417,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2922,
        "timestamp": 1720606036417,
        "payload": "UE 1a29: ulsch_rounds 207289/1305/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00046 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 2923,
        "timestamp": 1720606036417,
        "payload": "UE 1a29: MAC:    TX     4967214424 RX       44136505 bytes"
    },
    {
        "rowId": 2924,
        "timestamp": 1720606036416,
        "payload": "UE 1a29: dlsch_rounds 1688446/164137/3835/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.05491 MCS (1) 13"
    },
    {
        "rowId": 2925,
        "timestamp": 1720606036416,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2926,
        "timestamp": 1720606037696,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 2927,
        "timestamp": 1720606037696,
        "payload": "UE 1a29: dlsch_rounds 1688937/164182/3835/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.08831 MCS (1) 15"
    },
    {
        "rowId": 2928,
        "timestamp": 1720606037697,
        "payload": "UE 1a29: MAC:    TX     4968587471 RX       44151499 bytes"
    },
    {
        "rowId": 2929,
        "timestamp": 1720606037696,
        "payload": "UE 1a29: ulsch_rounds 207357/1305/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00012 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 28.0 dB"
    },
    {
        "rowId": 2930,
        "timestamp": 1720606037697,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2931,
        "timestamp": 1720606037697,
        "payload": "UE 1a29: LCID 1: TX          12459 RX          89676 bytes"
    },
    {
        "rowId": 2932,
        "timestamp": 1720606037697,
        "payload": "UE 1a29: LCID 4: TX     4815648426 RX       11756194 bytes"
    },
    {
        "rowId": 2933,
        "timestamp": 1720606037697,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2934,
        "timestamp": 1720606037696,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 2935,
        "timestamp": 1720606037696,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2936,
        "timestamp": 1720606037696,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2937,
        "timestamp": 1720606038976,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 2938,
        "timestamp": 1720606038977,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2939,
        "timestamp": 1720606038977,
        "payload": "UE 1a29: ulsch_rounds 207419/1305/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00003 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 2940,
        "timestamp": 1720606038976,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2941,
        "timestamp": 1720606038977,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2942,
        "timestamp": 1720606038977,
        "payload": "UE 1a29: dlsch_rounds 1689482/164269/3835/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.13036 MCS (1) 10"
    },
    {
        "rowId": 2943,
        "timestamp": 1720606038977,
        "payload": "UE 1a29: MAC:    TX     4970260019 RX       44164361 bytes"
    },
    {
        "rowId": 2944,
        "timestamp": 1720606038977,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2945,
        "timestamp": 1720606038977,
        "payload": "UE 1a29: LCID 1: TX          12462 RX          89698 bytes"
    },
    {
        "rowId": 2946,
        "timestamp": 1720606038977,
        "payload": "UE 1a29: LCID 4: TX     4817257484 RX       11759803 bytes"
    },
    {
        "rowId": 2947,
        "timestamp": 1720606038977,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2948,
        "timestamp": 1720606040256,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 2949,
        "timestamp": 1720606040257,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 2950,
        "timestamp": 1720606040257,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2951,
        "timestamp": 1720606040257,
        "payload": "UE 1a29: MAC:    TX     4972040680 RX       44177914 bytes"
    },
    {
        "rowId": 2952,
        "timestamp": 1720606040257,
        "payload": "UE 1a29: LCID 1: TX          12468 RX          89742 bytes"
    },
    {
        "rowId": 2953,
        "timestamp": 1720606040257,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2954,
        "timestamp": 1720606040257,
        "payload": "UE 1a29: LCID 4: TX     4818976128 RX       11763544 bytes"
    },
    {
        "rowId": 2955,
        "timestamp": 1720606040257,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2956,
        "timestamp": 1720606040257,
        "payload": "UE 1a29: dlsch_rounds 1690065/164304/3835/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.08761 MCS (1) 13"
    },
    {
        "rowId": 2957,
        "timestamp": 1720606040257,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2958,
        "timestamp": 1720606040257,
        "payload": "UE 1a29: ulsch_rounds 207484/1305/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00001 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 2959,
        "timestamp": 1720606041536,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 2960,
        "timestamp": 1720606041537,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2961,
        "timestamp": 1720606041537,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2962,
        "timestamp": 1720606041537,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2963,
        "timestamp": 1720606041537,
        "payload": "UE 1a29: dlsch_rounds 1690544/164349/3835/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.08405 MCS (1) 11"
    },
    {
        "rowId": 2964,
        "timestamp": 1720606041537,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2965,
        "timestamp": 1720606041537,
        "payload": "UE 1a29: MAC:    TX     4973376332 RX       44191657 bytes"
    },
    {
        "rowId": 2966,
        "timestamp": 1720606041537,
        "payload": "UE 1a29: LCID 4: TX     4820253489 RX       11767036 bytes"
    },
    {
        "rowId": 2967,
        "timestamp": 1720606041537,
        "payload": "UE 1a29: LCID 1: TX          12471 RX          89764 bytes"
    },
    {
        "rowId": 2968,
        "timestamp": 1720606041537,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2969,
        "timestamp": 1720606041537,
        "payload": "UE 1a29: ulsch_rounds 207548/1306/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.01458 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 2970,
        "timestamp": 1720606042816,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 2971,
        "timestamp": 1720606042817,
        "payload": "UE 1a29: dlsch_rounds 1691036/164437/3835/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.15990 MCS (1) 9"
    },
    {
        "rowId": 2972,
        "timestamp": 1720606042817,
        "payload": "UE 1a29: ulsch_rounds 207615/1306/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00371 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.5 dB"
    },
    {
        "rowId": 2973,
        "timestamp": 1720606042817,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2974,
        "timestamp": 1720606042817,
        "payload": "UE 1a29: LCID 4: TX     4821605795 RX       11770480 bytes"
    },
    {
        "rowId": 2975,
        "timestamp": 1720606042816,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2976,
        "timestamp": 1720606042816,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2977,
        "timestamp": 1720606042816,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2978,
        "timestamp": 1720606042817,
        "payload": "UE 1a29: LCID 1: TX          12474 RX          89786 bytes"
    },
    {
        "rowId": 2979,
        "timestamp": 1720606042817,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2980,
        "timestamp": 1720606042817,
        "payload": "UE 1a29: MAC:    TX     4974784956 RX       44205628 bytes"
    },
    {
        "rowId": 2981,
        "timestamp": 1720606044096,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 2982,
        "timestamp": 1720606044096,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2983,
        "timestamp": 1720606044096,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 2984,
        "timestamp": 1720606044096,
        "payload": "UE 1a29: dlsch_rounds 1691598/164466/3838/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.06638 MCS (1) 6"
    },
    {
        "rowId": 2985,
        "timestamp": 1720606044096,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2986,
        "timestamp": 1720606044096,
        "payload": "UE 1a29: MAC:    TX     4976495289 RX       44220046 bytes"
    },
    {
        "rowId": 2987,
        "timestamp": 1720606044097,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 2988,
        "timestamp": 1720606044096,
        "payload": "UE 1a29: ulsch_rounds 207682/1307/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.01594 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 2989,
        "timestamp": 1720606044097,
        "payload": "UE 1a29: LCID 4: TX     4823273741 RX       11774030 bytes"
    },
    {
        "rowId": 2990,
        "timestamp": 1720606044097,
        "payload": "UE 1a29: LCID 1: TX          12477 RX          89808 bytes"
    },
    {
        "rowId": 2991,
        "timestamp": 1720606044097,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 2992,
        "timestamp": 1720606045376,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 2993,
        "timestamp": 1720606045376,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 2994,
        "timestamp": 1720606045377,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 2995,
        "timestamp": 1720606045377,
        "payload": "UE 1a29: dlsch_rounds 1692145/164474/3838/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.02958 MCS (1) 11"
    },
    {
        "rowId": 2996,
        "timestamp": 1720606045377,
        "payload": "UE 1a29: ulsch_rounds 207752/1309/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.02970 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 2997,
        "timestamp": 1720606045377,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 2998,
        "timestamp": 1720606045377,
        "payload": "UE 1a29: LCID 1: TX          12483 RX          89852 bytes"
    },
    {
        "rowId": 2999,
        "timestamp": 1720606045377,
        "payload": "UE 1a29: LCID 4: TX     4824829208 RX       11777877 bytes"
    },
    {
        "rowId": 3000,
        "timestamp": 1720606045377,
        "payload": "UE 1a29: MAC:    TX     4978106860 RX       44235474 bytes"
    },
    {
        "rowId": 3001,
        "timestamp": 1720606045377,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3002,
        "timestamp": 1720606045377,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3003,
        "timestamp": 1720606046656,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 3004,
        "timestamp": 1720606046656,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 3005,
        "timestamp": 1720606046657,
        "payload": "UE 1a29: ulsch_rounds 207819/1309/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00839 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 3006,
        "timestamp": 1720606046656,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3007,
        "timestamp": 1720606046657,
        "payload": "UE 1a29: dlsch_rounds 1692613/164552/3838/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.11625 MCS (1) 8"
    },
    {
        "rowId": 3008,
        "timestamp": 1720606046657,
        "payload": "UE 1a29: MAC:    TX     4979447374 RX       44249461 bytes"
    },
    {
        "rowId": 3009,
        "timestamp": 1720606046657,
        "payload": "UE 1a29: LCID 1: TX          12486 RX          89874 bytes"
    },
    {
        "rowId": 3010,
        "timestamp": 1720606046657,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3011,
        "timestamp": 1720606046657,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3012,
        "timestamp": 1720606046657,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3013,
        "timestamp": 1720606046657,
        "payload": "UE 1a29: LCID 4: TX     4826120164 RX       11781050 bytes"
    },
    {
        "rowId": 3014,
        "timestamp": 1720606047936,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 3015,
        "timestamp": 1720606047937,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3016,
        "timestamp": 1720606047936,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3017,
        "timestamp": 1720606047937,
        "payload": "UE 1a29: MAC:    TX     4980908017 RX       44264966 bytes"
    },
    {
        "rowId": 3018,
        "timestamp": 1720606047937,
        "payload": "UE 1a29: LCID 4: TX     4827538015 RX       11784642 bytes"
    },
    {
        "rowId": 3019,
        "timestamp": 1720606047937,
        "payload": "UE 1a29: ulsch_rounds 207887/1310/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.01428 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 3020,
        "timestamp": 1720606047937,
        "payload": "UE 1a29: LCID 1: TX          12489 RX          89896 bytes"
    },
    {
        "rowId": 3021,
        "timestamp": 1720606047937,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3022,
        "timestamp": 1720606047936,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 3023,
        "timestamp": 1720606047937,
        "payload": "UE 1a29: dlsch_rounds 1693124/164613/3838/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.11357 MCS (1) 6"
    },
    {
        "rowId": 3024,
        "timestamp": 1720606047937,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3025,
        "timestamp": 1720606049216,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 3026,
        "timestamp": 1720606049217,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3027,
        "timestamp": 1720606049217,
        "payload": "UE 1a29: ulsch_rounds 207957/1310/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00363 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 3028,
        "timestamp": 1720606049217,
        "payload": "UE 1a29: dlsch_rounds 1693700/164628/3838/317, dlsch_errors 71, pucch0_DTX 1244, BLER 0.05844 MCS (1) 11"
    },
    {
        "rowId": 3029,
        "timestamp": 1720606049217,
        "payload": "UE 1a29: CQI 11, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3030,
        "timestamp": 1720606049217,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3031,
        "timestamp": 1720606049217,
        "payload": "UE 1a29: LCID 4: TX     4829310811 RX       11788178 bytes"
    },
    {
        "rowId": 3032,
        "timestamp": 1720606049217,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3033,
        "timestamp": 1720606049217,
        "payload": "UE 1a29: MAC:    TX     4982726140 RX       44279596 bytes"
    },
    {
        "rowId": 3034,
        "timestamp": 1720606049217,
        "payload": "UE 1a29: LCID 1: TX          12492 RX          89940 bytes"
    },
    {
        "rowId": 3035,
        "timestamp": 1720606049216,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 3036,
        "timestamp": 1720606050496,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 3037,
        "timestamp": 1720606050497,
        "payload": "UE 1a29: MAC:    TX     4984215244 RX       44294657 bytes"
    },
    {
        "rowId": 3038,
        "timestamp": 1720606050497,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3039,
        "timestamp": 1720606050497,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3040,
        "timestamp": 1720606050497,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3041,
        "timestamp": 1720606050497,
        "payload": "UE 1a29: LCID 1: TX          12498 RX          89962 bytes"
    },
    {
        "rowId": 3042,
        "timestamp": 1720606050496,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 3043,
        "timestamp": 1720606050497,
        "payload": "UE 1a29: LCID 4: TX     4830738849 RX       11791929 bytes"
    },
    {
        "rowId": 3044,
        "timestamp": 1720606050497,
        "payload": "UE 1a29: dlsch_rounds 1694202/164725/3852/321, dlsch_errors 71, pucch0_DTX 1244, BLER 0.17454 MCS (1) 6"
    },
    {
        "rowId": 3045,
        "timestamp": 1720606050497,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3046,
        "timestamp": 1720606050497,
        "payload": "UE 1a29: ulsch_rounds 208027/1311/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00601 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 3047,
        "timestamp": 1720606051777,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3048,
        "timestamp": 1720606051776,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3049,
        "timestamp": 1720606051776,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 3050,
        "timestamp": 1720606051776,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3051,
        "timestamp": 1720606051777,
        "payload": "UE 1a29: ulsch_rounds 208093/1311/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00153 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.5 dB"
    },
    {
        "rowId": 3052,
        "timestamp": 1720606051777,
        "payload": "UE 1a29: dlsch_rounds 1694707/164725/3852/321, dlsch_errors 71, pucch0_DTX 1244, BLER 0.04929 MCS (1) 7"
    },
    {
        "rowId": 3053,
        "timestamp": 1720606051777,
        "payload": "UE 1a29: MAC:    TX     4985560645 RX       44308451 bytes"
    },
    {
        "rowId": 3054,
        "timestamp": 1720606051777,
        "payload": "UE 1a29: LCID 1: TX          12501 RX          89984 bytes"
    },
    {
        "rowId": 3055,
        "timestamp": 1720606051777,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3056,
        "timestamp": 1720606051777,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3057,
        "timestamp": 1720606051777,
        "payload": "UE 1a29: LCID 4: TX     4832046482 RX       11795114 bytes"
    },
    {
        "rowId": 3058,
        "timestamp": 1720606053056,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 3059,
        "timestamp": 1720606053057,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3060,
        "timestamp": 1720606053056,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 3061,
        "timestamp": 1720606053057,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3062,
        "timestamp": 1720606053057,
        "payload": "UE 1a29: dlsch_rounds 1695215/164824/3855/321, dlsch_errors 71, pucch0_DTX 1244, BLER 0.16916 MCS (1) 6"
    },
    {
        "rowId": 3063,
        "timestamp": 1720606053057,
        "payload": "UE 1a29: ulsch_rounds 208160/1311/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00039 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 3064,
        "timestamp": 1720606053057,
        "payload": "UE 1a29: LCID 1: TX          12504 RX          90006 bytes"
    },
    {
        "rowId": 3065,
        "timestamp": 1720606053057,
        "payload": "UE 1a29: MAC:    TX     4987063513 RX       44322805 bytes"
    },
    {
        "rowId": 3066,
        "timestamp": 1720606053057,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3067,
        "timestamp": 1720606053057,
        "payload": "UE 1a29: LCID 4: TX     4833499284 RX       11798724 bytes"
    },
    {
        "rowId": 3068,
        "timestamp": 1720606053057,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3069,
        "timestamp": 1720606054336,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 3070,
        "timestamp": 1720606054337,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 3071,
        "timestamp": 1720606054337,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3072,
        "timestamp": 1720606054337,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3073,
        "timestamp": 1720606054337,
        "payload": "UE 1a29: dlsch_rounds 1695770/164827/3855/321, dlsch_errors 71, pucch0_DTX 1244, BLER 0.04899 MCS (1) 8"
    },
    {
        "rowId": 3074,
        "timestamp": 1720606054337,
        "payload": "UE 1a29: ulsch_rounds 208225/1311/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00011 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 3075,
        "timestamp": 1720606054337,
        "payload": "UE 1a29: MAC:    TX     4988859392 RX       44336390 bytes"
    },
    {
        "rowId": 3076,
        "timestamp": 1720606054337,
        "payload": "UE 1a29: LCID 1: TX          12510 RX          90050 bytes"
    },
    {
        "rowId": 3077,
        "timestamp": 1720606054337,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3078,
        "timestamp": 1720606054337,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3079,
        "timestamp": 1720606054337,
        "payload": "UE 1a29: LCID 4: TX     4835254188 RX       11802369 bytes"
    },
    {
        "rowId": 3080,
        "timestamp": 1720606055617,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3081,
        "timestamp": 1720606055617,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3082,
        "timestamp": 1720606055617,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 3083,
        "timestamp": 1720606055616,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 3084,
        "timestamp": 1720606055617,
        "payload": "UE 1a29: ulsch_rounds 208295/1311/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00003 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 3085,
        "timestamp": 1720606055617,
        "payload": "UE 1a29: dlsch_rounds 1696268/164975/3865/321, dlsch_errors 71, pucch0_DTX 1244, BLER 0.28248 MCS (1) 7"
    },
    {
        "rowId": 3086,
        "timestamp": 1720606055617,
        "payload": "UE 1a29: MAC:    TX     4990286228 RX       44352233 bytes"
    },
    {
        "rowId": 3087,
        "timestamp": 1720606055617,
        "payload": "UE 1a29: LCID 1: TX          12513 RX          90072 bytes"
    },
    {
        "rowId": 3088,
        "timestamp": 1720606055617,
        "payload": "UE 1a29: LCID 4: TX     4836618086 RX       11806037 bytes"
    },
    {
        "rowId": 3089,
        "timestamp": 1720606055617,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3090,
        "timestamp": 1720606055617,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3091,
        "timestamp": 1720606056896,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 3092,
        "timestamp": 1720606056897,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3093,
        "timestamp": 1720606056897,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3094,
        "timestamp": 1720606056897,
        "payload": "UE 1a29: dlsch_rounds 1696777/164975/3865/321, dlsch_errors 71, pucch0_DTX 1244, BLER 0.07180 MCS (1) 6"
    },
    {
        "rowId": 3095,
        "timestamp": 1720606056897,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3096,
        "timestamp": 1720606056897,
        "payload": "UE 1a29: LCID 4: TX     4837964693 RX       11809258 bytes"
    },
    {
        "rowId": 3097,
        "timestamp": 1720606056897,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3098,
        "timestamp": 1720606056897,
        "payload": "UE 1a29: LCID 1: TX          12516 RX          90094 bytes"
    },
    {
        "rowId": 3099,
        "timestamp": 1720606056897,
        "payload": "UE 1a29: ulsch_rounds 208364/1311/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00001 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 3100,
        "timestamp": 1720606056897,
        "payload": "UE 1a29: MAC:    TX     4991668900 RX       44367085 bytes"
    },
    {
        "rowId": 3101,
        "timestamp": 1720606056897,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3102,
        "timestamp": 1720606058176,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 3103,
        "timestamp": 1720606058176,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3104,
        "timestamp": 1720606058176,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 3105,
        "timestamp": 1720606058177,
        "payload": "UE 1a29: dlsch_rounds 1697307/165048/3866/321, dlsch_errors 71, pucch0_DTX 1244, BLER 0.17108 MCS (1) 11"
    },
    {
        "rowId": 3106,
        "timestamp": 1720606058177,
        "payload": "UE 1a29: MAC:    TX     4993237859 RX       44381506 bytes"
    },
    {
        "rowId": 3107,
        "timestamp": 1720606058176,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3108,
        "timestamp": 1720606058177,
        "payload": "UE 1a29: ulsch_rounds 208433/1311/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 3109,
        "timestamp": 1720606058177,
        "payload": "UE 1a29: LCID 1: TX          12519 RX          90116 bytes"
    },
    {
        "rowId": 3110,
        "timestamp": 1720606058177,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3111,
        "timestamp": 1720606058177,
        "payload": "UE 1a29: LCID 4: TX     4839482304 RX       11812850 bytes"
    },
    {
        "rowId": 3112,
        "timestamp": 1720606058177,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3113,
        "timestamp": 1720606059456,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 3114,
        "timestamp": 1720606059457,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3115,
        "timestamp": 1720606059457,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3116,
        "timestamp": 1720606059457,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 3117,
        "timestamp": 1720606059457,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3118,
        "timestamp": 1720606059457,
        "payload": "UE 1a29: dlsch_rounds 1697876/165048/3866/321, dlsch_errors 71, pucch0_DTX 1244, BLER 0.04349 MCS (1) 12"
    },
    {
        "rowId": 3119,
        "timestamp": 1720606059457,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3120,
        "timestamp": 1720606059457,
        "payload": "UE 1a29: MAC:    TX     4995029363 RX       44395509 bytes"
    },
    {
        "rowId": 3121,
        "timestamp": 1720606059457,
        "payload": "UE 1a29: LCID 1: TX          12525 RX          90160 bytes"
    },
    {
        "rowId": 3122,
        "timestamp": 1720606059457,
        "payload": "UE 1a29: LCID 4: TX     4841215673 RX       11816467 bytes"
    },
    {
        "rowId": 3123,
        "timestamp": 1720606059457,
        "payload": "UE 1a29: ulsch_rounds 208500/1311/35/7, ulsch_errors 4, ulsch_DTX 124, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.5 dB"
    },
    {
        "rowId": 3124,
        "timestamp": 1720606060736,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 3125,
        "timestamp": 1720606060736,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 3126,
        "timestamp": 1720606060736,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 3127,
        "timestamp": 1720606060737,
        "payload": "UE 1a29: ulsch_rounds 208568/1312/36/7, ulsch_errors 4, ulsch_DTX 126, BLER 0.00957 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 3128,
        "timestamp": 1720606060737,
        "payload": "UE 1a29: LCID 4: TX     4842495123 RX       11819934 bytes"
    },
    {
        "rowId": 3129,
        "timestamp": 1720606060737,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3130,
        "timestamp": 1720606060737,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3131,
        "timestamp": 1720606060737,
        "payload": "UE 1a29: LCID 1: TX          12528 RX          90182 bytes"
    },
    {
        "rowId": 3132,
        "timestamp": 1720606060737,
        "payload": "UE 1a29: MAC:    TX     4996366367 RX       44409721 bytes"
    },
    {
        "rowId": 3133,
        "timestamp": 1720606060736,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3134,
        "timestamp": 1720606060737,
        "payload": "UE 1a29: dlsch_rounds 1698345/165181/3874/327, dlsch_errors 74, pucch0_DTX 1245, BLER 0.24149 MCS (1) 8"
    },
    {
        "rowId": 3135,
        "timestamp": 1720606062017,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 3136,
        "timestamp": 1720606062016,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 3137,
        "timestamp": 1720606062017,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 3138,
        "timestamp": 1720606062017,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3139,
        "timestamp": 1720606062017,
        "payload": "UE 1a29: dlsch_rounds 1698856/165211/3874/327, dlsch_errors 74, pucch0_DTX 1245, BLER 0.09418 MCS (1) 6"
    },
    {
        "rowId": 3140,
        "timestamp": 1720606062017,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3141,
        "timestamp": 1720606062017,
        "payload": "UE 1a29: LCID 4: TX     4843861134 RX       11823475 bytes"
    },
    {
        "rowId": 3142,
        "timestamp": 1720606062017,
        "payload": "UE 1a29: MAC:    TX     4997772067 RX       44424364 bytes"
    },
    {
        "rowId": 3143,
        "timestamp": 1720606062017,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3144,
        "timestamp": 1720606062017,
        "payload": "UE 1a29: ulsch_rounds 208636/1313/36/7, ulsch_errors 4, ulsch_DTX 126, BLER 0.01129 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 3145,
        "timestamp": 1720606062017,
        "payload": "UE 1a29: LCID 1: TX          12531 RX          90204 bytes"
    },
    {
        "rowId": 3146,
        "timestamp": 1720606063297,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 3147,
        "timestamp": 1720606063297,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3148,
        "timestamp": 1720606063297,
        "payload": "UE 1a29: ulsch_rounds 208705/1315/36/7, ulsch_errors 4, ulsch_DTX 126, BLER 0.01654 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 3149,
        "timestamp": 1720606063297,
        "payload": "UE 1a29: MAC:    TX     4999325808 RX       44439583 bytes"
    },
    {
        "rowId": 3150,
        "timestamp": 1720606063296,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 3151,
        "timestamp": 1720606063297,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3152,
        "timestamp": 1720606063297,
        "payload": "UE 1a29: LCID 4: TX     4845376638 RX       11827275 bytes"
    },
    {
        "rowId": 3153,
        "timestamp": 1720606063297,
        "payload": "UE 1a29: dlsch_rounds 1699381/165251/3876/327, dlsch_errors 74, pucch0_DTX 1245, BLER 0.06627 MCS (1) 6"
    },
    {
        "rowId": 3154,
        "timestamp": 1720606063297,
        "payload": "UE 1a29: LCID 1: TX          12534 RX          90226 bytes"
    },
    {
        "rowId": 3155,
        "timestamp": 1720606063297,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3156,
        "timestamp": 1720606063297,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3157,
        "timestamp": 1720606064576,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3158,
        "timestamp": 1720606064576,
        "payload": "UE 1a29: CQI 11, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3159,
        "timestamp": 1720606064576,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 3160,
        "timestamp": 1720606064577,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3161,
        "timestamp": 1720606064577,
        "payload": "UE 1a29: dlsch_rounds 1699969/165358/3877/327, dlsch_errors 74, pucch0_DTX 1245, BLER 0.19733 MCS (1) 8"
    },
    {
        "rowId": 3162,
        "timestamp": 1720606064577,
        "payload": "UE 1a29: LCID 4: TX     4847164869 RX       11830847 bytes"
    },
    {
        "rowId": 3163,
        "timestamp": 1720606064577,
        "payload": "UE 1a29: LCID 1: TX          12540 RX          90270 bytes"
    },
    {
        "rowId": 3164,
        "timestamp": 1720606064577,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3165,
        "timestamp": 1720606064577,
        "payload": "UE 1a29: MAC:    TX     5001165150 RX       44453377 bytes"
    },
    {
        "rowId": 3166,
        "timestamp": 1720606064577,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3167,
        "timestamp": 1720606064577,
        "payload": "UE 1a29: ulsch_rounds 208771/1315/36/7, ulsch_errors 4, ulsch_DTX 126, BLER 0.00467 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 3168,
        "timestamp": 1720606065856,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 3169,
        "timestamp": 1720606065857,
        "payload": "UE 1a29: dlsch_rounds 1700456/165392/3878/327, dlsch_errors 74, pucch0_DTX 1245, BLER 0.10424 MCS (1) 6"
    },
    {
        "rowId": 3170,
        "timestamp": 1720606065857,
        "payload": "UE 1a29: ulsch_rounds 208839/1316/36/7, ulsch_errors 4, ulsch_DTX 126, BLER 0.00700 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 3171,
        "timestamp": 1720606065857,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3172,
        "timestamp": 1720606065857,
        "payload": "UE 1a29: LCID 4: TX     4848457032 RX       11834344 bytes"
    },
    {
        "rowId": 3173,
        "timestamp": 1720606065857,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3174,
        "timestamp": 1720606065857,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3175,
        "timestamp": 1720606065856,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3176,
        "timestamp": 1720606065857,
        "payload": "UE 1a29: LCID 1: TX          12543 RX          90292 bytes"
    },
    {
        "rowId": 3177,
        "timestamp": 1720606065857,
        "payload": "UE 1a29: MAC:    TX     5002498151 RX       44468020 bytes"
    },
    {
        "rowId": 3178,
        "timestamp": 1720606065856,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 3179,
        "timestamp": 1720606067136,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 3180,
        "timestamp": 1720606067137,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -108 (32 meas)"
    },
    {
        "rowId": 3181,
        "timestamp": 1720606067137,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3182,
        "timestamp": 1720606067137,
        "payload": "UE 1a29: ulsch_rounds 208907/1316/36/7, ulsch_errors 4, ulsch_DTX 126, BLER 0.00178 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 3183,
        "timestamp": 1720606067137,
        "payload": "UE 1a29: dlsch_rounds 1700953/165450/3878/327, dlsch_errors 74, pucch0_DTX 1245, BLER 0.14378 MCS (1) 6"
    },
    {
        "rowId": 3184,
        "timestamp": 1720606067137,
        "payload": "UE 1a29: MAC:    TX     5003872261 RX       44482232 bytes"
    },
    {
        "rowId": 3185,
        "timestamp": 1720606067137,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3186,
        "timestamp": 1720606067137,
        "payload": "UE 1a29: LCID 1: TX          12546 RX          90314 bytes"
    },
    {
        "rowId": 3187,
        "timestamp": 1720606067137,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3188,
        "timestamp": 1720606067137,
        "payload": "UE 1a29: LCID 4: TX     4849795025 RX       11837636 bytes"
    },
    {
        "rowId": 3189,
        "timestamp": 1720606067137,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3190,
        "timestamp": 1720606068416,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 3191,
        "timestamp": 1720606068417,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3192,
        "timestamp": 1720606068417,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 3193,
        "timestamp": 1720606068417,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3194,
        "timestamp": 1720606068417,
        "payload": "UE 1a29: dlsch_rounds 1701509/165503/3879/327, dlsch_errors 74, pucch0_DTX 1248, BLER 0.09644 MCS (1) 6"
    },
    {
        "rowId": 3195,
        "timestamp": 1720606068417,
        "payload": "UE 1a29: LCID 4: TX     4851383084 RX       11841398 bytes"
    },
    {
        "rowId": 3196,
        "timestamp": 1720606068417,
        "payload": "UE 1a29: LCID 1: TX          12549 RX          90336 bytes"
    },
    {
        "rowId": 3197,
        "timestamp": 1720606068417,
        "payload": "UE 1a29: MAC:    TX     5005498026 RX       44496457 bytes"
    },
    {
        "rowId": 3198,
        "timestamp": 1720606068417,
        "payload": "UE 1a29: ulsch_rounds 208973/1317/37/7, ulsch_errors 4, ulsch_DTX 128, BLER 0.01845 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.0 dB"
    },
    {
        "rowId": 3199,
        "timestamp": 1720606068417,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3200,
        "timestamp": 1720606068417,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3201,
        "timestamp": 1720606069696,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 3202,
        "timestamp": 1720606069697,
        "payload": "UE 1a29: CQI 12, RI 1, PMI (0,3)"
    },
    {
        "rowId": 3203,
        "timestamp": 1720606069697,
        "payload": "UE 1a29: ulsch_rounds 209039/1317/37/7, ulsch_errors 4, ulsch_DTX 128, BLER 0.00521 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 3204,
        "timestamp": 1720606069697,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3205,
        "timestamp": 1720606069697,
        "payload": "UE 1a29: LCID 4: TX     4853183743 RX       11844987 bytes"
    },
    {
        "rowId": 3206,
        "timestamp": 1720606069697,
        "payload": "UE 1a29: LCID 1: TX          12555 RX          90380 bytes"
    },
    {
        "rowId": 3207,
        "timestamp": 1720606069697,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3208,
        "timestamp": 1720606069697,
        "payload": "UE 1a29: MAC:    TX     5007335555 RX       44510251 bytes"
    },
    {
        "rowId": 3209,
        "timestamp": 1720606069697,
        "payload": "UE 1a29: dlsch_rounds 1702116/165530/3879/327, dlsch_errors 74, pucch0_DTX 1248, BLER 0.04413 MCS (1) 8"
    },
    {
        "rowId": 3210,
        "timestamp": 1720606069697,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3211,
        "timestamp": 1720606069696,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3212,
        "timestamp": 1720606070977,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 3213,
        "timestamp": 1720606070977,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3214,
        "timestamp": 1720606070977,
        "payload": "UE 1a29: MAC:    TX     5008621111 RX       44524894 bytes"
    },
    {
        "rowId": 3215,
        "timestamp": 1720606070977,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 3216,
        "timestamp": 1720606070977,
        "payload": "UE 1a29: ulsch_rounds 209107/1318/37/7, ulsch_errors 4, ulsch_DTX 128, BLER 0.00850 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 3217,
        "timestamp": 1720606070977,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3218,
        "timestamp": 1720606070977,
        "payload": "UE 1a29: LCID 1: TX          12558 RX          90402 bytes"
    },
    {
        "rowId": 3219,
        "timestamp": 1720606070977,
        "payload": "UE 1a29: LCID 4: TX     4854425136 RX       11848376 bytes"
    },
    {
        "rowId": 3220,
        "timestamp": 1720606070976,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 3221,
        "timestamp": 1720606070977,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3222,
        "timestamp": 1720606070977,
        "payload": "UE 1a29: dlsch_rounds 1702588/165634/3879/327, dlsch_errors 74, pucch0_DTX 1248, BLER 0.17423 MCS (1) 6"
    },
    {
        "rowId": 3223,
        "timestamp": 1720606072257,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 3224,
        "timestamp": 1720606072257,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3225,
        "timestamp": 1720606072257,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 3226,
        "timestamp": 1720606072256,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 3227,
        "timestamp": 1720606072257,
        "payload": "UE 1a29: ulsch_rounds 209175/1318/37/7, ulsch_errors 4, ulsch_DTX 128, BLER 0.00216 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 3228,
        "timestamp": 1720606072257,
        "payload": "UE 1a29: dlsch_rounds 1703071/165687/3879/327, dlsch_errors 74, pucch0_DTX 1248, BLER 0.09895 MCS (1) 6"
    },
    {
        "rowId": 3229,
        "timestamp": 1720606072257,
        "payload": "UE 1a29: MAC:    TX     5010012700 RX       44539106 bytes"
    },
    {
        "rowId": 3230,
        "timestamp": 1720606072257,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3231,
        "timestamp": 1720606072257,
        "payload": "UE 1a29: LCID 1: TX          12561 RX          90424 bytes"
    },
    {
        "rowId": 3232,
        "timestamp": 1720606072257,
        "payload": "UE 1a29: LCID 4: TX     4855778912 RX       11851688 bytes"
    },
    {
        "rowId": 3233,
        "timestamp": 1720606072257,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3234,
        "timestamp": 1720606073536,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 3235,
        "timestamp": 1720606073537,
        "payload": "UE 1a29: CQI 12, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3236,
        "timestamp": 1720606073537,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3237,
        "timestamp": 1720606073537,
        "payload": "UE 1a29: MAC:    TX     5011673440 RX       44554582 bytes"
    },
    {
        "rowId": 3238,
        "timestamp": 1720606073537,
        "payload": "UE 1a29: dlsch_rounds 1703606/165725/3879/327, dlsch_errors 74, pucch0_DTX 1248, BLER 0.11593 MCS (1) 11"
    },
    {
        "rowId": 3239,
        "timestamp": 1720606073536,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3240,
        "timestamp": 1720606073537,
        "payload": "UE 1a29: LCID 1: TX          12564 RX          90446 bytes"
    },
    {
        "rowId": 3241,
        "timestamp": 1720606073537,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3242,
        "timestamp": 1720606073537,
        "payload": "UE 1a29: ulsch_rounds 209245/1318/37/7, ulsch_errors 4, ulsch_DTX 128, BLER 0.00055 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 3243,
        "timestamp": 1720606073537,
        "payload": "UE 1a29: LCID 4: TX     4857395642 RX       11855554 bytes"
    },
    {
        "rowId": 3244,
        "timestamp": 1720606073537,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3245,
        "timestamp": 1720606074816,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 3246,
        "timestamp": 1720606074817,
        "payload": "UE 1a29: ulsch_rounds 209311/1318/37/7, ulsch_errors 4, ulsch_DTX 128, BLER 0.00016 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 3247,
        "timestamp": 1720606074817,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 3248,
        "timestamp": 1720606074817,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3249,
        "timestamp": 1720606074817,
        "payload": "UE 1a29: dlsch_rounds 1704177/165836/3879/327, dlsch_errors 74, pucch0_DTX 1248, BLER 0.18498 MCS (1) 6"
    },
    {
        "rowId": 3250,
        "timestamp": 1720606074817,
        "payload": "UE 1a29: LCID 1: TX          12570 RX          90490 bytes"
    },
    {
        "rowId": 3251,
        "timestamp": 1720606074817,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 3252,
        "timestamp": 1720606074817,
        "payload": "UE 1a29: MAC:    TX     5013432539 RX       44568376 bytes"
    },
    {
        "rowId": 3253,
        "timestamp": 1720606074817,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3254,
        "timestamp": 1720606074817,
        "payload": "UE 1a29: LCID 4: TX     4859100198 RX       11859365 bytes"
    },
    {
        "rowId": 3255,
        "timestamp": 1720606074817,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3256,
        "timestamp": 1720606076097,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3257,
        "timestamp": 1720606076097,
        "payload": "UE 1a29: dlsch_rounds 1704653/165836/3879/327, dlsch_errors 74, pucch0_DTX 1248, BLER 0.04702 MCS (1) 7"
    },
    {
        "rowId": 3258,
        "timestamp": 1720606076097,
        "payload": "UE 1a29: MAC:    TX     5014741642 RX       44582170 bytes"
    },
    {
        "rowId": 3259,
        "timestamp": 1720606076096,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 3260,
        "timestamp": 1720606076097,
        "payload": "UE 1a29: ulsch_rounds 209377/1318/37/7, ulsch_errors 4, ulsch_DTX 128, BLER 0.00004 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 3261,
        "timestamp": 1720606076097,
        "payload": "UE 1a29: LCID 1: TX          12573 RX          90512 bytes"
    },
    {
        "rowId": 3262,
        "timestamp": 1720606076097,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3263,
        "timestamp": 1720606076097,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3264,
        "timestamp": 1720606076097,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 3265,
        "timestamp": 1720606076097,
        "payload": "UE 1a29: LCID 4: TX     4860371595 RX       11862611 bytes"
    },
    {
        "rowId": 3266,
        "timestamp": 1720606076097,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3267,
        "timestamp": 1720606077376,
        "payload": "ULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 3268,
        "timestamp": 1720606077377,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3269,
        "timestamp": 1720606077377,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 3270,
        "timestamp": 1720606077377,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3271,
        "timestamp": 1720606077377,
        "payload": "UE 1a29: dlsch_rounds 1705166/165911/3879/327, dlsch_errors 74, pucch0_DTX 1248, BLER 0.11454 MCS (1) 7"
    },
    {
        "rowId": 3272,
        "timestamp": 1720606077377,
        "payload": "UE 1a29: ulsch_rounds 209445/1318/37/7, ulsch_errors 4, ulsch_DTX 128, BLER 0.00001 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 3273,
        "timestamp": 1720606077377,
        "payload": "UE 1a29: LCID 1: TX          12576 RX          90534 bytes"
    },
    {
        "rowId": 3274,
        "timestamp": 1720606077377,
        "payload": "UE 1a29: LCID 4: TX     4861713286 RX       11866054 bytes"
    },
    {
        "rowId": 3275,
        "timestamp": 1720606077377,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3276,
        "timestamp": 1720606077377,
        "payload": "UE 1a29: MAC:    TX     5016131342 RX       44596813 bytes"
    },
    {
        "rowId": 3277,
        "timestamp": 1720606077377,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3278,
        "timestamp": 1720606078657,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 3279,
        "timestamp": 1720606078656,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 3280,
        "timestamp": 1720606078657,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 3281,
        "timestamp": 1720606078657,
        "payload": "UE 1a29: LCID 1: TX          12579 RX          90556 bytes"
    },
    {
        "rowId": 3282,
        "timestamp": 1720606078657,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3283,
        "timestamp": 1720606078657,
        "payload": "UE 1a29: ulsch_rounds 209512/1318/37/7, ulsch_errors 4, ulsch_DTX 128, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 3284,
        "timestamp": 1720606078657,
        "payload": "UE 1a29: LCID 4: TX     4863439935 RX       11869674 bytes"
    },
    {
        "rowId": 3285,
        "timestamp": 1720606078657,
        "payload": "UE 1a29: MAC:    TX     5017904858 RX       44611247 bytes"
    },
    {
        "rowId": 3286,
        "timestamp": 1720606078657,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3287,
        "timestamp": 1720606078657,
        "payload": "UE 1a29: dlsch_rounds 1705743/165961/3879/327, dlsch_errors 74, pucch0_DTX 1248, BLER 0.11315 MCS (1) 7"
    },
    {
        "rowId": 3288,
        "timestamp": 1720606078657,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3289,
        "timestamp": 1720606079937,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 3290,
        "timestamp": 1720606079936,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 3291,
        "timestamp": 1720606079937,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3292,
        "timestamp": 1720606079937,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 3293,
        "timestamp": 1720606079937,
        "payload": "UE 1a29: MAC:    TX     5019486657 RX       44625250 bytes"
    },
    {
        "rowId": 3294,
        "timestamp": 1720606079937,
        "payload": "UE 1a29: dlsch_rounds 1706254/166045/3879/327, dlsch_errors 74, pucch0_DTX 1248, BLER 0.18226 MCS (1) 6"
    },
    {
        "rowId": 3295,
        "timestamp": 1720606079937,
        "payload": "UE 1a29: ulsch_rounds 209579/1318/37/7, ulsch_errors 4, ulsch_DTX 128, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 3296,
        "timestamp": 1720606079937,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3297,
        "timestamp": 1720606079937,
        "payload": "UE 1a29: LCID 1: TX          12585 RX          90600 bytes"
    },
    {
        "rowId": 3298,
        "timestamp": 1720606079937,
        "payload": "UE 1a29: LCID 4: TX     4864982629 RX       11873332 bytes"
    },
    {
        "rowId": 3299,
        "timestamp": 1720606079937,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3300,
        "timestamp": 1720606081216,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 3301,
        "timestamp": 1720606081216,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3302,
        "timestamp": 1720606081217,
        "payload": "UE 1a29: CQI 11, RI 1, PMI (0,3)"
    },
    {
        "rowId": 3303,
        "timestamp": 1720606081217,
        "payload": "UE 1a29: MAC:    TX     5020835001 RX       44639462 bytes"
    },
    {
        "rowId": 3304,
        "timestamp": 1720606081217,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3305,
        "timestamp": 1720606081217,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3306,
        "timestamp": 1720606081217,
        "payload": "UE 1a29: dlsch_rounds 1706745/166094/3879/327, dlsch_errors 74, pucch0_DTX 1248, BLER 0.10481 MCS (1) 6"
    },
    {
        "rowId": 3307,
        "timestamp": 1720606081217,
        "payload": "UE 1a29: LCID 4: TX     4866297691 RX       11876778 bytes"
    },
    {
        "rowId": 3308,
        "timestamp": 1720606081217,
        "payload": "UE 1a29: LCID 1: TX          12588 RX          90622 bytes"
    },
    {
        "rowId": 3309,
        "timestamp": 1720606081217,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3310,
        "timestamp": 1720606081217,
        "payload": "UE 1a29: ulsch_rounds 209647/1318/37/7, ulsch_errors 4, ulsch_DTX 128, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 3311,
        "timestamp": 1720606082497,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3312,
        "timestamp": 1720606082497,
        "payload": "UE 1a29: dlsch_rounds 1707264/166119/3880/327, dlsch_errors 74, pucch0_DTX 1250, BLER 0.06468 MCS (1) 6"
    },
    {
        "rowId": 3313,
        "timestamp": 1720606082497,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3314,
        "timestamp": 1720606082497,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3315,
        "timestamp": 1720606082496,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 3316,
        "timestamp": 1720606082497,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3317,
        "timestamp": 1720606082497,
        "payload": "UE 1a29: LCID 4: TX     4867727922 RX       11880182 bytes"
    },
    {
        "rowId": 3318,
        "timestamp": 1720606082497,
        "payload": "UE 1a29: MAC:    TX     5022305253 RX       44653047 bytes"
    },
    {
        "rowId": 3319,
        "timestamp": 1720606082497,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 3320,
        "timestamp": 1720606082497,
        "payload": "UE 1a29: ulsch_rounds 209712/1319/38/7, ulsch_errors 4, ulsch_DTX 130, BLER 0.02500 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 3321,
        "timestamp": 1720606082497,
        "payload": "UE 1a29: LCID 1: TX          12591 RX          90644 bytes"
    },
    {
        "rowId": 3322,
        "timestamp": 1720606083777,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3323,
        "timestamp": 1720606083777,
        "payload": "UE 1a29: dlsch_rounds 1707807/166190/3881/327, dlsch_errors 74, pucch0_DTX 1250, BLER 0.13435 MCS (1) 7"
    },
    {
        "rowId": 3324,
        "timestamp": 1720606083777,
        "payload": "UE 1a29: MAC:    TX     5024112648 RX       44667050 bytes"
    },
    {
        "rowId": 3325,
        "timestamp": 1720606083777,
        "payload": "UE 1a29: LCID 1: TX          12594 RX          90666 bytes"
    },
    {
        "rowId": 3326,
        "timestamp": 1720606083777,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3327,
        "timestamp": 1720606083777,
        "payload": "UE 1a29: LCID 4: TX     4869494721 RX       11883832 bytes"
    },
    {
        "rowId": 3328,
        "timestamp": 1720606083777,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3329,
        "timestamp": 1720606083777,
        "payload": "UE 1a29: ulsch_rounds 209779/1319/38/7, ulsch_errors 4, ulsch_DTX 130, BLER 0.00635 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.5 dB"
    },
    {
        "rowId": 3330,
        "timestamp": 1720606083776,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 3331,
        "timestamp": 1720606083777,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 3332,
        "timestamp": 1720606083776,
        "payload": "ULLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 3333,
        "timestamp": 1720606085056,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 3334,
        "timestamp": 1720606085056,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 3335,
        "timestamp": 1720606085056,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 3336,
        "timestamp": 1720606085056,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3337,
        "timestamp": 1720606085057,
        "payload": "UE 1a29: dlsch_rounds 1708314/166223/3881/327, dlsch_errors 74, pucch0_DTX 1251, BLER 0.07639 MCS (1) 7"
    },
    {
        "rowId": 3338,
        "timestamp": 1720606085057,
        "payload": "UE 1a29: ulsch_rounds 209848/1319/38/7, ulsch_errors 4, ulsch_DTX 130, BLER 0.00162 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 28.0 dB"
    },
    {
        "rowId": 3339,
        "timestamp": 1720606085057,
        "payload": "UE 1a29: MAC:    TX     5025563822 RX       44682333 bytes"
    },
    {
        "rowId": 3340,
        "timestamp": 1720606085057,
        "payload": "UE 1a29: LCID 1: TX          12600 RX          90710 bytes"
    },
    {
        "rowId": 3341,
        "timestamp": 1720606085057,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3342,
        "timestamp": 1720606085057,
        "payload": "UE 1a29: LCID 4: TX     4870906924 RX       11887566 bytes"
    },
    {
        "rowId": 3343,
        "timestamp": 1720606085057,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3344,
        "timestamp": 1720606086336,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 3345,
        "timestamp": 1720606086337,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 3346,
        "timestamp": 1720606086337,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3347,
        "timestamp": 1720606086337,
        "payload": "UE 1a29: MAC:    TX     5026943356 RX       44696944 bytes"
    },
    {
        "rowId": 3348,
        "timestamp": 1720606086337,
        "payload": "UE 1a29: ulsch_rounds 209916/1320/38/7, ulsch_errors 4, ulsch_DTX 130, BLER 0.00843 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 3349,
        "timestamp": 1720606086337,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3350,
        "timestamp": 1720606086337,
        "payload": "UE 1a29: dlsch_rounds 1708798/166299/3881/327, dlsch_errors 74, pucch0_DTX 1251, BLER 0.13550 MCS (1) 10"
    },
    {
        "rowId": 3351,
        "timestamp": 1720606086337,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3352,
        "timestamp": 1720606086337,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3353,
        "timestamp": 1720606086337,
        "payload": "UE 1a29: LCID 1: TX          12603 RX          90732 bytes"
    },
    {
        "rowId": 3354,
        "timestamp": 1720606086337,
        "payload": "UE 1a29: LCID 4: TX     4872242420 RX       11890936 bytes"
    },
    {
        "rowId": 3355,
        "timestamp": 1720606087616,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 3356,
        "timestamp": 1720606087617,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 3357,
        "timestamp": 1720606087617,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3358,
        "timestamp": 1720606087617,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3359,
        "timestamp": 1720606087617,
        "payload": "UE 1a29: dlsch_rounds 1709309/166413/3897/327, dlsch_errors 74, pucch0_DTX 1251, BLER 0.20832 MCS (1) 6"
    },
    {
        "rowId": 3360,
        "timestamp": 1720606087617,
        "payload": "UE 1a29: LCID 1: TX          12606 RX          90754 bytes"
    },
    {
        "rowId": 3361,
        "timestamp": 1720606087617,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3362,
        "timestamp": 1720606087617,
        "payload": "UE 1a29: ulsch_rounds 209983/1320/38/7, ulsch_errors 4, ulsch_DTX 130, BLER 0.00214 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 3363,
        "timestamp": 1720606087617,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3364,
        "timestamp": 1720606087617,
        "payload": "UE 1a29: LCID 4: TX     4873756279 RX       11894513 bytes"
    },
    {
        "rowId": 3365,
        "timestamp": 1720606087617,
        "payload": "UE 1a29: MAC:    TX     5028499721 RX       44711378 bytes"
    },
    {
        "rowId": 3366,
        "timestamp": 1720606088896,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 3367,
        "timestamp": 1720606088897,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3368,
        "timestamp": 1720606088897,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3369,
        "timestamp": 1720606088897,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3370,
        "timestamp": 1720606088897,
        "payload": "UE 1a29: dlsch_rounds 1709920/166421/3899/327, dlsch_errors 74, pucch0_DTX 1251, BLER 0.06084 MCS (1) 6"
    },
    {
        "rowId": 3371,
        "timestamp": 1720606088897,
        "payload": "UE 1a29: LCID 1: TX          12609 RX          90776 bytes"
    },
    {
        "rowId": 3372,
        "timestamp": 1720606088897,
        "payload": "UE 1a29: MAC:    TX     5030342449 RX       44725799 bytes"
    },
    {
        "rowId": 3373,
        "timestamp": 1720606088897,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3374,
        "timestamp": 1720606088897,
        "payload": "UE 1a29: ulsch_rounds 210052/1320/38/7, ulsch_errors 4, ulsch_DTX 130, BLER 0.00054 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 3375,
        "timestamp": 1720606088897,
        "payload": "UE 1a29: LCID 4: TX     4875555473 RX       11898093 bytes"
    },
    {
        "rowId": 3376,
        "timestamp": 1720606088897,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3377,
        "timestamp": 1720606090177,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 3378,
        "timestamp": 1720606090177,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3379,
        "timestamp": 1720606090177,
        "payload": "UE 1a29: dlsch_rounds 1710409/166491/3899/327, dlsch_errors 74, pucch0_DTX 1251, BLER 0.16386 MCS (1) 7"
    },
    {
        "rowId": 3380,
        "timestamp": 1720606090177,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3381,
        "timestamp": 1720606090177,
        "payload": "UE 1a29: LCID 1: TX          12615 RX          90820 bytes"
    },
    {
        "rowId": 3382,
        "timestamp": 1720606090177,
        "payload": "UE 1a29: ulsch_rounds 210119/1320/38/7, ulsch_errors 4, ulsch_DTX 130, BLER 0.00014 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 3383,
        "timestamp": 1720606090177,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3384,
        "timestamp": 1720606090177,
        "payload": "UE 1a29: LCID 4: TX     4876856944 RX       11901621 bytes"
    },
    {
        "rowId": 3385,
        "timestamp": 1720606090177,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3386,
        "timestamp": 1720606090177,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3387,
        "timestamp": 1720606090177,
        "payload": "UE 1a29: MAC:    TX     5031690405 RX       44739802 bytes"
    },
    {
        "rowId": 3388,
        "timestamp": 1720606091456,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 3389,
        "timestamp": 1720606091457,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3390,
        "timestamp": 1720606091457,
        "payload": "UE 1a29: dlsch_rounds 1710910/166525/3902/327, dlsch_errors 74, pucch0_DTX 1251, BLER 0.09094 MCS (1) 7"
    },
    {
        "rowId": 3391,
        "timestamp": 1720606091457,
        "payload": "UE 1a29: MAC:    TX     5033101806 RX       44753805 bytes"
    },
    {
        "rowId": 3392,
        "timestamp": 1720606091457,
        "payload": "UE 1a29: LCID 1: TX          12618 RX          90842 bytes"
    },
    {
        "rowId": 3393,
        "timestamp": 1720606091457,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3394,
        "timestamp": 1720606091456,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 3395,
        "timestamp": 1720606091457,
        "payload": "UE 1a29: ulsch_rounds 210186/1320/38/7, ulsch_errors 4, ulsch_DTX 130, BLER 0.00004 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.5 dB"
    },
    {
        "rowId": 3396,
        "timestamp": 1720606091456,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3397,
        "timestamp": 1720606091457,
        "payload": "UE 1a29: LCID 4: TX     4878225621 RX       11905037 bytes"
    },
    {
        "rowId": 3398,
        "timestamp": 1720606091457,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3399,
        "timestamp": 1720606092736,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 3400,
        "timestamp": 1720606092736,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3401,
        "timestamp": 1720606092736,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3402,
        "timestamp": 1720606092737,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3403,
        "timestamp": 1720606092737,
        "payload": "UE 1a29: dlsch_rounds 1711460/166551/3902/327, dlsch_errors 74, pucch0_DTX 1251, BLER 0.05955 MCS (1) 7"
    },
    {
        "rowId": 3404,
        "timestamp": 1720606092737,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3405,
        "timestamp": 1720606092737,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3406,
        "timestamp": 1720606092737,
        "payload": "UE 1a29: LCID 4: TX     4879772253 RX       11908751 bytes"
    },
    {
        "rowId": 3407,
        "timestamp": 1720606092737,
        "payload": "UE 1a29: ulsch_rounds 210256/1320/38/7, ulsch_errors 4, ulsch_DTX 130, BLER 0.00001 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.5 dB"
    },
    {
        "rowId": 3408,
        "timestamp": 1720606092737,
        "payload": "UE 1a29: LCID 1: TX          12621 RX          90864 bytes"
    },
    {
        "rowId": 3409,
        "timestamp": 1720606092737,
        "payload": "UE 1a29: MAC:    TX     5034692526 RX       44769233 bytes"
    },
    {
        "rowId": 3410,
        "timestamp": 1720606094016,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 3411,
        "timestamp": 1720606094017,
        "payload": "UE 1a29: LCID 1: TX          12624 RX          90886 bytes"
    },
    {
        "rowId": 3412,
        "timestamp": 1720606094017,
        "payload": "UE 1a29: ulsch_rounds 210322/1321/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.02500 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 21.0 dB"
    },
    {
        "rowId": 3413,
        "timestamp": 1720606094017,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3414,
        "timestamp": 1720606094017,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3415,
        "timestamp": 1720606094017,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3416,
        "timestamp": 1720606094017,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3417,
        "timestamp": 1720606094017,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3418,
        "timestamp": 1720606094017,
        "payload": "UE 1a29: dlsch_rounds 1712045/166582/3905/327, dlsch_errors 74, pucch0_DTX 1254, BLER 0.05694 MCS (1) 9"
    },
    {
        "rowId": 3419,
        "timestamp": 1720606094017,
        "payload": "UE 1a29: LCID 4: TX     4881510314 RX       11912475 bytes"
    },
    {
        "rowId": 3420,
        "timestamp": 1720606094017,
        "payload": "UE 1a29: MAC:    TX     5036478316 RX       44783027 bytes"
    },
    {
        "rowId": 3421,
        "timestamp": 1720606095296,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3422,
        "timestamp": 1720606095296,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 3423,
        "timestamp": 1720606095297,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3424,
        "timestamp": 1720606095297,
        "payload": "UE 1a29: dlsch_rounds 1712514/166671/3905/327, dlsch_errors 74, pucch0_DTX 1254, BLER 0.11894 MCS (1) 6"
    },
    {
        "rowId": 3425,
        "timestamp": 1720606095297,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3426,
        "timestamp": 1720606095297,
        "payload": "UE 1a29: LCID 1: TX          12630 RX          90930 bytes"
    },
    {
        "rowId": 3427,
        "timestamp": 1720606095297,
        "payload": "UE 1a29: ulsch_rounds 210390/1321/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.00636 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 3428,
        "timestamp": 1720606095297,
        "payload": "UE 1a29: MAC:    TX     5037815992 RX       44797239 bytes"
    },
    {
        "rowId": 3429,
        "timestamp": 1720606095297,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3430,
        "timestamp": 1720606095297,
        "payload": "UE 1a29: LCID 4: TX     4882806920 RX       11915875 bytes"
    },
    {
        "rowId": 3431,
        "timestamp": 1720606095297,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3432,
        "timestamp": 1720606096576,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 3433,
        "timestamp": 1720606096577,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3434,
        "timestamp": 1720606096576,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -109 (32 meas)"
    },
    {
        "rowId": 3435,
        "timestamp": 1720606096577,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3436,
        "timestamp": 1720606096577,
        "payload": "UE 1a29: dlsch_rounds 1712982/166736/3912/327, dlsch_errors 74, pucch0_DTX 1254, BLER 0.13027 MCS (1) 6"
    },
    {
        "rowId": 3437,
        "timestamp": 1720606096577,
        "payload": "UE 1a29: ulsch_rounds 210458/1321/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.00162 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 3438,
        "timestamp": 1720606096577,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3439,
        "timestamp": 1720606096577,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3440,
        "timestamp": 1720606096577,
        "payload": "UE 1a29: LCID 1: TX          12633 RX          90952 bytes"
    },
    {
        "rowId": 3441,
        "timestamp": 1720606096577,
        "payload": "UE 1a29: MAC:    TX     5039188447 RX       44811451 bytes"
    },
    {
        "rowId": 3442,
        "timestamp": 1720606096577,
        "payload": "UE 1a29: LCID 4: TX     4884142557 RX       11919187 bytes"
    },
    {
        "rowId": 3443,
        "timestamp": 1720606097856,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 3444,
        "timestamp": 1720606097857,
        "payload": "UE 1a29: dlsch_rounds 1713507/166795/3913/327, dlsch_errors 74, pucch0_DTX 1254, BLER 0.11895 MCS (1) 6"
    },
    {
        "rowId": 3445,
        "timestamp": 1720606097857,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3446,
        "timestamp": 1720606097857,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 31 dB PCMAX 23 dBm, average RSRP -108 (32 meas)"
    },
    {
        "rowId": 3447,
        "timestamp": 1720606097857,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3448,
        "timestamp": 1720606097857,
        "payload": "UE 1a29: MAC:    TX     5040769791 RX       44826943 bytes"
    },
    {
        "rowId": 3449,
        "timestamp": 1720606097857,
        "payload": "UE 1a29: LCID 4: TX     4885683460 RX       11923089 bytes"
    },
    {
        "rowId": 3450,
        "timestamp": 1720606097857,
        "payload": "UE 1a29: LCID 1: TX          12636 RX          90974 bytes"
    },
    {
        "rowId": 3451,
        "timestamp": 1720606097857,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3452,
        "timestamp": 1720606097857,
        "payload": "UE 1a29: ulsch_rounds 210528/1322/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.01198 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 28.0 dB"
    },
    {
        "rowId": 3453,
        "timestamp": 1720606097857,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3454,
        "timestamp": 1720606099137,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 32 dB PCMAX 23 dBm, average RSRP -108 (32 meas)"
    },
    {
        "rowId": 3455,
        "timestamp": 1720606099137,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3456,
        "timestamp": 1720606099137,
        "payload": "UE 1a29: MAC:    TX     5042581304 RX       44840946 bytes"
    },
    {
        "rowId": 3457,
        "timestamp": 1720606099137,
        "payload": "UE 1a29: LCID 4: TX     4887451550 RX       11926645 bytes"
    },
    {
        "rowId": 3458,
        "timestamp": 1720606099137,
        "payload": "UE 1a29: LCID 1: TX          12639 RX          90996 bytes"
    },
    {
        "rowId": 3459,
        "timestamp": 1720606099137,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3460,
        "timestamp": 1720606099137,
        "payload": "UE 1a29: dlsch_rounds 1714100/166846/3916/327, dlsch_errors 74, pucch0_DTX 1254, BLER 0.09279 MCS (1) 6"
    },
    {
        "rowId": 3461,
        "timestamp": 1720606099137,
        "payload": "UE 1a29: ulsch_rounds 210595/1322/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.00338 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 3462,
        "timestamp": 1720606099136,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 3463,
        "timestamp": 1720606099137,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3464,
        "timestamp": 1720606099137,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3465,
        "timestamp": 1720606100416,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 3466,
        "timestamp": 1720606100417,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3467,
        "timestamp": 1720606100417,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3468,
        "timestamp": 1720606100417,
        "payload": "UE 1a29: MAC:    TX     5043910433 RX       44855589 bytes"
    },
    {
        "rowId": 3469,
        "timestamp": 1720606100417,
        "payload": "UE 1a29: LCID 1: TX          12645 RX          91040 bytes"
    },
    {
        "rowId": 3470,
        "timestamp": 1720606100417,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -108 (32 meas)"
    },
    {
        "rowId": 3471,
        "timestamp": 1720606100417,
        "payload": "UE 1a29: dlsch_rounds 1714580/166900/3918/327, dlsch_errors 74, pucch0_DTX 1254, BLER 0.10737 MCS (1) 6"
    },
    {
        "rowId": 3472,
        "timestamp": 1720606100417,
        "payload": "UE 1a29: ulsch_rounds 210663/1323/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.01127 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 3473,
        "timestamp": 1720606100417,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3474,
        "timestamp": 1720606100417,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3475,
        "timestamp": 1720606100417,
        "payload": "UE 1a29: LCID 4: TX     4888744698 RX       11930146 bytes"
    },
    {
        "rowId": 3476,
        "timestamp": 1720606101696,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 3477,
        "timestamp": 1720606101697,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3478,
        "timestamp": 1720606101696,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3479,
        "timestamp": 1720606101697,
        "payload": "UE 1a29: LCID 1: TX          12648 RX          91062 bytes"
    },
    {
        "rowId": 3480,
        "timestamp": 1720606101697,
        "payload": "UE 1a29: ulsch_rounds 210736/1323/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.00287 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 3481,
        "timestamp": 1720606101697,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3482,
        "timestamp": 1720606101697,
        "payload": "UE 1a29: LCID 4: TX     4890095255 RX       11936200 bytes"
    },
    {
        "rowId": 3483,
        "timestamp": 1720606101697,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3484,
        "timestamp": 1720606101697,
        "payload": "UE 1a29: MAC:    TX     5045300426 RX       44872426 bytes"
    },
    {
        "rowId": 3485,
        "timestamp": 1720606101697,
        "payload": "UE 1a29: dlsch_rounds 1715079/166960/3922/327, dlsch_errors 74, pucch0_DTX 1254, BLER 0.12686 MCS (1) 6"
    },
    {
        "rowId": 3486,
        "timestamp": 1720606101696,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -108 (32 meas)"
    },
    {
        "rowId": 3487,
        "timestamp": 1720606102976,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3488,
        "timestamp": 1720606102976,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 3489,
        "timestamp": 1720606102977,
        "payload": "UE 1a29: dlsch_rounds 1715621/167004/3924/327, dlsch_errors 74, pucch0_DTX 1254, BLER 0.10021 MCS (1) 6"
    },
    {
        "rowId": 3490,
        "timestamp": 1720606102976,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -109 (32 meas)"
    },
    {
        "rowId": 3491,
        "timestamp": 1720606102977,
        "payload": "UE 1a29: ulsch_rounds 210802/1323/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.00073 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 3492,
        "timestamp": 1720606102976,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3493,
        "timestamp": 1720606102977,
        "payload": "UE 1a29: LCID 1: TX          12651 RX          91084 bytes"
    },
    {
        "rowId": 3494,
        "timestamp": 1720606102977,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3495,
        "timestamp": 1720606102977,
        "payload": "UE 1a29: LCID 4: TX     4891686755 RX       11939968 bytes"
    },
    {
        "rowId": 3496,
        "timestamp": 1720606102977,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3497,
        "timestamp": 1720606102977,
        "payload": "UE 1a29: MAC:    TX     5046931161 RX       44886220 bytes"
    },
    {
        "rowId": 3498,
        "timestamp": 1720606104256,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 3499,
        "timestamp": 1720606104257,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3500,
        "timestamp": 1720606104257,
        "payload": "UE 1a29: ulsch_rounds 210870/1323/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.00019 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 3501,
        "timestamp": 1720606104257,
        "payload": "UE 1a29: MAC:    TX     5048731629 RX       44901294 bytes"
    },
    {
        "rowId": 3502,
        "timestamp": 1720606104257,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3503,
        "timestamp": 1720606104257,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3504,
        "timestamp": 1720606104257,
        "payload": "UE 1a29: LCID 4: TX     4893446335 RX       11943674 bytes"
    },
    {
        "rowId": 3505,
        "timestamp": 1720606104257,
        "payload": "UE 1a29: LCID 1: TX          12654 RX          91106 bytes"
    },
    {
        "rowId": 3506,
        "timestamp": 1720606104257,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3507,
        "timestamp": 1720606104257,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3508,
        "timestamp": 1720606104257,
        "payload": "UE 1a29: dlsch_rounds 1716198/167028/3924/327, dlsch_errors 74, pucch0_DTX 1254, BLER 0.05715 MCS (1) 6"
    },
    {
        "rowId": 3509,
        "timestamp": 1720606105536,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 3510,
        "timestamp": 1720606105537,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3511,
        "timestamp": 1720606105537,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3512,
        "timestamp": 1720606105537,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -109 (32 meas)"
    },
    {
        "rowId": 3513,
        "timestamp": 1720606105537,
        "payload": "UE 1a29: MAC:    TX     5050001490 RX       44915297 bytes"
    },
    {
        "rowId": 3514,
        "timestamp": 1720606105537,
        "payload": "UE 1a29: dlsch_rounds 1716659/167066/3927/327, dlsch_errors 74, pucch0_DTX 1254, BLER 0.08214 MCS (1) 6"
    },
    {
        "rowId": 3515,
        "timestamp": 1720606105537,
        "payload": "UE 1a29: LCID 1: TX          12660 RX          91150 bytes"
    },
    {
        "rowId": 3516,
        "timestamp": 1720606105537,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3517,
        "timestamp": 1720606105537,
        "payload": "UE 1a29: LCID 4: TX     4894680071 RX       11947042 bytes"
    },
    {
        "rowId": 3518,
        "timestamp": 1720606105537,
        "payload": "UE 1a29: ulsch_rounds 210937/1323/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.00005 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 3519,
        "timestamp": 1720606105537,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3520,
        "timestamp": 1720606106816,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 3521,
        "timestamp": 1720606106817,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -108 (32 meas)"
    },
    {
        "rowId": 3522,
        "timestamp": 1720606106817,
        "payload": "UE 1a29: MAC:    TX     5051355084 RX       44929300 bytes"
    },
    {
        "rowId": 3523,
        "timestamp": 1720606106817,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3524,
        "timestamp": 1720606106817,
        "payload": "UE 1a29: LCID 4: TX     4896001208 RX       11950234 bytes"
    },
    {
        "rowId": 3525,
        "timestamp": 1720606106817,
        "payload": "UE 1a29: dlsch_rounds 1717124/167095/3927/327, dlsch_errors 74, pucch0_DTX 1254, BLER 0.08445 MCS (1) 9"
    },
    {
        "rowId": 3526,
        "timestamp": 1720606106817,
        "payload": "UE 1a29: ulsch_rounds 211004/1323/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.00001 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 3527,
        "timestamp": 1720606106817,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3528,
        "timestamp": 1720606106817,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3529,
        "timestamp": 1720606106817,
        "payload": "UE 1a29: LCID 1: TX          12663 RX          91172 bytes"
    },
    {
        "rowId": 3530,
        "timestamp": 1720606106817,
        "payload": "UE 1a29: CQI 11, RI 1, PMI (0,3)"
    },
    {
        "rowId": 3531,
        "timestamp": 1720606108096,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 3532,
        "timestamp": 1720606108097,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3533,
        "timestamp": 1720606108097,
        "payload": "UE 1a29: ulsch_rounds 211073/1325/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.01980 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 3534,
        "timestamp": 1720606108097,
        "payload": "UE 1a29: MAC:    TX     5053004808 RX       44944583 bytes"
    },
    {
        "rowId": 3535,
        "timestamp": 1720606108097,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3536,
        "timestamp": 1720606108097,
        "payload": "UE 1a29: LCID 1: TX          12666 RX          91194 bytes"
    },
    {
        "rowId": 3537,
        "timestamp": 1720606108097,
        "payload": "UE 1a29: LCID 4: TX     4897609287 RX       11953960 bytes"
    },
    {
        "rowId": 3538,
        "timestamp": 1720606108097,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3539,
        "timestamp": 1720606108096,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3540,
        "timestamp": 1720606108096,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3541,
        "timestamp": 1720606108097,
        "payload": "UE 1a29: dlsch_rounds 1717665/167190/3930/328, dlsch_errors 74, pucch0_DTX 1254, BLER 0.15213 MCS (1) 6"
    },
    {
        "rowId": 3542,
        "timestamp": 1720606109376,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 3543,
        "timestamp": 1720606109376,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3544,
        "timestamp": 1720606109377,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3545,
        "timestamp": 1720606109377,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3546,
        "timestamp": 1720606109377,
        "payload": "UE 1a29: ulsch_rounds 211142/1325/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.00503 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 3547,
        "timestamp": 1720606109377,
        "payload": "UE 1a29: dlsch_rounds 1718223/167191/3930/328, dlsch_errors 74, pucch0_DTX 1254, BLER 0.04479 MCS (1) 8"
    },
    {
        "rowId": 3548,
        "timestamp": 1720606109377,
        "payload": "UE 1a29: LCID 1: TX          12669 RX          91216 bytes"
    },
    {
        "rowId": 3549,
        "timestamp": 1720606109377,
        "payload": "UE 1a29: MAC:    TX     5054700998 RX       44959004 bytes"
    },
    {
        "rowId": 3550,
        "timestamp": 1720606109377,
        "payload": "UE 1a29: LCID 4: TX     4899263342 RX       11957636 bytes"
    },
    {
        "rowId": 3551,
        "timestamp": 1720606109377,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3552,
        "timestamp": 1720606109377,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3553,
        "timestamp": 1720606110656,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 3554,
        "timestamp": 1720606110657,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3555,
        "timestamp": 1720606110656,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3556,
        "timestamp": 1720606110657,
        "payload": "UE 1a29: dlsch_rounds 1718690/167268/3930/328, dlsch_errors 74, pucch0_DTX 1254, BLER 0.12311 MCS (1) 6"
    },
    {
        "rowId": 3557,
        "timestamp": 1720606110657,
        "payload": "UE 1a29: ulsch_rounds 211211/1326/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.01112 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 3558,
        "timestamp": 1720606110656,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3559,
        "timestamp": 1720606110657,
        "payload": "UE 1a29: MAC:    TX     5056006670 RX       44973856 bytes"
    },
    {
        "rowId": 3560,
        "timestamp": 1720606110657,
        "payload": "UE 1a29: LCID 4: TX     4900522237 RX       11961029 bytes"
    },
    {
        "rowId": 3561,
        "timestamp": 1720606110657,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3562,
        "timestamp": 1720606110657,
        "payload": "UE 1a29: LCID 1: TX          12675 RX          91260 bytes"
    },
    {
        "rowId": 3563,
        "timestamp": 1720606110657,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3564,
        "timestamp": 1720606111937,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3565,
        "timestamp": 1720606111937,
        "payload": "UE 1a29: LCID 1: TX          12678 RX          91282 bytes"
    },
    {
        "rowId": 3566,
        "timestamp": 1720606111937,
        "payload": "UE 1a29: dlsch_rounds 1719202/167300/3931/328, dlsch_errors 74, pucch0_DTX 1254, BLER 0.07484 MCS (1) 6"
    },
    {
        "rowId": 3567,
        "timestamp": 1720606111937,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 3568,
        "timestamp": 1720606111937,
        "payload": "UE 1a29: MAC:    TX     5057425742 RX       44989348 bytes"
    },
    {
        "rowId": 3569,
        "timestamp": 1720606111937,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 3570,
        "timestamp": 1720606111937,
        "payload": "UE 1a29: LCID 4: TX     4901903720 RX       11964591 bytes"
    },
    {
        "rowId": 3571,
        "timestamp": 1720606111937,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3572,
        "timestamp": 1720606111937,
        "payload": "UE 1a29: ulsch_rounds 211281/1327/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.01356 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 3573,
        "timestamp": 1720606111937,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3574,
        "timestamp": 1720606111937,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3575,
        "timestamp": 1720606113217,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 3576,
        "timestamp": 1720606113216,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 3577,
        "timestamp": 1720606113217,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3578,
        "timestamp": 1720606113217,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3579,
        "timestamp": 1720606113217,
        "payload": "UE 1a29: dlsch_rounds 1719785/167328/3931/328, dlsch_errors 74, pucch0_DTX 1255, BLER 0.04642 MCS (1) 9"
    },
    {
        "rowId": 3580,
        "timestamp": 1720606113217,
        "payload": "UE 1a29: ulsch_rounds 211349/1327/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.00345 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.5 dB"
    },
    {
        "rowId": 3581,
        "timestamp": 1720606113217,
        "payload": "UE 1a29: LCID 1: TX          12681 RX          91304 bytes"
    },
    {
        "rowId": 3582,
        "timestamp": 1720606113217,
        "payload": "UE 1a29: MAC:    TX     5059168658 RX       45003544 bytes"
    },
    {
        "rowId": 3583,
        "timestamp": 1720606113217,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3584,
        "timestamp": 1720606113217,
        "payload": "UE 1a29: LCID 4: TX     4903604487 RX       11968311 bytes"
    },
    {
        "rowId": 3585,
        "timestamp": 1720606113217,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3586,
        "timestamp": 1720606114496,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 3587,
        "timestamp": 1720606114497,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3588,
        "timestamp": 1720606114497,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 3589,
        "timestamp": 1720606114497,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3590,
        "timestamp": 1720606114497,
        "payload": "UE 1a29: ulsch_rounds 211417/1328/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.01303 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 3591,
        "timestamp": 1720606114497,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3592,
        "timestamp": 1720606114497,
        "payload": "UE 1a29: dlsch_rounds 1720312/167375/3935/329, dlsch_errors 74, pucch0_DTX 1255, BLER 0.05247 MCS (1) 9"
    },
    {
        "rowId": 3593,
        "timestamp": 1720606114497,
        "payload": "UE 1a29: LCID 1: TX          12684 RX          91348 bytes"
    },
    {
        "rowId": 3594,
        "timestamp": 1720606114497,
        "payload": "UE 1a29: MAC:    TX     5060769400 RX       45018123 bytes"
    },
    {
        "rowId": 3595,
        "timestamp": 1720606114497,
        "payload": "UE 1a29: LCID 4: TX     4905153686 RX       11971918 bytes"
    },
    {
        "rowId": 3596,
        "timestamp": 1720606114497,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3597,
        "timestamp": 1720606115777,
        "payload": "UE 1a29: ulsch_rounds 211485/1328/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.00368 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 3598,
        "timestamp": 1720606115777,
        "payload": "UE 1a29: dlsch_rounds 1720803/167470/3937/329, dlsch_errors 74, pucch0_DTX 1255, BLER 0.14504 MCS (1) 6"
    },
    {
        "rowId": 3599,
        "timestamp": 1720606115777,
        "payload": "UE 1a29: MAC:    TX     5062148969 RX       45032335 bytes"
    },
    {
        "rowId": 3600,
        "timestamp": 1720606115777,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3601,
        "timestamp": 1720606115776,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 3602,
        "timestamp": 1720606115777,
        "payload": "UE 1a29: LCID 4: TX     4906488099 RX       11975379 bytes"
    },
    {
        "rowId": 3603,
        "timestamp": 1720606115777,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3604,
        "timestamp": 1720606115777,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 3605,
        "timestamp": 1720606115777,
        "payload": "UE 1a29: LCID 1: TX          12690 RX          91370 bytes"
    },
    {
        "rowId": 3606,
        "timestamp": 1720606115777,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 3607,
        "timestamp": 1720606115777,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3608,
        "timestamp": 1720606117056,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 3609,
        "timestamp": 1720606117057,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 3610,
        "timestamp": 1720606117057,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3611,
        "timestamp": 1720606117057,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3612,
        "timestamp": 1720606117057,
        "payload": "UE 1a29: LCID 4: TX     4907955405 RX       11978689 bytes"
    },
    {
        "rowId": 3613,
        "timestamp": 1720606117057,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3614,
        "timestamp": 1720606117057,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3615,
        "timestamp": 1720606117057,
        "payload": "UE 1a29: dlsch_rounds 1721318/167476/3937/329, dlsch_errors 74, pucch0_DTX 1255, BLER 0.04867 MCS (1) 7"
    },
    {
        "rowId": 3616,
        "timestamp": 1720606117057,
        "payload": "UE 1a29: MAC:    TX     5063652503 RX       45046129 bytes"
    },
    {
        "rowId": 3617,
        "timestamp": 1720606117057,
        "payload": "UE 1a29: LCID 1: TX          12693 RX          91392 bytes"
    },
    {
        "rowId": 3618,
        "timestamp": 1720606117057,
        "payload": "UE 1a29: ulsch_rounds 211551/1328/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.00094 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 3619,
        "timestamp": 1720606118337,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3620,
        "timestamp": 1720606118337,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3621,
        "timestamp": 1720606118336,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 3622,
        "timestamp": 1720606118337,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3623,
        "timestamp": 1720606118337,
        "payload": "UE 1a29: dlsch_rounds 1721894/167561/3937/329, dlsch_errors 74, pucch0_DTX 1255, BLER 0.11372 MCS (1) 6"
    },
    {
        "rowId": 3624,
        "timestamp": 1720606118337,
        "payload": "UE 1a29: ulsch_rounds 211618/1329/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.00910 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 3625,
        "timestamp": 1720606118337,
        "payload": "UE 1a29: LCID 4: TX     4909730541 RX       11982631 bytes"
    },
    {
        "rowId": 3626,
        "timestamp": 1720606118337,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3627,
        "timestamp": 1720606118337,
        "payload": "UE 1a29: LCID 1: TX          12696 RX          91414 bytes"
    },
    {
        "rowId": 3628,
        "timestamp": 1720606118337,
        "payload": "UE 1a29: MAC:    TX     5065477847 RX       45060547 bytes"
    },
    {
        "rowId": 3629,
        "timestamp": 1720606118337,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3630,
        "timestamp": 1720606119617,
        "payload": "UE 1a29: CQI 11, RI 1, PMI (0,3)"
    },
    {
        "rowId": 3631,
        "timestamp": 1720606119616,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 3632,
        "timestamp": 1720606119617,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 3633,
        "timestamp": 1720606119617,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3634,
        "timestamp": 1720606119617,
        "payload": "UE 1a29: dlsch_rounds 1722409/167568/3937/329, dlsch_errors 74, pucch0_DTX 1255, BLER 0.03703 MCS (1) 9"
    },
    {
        "rowId": 3635,
        "timestamp": 1720606119617,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3636,
        "timestamp": 1720606119617,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3637,
        "timestamp": 1720606119617,
        "payload": "UE 1a29: LCID 4: TX     4911145231 RX       11985927 bytes"
    },
    {
        "rowId": 3638,
        "timestamp": 1720606119617,
        "payload": "UE 1a29: LCID 1: TX          12702 RX          91458 bytes"
    },
    {
        "rowId": 3639,
        "timestamp": 1720606119617,
        "payload": "UE 1a29: MAC:    TX     5066922983 RX       45074341 bytes"
    },
    {
        "rowId": 3640,
        "timestamp": 1720606119617,
        "payload": "UE 1a29: ulsch_rounds 211684/1329/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.00231 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 3641,
        "timestamp": 1720606120896,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 3642,
        "timestamp": 1720606120897,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 3643,
        "timestamp": 1720606120897,
        "payload": "UE 1a29: CQI 12, RI 1, PMI (0,3)"
    },
    {
        "rowId": 3644,
        "timestamp": 1720606120897,
        "payload": "UE 1a29: ulsch_rounds 211751/1329/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.00065 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 21.5 dB"
    },
    {
        "rowId": 3645,
        "timestamp": 1720606120897,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3646,
        "timestamp": 1720606120897,
        "payload": "UE 1a29: dlsch_rounds 1722908/167674/3939/329, dlsch_errors 74, pucch0_DTX 1255, BLER 0.13883 MCS (1) 6"
    },
    {
        "rowId": 3647,
        "timestamp": 1720606120897,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3648,
        "timestamp": 1720606120897,
        "payload": "UE 1a29: LCID 4: TX     4912465417 RX       11989476 bytes"
    },
    {
        "rowId": 3649,
        "timestamp": 1720606120897,
        "payload": "UE 1a29: MAC:    TX     5068282684 RX       45088328 bytes"
    },
    {
        "rowId": 3650,
        "timestamp": 1720606120897,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3651,
        "timestamp": 1720606120897,
        "payload": "UE 1a29: LCID 1: TX          12705 RX          91480 bytes"
    },
    {
        "rowId": 3652,
        "timestamp": 1720606122176,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 3653,
        "timestamp": 1720606122177,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 3654,
        "timestamp": 1720606122177,
        "payload": "UE 1a29: CQI 12, RI 1, PMI (0,3)"
    },
    {
        "rowId": 3655,
        "timestamp": 1720606122177,
        "payload": "UE 1a29: LCID 4: TX     4913942657 RX       11992796 bytes"
    },
    {
        "rowId": 3656,
        "timestamp": 1720606122177,
        "payload": "UE 1a29: LCID 1: TX          12708 RX          91502 bytes"
    },
    {
        "rowId": 3657,
        "timestamp": 1720606122177,
        "payload": "UE 1a29: MAC:    TX     5069796558 RX       45102749 bytes"
    },
    {
        "rowId": 3658,
        "timestamp": 1720606122177,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3659,
        "timestamp": 1720606122177,
        "payload": "UE 1a29: ulsch_rounds 211820/1329/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.00017 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 3660,
        "timestamp": 1720606122177,
        "payload": "UE 1a29: dlsch_rounds 1723439/167691/3939/329, dlsch_errors 74, pucch0_DTX 1255, BLER 0.05799 MCS (1) 6"
    },
    {
        "rowId": 3661,
        "timestamp": 1720606122177,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3662,
        "timestamp": 1720606122177,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3663,
        "timestamp": 1720606123457,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3664,
        "timestamp": 1720606123456,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 32 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 3665,
        "timestamp": 1720606123457,
        "payload": "UE 1a29: ulsch_rounds 211887/1329/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.00004 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 3666,
        "timestamp": 1720606123457,
        "payload": "UE 1a29: MAC:    TX     5071647119 RX       45116736 bytes"
    },
    {
        "rowId": 3667,
        "timestamp": 1720606123457,
        "payload": "UE 1a29: LCID 1: TX          12711 RX          91524 bytes"
    },
    {
        "rowId": 3668,
        "timestamp": 1720606123457,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3669,
        "timestamp": 1720606123457,
        "payload": "UE 1a29: LCID 4: TX     4915754666 RX       11996808 bytes"
    },
    {
        "rowId": 3670,
        "timestamp": 1720606123457,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3671,
        "timestamp": 1720606123457,
        "payload": "UE 1a29: dlsch_rounds 1724067/167700/3939/329, dlsch_errors 74, pucch0_DTX 1255, BLER 0.02287 MCS (1) 16"
    },
    {
        "rowId": 3672,
        "timestamp": 1720606123457,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3673,
        "timestamp": 1720606123456,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 3674,
        "timestamp": 1720606124736,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 3675,
        "timestamp": 1720606124736,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 3676,
        "timestamp": 1720606124736,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3677,
        "timestamp": 1720606124737,
        "payload": "UE 1a29: ulsch_rounds 211954/1329/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.00001 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 3678,
        "timestamp": 1720606124737,
        "payload": "UE 1a29: MAC:    TX     5072974138 RX       45131170 bytes"
    },
    {
        "rowId": 3679,
        "timestamp": 1720606124737,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3680,
        "timestamp": 1720606124737,
        "payload": "UE 1a29: LCID 4: TX     4917040056 RX       12000081 bytes"
    },
    {
        "rowId": 3681,
        "timestamp": 1720606124737,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3682,
        "timestamp": 1720606124737,
        "payload": "UE 1a29: LCID 1: TX          12717 RX          91568 bytes"
    },
    {
        "rowId": 3683,
        "timestamp": 1720606124737,
        "payload": "UE 1a29: dlsch_rounds 1724546/167784/3940/329, dlsch_errors 74, pucch0_DTX 1255, BLER 0.10112 MCS (1) 6"
    },
    {
        "rowId": 3684,
        "timestamp": 1720606124737,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3685,
        "timestamp": 1720606126016,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 3686,
        "timestamp": 1720606126016,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 3687,
        "timestamp": 1720606126017,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3688,
        "timestamp": 1720606126017,
        "payload": "UE 1a29: dlsch_rounds 1725043/167814/3941/329, dlsch_errors 74, pucch0_DTX 1255, BLER 0.07894 MCS (1) 9"
    },
    {
        "rowId": 3689,
        "timestamp": 1720606126017,
        "payload": "UE 1a29: ulsch_rounds 212023/1329/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 3690,
        "timestamp": 1720606126017,
        "payload": "UE 1a29: MAC:    TX     5074371838 RX       45146373 bytes"
    },
    {
        "rowId": 3691,
        "timestamp": 1720606126017,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3692,
        "timestamp": 1720606126017,
        "payload": "UE 1a29: LCID 4: TX     4918395032 RX       12003672 bytes"
    },
    {
        "rowId": 3693,
        "timestamp": 1720606126017,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3694,
        "timestamp": 1720606126017,
        "payload": "UE 1a29: LCID 1: TX          12720 RX          91590 bytes"
    },
    {
        "rowId": 3695,
        "timestamp": 1720606126017,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3696,
        "timestamp": 1720606127296,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 3697,
        "timestamp": 1720606127297,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 3698,
        "timestamp": 1720606127297,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3699,
        "timestamp": 1720606127297,
        "payload": "UE 1a29: ulsch_rounds 212092/1332/39/8, ulsch_errors 4, ulsch_DTX 132, BLER 0.02202 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.5 dB"
    },
    {
        "rowId": 3700,
        "timestamp": 1720606127297,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 3701,
        "timestamp": 1720606127297,
        "payload": "UE 1a29: dlsch_rounds 1725593/167879/3941/329, dlsch_errors 74, pucch0_DTX 1255, BLER 0.09911 MCS (1) 6"
    },
    {
        "rowId": 3702,
        "timestamp": 1720606127297,
        "payload": "UE 1a29: MAC:    TX     5075967852 RX       45162518 bytes"
    },
    {
        "rowId": 3703,
        "timestamp": 1720606127297,
        "payload": "UE 1a29: LCID 4: TX     4919943033 RX       12009833 bytes"
    },
    {
        "rowId": 3704,
        "timestamp": 1720606127297,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3705,
        "timestamp": 1720606127297,
        "payload": "UE 1a29: LCID 1: TX          12723 RX          91612 bytes"
    },
    {
        "rowId": 3706,
        "timestamp": 1720606127297,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3707,
        "timestamp": 1720606128576,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 3708,
        "timestamp": 1720606128577,
        "payload": "UE 1a29: dlsch_rounds 1726188/167903/3941/329, dlsch_errors 74, pucch0_DTX 1259, BLER 0.06357 MCS (1) 7"
    },
    {
        "rowId": 3709,
        "timestamp": 1720606128577,
        "payload": "UE 1a29: MAC:    TX     5077782222 RX       45177563 bytes"
    },
    {
        "rowId": 3710,
        "timestamp": 1720606128577,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,1)"
    },
    {
        "rowId": 3711,
        "timestamp": 1720606128577,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 3712,
        "timestamp": 1720606128577,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3713,
        "timestamp": 1720606128577,
        "payload": "UE 1a29: ulsch_rounds 212162/1334/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.02797 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 3714,
        "timestamp": 1720606128577,
        "payload": "UE 1a29: LCID 1: TX          12726 RX          91634 bytes"
    },
    {
        "rowId": 3715,
        "timestamp": 1720606128577,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3716,
        "timestamp": 1720606128577,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3717,
        "timestamp": 1720606128577,
        "payload": "UE 1a29: LCID 4: TX     4921714292 RX       12013882 bytes"
    },
    {
        "rowId": 3718,
        "timestamp": 1720606129857,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3719,
        "timestamp": 1720606129857,
        "payload": "UE 1a29: MAC:    TX     5079121172 RX       45191997 bytes"
    },
    {
        "rowId": 3720,
        "timestamp": 1720606129857,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3721,
        "timestamp": 1720606129857,
        "payload": "UE 1a29: LCID 1: TX          12732 RX          91678 bytes"
    },
    {
        "rowId": 3722,
        "timestamp": 1720606129857,
        "payload": "UE 1a29: LCID 4: TX     4922996365 RX       12017144 bytes"
    },
    {
        "rowId": 3723,
        "timestamp": 1720606129857,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3724,
        "timestamp": 1720606129857,
        "payload": "UE 1a29: dlsch_rounds 1726689/167955/3941/329, dlsch_errors 74, pucch0_DTX 1259, BLER 0.10941 MCS (1) 13"
    },
    {
        "rowId": 3725,
        "timestamp": 1720606129857,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,1)"
    },
    {
        "rowId": 3726,
        "timestamp": 1720606129857,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3727,
        "timestamp": 1720606129857,
        "payload": "UE 1a29: ulsch_rounds 212229/1334/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00711 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 3728,
        "timestamp": 1720606129856,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 3729,
        "timestamp": 1720606131137,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 3730,
        "timestamp": 1720606131137,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3731,
        "timestamp": 1720606131137,
        "payload": "UE 1a29: dlsch_rounds 1727180/168014/3942/329, dlsch_errors 74, pucch0_DTX 1259, BLER 0.10113 MCS (1) 9"
    },
    {
        "rowId": 3732,
        "timestamp": 1720606131136,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 3733,
        "timestamp": 1720606131137,
        "payload": "UE 1a29: ulsch_rounds 212296/1334/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00201 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 3734,
        "timestamp": 1720606131137,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3735,
        "timestamp": 1720606131137,
        "payload": "UE 1a29: MAC:    TX     5080517531 RX       45205968 bytes"
    },
    {
        "rowId": 3736,
        "timestamp": 1720606131137,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3737,
        "timestamp": 1720606131137,
        "payload": "UE 1a29: LCID 1: TX          12735 RX          91700 bytes"
    },
    {
        "rowId": 3738,
        "timestamp": 1720606131137,
        "payload": "UE 1a29: LCID 4: TX     4924336300 RX       12020593 bytes"
    },
    {
        "rowId": 3739,
        "timestamp": 1720606131137,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3740,
        "timestamp": 1720606132417,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3741,
        "timestamp": 1720606132416,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 3742,
        "timestamp": 1720606132417,
        "payload": "UE 1a29: dlsch_rounds 1727691/168076/3959/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.16321 MCS (1) 11"
    },
    {
        "rowId": 3743,
        "timestamp": 1720606132417,
        "payload": "UE 1a29: LCID 4: TX     4925842267 RX       12024066 bytes"
    },
    {
        "rowId": 3744,
        "timestamp": 1720606132417,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3745,
        "timestamp": 1720606132417,
        "payload": "UE 1a29: ulsch_rounds 212363/1334/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00051 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 3746,
        "timestamp": 1720606132417,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3747,
        "timestamp": 1720606132417,
        "payload": "UE 1a29: LCID 1: TX          12738 RX          91722 bytes"
    },
    {
        "rowId": 3748,
        "timestamp": 1720606132417,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3749,
        "timestamp": 1720606132417,
        "payload": "UE 1a29: MAC:    TX     5082081835 RX       45219971 bytes"
    },
    {
        "rowId": 3750,
        "timestamp": 1720606132417,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3751,
        "timestamp": 1720606133696,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 3752,
        "timestamp": 1720606133697,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 3753,
        "timestamp": 1720606133697,
        "payload": "UE 1a29: dlsch_rounds 1728277/168098/3959/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.07097 MCS (1) 9"
    },
    {
        "rowId": 3754,
        "timestamp": 1720606133697,
        "payload": "UE 1a29: ulsch_rounds 212433/1334/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00013 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 28.0 dB"
    },
    {
        "rowId": 3755,
        "timestamp": 1720606133697,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3756,
        "timestamp": 1720606133697,
        "payload": "UE 1a29: MAC:    TX     5083944019 RX       45235463 bytes"
    },
    {
        "rowId": 3757,
        "timestamp": 1720606133697,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3758,
        "timestamp": 1720606133697,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3759,
        "timestamp": 1720606133697,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3760,
        "timestamp": 1720606133697,
        "payload": "UE 1a29: LCID 1: TX          12741 RX          91744 bytes"
    },
    {
        "rowId": 3761,
        "timestamp": 1720606133697,
        "payload": "UE 1a29: LCID 4: TX     4927649916 RX       12028056 bytes"
    },
    {
        "rowId": 3762,
        "timestamp": 1720606134976,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 3763,
        "timestamp": 1720606134977,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3764,
        "timestamp": 1720606134977,
        "payload": "UE 1a29: MAC:    TX     5085281813 RX       45249688 bytes"
    },
    {
        "rowId": 3765,
        "timestamp": 1720606134977,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3766,
        "timestamp": 1720606134977,
        "payload": "UE 1a29: dlsch_rounds 1728751/168125/3960/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.05510 MCS (1) 9"
    },
    {
        "rowId": 3767,
        "timestamp": 1720606134977,
        "payload": "UE 1a29: ulsch_rounds 212499/1334/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00004 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 3768,
        "timestamp": 1720606134977,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3769,
        "timestamp": 1720606134977,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3770,
        "timestamp": 1720606134977,
        "payload": "UE 1a29: LCID 4: TX     4928934996 RX       12031238 bytes"
    },
    {
        "rowId": 3771,
        "timestamp": 1720606134977,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3772,
        "timestamp": 1720606134977,
        "payload": "UE 1a29: LCID 1: TX          12747 RX          91788 bytes"
    },
    {
        "rowId": 3773,
        "timestamp": 1720606136257,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3774,
        "timestamp": 1720606136257,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3775,
        "timestamp": 1720606136257,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 3776,
        "timestamp": 1720606136257,
        "payload": "UE 1a29: ulsch_rounds 212566/1334/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00001 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 3777,
        "timestamp": 1720606136257,
        "payload": "UE 1a29: LCID 1: TX          12750 RX          91810 bytes"
    },
    {
        "rowId": 3778,
        "timestamp": 1720606136257,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3779,
        "timestamp": 1720606136257,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3780,
        "timestamp": 1720606136257,
        "payload": "UE 1a29: LCID 4: TX     4930262913 RX       12034686 bytes"
    },
    {
        "rowId": 3781,
        "timestamp": 1720606136257,
        "payload": "UE 1a29: MAC:    TX     5086670024 RX       45263691 bytes"
    },
    {
        "rowId": 3782,
        "timestamp": 1720606136257,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 3783,
        "timestamp": 1720606136257,
        "payload": "UE 1a29: dlsch_rounds 1729242/168203/3960/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.13196 MCS (1) 12"
    },
    {
        "rowId": 3784,
        "timestamp": 1720606137536,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 3785,
        "timestamp": 1720606137537,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3786,
        "timestamp": 1720606137537,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3787,
        "timestamp": 1720606137537,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3788,
        "timestamp": 1720606137537,
        "payload": "UE 1a29: dlsch_rounds 1729778/168246/3964/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.07744 MCS (1) 11"
    },
    {
        "rowId": 3789,
        "timestamp": 1720606137537,
        "payload": "UE 1a29: ulsch_rounds 212637/1334/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 33.0 dB"
    },
    {
        "rowId": 3790,
        "timestamp": 1720606137537,
        "payload": "UE 1a29: MAC:    TX     5088298467 RX       45278929 bytes"
    },
    {
        "rowId": 3791,
        "timestamp": 1720606137537,
        "payload": "UE 1a29: LCID 4: TX     4931826370 RX       12038440 bytes"
    },
    {
        "rowId": 3792,
        "timestamp": 1720606137537,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3793,
        "timestamp": 1720606137537,
        "payload": "UE 1a29: LCID 1: TX          12753 RX          91832 bytes"
    },
    {
        "rowId": 3794,
        "timestamp": 1720606137537,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3795,
        "timestamp": 1720606138816,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 3796,
        "timestamp": 1720606138817,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3797,
        "timestamp": 1720606138817,
        "payload": "UE 1a29: ulsch_rounds 212707/1334/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 3798,
        "timestamp": 1720606138817,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3799,
        "timestamp": 1720606138817,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3800,
        "timestamp": 1720606138817,
        "payload": "UE 1a29: MAC:    TX     5090192720 RX       45293958 bytes"
    },
    {
        "rowId": 3801,
        "timestamp": 1720606138817,
        "payload": "UE 1a29: dlsch_rounds 1730357/168324/3964/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.16148 MCS (1) 10"
    },
    {
        "rowId": 3802,
        "timestamp": 1720606138817,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3803,
        "timestamp": 1720606138817,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3804,
        "timestamp": 1720606138817,
        "payload": "UE 1a29: LCID 4: TX     4933652847 RX       12042286 bytes"
    },
    {
        "rowId": 3805,
        "timestamp": 1720606138817,
        "payload": "UE 1a29: LCID 1: TX          12756 RX          91854 bytes"
    },
    {
        "rowId": 3806,
        "timestamp": 1720606140097,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 3807,
        "timestamp": 1720606140097,
        "payload": "UE 1a29: MAC:    TX     5091492494 RX       45309450 bytes"
    },
    {
        "rowId": 3808,
        "timestamp": 1720606140097,
        "payload": "UE 1a29: ulsch_rounds 212777/1334/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 3809,
        "timestamp": 1720606140097,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3810,
        "timestamp": 1720606140097,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3811,
        "timestamp": 1720606140097,
        "payload": "UE 1a29: dlsch_rounds 1730821/168329/3964/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.05315 MCS (1) 11"
    },
    {
        "rowId": 3812,
        "timestamp": 1720606140097,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3813,
        "timestamp": 1720606140097,
        "payload": "UE 1a29: LCID 1: TX          12762 RX          91898 bytes"
    },
    {
        "rowId": 3814,
        "timestamp": 1720606140097,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3815,
        "timestamp": 1720606140097,
        "payload": "UE 1a29: LCID 4: TX     4934895881 RX       12045690 bytes"
    },
    {
        "rowId": 3816,
        "timestamp": 1720606140097,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3817,
        "timestamp": 1720606141377,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 3818,
        "timestamp": 1720606141377,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3819,
        "timestamp": 1720606141377,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3820,
        "timestamp": 1720606141377,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 3821,
        "timestamp": 1720606141377,
        "payload": "UE 1a29: dlsch_rounds 1731315/168409/3964/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.17380 MCS (1) 12"
    },
    {
        "rowId": 3822,
        "timestamp": 1720606141377,
        "payload": "UE 1a29: ulsch_rounds 212844/1335/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00581 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 3823,
        "timestamp": 1720606141377,
        "payload": "UE 1a29: LCID 1: TX          12765 RX          91920 bytes"
    },
    {
        "rowId": 3824,
        "timestamp": 1720606141377,
        "payload": "UE 1a29: MAC:    TX     5092902029 RX       45323884 bytes"
    },
    {
        "rowId": 3825,
        "timestamp": 1720606141377,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3826,
        "timestamp": 1720606141377,
        "payload": "UE 1a29: LCID 4: TX     4936237353 RX       12049049 bytes"
    },
    {
        "rowId": 3827,
        "timestamp": 1720606141377,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3828,
        "timestamp": 1720606142657,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3829,
        "timestamp": 1720606142657,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 3830,
        "timestamp": 1720606142657,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3831,
        "timestamp": 1720606142657,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3832,
        "timestamp": 1720606142657,
        "payload": "UE 1a29: dlsch_rounds 1731871/168434/3964/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.08365 MCS (1) 11"
    },
    {
        "rowId": 3833,
        "timestamp": 1720606142657,
        "payload": "UE 1a29: LCID 1: TX          12768 RX          91942 bytes"
    },
    {
        "rowId": 3834,
        "timestamp": 1720606142657,
        "payload": "UE 1a29: ulsch_rounds 212912/1336/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00865 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 3835,
        "timestamp": 1720606142657,
        "payload": "UE 1a29: LCID 4: TX     4937887205 RX       12052720 bytes"
    },
    {
        "rowId": 3836,
        "timestamp": 1720606142657,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3837,
        "timestamp": 1720606142657,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3838,
        "timestamp": 1720606142657,
        "payload": "UE 1a29: MAC:    TX     5094612966 RX       45338527 bytes"
    },
    {
        "rowId": 3839,
        "timestamp": 1720606143937,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 3840,
        "timestamp": 1720606143937,
        "payload": "UE 1a29: dlsch_rounds 1732425/168473/3964/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.09206 MCS (1) 12"
    },
    {
        "rowId": 3841,
        "timestamp": 1720606143937,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3842,
        "timestamp": 1720606143937,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3843,
        "timestamp": 1720606143937,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3844,
        "timestamp": 1720606143937,
        "payload": "UE 1a29: MAC:    TX     5096322397 RX       45353588 bytes"
    },
    {
        "rowId": 3845,
        "timestamp": 1720606143937,
        "payload": "UE 1a29: LCID 1: TX          12771 RX          91964 bytes"
    },
    {
        "rowId": 3846,
        "timestamp": 1720606143937,
        "payload": "UE 1a29: LCID 4: TX     4939532626 RX       12056323 bytes"
    },
    {
        "rowId": 3847,
        "timestamp": 1720606143937,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3848,
        "timestamp": 1720606143937,
        "payload": "UE 1a29: ulsch_rounds 212982/1337/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.01017 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 3849,
        "timestamp": 1720606143937,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3850,
        "timestamp": 1720606145217,
        "payload": "UE 1a29: ulsch_rounds 213051/1338/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00933 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 3851,
        "timestamp": 1720606145217,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3852,
        "timestamp": 1720606145217,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3853,
        "timestamp": 1720606145217,
        "payload": "UE 1a29: MAC:    TX     5097678882 RX       45368376 bytes"
    },
    {
        "rowId": 3854,
        "timestamp": 1720606145217,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 3855,
        "timestamp": 1720606145217,
        "payload": "UE 1a29: dlsch_rounds 1732901/168534/3964/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.14137 MCS (1) 13"
    },
    {
        "rowId": 3856,
        "timestamp": 1720606145217,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 3857,
        "timestamp": 1720606145217,
        "payload": "UE 1a29: LCID 1: TX          12777 RX          92008 bytes"
    },
    {
        "rowId": 3858,
        "timestamp": 1720606145217,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3859,
        "timestamp": 1720606145217,
        "payload": "UE 1a29: LCID 4: TX     4940829354 RX       12059602 bytes"
    },
    {
        "rowId": 3860,
        "timestamp": 1720606145217,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3861,
        "timestamp": 1720606146497,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3862,
        "timestamp": 1720606146497,
        "payload": "UE 1a29: dlsch_rounds 1733402/168563/3964/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.06343 MCS (1) 10"
    },
    {
        "rowId": 3863,
        "timestamp": 1720606146497,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3864,
        "timestamp": 1720606146497,
        "payload": "UE 1a29: MAC:    TX     5099125193 RX       45382810 bytes"
    },
    {
        "rowId": 3865,
        "timestamp": 1720606146497,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3866,
        "timestamp": 1720606146497,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 3867,
        "timestamp": 1720606146497,
        "payload": "UE 1a29: LCID 4: TX     4942217485 RX       12062973 bytes"
    },
    {
        "rowId": 3868,
        "timestamp": 1720606146497,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3869,
        "timestamp": 1720606146497,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3870,
        "timestamp": 1720606146497,
        "payload": "UE 1a29: ulsch_rounds 213118/1339/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00955 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 3871,
        "timestamp": 1720606146497,
        "payload": "UE 1a29: LCID 1: TX          12780 RX          92030 bytes"
    },
    {
        "rowId": 3872,
        "timestamp": 1720606147777,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3873,
        "timestamp": 1720606147776,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 3874,
        "timestamp": 1720606147777,
        "payload": "UE 1a29: dlsch_rounds 1733953/168635/3964/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.12744 MCS (1) 14"
    },
    {
        "rowId": 3875,
        "timestamp": 1720606147777,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3876,
        "timestamp": 1720606147777,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3877,
        "timestamp": 1720606147777,
        "payload": "UE 1a29: MAC:    TX     5100903563 RX       45397675 bytes"
    },
    {
        "rowId": 3878,
        "timestamp": 1720606147777,
        "payload": "UE 1a29: ulsch_rounds 213185/1340/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00766 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 3879,
        "timestamp": 1720606147777,
        "payload": "UE 1a29: LCID 1: TX          12783 RX          92052 bytes"
    },
    {
        "rowId": 3880,
        "timestamp": 1720606147777,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3881,
        "timestamp": 1720606147777,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3882,
        "timestamp": 1720606147777,
        "payload": "UE 1a29: LCID 4: TX     4943928526 RX       12066881 bytes"
    },
    {
        "rowId": 3883,
        "timestamp": 1720606149056,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 3884,
        "timestamp": 1720606149057,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3885,
        "timestamp": 1720606149057,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3886,
        "timestamp": 1720606149057,
        "payload": "UE 1a29: MAC:    TX     5102466686 RX       45412527 bytes"
    },
    {
        "rowId": 3887,
        "timestamp": 1720606149057,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3888,
        "timestamp": 1720606149057,
        "payload": "UE 1a29: LCID 4: TX     4945432708 RX       12070476 bytes"
    },
    {
        "rowId": 3889,
        "timestamp": 1720606149057,
        "payload": "UE 1a29: ulsch_rounds 213254/1340/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00195 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 3890,
        "timestamp": 1720606149057,
        "payload": "UE 1a29: dlsch_rounds 1734469/168673/3964/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.06720 MCS (1) 10"
    },
    {
        "rowId": 3891,
        "timestamp": 1720606149057,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3892,
        "timestamp": 1720606149057,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3893,
        "timestamp": 1720606149057,
        "payload": "UE 1a29: LCID 1: TX          12786 RX          92074 bytes"
    },
    {
        "rowId": 3894,
        "timestamp": 1720606150336,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 3895,
        "timestamp": 1720606150337,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3896,
        "timestamp": 1720606150337,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3897,
        "timestamp": 1720606150337,
        "payload": "UE 1a29: ulsch_rounds 213320/1340/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00049 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 3898,
        "timestamp": 1720606150337,
        "payload": "UE 1a29: MAC:    TX     5103848051 RX       45426321 bytes"
    },
    {
        "rowId": 3899,
        "timestamp": 1720606150337,
        "payload": "UE 1a29: LCID 4: TX     4946752687 RX       12073766 bytes"
    },
    {
        "rowId": 3900,
        "timestamp": 1720606150337,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3901,
        "timestamp": 1720606150337,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3902,
        "timestamp": 1720606150337,
        "payload": "UE 1a29: LCID 1: TX          12792 RX          92118 bytes"
    },
    {
        "rowId": 3903,
        "timestamp": 1720606150337,
        "payload": "UE 1a29: dlsch_rounds 1734944/168718/3964/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.09258 MCS (1) 12"
    },
    {
        "rowId": 3904,
        "timestamp": 1720606150337,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3905,
        "timestamp": 1720606151617,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3906,
        "timestamp": 1720606151617,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3907,
        "timestamp": 1720606151617,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 3908,
        "timestamp": 1720606151617,
        "payload": "UE 1a29: dlsch_rounds 1735465/168790/3964/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.15320 MCS (1) 11"
    },
    {
        "rowId": 3909,
        "timestamp": 1720606151617,
        "payload": "UE 1a29: MAC:    TX     5105375333 RX       45443846 bytes"
    },
    {
        "rowId": 3910,
        "timestamp": 1720606151617,
        "payload": "UE 1a29: ulsch_rounds 213394/1340/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00014 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 3911,
        "timestamp": 1720606151617,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3912,
        "timestamp": 1720606151617,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3913,
        "timestamp": 1720606151617,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3914,
        "timestamp": 1720606151617,
        "payload": "UE 1a29: LCID 4: TX     4948205936 RX       12080047 bytes"
    },
    {
        "rowId": 3915,
        "timestamp": 1720606151617,
        "payload": "UE 1a29: LCID 1: TX          12795 RX          92140 bytes"
    },
    {
        "rowId": 3916,
        "timestamp": 1720606152897,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3917,
        "timestamp": 1720606152896,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 3918,
        "timestamp": 1720606152897,
        "payload": "UE 1a29: ulsch_rounds 213460/1340/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00004 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 3919,
        "timestamp": 1720606152897,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3920,
        "timestamp": 1720606152897,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 3921,
        "timestamp": 1720606152897,
        "payload": "UE 1a29: dlsch_rounds 1736047/168790/3964/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.03894 MCS (1) 14"
    },
    {
        "rowId": 3922,
        "timestamp": 1720606152897,
        "payload": "UE 1a29: MAC:    TX     5107213378 RX       45457640 bytes"
    },
    {
        "rowId": 3923,
        "timestamp": 1720606152897,
        "payload": "UE 1a29: LCID 1: TX          12798 RX          92162 bytes"
    },
    {
        "rowId": 3924,
        "timestamp": 1720606152897,
        "payload": "UE 1a29: LCID 4: TX     4949977897 RX       12083701 bytes"
    },
    {
        "rowId": 3925,
        "timestamp": 1720606152897,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3926,
        "timestamp": 1720606152897,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3927,
        "timestamp": 1720606154177,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 3928,
        "timestamp": 1720606154177,
        "payload": "UE 1a29: dlsch_rounds 1736533/168877/3964/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.12406 MCS (1) 11"
    },
    {
        "rowId": 3929,
        "timestamp": 1720606154177,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3930,
        "timestamp": 1720606154177,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3931,
        "timestamp": 1720606154177,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3932,
        "timestamp": 1720606154177,
        "payload": "UE 1a29: MAC:    TX     5108663567 RX       45472698 bytes"
    },
    {
        "rowId": 3933,
        "timestamp": 1720606154177,
        "payload": "UE 1a29: LCID 1: TX          12801 RX          92184 bytes"
    },
    {
        "rowId": 3934,
        "timestamp": 1720606154177,
        "payload": "UE 1a29: ulsch_rounds 213528/1342/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.01099 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 3935,
        "timestamp": 1720606154177,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3936,
        "timestamp": 1720606154177,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3937,
        "timestamp": 1720606154177,
        "payload": "UE 1a29: LCID 4: TX     4951358148 RX       12087753 bytes"
    },
    {
        "rowId": 3938,
        "timestamp": 1720606155457,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 3939,
        "timestamp": 1720606155457,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 48 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3940,
        "timestamp": 1720606155457,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3941,
        "timestamp": 1720606155457,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3942,
        "timestamp": 1720606155457,
        "payload": "UE 1a29: dlsch_rounds 1737018/168883/3964/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.04262 MCS (1) 15"
    },
    {
        "rowId": 3943,
        "timestamp": 1720606155457,
        "payload": "UE 1a29: ulsch_rounds 213596/1343/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.01077 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 3944,
        "timestamp": 1720606155457,
        "payload": "UE 1a29: MAC:    TX     5110090252 RX       45487341 bytes"
    },
    {
        "rowId": 3945,
        "timestamp": 1720606155457,
        "payload": "UE 1a29: LCID 1: TX          12807 RX          92228 bytes"
    },
    {
        "rowId": 3946,
        "timestamp": 1720606155457,
        "payload": "UE 1a29: LCID 4: TX     4952723721 RX       12091310 bytes"
    },
    {
        "rowId": 3947,
        "timestamp": 1720606155457,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3948,
        "timestamp": 1720606155457,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3949,
        "timestamp": 1720606156737,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3950,
        "timestamp": 1720606156737,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 3951,
        "timestamp": 1720606156737,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3952,
        "timestamp": 1720606156737,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3953,
        "timestamp": 1720606156737,
        "payload": "UE 1a29: ulsch_rounds 213665/1345/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.02013 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.5 dB"
    },
    {
        "rowId": 3954,
        "timestamp": 1720606156737,
        "payload": "UE 1a29: dlsch_rounds 1737534/168961/3964/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.10880 MCS (1) 12"
    },
    {
        "rowId": 3955,
        "timestamp": 1720606156737,
        "payload": "UE 1a29: MAC:    TX     5111709291 RX       45502608 bytes"
    },
    {
        "rowId": 3956,
        "timestamp": 1720606156737,
        "payload": "UE 1a29: LCID 4: TX     4954271896 RX       12094781 bytes"
    },
    {
        "rowId": 3957,
        "timestamp": 1720606156737,
        "payload": "UE 1a29: LCID 1: TX          12810 RX          92250 bytes"
    },
    {
        "rowId": 3958,
        "timestamp": 1720606156737,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3959,
        "timestamp": 1720606156737,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3960,
        "timestamp": 1720606158017,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3961,
        "timestamp": 1720606158017,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3962,
        "timestamp": 1720606158017,
        "payload": "UE 1a29: dlsch_rounds 1738119/168981/3964/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.06016 MCS (1) 13"
    },
    {
        "rowId": 3963,
        "timestamp": 1720606158017,
        "payload": "UE 1a29: MAC:    TX     5113570225 RX       45516978 bytes"
    },
    {
        "rowId": 3964,
        "timestamp": 1720606158017,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3965,
        "timestamp": 1720606158017,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 3966,
        "timestamp": 1720606158017,
        "payload": "UE 1a29: LCID 4: TX     4956066145 RX       12098598 bytes"
    },
    {
        "rowId": 3967,
        "timestamp": 1720606158017,
        "payload": "UE 1a29: ulsch_rounds 213732/1346/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.01727 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 3968,
        "timestamp": 1720606158017,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3969,
        "timestamp": 1720606158017,
        "payload": "UE 1a29: LCID 1: TX          12813 RX          92272 bytes"
    },
    {
        "rowId": 3970,
        "timestamp": 1720606158017,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3971,
        "timestamp": 1720606159296,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 3972,
        "timestamp": 1720606159297,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3973,
        "timestamp": 1720606159297,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3974,
        "timestamp": 1720606159297,
        "payload": "UE 1a29: dlsch_rounds 1738576/169055/3964/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.15756 MCS (1) 12"
    },
    {
        "rowId": 3975,
        "timestamp": 1720606159297,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3976,
        "timestamp": 1720606159297,
        "payload": "UE 1a29: LCID 1: TX          12816 RX          92294 bytes"
    },
    {
        "rowId": 3977,
        "timestamp": 1720606159297,
        "payload": "UE 1a29: ulsch_rounds 213800/1346/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00439 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 3978,
        "timestamp": 1720606159297,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3979,
        "timestamp": 1720606159297,
        "payload": "UE 1a29: MAC:    TX     5114922041 RX       45531158 bytes"
    },
    {
        "rowId": 3980,
        "timestamp": 1720606159297,
        "payload": "UE 1a29: LCID 4: TX     4957350653 RX       12101783 bytes"
    },
    {
        "rowId": 3981,
        "timestamp": 1720606159297,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3982,
        "timestamp": 1720606160576,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLUULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 3983,
        "timestamp": 1720606160577,
        "payload": "UE 1a29: dlsch_rounds 1739068/169077/3964/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.06718 MCS (1) 10"
    },
    {
        "rowId": 3984,
        "timestamp": 1720606160577,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3985,
        "timestamp": 1720606160577,
        "payload": "UE 1a29: ulsch_rounds 213868/1347/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00757 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 3986,
        "timestamp": 1720606160577,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3987,
        "timestamp": 1720606160577,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3988,
        "timestamp": 1720606160577,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 3989,
        "timestamp": 1720606160577,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 3990,
        "timestamp": 1720606160577,
        "payload": "UE 1a29: MAC:    TX     5116351105 RX       45545801 bytes"
    },
    {
        "rowId": 3991,
        "timestamp": 1720606160577,
        "payload": "UE 1a29: LCID 1: TX          12822 RX          92338 bytes"
    },
    {
        "rowId": 3992,
        "timestamp": 1720606160577,
        "payload": "UE 1a29: LCID 4: TX     4958719020 RX       12105385 bytes"
    },
    {
        "rowId": 3993,
        "timestamp": 1720606161856,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 3994,
        "timestamp": 1720606161857,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 3995,
        "timestamp": 1720606161857,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 3996,
        "timestamp": 1720606161857,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 3997,
        "timestamp": 1720606161857,
        "payload": "UE 1a29: dlsch_rounds 1739608/169122/3964/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.07133 MCS (1) 12"
    },
    {
        "rowId": 3998,
        "timestamp": 1720606161857,
        "payload": "UE 1a29: ulsch_rounds 213936/1347/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00214 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 3999,
        "timestamp": 1720606161857,
        "payload": "UE 1a29: LCID 1: TX          12825 RX          92360 bytes"
    },
    {
        "rowId": 4000,
        "timestamp": 1720606161857,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4001,
        "timestamp": 1720606161857,
        "payload": "UE 1a29: MAC:    TX     5118020131 RX       45560428 bytes"
    },
    {
        "rowId": 4002,
        "timestamp": 1720606161857,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4003,
        "timestamp": 1720606161857,
        "payload": "UE 1a29: LCID 4: TX     4960325006 RX       12109080 bytes"
    },
    {
        "rowId": 4004,
        "timestamp": 1720606163137,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 4005,
        "timestamp": 1720606163137,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4006,
        "timestamp": 1720606163137,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4007,
        "timestamp": 1720606163137,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 4008,
        "timestamp": 1720606163137,
        "payload": "UE 1a29: ulsch_rounds 214004/1347/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00054 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 4009,
        "timestamp": 1720606163137,
        "payload": "UE 1a29: dlsch_rounds 1740165/169186/3964/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.10578 MCS (1) 12"
    },
    {
        "rowId": 4010,
        "timestamp": 1720606163137,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4011,
        "timestamp": 1720606163137,
        "payload": "UE 1a29: LCID 4: TX     4962043146 RX       12112924 bytes"
    },
    {
        "rowId": 4012,
        "timestamp": 1720606163137,
        "payload": "UE 1a29: MAC:    TX     5119810045 RX       45574624 bytes"
    },
    {
        "rowId": 4013,
        "timestamp": 1720606163137,
        "payload": "UE 1a29: LCID 1: TX          12828 RX          92382 bytes"
    },
    {
        "rowId": 4014,
        "timestamp": 1720606163137,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4015,
        "timestamp": 1720606164416,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 4016,
        "timestamp": 1720606164417,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 4017,
        "timestamp": 1720606164417,
        "payload": "UE 1a29: dlsch_rounds 1740630/169236/3965/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.10093 MCS (1) 9"
    },
    {
        "rowId": 4018,
        "timestamp": 1720606164417,
        "payload": "UE 1a29: LCID 1: TX          12831 RX          92404 bytes"
    },
    {
        "rowId": 4019,
        "timestamp": 1720606164417,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4020,
        "timestamp": 1720606164417,
        "payload": "UE 1a29: LCID 4: TX     4963336275 RX       12116098 bytes"
    },
    {
        "rowId": 4021,
        "timestamp": 1720606164417,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4022,
        "timestamp": 1720606164417,
        "payload": "UE 1a29: MAC:    TX     5121159614 RX       45589267 bytes"
    },
    {
        "rowId": 4023,
        "timestamp": 1720606164417,
        "payload": "UE 1a29: ulsch_rounds 214072/1348/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.01107 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 4024,
        "timestamp": 1720606164417,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4025,
        "timestamp": 1720606164417,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4026,
        "timestamp": 1720606165697,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 4027,
        "timestamp": 1720606165697,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 4028,
        "timestamp": 1720606165697,
        "payload": "UE 1a29: ulsch_rounds 214139/1348/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00281 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 4029,
        "timestamp": 1720606165697,
        "payload": "UE 1a29: dlsch_rounds 1741112/169251/3965/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.06052 MCS (1) 14"
    },
    {
        "rowId": 4030,
        "timestamp": 1720606165697,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4031,
        "timestamp": 1720606165697,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4032,
        "timestamp": 1720606165697,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4033,
        "timestamp": 1720606165697,
        "payload": "UE 1a29: LCID 1: TX          12837 RX          92448 bytes"
    },
    {
        "rowId": 4034,
        "timestamp": 1720606165697,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4035,
        "timestamp": 1720606165697,
        "payload": "UE 1a29: LCID 4: TX     4964701426 RX       12119683 bytes"
    },
    {
        "rowId": 4036,
        "timestamp": 1720606165697,
        "payload": "UE 1a29: MAC:    TX     5122585024 RX       45603701 bytes"
    },
    {
        "rowId": 4037,
        "timestamp": 1720606166976,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 4038,
        "timestamp": 1720606166977,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 4039,
        "timestamp": 1720606166977,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4040,
        "timestamp": 1720606166977,
        "payload": "UE 1a29: dlsch_rounds 1741644/169347/3965/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.11912 MCS (1) 8"
    },
    {
        "rowId": 4041,
        "timestamp": 1720606166977,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4042,
        "timestamp": 1720606166977,
        "payload": "UE 1a29: LCID 1: TX          12840 RX          92470 bytes"
    },
    {
        "rowId": 4043,
        "timestamp": 1720606166977,
        "payload": "UE 1a29: LCID 4: TX     4966266179 RX       12123095 bytes"
    },
    {
        "rowId": 4044,
        "timestamp": 1720606166977,
        "payload": "UE 1a29: ulsch_rounds 214206/1348/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00072 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 4045,
        "timestamp": 1720606166977,
        "payload": "UE 1a29: MAC:    TX     5124212130 RX       45617704 bytes"
    },
    {
        "rowId": 4046,
        "timestamp": 1720606166977,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4047,
        "timestamp": 1720606166977,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4048,
        "timestamp": 1720606168257,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 4049,
        "timestamp": 1720606168257,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4050,
        "timestamp": 1720606168257,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 4051,
        "timestamp": 1720606168257,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4052,
        "timestamp": 1720606168257,
        "payload": "UE 1a29: MAC:    TX     5126057338 RX       45632556 bytes"
    },
    {
        "rowId": 4053,
        "timestamp": 1720606168257,
        "payload": "UE 1a29: ulsch_rounds 214275/1348/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00020 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 4054,
        "timestamp": 1720606168257,
        "payload": "UE 1a29: dlsch_rounds 1742221/169360/3965/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.05708 MCS (1) 12"
    },
    {
        "rowId": 4055,
        "timestamp": 1720606168257,
        "payload": "UE 1a29: LCID 4: TX     4968056682 RX       12127072 bytes"
    },
    {
        "rowId": 4056,
        "timestamp": 1720606168257,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4057,
        "timestamp": 1720606168257,
        "payload": "UE 1a29: LCID 1: TX          12843 RX          92492 bytes"
    },
    {
        "rowId": 4058,
        "timestamp": 1720606168257,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4059,
        "timestamp": 1720606169537,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 4060,
        "timestamp": 1720606169537,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 4061,
        "timestamp": 1720606169537,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4062,
        "timestamp": 1720606169537,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4063,
        "timestamp": 1720606169537,
        "payload": "UE 1a29: dlsch_rounds 1742690/169412/3965/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.08544 MCS (1) 12"
    },
    {
        "rowId": 4064,
        "timestamp": 1720606169537,
        "payload": "UE 1a29: ulsch_rounds 214343/1348/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00005 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 4065,
        "timestamp": 1720606169537,
        "payload": "UE 1a29: MAC:    TX     5127392910 RX       45646768 bytes"
    },
    {
        "rowId": 4066,
        "timestamp": 1720606169537,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4067,
        "timestamp": 1720606169537,
        "payload": "UE 1a29: LCID 1: TX          12846 RX          92514 bytes"
    },
    {
        "rowId": 4068,
        "timestamp": 1720606169537,
        "payload": "UE 1a29: LCID 4: TX     4969326691 RX       12130240 bytes"
    },
    {
        "rowId": 4069,
        "timestamp": 1720606169537,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4070,
        "timestamp": 1720606170817,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 4071,
        "timestamp": 1720606170817,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4072,
        "timestamp": 1720606170817,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 4073,
        "timestamp": 1720606170817,
        "payload": "UE 1a29: MAC:    TX     5128783914 RX       45662402 bytes"
    },
    {
        "rowId": 4074,
        "timestamp": 1720606170817,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4075,
        "timestamp": 1720606170817,
        "payload": "UE 1a29: ulsch_rounds 214412/1348/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00001 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 4076,
        "timestamp": 1720606170817,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4077,
        "timestamp": 1720606170817,
        "payload": "UE 1a29: dlsch_rounds 1743159/169490/3971/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.17406 MCS (1) 10"
    },
    {
        "rowId": 4078,
        "timestamp": 1720606170817,
        "payload": "UE 1a29: LCID 4: TX     4970655840 RX       12133808 bytes"
    },
    {
        "rowId": 4079,
        "timestamp": 1720606170817,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4080,
        "timestamp": 1720606170817,
        "payload": "UE 1a29: LCID 1: TX          12852 RX          92558 bytes"
    },
    {
        "rowId": 4081,
        "timestamp": 1720606172096,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 4082,
        "timestamp": 1720606172097,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 4083,
        "timestamp": 1720606172097,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4084,
        "timestamp": 1720606172097,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4085,
        "timestamp": 1720606172097,
        "payload": "UE 1a29: dlsch_rounds 1743674/169512/3971/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.06965 MCS (1) 8"
    },
    {
        "rowId": 4086,
        "timestamp": 1720606172097,
        "payload": "UE 1a29: ulsch_rounds 214479/1348/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 28.0 dB"
    },
    {
        "rowId": 4087,
        "timestamp": 1720606172097,
        "payload": "UE 1a29: LCID 4: TX     4972256207 RX       12137236 bytes"
    },
    {
        "rowId": 4088,
        "timestamp": 1720606172097,
        "payload": "UE 1a29: MAC:    TX     5130431809 RX       45676405 bytes"
    },
    {
        "rowId": 4089,
        "timestamp": 1720606172097,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4090,
        "timestamp": 1720606172097,
        "payload": "UE 1a29: LCID 1: TX          12855 RX          92580 bytes"
    },
    {
        "rowId": 4091,
        "timestamp": 1720606172097,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4092,
        "timestamp": 1720606173377,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 4093,
        "timestamp": 1720606173376,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 4094,
        "timestamp": 1720606173377,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4095,
        "timestamp": 1720606173377,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4096,
        "timestamp": 1720606173377,
        "payload": "UE 1a29: dlsch_rounds 1744253/169591/3971/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.14309 MCS (1) 15"
    },
    {
        "rowId": 4097,
        "timestamp": 1720606173377,
        "payload": "UE 1a29: LCID 1: TX          12858 RX          92602 bytes"
    },
    {
        "rowId": 4098,
        "timestamp": 1720606173377,
        "payload": "UE 1a29: LCID 4: TX     4974008047 RX       12141029 bytes"
    },
    {
        "rowId": 4099,
        "timestamp": 1720606173377,
        "payload": "UE 1a29: ulsch_rounds 214548/1349/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00759 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 4100,
        "timestamp": 1720606173377,
        "payload": "UE 1a29: MAC:    TX     5132247556 RX       45691257 bytes"
    },
    {
        "rowId": 4101,
        "timestamp": 1720606173377,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4102,
        "timestamp": 1720606173377,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4103,
        "timestamp": 1720606174656,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 4104,
        "timestamp": 1720606174657,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4105,
        "timestamp": 1720606174657,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 4106,
        "timestamp": 1720606174657,
        "payload": "UE 1a29: ulsch_rounds 214614/1349/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00193 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 4107,
        "timestamp": 1720606174657,
        "payload": "UE 1a29: LCID 1: TX          12861 RX          92624 bytes"
    },
    {
        "rowId": 4108,
        "timestamp": 1720606174657,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4109,
        "timestamp": 1720606174657,
        "payload": "UE 1a29: dlsch_rounds 1744728/169649/3971/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.11734 MCS (1) 6"
    },
    {
        "rowId": 4110,
        "timestamp": 1720606174657,
        "payload": "UE 1a29: MAC:    TX     5133538679 RX       45705035 bytes"
    },
    {
        "rowId": 4111,
        "timestamp": 1720606174657,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4112,
        "timestamp": 1720606174657,
        "payload": "UE 1a29: LCID 4: TX     4975250652 RX       12144234 bytes"
    },
    {
        "rowId": 4113,
        "timestamp": 1720606174657,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4114,
        "timestamp": 1720606175936,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 4115,
        "timestamp": 1720606175937,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4116,
        "timestamp": 1720606175937,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 4117,
        "timestamp": 1720606175937,
        "payload": "UE 1a29: dlsch_rounds 1745236/169655/3971/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.03221 MCS (1) 11"
    },
    {
        "rowId": 4118,
        "timestamp": 1720606175937,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4119,
        "timestamp": 1720606175937,
        "payload": "UE 1a29: ulsch_rounds 214681/1350/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00767 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 4120,
        "timestamp": 1720606175937,
        "payload": "UE 1a29: MAC:    TX     5134961705 RX       45719469 bytes"
    },
    {
        "rowId": 4121,
        "timestamp": 1720606175937,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4122,
        "timestamp": 1720606175937,
        "payload": "UE 1a29: LCID 4: TX     4976628871 RX       12147815 bytes"
    },
    {
        "rowId": 4123,
        "timestamp": 1720606175937,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4124,
        "timestamp": 1720606175937,
        "payload": "UE 1a29: LCID 1: TX          12867 RX          92668 bytes"
    },
    {
        "rowId": 4125,
        "timestamp": 1720606177217,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 4126,
        "timestamp": 1720606177217,
        "payload": "UE 1a29: dlsch_rounds 1745772/169741/3971/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.10341 MCS (1) 9"
    },
    {
        "rowId": 4127,
        "timestamp": 1720606177216,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 4128,
        "timestamp": 1720606177217,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4129,
        "timestamp": 1720606177217,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4130,
        "timestamp": 1720606177217,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4131,
        "timestamp": 1720606177217,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4132,
        "timestamp": 1720606177217,
        "payload": "UE 1a29: ulsch_rounds 214748/1350/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00216 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 4133,
        "timestamp": 1720606177217,
        "payload": "UE 1a29: LCID 1: TX          12870 RX          92690 bytes"
    },
    {
        "rowId": 4134,
        "timestamp": 1720606177217,
        "payload": "UE 1a29: MAC:    TX     5136699249 RX       45733887 bytes"
    },
    {
        "rowId": 4135,
        "timestamp": 1720606177217,
        "payload": "UE 1a29: LCID 4: TX     4978306133 RX       12151369 bytes"
    },
    {
        "rowId": 4136,
        "timestamp": 1720606178497,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4137,
        "timestamp": 1720606178497,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 4138,
        "timestamp": 1720606178497,
        "payload": "UE 1a29: dlsch_rounds 1746325/169768/3971/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.08554 MCS (1) 13"
    },
    {
        "rowId": 4139,
        "timestamp": 1720606178497,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4140,
        "timestamp": 1720606178497,
        "payload": "UE 1a29: ulsch_rounds 214816/1350/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00055 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 4141,
        "timestamp": 1720606178497,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 4142,
        "timestamp": 1720606178497,
        "payload": "UE 1a29: MAC:    TX     5138373000 RX       45748099 bytes"
    },
    {
        "rowId": 4143,
        "timestamp": 1720606178497,
        "payload": "UE 1a29: LCID 1: TX          12873 RX          92712 bytes"
    },
    {
        "rowId": 4144,
        "timestamp": 1720606178497,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4145,
        "timestamp": 1720606178497,
        "payload": "UE 1a29: LCID 4: TX     4979918504 RX       12155185 bytes"
    },
    {
        "rowId": 4146,
        "timestamp": 1720606178497,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4147,
        "timestamp": 1720606179777,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 4148,
        "timestamp": 1720606179777,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4149,
        "timestamp": 1720606179777,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4150,
        "timestamp": 1720606179777,
        "payload": "UE 1a29: ulsch_rounds 214883/1350/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00014 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.5 dB"
    },
    {
        "rowId": 4151,
        "timestamp": 1720606179777,
        "payload": "UE 1a29: dlsch_rounds 1746798/169851/3971/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.12858 MCS (1) 6"
    },
    {
        "rowId": 4152,
        "timestamp": 1720606179777,
        "payload": "UE 1a29: LCID 1: TX          12876 RX          92756 bytes"
    },
    {
        "rowId": 4153,
        "timestamp": 1720606179777,
        "payload": "UE 1a29: MAC:    TX     5139688603 RX       45762086 bytes"
    },
    {
        "rowId": 4154,
        "timestamp": 1720606179777,
        "payload": "UE 1a29: LCID 4: TX     4981186827 RX       12158366 bytes"
    },
    {
        "rowId": 4155,
        "timestamp": 1720606179777,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4156,
        "timestamp": 1720606179777,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 48 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 4157,
        "timestamp": 1720606179777,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4158,
        "timestamp": 1720606181057,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 4159,
        "timestamp": 1720606181056,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 4160,
        "timestamp": 1720606181057,
        "payload": "UE 1a29: dlsch_rounds 1747286/169852/3971/335, dlsch_errors 74, pucch0_DTX 1259, BLER 0.03268 MCS (1) 11"
    },
    {
        "rowId": 4161,
        "timestamp": 1720606181057,
        "payload": "UE 1a29: MAC:    TX     5141111732 RX       45776298 bytes"
    },
    {
        "rowId": 4162,
        "timestamp": 1720606181057,
        "payload": "UE 1a29: LCID 1: TX          12882 RX          92778 bytes"
    },
    {
        "rowId": 4163,
        "timestamp": 1720606181057,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4164,
        "timestamp": 1720606181057,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4165,
        "timestamp": 1720606181057,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4166,
        "timestamp": 1720606181057,
        "payload": "UE 1a29: LCID 4: TX     4982566661 RX       12161923 bytes"
    },
    {
        "rowId": 4167,
        "timestamp": 1720606181057,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4168,
        "timestamp": 1720606181057,
        "payload": "UE 1a29: ulsch_rounds 214951/1350/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00004 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 4169,
        "timestamp": 1720606182337,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLUULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 4170,
        "timestamp": 1720606182337,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 4171,
        "timestamp": 1720606182337,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4172,
        "timestamp": 1720606182337,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4173,
        "timestamp": 1720606182337,
        "payload": "UE 1a29: ulsch_rounds 215018/1350/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00001 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 4174,
        "timestamp": 1720606182337,
        "payload": "UE 1a29: dlsch_rounds 1747864/169922/3977/337, dlsch_errors 75, pucch0_DTX 1259, BLER 0.09570 MCS (1) 13"
    },
    {
        "rowId": 4175,
        "timestamp": 1720606182337,
        "payload": "UE 1a29: MAC:    TX     5142922978 RX       45790301 bytes"
    },
    {
        "rowId": 4176,
        "timestamp": 1720606182337,
        "payload": "UE 1a29: LCID 1: TX          12885 RX          92800 bytes"
    },
    {
        "rowId": 4177,
        "timestamp": 1720606182337,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4178,
        "timestamp": 1720606182337,
        "payload": "UE 1a29: LCID 4: TX     4984300562 RX       12165415 bytes"
    },
    {
        "rowId": 4179,
        "timestamp": 1720606182337,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4180,
        "timestamp": 1720606183617,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 4181,
        "timestamp": 1720606183617,
        "payload": "UE 1a29: dlsch_rounds 1748407/169965/3977/337, dlsch_errors 75, pucch0_DTX 1259, BLER 0.06922 MCS (1) 13"
    },
    {
        "rowId": 4182,
        "timestamp": 1720606183617,
        "payload": "UE 1a29: ulsch_rounds 215088/1350/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 4183,
        "timestamp": 1720606183617,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4184,
        "timestamp": 1720606183617,
        "payload": "UE 1a29: LCID 1: TX          12888 RX          92822 bytes"
    },
    {
        "rowId": 4185,
        "timestamp": 1720606183617,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4186,
        "timestamp": 1720606183617,
        "payload": "UE 1a29: LCID 4: TX     4985805634 RX       12169238 bytes"
    },
    {
        "rowId": 4187,
        "timestamp": 1720606183617,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 4188,
        "timestamp": 1720606183617,
        "payload": "UE 1a29: MAC:    TX     5144498903 RX       45805777 bytes"
    },
    {
        "rowId": 4189,
        "timestamp": 1720606183617,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4190,
        "timestamp": 1720606183617,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4191,
        "timestamp": 1720606184897,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 4192,
        "timestamp": 1720606184897,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 4193,
        "timestamp": 1720606184897,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4194,
        "timestamp": 1720606184897,
        "payload": "UE 1a29: MAC:    TX     5145876013 RX       45819571 bytes"
    },
    {
        "rowId": 4195,
        "timestamp": 1720606184897,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4196,
        "timestamp": 1720606184897,
        "payload": "UE 1a29: dlsch_rounds 1748881/170045/3977/337, dlsch_errors 75, pucch0_DTX 1259, BLER 0.13647 MCS (1) 10"
    },
    {
        "rowId": 4197,
        "timestamp": 1720606184897,
        "payload": "UE 1a29: ulsch_rounds 215154/1350/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 4198,
        "timestamp": 1720606184897,
        "payload": "UE 1a29: LCID 4: TX     4987120061 RX       12172534 bytes"
    },
    {
        "rowId": 4199,
        "timestamp": 1720606184897,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4200,
        "timestamp": 1720606184897,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4201,
        "timestamp": 1720606184897,
        "payload": "UE 1a29: LCID 1: TX          12894 RX          92866 bytes"
    },
    {
        "rowId": 4202,
        "timestamp": 1720606186177,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 4203,
        "timestamp": 1720606186177,
        "payload": "UE 1a29: dlsch_rounds 1749396/170054/3977/337, dlsch_errors 75, pucch0_DTX 1259, BLER 0.05309 MCS (1) 10"
    },
    {
        "rowId": 4204,
        "timestamp": 1720606186177,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 4205,
        "timestamp": 1720606186177,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4206,
        "timestamp": 1720606186177,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4207,
        "timestamp": 1720606186177,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4208,
        "timestamp": 1720606186177,
        "payload": "UE 1a29: LCID 4: TX     4988567752 RX       12176082 bytes"
    },
    {
        "rowId": 4209,
        "timestamp": 1720606186177,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4210,
        "timestamp": 1720606186177,
        "payload": "UE 1a29: ulsch_rounds 215220/1350/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 4211,
        "timestamp": 1720606186177,
        "payload": "UE 1a29: MAC:    TX     5147380748 RX       45833365 bytes"
    },
    {
        "rowId": 4212,
        "timestamp": 1720606186177,
        "payload": "UE 1a29: LCID 1: TX          12897 RX          92888 bytes"
    },
    {
        "rowId": 4213,
        "timestamp": 1720606187457,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 4214,
        "timestamp": 1720606187457,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4215,
        "timestamp": 1720606187457,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 4216,
        "timestamp": 1720606187457,
        "payload": "UE 1a29: MAC:    TX     5149236274 RX       45848008 bytes"
    },
    {
        "rowId": 4217,
        "timestamp": 1720606187457,
        "payload": "UE 1a29: LCID 1: TX          12900 RX          92910 bytes"
    },
    {
        "rowId": 4218,
        "timestamp": 1720606187457,
        "payload": "UE 1a29: LCID 4: TX     4990358122 RX       12179731 bytes"
    },
    {
        "rowId": 4219,
        "timestamp": 1720606187457,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4220,
        "timestamp": 1720606187457,
        "payload": "UE 1a29: dlsch_rounds 1749976/170161/3980/337, dlsch_errors 75, pucch0_DTX 1259, BLER 0.15885 MCS (1) 8"
    },
    {
        "rowId": 4221,
        "timestamp": 1720606187457,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4222,
        "timestamp": 1720606187457,
        "payload": "UE 1a29: ulsch_rounds 215288/1351/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00717 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 4223,
        "timestamp": 1720606187457,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4224,
        "timestamp": 1720606188736,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 4225,
        "timestamp": 1720606188737,
        "payload": "UE 1a29: dlsch_rounds 1750494/170161/3980/337, dlsch_errors 75, pucch0_DTX 1259, BLER 0.04158 MCS (1) 10"
    },
    {
        "rowId": 4226,
        "timestamp": 1720606188737,
        "payload": "UE 1a29: LCID 4: TX     4991748001 RX       12183363 bytes"
    },
    {
        "rowId": 4227,
        "timestamp": 1720606188737,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4228,
        "timestamp": 1720606188737,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4229,
        "timestamp": 1720606188737,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4230,
        "timestamp": 1720606188737,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4231,
        "timestamp": 1720606188737,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 4232,
        "timestamp": 1720606188737,
        "payload": "UE 1a29: LCID 1: TX          12903 RX          92932 bytes"
    },
    {
        "rowId": 4233,
        "timestamp": 1720606188737,
        "payload": "UE 1a29: ulsch_rounds 215355/1351/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00182 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.5 dB"
    },
    {
        "rowId": 4234,
        "timestamp": 1720606188737,
        "payload": "UE 1a29: MAC:    TX     5150675950 RX       45862011 bytes"
    },
    {
        "rowId": 4235,
        "timestamp": 1720606190016,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 4236,
        "timestamp": 1720606190017,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 4237,
        "timestamp": 1720606190017,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4238,
        "timestamp": 1720606190017,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4239,
        "timestamp": 1720606190017,
        "payload": "UE 1a29: LCID 1: TX          12909 RX          92976 bytes"
    },
    {
        "rowId": 4240,
        "timestamp": 1720606190017,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4241,
        "timestamp": 1720606190017,
        "payload": "UE 1a29: ulsch_rounds 215421/1351/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00046 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 4242,
        "timestamp": 1720606190017,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4243,
        "timestamp": 1720606190017,
        "payload": "UE 1a29: dlsch_rounds 1750971/170259/3980/337, dlsch_errors 75, pucch0_DTX 1259, BLER 0.19281 MCS (1) 11"
    },
    {
        "rowId": 4244,
        "timestamp": 1720606190017,
        "payload": "UE 1a29: LCID 4: TX     4993086365 RX       12186643 bytes"
    },
    {
        "rowId": 4245,
        "timestamp": 1720606190017,
        "payload": "UE 1a29: MAC:    TX     5152084234 RX       45875805 bytes"
    },
    {
        "rowId": 4246,
        "timestamp": 1720606191297,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 4247,
        "timestamp": 1720606191297,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 4248,
        "timestamp": 1720606191297,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4249,
        "timestamp": 1720606191297,
        "payload": "UE 1a29: dlsch_rounds 1751506/170316/3985/337, dlsch_errors 75, pucch0_DTX 1259, BLER 0.13904 MCS (1) 8"
    },
    {
        "rowId": 4250,
        "timestamp": 1720606191297,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4251,
        "timestamp": 1720606191297,
        "payload": "UE 1a29: LCID 1: TX          12912 RX          92998 bytes"
    },
    {
        "rowId": 4252,
        "timestamp": 1720606191297,
        "payload": "UE 1a29: MAC:    TX     5153629659 RX       45891664 bytes"
    },
    {
        "rowId": 4253,
        "timestamp": 1720606191297,
        "payload": "UE 1a29: ulsch_rounds 215491/1352/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00949 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.5 dB"
    },
    {
        "rowId": 4254,
        "timestamp": 1720606191297,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4255,
        "timestamp": 1720606191297,
        "payload": "UE 1a29: LCID 4: TX     4994584394 RX       12190222 bytes"
    },
    {
        "rowId": 4256,
        "timestamp": 1720606191297,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4257,
        "timestamp": 1720606192577,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4258,
        "timestamp": 1720606192577,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 4259,
        "timestamp": 1720606192577,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 4260,
        "timestamp": 1720606192577,
        "payload": "UE 1a29: dlsch_rounds 1752091/170338/3985/337, dlsch_errors 75, pucch0_DTX 1259, BLER 0.05767 MCS (1) 6"
    },
    {
        "rowId": 4261,
        "timestamp": 1720606192577,
        "payload": "UE 1a29: MAC:    TX     5155420065 RX       45905667 bytes"
    },
    {
        "rowId": 4262,
        "timestamp": 1720606192577,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4263,
        "timestamp": 1720606192577,
        "payload": "UE 1a29: ulsch_rounds 215558/1352/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00241 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.5 dB"
    },
    {
        "rowId": 4264,
        "timestamp": 1720606192577,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4265,
        "timestamp": 1720606192577,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4266,
        "timestamp": 1720606192577,
        "payload": "UE 1a29: LCID 1: TX          12915 RX          93020 bytes"
    },
    {
        "rowId": 4267,
        "timestamp": 1720606192577,
        "payload": "UE 1a29: LCID 4: TX     4996332882 RX       12193794 bytes"
    },
    {
        "rowId": 4268,
        "timestamp": 1720606193857,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4269,
        "timestamp": 1720606193857,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 4270,
        "timestamp": 1720606193857,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 4271,
        "timestamp": 1720606193857,
        "payload": "UE 1a29: LCID 1: TX          12918 RX          93042 bytes"
    },
    {
        "rowId": 4272,
        "timestamp": 1720606193857,
        "payload": "UE 1a29: LCID 4: TX     4997654374 RX       12197312 bytes"
    },
    {
        "rowId": 4273,
        "timestamp": 1720606193857,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4274,
        "timestamp": 1720606193857,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4275,
        "timestamp": 1720606193857,
        "payload": "UE 1a29: dlsch_rounds 1752582/170361/3985/337, dlsch_errors 75, pucch0_DTX 1259, BLER 0.05352 MCS (1) 10"
    },
    {
        "rowId": 4276,
        "timestamp": 1720606193857,
        "payload": "UE 1a29: ulsch_rounds 215628/1353/40/8, ulsch_errors 4, ulsch_DTX 134, BLER 0.00591 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.5 dB"
    },
    {
        "rowId": 4277,
        "timestamp": 1720606193857,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4278,
        "timestamp": 1720606193857,
        "payload": "UE 1a29: MAC:    TX     5156792903 RX       45921095 bytes"
    },
    {
        "rowId": 4279,
        "timestamp": 1720606195137,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 4280,
        "timestamp": 1720606195137,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 4281,
        "timestamp": 1720606195137,
        "payload": "UE 1a29: ulsch_rounds 215692/1354/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.02650 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.5 dB"
    },
    {
        "rowId": 4282,
        "timestamp": 1720606195137,
        "payload": "UE 1a29: MAC:    TX     5158218712 RX       45934455 bytes"
    },
    {
        "rowId": 4283,
        "timestamp": 1720606195137,
        "payload": "UE 1a29: dlsch_rounds 1753061/170458/3996/340, dlsch_errors 76, pucch0_DTX 1263, BLER 0.15722 MCS (1) 6"
    },
    {
        "rowId": 4284,
        "timestamp": 1720606195137,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4285,
        "timestamp": 1720606195137,
        "payload": "UE 1a29: LCID 1: TX          12924 RX          93086 bytes"
    },
    {
        "rowId": 4286,
        "timestamp": 1720606195137,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4287,
        "timestamp": 1720606195137,
        "payload": "UE 1a29: LCID 4: TX     4999031749 RX       12200774 bytes"
    },
    {
        "rowId": 4288,
        "timestamp": 1720606195137,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4289,
        "timestamp": 1720606195137,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4290,
        "timestamp": 1720606196417,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 4291,
        "timestamp": 1720606196417,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4292,
        "timestamp": 1720606196417,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 4293,
        "timestamp": 1720606196417,
        "payload": "UE 1a29: dlsch_rounds 1753589/170477/3996/340, dlsch_errors 76, pucch0_DTX 1263, BLER 0.06053 MCS (1) 6"
    },
    {
        "rowId": 4294,
        "timestamp": 1720606196417,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4295,
        "timestamp": 1720606196417,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4296,
        "timestamp": 1720606196417,
        "payload": "UE 1a29: ulsch_rounds 215762/1355/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.01357 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.5 dB"
    },
    {
        "rowId": 4297,
        "timestamp": 1720606196417,
        "payload": "UE 1a29: MAC:    TX     5159786613 RX       45949516 bytes"
    },
    {
        "rowId": 4298,
        "timestamp": 1720606196417,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4299,
        "timestamp": 1720606196417,
        "payload": "UE 1a29: LCID 4: TX     5000560019 RX       12204370 bytes"
    },
    {
        "rowId": 4300,
        "timestamp": 1720606196417,
        "payload": "UE 1a29: LCID 1: TX          12927 RX          93108 bytes"
    },
    {
        "rowId": 4301,
        "timestamp": 1720606197697,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 4302,
        "timestamp": 1720606197697,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 4303,
        "timestamp": 1720606197697,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4304,
        "timestamp": 1720606197697,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4305,
        "timestamp": 1720606197697,
        "payload": "UE 1a29: MAC:    TX     5161541324 RX       45963294 bytes"
    },
    {
        "rowId": 4306,
        "timestamp": 1720606197697,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4307,
        "timestamp": 1720606197697,
        "payload": "UE 1a29: ulsch_rounds 215828/1355/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00383 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 4308,
        "timestamp": 1720606197697,
        "payload": "UE 1a29: dlsch_rounds 1754123/170569/4000/340, dlsch_errors 76, pucch0_DTX 1263, BLER 0.12700 MCS (1) 6"
    },
    {
        "rowId": 4309,
        "timestamp": 1720606197697,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4310,
        "timestamp": 1720606197697,
        "payload": "UE 1a29: LCID 1: TX          12930 RX          93130 bytes"
    },
    {
        "rowId": 4311,
        "timestamp": 1720606197697,
        "payload": "UE 1a29: LCID 4: TX     5002275684 RX       12207982 bytes"
    },
    {
        "rowId": 4312,
        "timestamp": 1720606198977,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4313,
        "timestamp": 1720606198977,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 4314,
        "timestamp": 1720606198977,
        "payload": "UE 1a29: dlsch_rounds 1754601/170587/4000/340, dlsch_errors 76, pucch0_DTX 1263, BLER 0.07069 MCS (1) 6"
    },
    {
        "rowId": 4315,
        "timestamp": 1720606198977,
        "payload": "UE 1a29: ulsch_rounds 215896/1355/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00097 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 4316,
        "timestamp": 1720606198977,
        "payload": "UE 1a29: MAC:    TX     5162858373 RX       45977506 bytes"
    },
    {
        "rowId": 4317,
        "timestamp": 1720606198977,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4318,
        "timestamp": 1720606198977,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4319,
        "timestamp": 1720606198977,
        "payload": "UE 1a29: LCID 1: TX          12933 RX          93152 bytes"
    },
    {
        "rowId": 4320,
        "timestamp": 1720606198977,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4321,
        "timestamp": 1720606198977,
        "payload": "UE 1a29: LCID 4: TX     5003555117 RX       12211446 bytes"
    },
    {
        "rowId": 4322,
        "timestamp": 1720606198977,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4323,
        "timestamp": 1720606200257,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 4324,
        "timestamp": 1720606200257,
        "payload": "UE 1a29: CQI 11, RI 1, PMI (0,3)"
    },
    {
        "rowId": 4325,
        "timestamp": 1720606200257,
        "payload": "UE 1a29: dlsch_rounds 1755108/170599/4001/340, dlsch_errors 76, pucch0_DTX 1265, BLER 0.03103 MCS (1) 11"
    },
    {
        "rowId": 4326,
        "timestamp": 1720606200257,
        "payload": "UE 1a29: MAC:    TX     5164221316 RX       45994839 bytes"
    },
    {
        "rowId": 4327,
        "timestamp": 1720606200257,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4328,
        "timestamp": 1720606200257,
        "payload": "UE 1a29: ulsch_rounds 215969/1355/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00025 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 4329,
        "timestamp": 1720606200257,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4330,
        "timestamp": 1720606200257,
        "payload": "UE 1a29: LCID 1: TX          12939 RX          93196 bytes"
    },
    {
        "rowId": 4331,
        "timestamp": 1720606200257,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4332,
        "timestamp": 1720606200257,
        "payload": "UE 1a29: LCID 4: TX     5004889050 RX       12217386 bytes"
    },
    {
        "rowId": 4333,
        "timestamp": 1720606200257,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4334,
        "timestamp": 1720606201537,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 4335,
        "timestamp": 1720606201537,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4336,
        "timestamp": 1720606201537,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4337,
        "timestamp": 1720606201537,
        "payload": "UE 1a29: dlsch_rounds 1755635/170625/4006/341, dlsch_errors 76, pucch0_DTX 1265, BLER 0.03388 MCS (1) 11"
    },
    {
        "rowId": 4338,
        "timestamp": 1720606201537,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4339,
        "timestamp": 1720606201537,
        "payload": "UE 1a29: MAC:    TX     5165811964 RX       46010331 bytes"
    },
    {
        "rowId": 4340,
        "timestamp": 1720606201537,
        "payload": "UE 1a29: LCID 1: TX          12942 RX          93218 bytes"
    },
    {
        "rowId": 4341,
        "timestamp": 1720606201537,
        "payload": "UE 1a29: ulsch_rounds 216039/1357/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.01986 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 21.0 dB"
    },
    {
        "rowId": 4342,
        "timestamp": 1720606201537,
        "payload": "UE 1a29: LCID 4: TX     5006429577 RX       12221284 bytes"
    },
    {
        "rowId": 4343,
        "timestamp": 1720606201537,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4344,
        "timestamp": 1720606201537,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4345,
        "timestamp": 1720606202817,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 4346,
        "timestamp": 1720606202817,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 4347,
        "timestamp": 1720606202817,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4348,
        "timestamp": 1720606202817,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4349,
        "timestamp": 1720606202817,
        "payload": "UE 1a29: ulsch_rounds 216106/1357/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00505 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 4350,
        "timestamp": 1720606202817,
        "payload": "UE 1a29: dlsch_rounds 1756222/170779/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.17991 MCS (1) 6"
    },
    {
        "rowId": 4351,
        "timestamp": 1720606202817,
        "payload": "UE 1a29: LCID 1: TX          12945 RX          93240 bytes"
    },
    {
        "rowId": 4352,
        "timestamp": 1720606202817,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4353,
        "timestamp": 1720606202817,
        "payload": "UE 1a29: LCID 4: TX     5008230550 RX       12224971 bytes"
    },
    {
        "rowId": 4354,
        "timestamp": 1720606202817,
        "payload": "UE 1a29: MAC:    TX     5167664569 RX       46024334 bytes"
    },
    {
        "rowId": 4355,
        "timestamp": 1720606202817,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4356,
        "timestamp": 1720606204096,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 4357,
        "timestamp": 1720606204097,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4358,
        "timestamp": 1720606204097,
        "payload": "UE 1a29: LCID 1: TX          12948 RX          93262 bytes"
    },
    {
        "rowId": 4359,
        "timestamp": 1720606204097,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4360,
        "timestamp": 1720606204097,
        "payload": "UE 1a29: ulsch_rounds 216174/1357/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00143 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 28.0 dB"
    },
    {
        "rowId": 4361,
        "timestamp": 1720606204097,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 4362,
        "timestamp": 1720606204097,
        "payload": "UE 1a29: MAC:    TX     5168958184 RX       46038530 bytes"
    },
    {
        "rowId": 4363,
        "timestamp": 1720606204097,
        "payload": "UE 1a29: dlsch_rounds 1756696/170805/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.08686 MCS (1) 6"
    },
    {
        "rowId": 4364,
        "timestamp": 1720606204097,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4365,
        "timestamp": 1720606204097,
        "payload": "UE 1a29: LCID 4: TX     5009486899 RX       12228270 bytes"
    },
    {
        "rowId": 4366,
        "timestamp": 1720606204097,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4367,
        "timestamp": 1720606205376,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 4368,
        "timestamp": 1720606205377,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4369,
        "timestamp": 1720606205377,
        "payload": "UE 1a29: dlsch_rounds 1757177/170857/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.12591 MCS (1) 9"
    },
    {
        "rowId": 4370,
        "timestamp": 1720606205377,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4371,
        "timestamp": 1720606205377,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4372,
        "timestamp": 1720606205377,
        "payload": "UE 1a29: MAC:    TX     5170314763 RX       46053366 bytes"
    },
    {
        "rowId": 4373,
        "timestamp": 1720606205377,
        "payload": "UE 1a29: ulsch_rounds 216243/1357/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00036 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 4374,
        "timestamp": 1720606205377,
        "payload": "UE 1a29: LCID 4: TX     5010800138 RX       12231734 bytes"
    },
    {
        "rowId": 4375,
        "timestamp": 1720606205377,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4376,
        "timestamp": 1720606205377,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4377,
        "timestamp": 1720606205377,
        "payload": "UE 1a29: LCID 1: TX          12954 RX          93306 bytes"
    },
    {
        "rowId": 4378,
        "timestamp": 1720606206656,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 4379,
        "timestamp": 1720606206657,
        "payload": "UE 1a29: dlsch_rounds 1757731/170900/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.07350 MCS (1) 7"
    },
    {
        "rowId": 4380,
        "timestamp": 1720606206657,
        "payload": "UE 1a29: MAC:    TX     5171964978 RX       46068427 bytes"
    },
    {
        "rowId": 4381,
        "timestamp": 1720606206657,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4382,
        "timestamp": 1720606206657,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4383,
        "timestamp": 1720606206657,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4384,
        "timestamp": 1720606206657,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4385,
        "timestamp": 1720606206657,
        "payload": "UE 1a29: ulsch_rounds 216313/1358/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.01103 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 4386,
        "timestamp": 1720606206657,
        "payload": "UE 1a29: LCID 1: TX          12957 RX          93328 bytes"
    },
    {
        "rowId": 4387,
        "timestamp": 1720606206657,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4388,
        "timestamp": 1720606206657,
        "payload": "UE 1a29: LCID 4: TX     5012402432 RX       12235289 bytes"
    },
    {
        "rowId": 4389,
        "timestamp": 1720606207936,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 4390,
        "timestamp": 1720606207937,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4391,
        "timestamp": 1720606207937,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4392,
        "timestamp": 1720606207937,
        "payload": "UE 1a29: MAC:    TX     5173740851 RX       46082572 bytes"
    },
    {
        "rowId": 4393,
        "timestamp": 1720606207937,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4394,
        "timestamp": 1720606207937,
        "payload": "UE 1a29: ulsch_rounds 216379/1359/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.01661 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 4395,
        "timestamp": 1720606207937,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4396,
        "timestamp": 1720606207937,
        "payload": "UE 1a29: dlsch_rounds 1758302/170940/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.06504 MCS (1) 7"
    },
    {
        "rowId": 4397,
        "timestamp": 1720606207937,
        "payload": "UE 1a29: LCID 4: TX     5014137818 RX       12239145 bytes"
    },
    {
        "rowId": 4398,
        "timestamp": 1720606207937,
        "payload": "UE 1a29: LCID 1: TX          12960 RX          93350 bytes"
    },
    {
        "rowId": 4399,
        "timestamp": 1720606207937,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4400,
        "timestamp": 1720606209217,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 4401,
        "timestamp": 1720606209217,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4402,
        "timestamp": 1720606209217,
        "payload": "UE 1a29: dlsch_rounds 1758782/171005/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.12132 MCS (1) 7"
    },
    {
        "rowId": 4403,
        "timestamp": 1720606209217,
        "payload": "UE 1a29: MAC:    TX     5175041411 RX       46098000 bytes"
    },
    {
        "rowId": 4404,
        "timestamp": 1720606209217,
        "payload": "UE 1a29: LCID 4: TX     5015391319 RX       12242763 bytes"
    },
    {
        "rowId": 4405,
        "timestamp": 1720606209217,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4406,
        "timestamp": 1720606209217,
        "payload": "UE 1a29: LCID 1: TX          12963 RX          93372 bytes"
    },
    {
        "rowId": 4407,
        "timestamp": 1720606209217,
        "payload": "UE 1a29: ulsch_rounds 216449/1361/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.03439 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 4408,
        "timestamp": 1720606209217,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4409,
        "timestamp": 1720606209217,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4410,
        "timestamp": 1720606209217,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4411,
        "timestamp": 1720606210497,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 4412,
        "timestamp": 1720606210497,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4413,
        "timestamp": 1720606210497,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4414,
        "timestamp": 1720606210497,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4415,
        "timestamp": 1720606210497,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4416,
        "timestamp": 1720606210497,
        "payload": "UE 1a29: LCID 1: TX          12969 RX          93416 bytes"
    },
    {
        "rowId": 4417,
        "timestamp": 1720606210497,
        "payload": "UE 1a29: dlsch_rounds 1759284/171042/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.11126 MCS (1) 11"
    },
    {
        "rowId": 4418,
        "timestamp": 1720606210497,
        "payload": "UE 1a29: LCID 4: TX     5016758670 RX       12246183 bytes"
    },
    {
        "rowId": 4419,
        "timestamp": 1720606210497,
        "payload": "UE 1a29: MAC:    TX     5176452456 RX       46112627 bytes"
    },
    {
        "rowId": 4420,
        "timestamp": 1720606210497,
        "payload": "UE 1a29: ulsch_rounds 216517/1362/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.02089 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 4421,
        "timestamp": 1720606210497,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4422,
        "timestamp": 1720606211777,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 4423,
        "timestamp": 1720606211777,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4424,
        "timestamp": 1720606211777,
        "payload": "UE 1a29: dlsch_rounds 1759842/171130/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.11187 MCS (1) 6"
    },
    {
        "rowId": 4425,
        "timestamp": 1720606211777,
        "payload": "UE 1a29: ulsch_rounds 216586/1363/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.01328 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 4426,
        "timestamp": 1720606211777,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4427,
        "timestamp": 1720606211777,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4428,
        "timestamp": 1720606211777,
        "payload": "UE 1a29: MAC:    TX     5178215597 RX       46127846 bytes"
    },
    {
        "rowId": 4429,
        "timestamp": 1720606211777,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4430,
        "timestamp": 1720606211777,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4431,
        "timestamp": 1720606211777,
        "payload": "UE 1a29: LCID 4: TX     5018477808 RX       12249856 bytes"
    },
    {
        "rowId": 4432,
        "timestamp": 1720606211777,
        "payload": "UE 1a29: LCID 1: TX          12972 RX          93438 bytes"
    },
    {
        "rowId": 4433,
        "timestamp": 1720606213057,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 4434,
        "timestamp": 1720606213057,
        "payload": "UE 1a29: ulsch_rounds 216652/1363/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00375 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 4435,
        "timestamp": 1720606213057,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4436,
        "timestamp": 1720606213057,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4437,
        "timestamp": 1720606213057,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4438,
        "timestamp": 1720606213057,
        "payload": "UE 1a29: MAC:    TX     5179884465 RX       46141624 bytes"
    },
    {
        "rowId": 4439,
        "timestamp": 1720606213057,
        "payload": "UE 1a29: LCID 1: TX          12975 RX          93460 bytes"
    },
    {
        "rowId": 4440,
        "timestamp": 1720606213057,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4441,
        "timestamp": 1720606213057,
        "payload": "UE 1a29: LCID 4: TX     5020104308 RX       12253683 bytes"
    },
    {
        "rowId": 4442,
        "timestamp": 1720606213057,
        "payload": "UE 1a29: dlsch_rounds 1760388/171148/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.05937 MCS (1) 7"
    },
    {
        "rowId": 4443,
        "timestamp": 1720606213057,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4444,
        "timestamp": 1720606214337,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 4445,
        "timestamp": 1720606214337,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4446,
        "timestamp": 1720606214337,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4447,
        "timestamp": 1720606214337,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4448,
        "timestamp": 1720606214337,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4449,
        "timestamp": 1720606214337,
        "payload": "UE 1a29: LCID 1: TX          12978 RX          93482 bytes"
    },
    {
        "rowId": 4450,
        "timestamp": 1720606214337,
        "payload": "UE 1a29: MAC:    TX     5181228543 RX       46155627 bytes"
    },
    {
        "rowId": 4451,
        "timestamp": 1720606214337,
        "payload": "UE 1a29: dlsch_rounds 1760862/171186/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.06493 MCS (1) 7"
    },
    {
        "rowId": 4452,
        "timestamp": 1720606214337,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4453,
        "timestamp": 1720606214337,
        "payload": "UE 1a29: ulsch_rounds 216719/1363/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00095 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.5 dB"
    },
    {
        "rowId": 4454,
        "timestamp": 1720606214337,
        "payload": "UE 1a29: LCID 4: TX     5021408100 RX       12256997 bytes"
    },
    {
        "rowId": 4455,
        "timestamp": 1720606215617,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4456,
        "timestamp": 1720606215617,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 4457,
        "timestamp": 1720606215617,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4458,
        "timestamp": 1720606215617,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4459,
        "timestamp": 1720606215617,
        "payload": "UE 1a29: dlsch_rounds 1761381/171225/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.06398 MCS (1) 7"
    },
    {
        "rowId": 4460,
        "timestamp": 1720606215617,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4461,
        "timestamp": 1720606215617,
        "payload": "UE 1a29: MAC:    TX     5182705640 RX       46170479 bytes"
    },
    {
        "rowId": 4462,
        "timestamp": 1720606215617,
        "payload": "UE 1a29: LCID 1: TX          12984 RX          93526 bytes"
    },
    {
        "rowId": 4463,
        "timestamp": 1720606215617,
        "payload": "UE 1a29: ulsch_rounds 216788/1364/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00670 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 4464,
        "timestamp": 1720606215617,
        "payload": "UE 1a29: LCID 4: TX     5022840243 RX       12260559 bytes"
    },
    {
        "rowId": 4465,
        "timestamp": 1720606215617,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4466,
        "timestamp": 1720606216897,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4467,
        "timestamp": 1720606216897,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 4468,
        "timestamp": 1720606216897,
        "payload": "UE 1a29: ulsch_rounds 216857/1364/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00170 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.5 dB"
    },
    {
        "rowId": 4469,
        "timestamp": 1720606216897,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4470,
        "timestamp": 1720606216897,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4471,
        "timestamp": 1720606216897,
        "payload": "UE 1a29: LCID 4: TX     5024647611 RX       12264262 bytes"
    },
    {
        "rowId": 4472,
        "timestamp": 1720606216897,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4473,
        "timestamp": 1720606216897,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4474,
        "timestamp": 1720606216897,
        "payload": "UE 1a29: LCID 1: TX          12987 RX          93548 bytes"
    },
    {
        "rowId": 4475,
        "timestamp": 1720606216897,
        "payload": "UE 1a29: dlsch_rounds 1761969/171282/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.09693 MCS (1) 9"
    },
    {
        "rowId": 4476,
        "timestamp": 1720606216897,
        "payload": "UE 1a29: MAC:    TX     5184565435 RX       46185251 bytes"
    },
    {
        "rowId": 4477,
        "timestamp": 1720606218177,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4478,
        "timestamp": 1720606218177,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4479,
        "timestamp": 1720606218177,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 4480,
        "timestamp": 1720606218177,
        "payload": "UE 1a29: dlsch_rounds 1762473/171343/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.12177 MCS (1) 8"
    },
    {
        "rowId": 4481,
        "timestamp": 1720606218177,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4482,
        "timestamp": 1720606218177,
        "payload": "UE 1a29: ulsch_rounds 216925/1364/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00043 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.5 dB"
    },
    {
        "rowId": 4483,
        "timestamp": 1720606218177,
        "payload": "UE 1a29: LCID 1: TX          12990 RX          93570 bytes"
    },
    {
        "rowId": 4484,
        "timestamp": 1720606218177,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4485,
        "timestamp": 1720606218177,
        "payload": "UE 1a29: LCID 4: TX     5026133231 RX       12267732 bytes"
    },
    {
        "rowId": 4486,
        "timestamp": 1720606218177,
        "payload": "UE 1a29: MAC:    TX     5186104128 RX       46199447 bytes"
    },
    {
        "rowId": 4487,
        "timestamp": 1720606218177,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4488,
        "timestamp": 1720606219457,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 4489,
        "timestamp": 1720606219457,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4490,
        "timestamp": 1720606219457,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4491,
        "timestamp": 1720606219457,
        "payload": "UE 1a29: ulsch_rounds 216995/1364/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00012 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 4492,
        "timestamp": 1720606219457,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4493,
        "timestamp": 1720606219457,
        "payload": "UE 1a29: dlsch_rounds 1762936/171383/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.11288 MCS (1) 9"
    },
    {
        "rowId": 4494,
        "timestamp": 1720606219457,
        "payload": "UE 1a29: MAC:    TX     5187448450 RX       46214508 bytes"
    },
    {
        "rowId": 4495,
        "timestamp": 1720606219457,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4496,
        "timestamp": 1720606219457,
        "payload": "UE 1a29: LCID 1: TX          12993 RX          93592 bytes"
    },
    {
        "rowId": 4497,
        "timestamp": 1720606219457,
        "payload": "UE 1a29: LCID 4: TX     5027432551 RX       12271323 bytes"
    },
    {
        "rowId": 4498,
        "timestamp": 1720606219457,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4499,
        "timestamp": 1720606220737,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 4500,
        "timestamp": 1720606220737,
        "payload": "UE 1a29: dlsch_rounds 1763436/171430/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.07835 MCS (1) 8"
    },
    {
        "rowId": 4501,
        "timestamp": 1720606220737,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4502,
        "timestamp": 1720606220737,
        "payload": "UE 1a29: ulsch_rounds 217063/1365/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00847 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 4503,
        "timestamp": 1720606220737,
        "payload": "UE 1a29: MAC:    TX     5188949213 RX       46229135 bytes"
    },
    {
        "rowId": 4504,
        "timestamp": 1720606220737,
        "payload": "UE 1a29: LCID 1: TX          12999 RX          93636 bytes"
    },
    {
        "rowId": 4505,
        "timestamp": 1720606220737,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4506,
        "timestamp": 1720606220737,
        "payload": "UE 1a29: LCID 4: TX     5028884388 RX       12274811 bytes"
    },
    {
        "rowId": 4507,
        "timestamp": 1720606220737,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4508,
        "timestamp": 1720606220737,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4509,
        "timestamp": 1720606220737,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4510,
        "timestamp": 1720606222017,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 4511,
        "timestamp": 1720606222017,
        "payload": "UE 1a29: dlsch_rounds 1764012/171523/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.15405 MCS (1) 7"
    },
    {
        "rowId": 4512,
        "timestamp": 1720606222017,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4513,
        "timestamp": 1720606222017,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4514,
        "timestamp": 1720606222017,
        "payload": "UE 1a29: ulsch_rounds 217132/1366/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.01715 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 4515,
        "timestamp": 1720606222017,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4516,
        "timestamp": 1720606222017,
        "payload": "UE 1a29: MAC:    TX     5190825182 RX       46243971 bytes"
    },
    {
        "rowId": 4517,
        "timestamp": 1720606222017,
        "payload": "UE 1a29: LCID 1: TX          13002 RX          93658 bytes"
    },
    {
        "rowId": 4518,
        "timestamp": 1720606222017,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4519,
        "timestamp": 1720606222017,
        "payload": "UE 1a29: LCID 4: TX     5030710691 RX       12278598 bytes"
    },
    {
        "rowId": 4520,
        "timestamp": 1720606222017,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4521,
        "timestamp": 1720606223297,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 4522,
        "timestamp": 1720606223297,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4523,
        "timestamp": 1720606223297,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4524,
        "timestamp": 1720606223297,
        "payload": "UE 1a29: dlsch_rounds 1764493/171554/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.07359 MCS (1) 6"
    },
    {
        "rowId": 4525,
        "timestamp": 1720606223297,
        "payload": "UE 1a29: ulsch_rounds 217199/1366/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00436 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 4526,
        "timestamp": 1720606223297,
        "payload": "UE 1a29: MAC:    TX     5192182111 RX       46257958 bytes"
    },
    {
        "rowId": 4527,
        "timestamp": 1720606223297,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4528,
        "timestamp": 1720606223297,
        "payload": "UE 1a29: LCID 1: TX          13005 RX          93680 bytes"
    },
    {
        "rowId": 4529,
        "timestamp": 1720606223297,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4530,
        "timestamp": 1720606223297,
        "payload": "UE 1a29: LCID 4: TX     5032029787 RX       12281837 bytes"
    },
    {
        "rowId": 4531,
        "timestamp": 1720606223297,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4532,
        "timestamp": 1720606224577,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 4533,
        "timestamp": 1720606224577,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4534,
        "timestamp": 1720606224577,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4535,
        "timestamp": 1720606224577,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4536,
        "timestamp": 1720606224577,
        "payload": "UE 1a29: dlsch_rounds 1764980/171601/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.09023 MCS (1) 10"
    },
    {
        "rowId": 4537,
        "timestamp": 1720606224577,
        "payload": "UE 1a29: ulsch_rounds 217266/1367/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00769 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 4538,
        "timestamp": 1720606224577,
        "payload": "UE 1a29: MAC:    TX     5193554481 RX       46272392 bytes"
    },
    {
        "rowId": 4539,
        "timestamp": 1720606224577,
        "payload": "UE 1a29: LCID 1: TX          13008 RX          93702 bytes"
    },
    {
        "rowId": 4540,
        "timestamp": 1720606224577,
        "payload": "UE 1a29: LCID 4: TX     5033354534 RX       12285464 bytes"
    },
    {
        "rowId": 4541,
        "timestamp": 1720606224577,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4542,
        "timestamp": 1720606224577,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4543,
        "timestamp": 1720606225857,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 4544,
        "timestamp": 1720606225857,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4545,
        "timestamp": 1720606225857,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4546,
        "timestamp": 1720606225857,
        "payload": "UE 1a29: ulsch_rounds 217334/1367/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00195 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 4547,
        "timestamp": 1720606225857,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4548,
        "timestamp": 1720606225857,
        "payload": "UE 1a29: MAC:    TX     5195093978 RX       46286604 bytes"
    },
    {
        "rowId": 4549,
        "timestamp": 1720606225857,
        "payload": "UE 1a29: LCID 1: TX          13014 RX          93746 bytes"
    },
    {
        "rowId": 4550,
        "timestamp": 1720606225857,
        "payload": "UE 1a29: LCID 4: TX     5034849617 RX       12288994 bytes"
    },
    {
        "rowId": 4551,
        "timestamp": 1720606225857,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4552,
        "timestamp": 1720606225857,
        "payload": "UE 1a29: dlsch_rounds 1765502/171642/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.07320 MCS (1) 7"
    },
    {
        "rowId": 4553,
        "timestamp": 1720606225857,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4554,
        "timestamp": 1720606227137,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 4555,
        "timestamp": 1720606227137,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4556,
        "timestamp": 1720606227137,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 4557,
        "timestamp": 1720606227137,
        "payload": "UE 1a29: dlsch_rounds 1766045/171714/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.11851 MCS (1) 10"
    },
    {
        "rowId": 4558,
        "timestamp": 1720606227137,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4559,
        "timestamp": 1720606227137,
        "payload": "UE 1a29: ulsch_rounds 217400/1367/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00050 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 20.5 dB"
    },
    {
        "rowId": 4560,
        "timestamp": 1720606227137,
        "payload": "UE 1a29: MAC:    TX     5196883514 RX       46300398 bytes"
    },
    {
        "rowId": 4561,
        "timestamp": 1720606227137,
        "payload": "UE 1a29: LCID 1: TX          13017 RX          93768 bytes"
    },
    {
        "rowId": 4562,
        "timestamp": 1720606227137,
        "payload": "UE 1a29: LCID 4: TX     5036587389 RX       12292661 bytes"
    },
    {
        "rowId": 4563,
        "timestamp": 1720606227137,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4564,
        "timestamp": 1720606227137,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4565,
        "timestamp": 1720606228417,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 4566,
        "timestamp": 1720606228417,
        "payload": "UE 1a29: MAC:    TX     5198240682 RX       46314385 bytes"
    },
    {
        "rowId": 4567,
        "timestamp": 1720606228417,
        "payload": "UE 1a29: dlsch_rounds 1766528/171785/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.09682 MCS (1) 6"
    },
    {
        "rowId": 4568,
        "timestamp": 1720606228417,
        "payload": "UE 1a29: ulsch_rounds 217467/1367/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00013 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 4569,
        "timestamp": 1720606228417,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4570,
        "timestamp": 1720606228417,
        "payload": "UE 1a29: LCID 4: TX     5037902387 RX       12295944 bytes"
    },
    {
        "rowId": 4571,
        "timestamp": 1720606228417,
        "payload": "UE 1a29: LCID 1: TX          13020 RX          93790 bytes"
    },
    {
        "rowId": 4572,
        "timestamp": 1720606228417,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4573,
        "timestamp": 1720606228417,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 4574,
        "timestamp": 1720606228417,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4575,
        "timestamp": 1720606228417,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4576,
        "timestamp": 1720606229697,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 4577,
        "timestamp": 1720606229697,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4578,
        "timestamp": 1720606229697,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4579,
        "timestamp": 1720606229697,
        "payload": "UE 1a29: dlsch_rounds 1767018/171819/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.08803 MCS (1) 9"
    },
    {
        "rowId": 4580,
        "timestamp": 1720606229697,
        "payload": "UE 1a29: LCID 1: TX          13023 RX          93812 bytes"
    },
    {
        "rowId": 4581,
        "timestamp": 1720606229697,
        "payload": "UE 1a29: ulsch_rounds 217535/1367/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00003 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.5 dB"
    },
    {
        "rowId": 4582,
        "timestamp": 1720606229697,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4583,
        "timestamp": 1720606229697,
        "payload": "UE 1a29: MAC:    TX     5199616422 RX       46329028 bytes"
    },
    {
        "rowId": 4584,
        "timestamp": 1720606229697,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4585,
        "timestamp": 1720606229697,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4586,
        "timestamp": 1720606229697,
        "payload": "UE 1a29: LCID 4: TX     5039234010 RX       12299375 bytes"
    },
    {
        "rowId": 4587,
        "timestamp": 1720606230977,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 4588,
        "timestamp": 1720606230977,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4589,
        "timestamp": 1720606230977,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 4590,
        "timestamp": 1720606230977,
        "payload": "UE 1a29: ulsch_rounds 217601/1367/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00001 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 4591,
        "timestamp": 1720606230977,
        "payload": "UE 1a29: MAC:    TX     5201189278 RX       46342806 bytes"
    },
    {
        "rowId": 4592,
        "timestamp": 1720606230977,
        "payload": "UE 1a29: dlsch_rounds 1767546/171881/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.10078 MCS (1) 6"
    },
    {
        "rowId": 4593,
        "timestamp": 1720606230977,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4594,
        "timestamp": 1720606230977,
        "payload": "UE 1a29: LCID 1: TX          13029 RX          93856 bytes"
    },
    {
        "rowId": 4595,
        "timestamp": 1720606230977,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4596,
        "timestamp": 1720606230977,
        "payload": "UE 1a29: LCID 4: TX     5040763044 RX       12303042 bytes"
    },
    {
        "rowId": 4597,
        "timestamp": 1720606230977,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4598,
        "timestamp": 1720606232257,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4599,
        "timestamp": 1720606232257,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 4600,
        "timestamp": 1720606232257,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4601,
        "timestamp": 1720606232257,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4602,
        "timestamp": 1720606232257,
        "payload": "UE 1a29: dlsch_rounds 1768104/171931/4033/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.09838 MCS (1) 8"
    },
    {
        "rowId": 4603,
        "timestamp": 1720606232257,
        "payload": "UE 1a29: MAC:    TX     5202950966 RX       46357224 bytes"
    },
    {
        "rowId": 4604,
        "timestamp": 1720606232257,
        "payload": "UE 1a29: ulsch_rounds 217668/1367/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 4605,
        "timestamp": 1720606232257,
        "payload": "UE 1a29: LCID 1: TX          13032 RX          93878 bytes"
    },
    {
        "rowId": 4606,
        "timestamp": 1720606232257,
        "payload": "UE 1a29: LCID 4: TX     5042480578 RX       12306686 bytes"
    },
    {
        "rowId": 4607,
        "timestamp": 1720606232257,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4608,
        "timestamp": 1720606232257,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4609,
        "timestamp": 1720606233537,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 4610,
        "timestamp": 1720606233537,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4611,
        "timestamp": 1720606233537,
        "payload": "UE 1a29: dlsch_rounds 1768586/171982/4034/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.09888 MCS (1) 6"
    },
    {
        "rowId": 4612,
        "timestamp": 1720606233537,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4613,
        "timestamp": 1720606233537,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4614,
        "timestamp": 1720606233537,
        "payload": "UE 1a29: ulsch_rounds 217734/1367/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 4615,
        "timestamp": 1720606233537,
        "payload": "UE 1a29: MAC:    TX     5204272914 RX       46371002 bytes"
    },
    {
        "rowId": 4616,
        "timestamp": 1720606233537,
        "payload": "UE 1a29: LCID 1: TX          13035 RX          93900 bytes"
    },
    {
        "rowId": 4617,
        "timestamp": 1720606233537,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4618,
        "timestamp": 1720606233537,
        "payload": "UE 1a29: LCID 4: TX     5043762398 RX       12309957 bytes"
    },
    {
        "rowId": 4619,
        "timestamp": 1720606233537,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4620,
        "timestamp": 1720606234817,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4621,
        "timestamp": 1720606234817,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4622,
        "timestamp": 1720606234817,
        "payload": "UE 1a29: LCID 1: TX          13038 RX          93922 bytes"
    },
    {
        "rowId": 4623,
        "timestamp": 1720606234817,
        "payload": "UE 1a29: MAC:    TX     5205634623 RX       46384989 bytes"
    },
    {
        "rowId": 4624,
        "timestamp": 1720606234817,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4625,
        "timestamp": 1720606234816,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 4626,
        "timestamp": 1720606234817,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4627,
        "timestamp": 1720606234817,
        "payload": "UE 1a29: ulsch_rounds 217801/1367/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 4628,
        "timestamp": 1720606234817,
        "payload": "UE 1a29: dlsch_rounds 1769074/172018/4034/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.08631 MCS (1) 7"
    },
    {
        "rowId": 4629,
        "timestamp": 1720606234817,
        "payload": "UE 1a29: LCID 4: TX     5045084873 RX       12313360 bytes"
    },
    {
        "rowId": 4630,
        "timestamp": 1720606234817,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4631,
        "timestamp": 1720606236096,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 4632,
        "timestamp": 1720606236097,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4633,
        "timestamp": 1720606236097,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4634,
        "timestamp": 1720606236097,
        "payload": "UE 1a29: dlsch_rounds 1769590/172104/4034/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.16276 MCS (1) 6"
    },
    {
        "rowId": 4635,
        "timestamp": 1720606236097,
        "payload": "UE 1a29: ulsch_rounds 217869/1368/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.01500 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 4636,
        "timestamp": 1720606236097,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4637,
        "timestamp": 1720606236097,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4638,
        "timestamp": 1720606236097,
        "payload": "UE 1a29: MAC:    TX     5207182331 RX       46400047 bytes"
    },
    {
        "rowId": 4639,
        "timestamp": 1720606236097,
        "payload": "UE 1a29: LCID 4: TX     5046589453 RX       12317013 bytes"
    },
    {
        "rowId": 4640,
        "timestamp": 1720606236097,
        "payload": "UE 1a29: LCID 1: TX          13044 RX          93966 bytes"
    },
    {
        "rowId": 4641,
        "timestamp": 1720606236097,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4642,
        "timestamp": 1720606237376,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 4643,
        "timestamp": 1720606237377,
        "payload": "UE 1a29: dlsch_rounds 1770152/172180/4034/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.13904 MCS (1) 6"
    },
    {
        "rowId": 4644,
        "timestamp": 1720606237377,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4645,
        "timestamp": 1720606237377,
        "payload": "UE 1a29: ulsch_rounds 217937/1368/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00381 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.5 dB"
    },
    {
        "rowId": 4646,
        "timestamp": 1720606237377,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 4647,
        "timestamp": 1720606237377,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4648,
        "timestamp": 1720606237377,
        "payload": "UE 1a29: MAC:    TX     5208985248 RX       46414259 bytes"
    },
    {
        "rowId": 4649,
        "timestamp": 1720606237377,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4650,
        "timestamp": 1720606237377,
        "payload": "UE 1a29: LCID 1: TX          13047 RX          93988 bytes"
    },
    {
        "rowId": 4651,
        "timestamp": 1720606237377,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4652,
        "timestamp": 1720606237377,
        "payload": "UE 1a29: LCID 4: TX     5048352343 RX       12320707 bytes"
    },
    {
        "rowId": 4653,
        "timestamp": 1720606238656,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 4654,
        "timestamp": 1720606238657,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4655,
        "timestamp": 1720606238657,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4656,
        "timestamp": 1720606238657,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4657,
        "timestamp": 1720606238657,
        "payload": "UE 1a29: ulsch_rounds 218004/1368/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00097 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 4658,
        "timestamp": 1720606238657,
        "payload": "UE 1a29: MAC:    TX     5210331647 RX       46428262 bytes"
    },
    {
        "rowId": 4659,
        "timestamp": 1720606238657,
        "payload": "UE 1a29: dlsch_rounds 1770640/172222/4034/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.10278 MCS (1) 6"
    },
    {
        "rowId": 4660,
        "timestamp": 1720606238657,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4661,
        "timestamp": 1720606238657,
        "payload": "UE 1a29: LCID 4: TX     5049661144 RX       12324070 bytes"
    },
    {
        "rowId": 4662,
        "timestamp": 1720606238657,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4663,
        "timestamp": 1720606238657,
        "payload": "UE 1a29: LCID 1: TX          13050 RX          94010 bytes"
    },
    {
        "rowId": 4664,
        "timestamp": 1720606239937,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4665,
        "timestamp": 1720606239936,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 4666,
        "timestamp": 1720606239937,
        "payload": "UE 1a29: ulsch_rounds 218073/1368/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00025 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 4667,
        "timestamp": 1720606239937,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4668,
        "timestamp": 1720606239937,
        "payload": "UE 1a29: dlsch_rounds 1771139/172256/4034/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.07034 MCS (1) 6"
    },
    {
        "rowId": 4669,
        "timestamp": 1720606239937,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4670,
        "timestamp": 1720606239937,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4671,
        "timestamp": 1720606239937,
        "payload": "UE 1a29: LCID 1: TX          13053 RX          94032 bytes"
    },
    {
        "rowId": 4672,
        "timestamp": 1720606239937,
        "payload": "UE 1a29: MAC:    TX     5211743442 RX       46443098 bytes"
    },
    {
        "rowId": 4673,
        "timestamp": 1720606239937,
        "payload": "UE 1a29: LCID 4: TX     5051034322 RX       12327647 bytes"
    },
    {
        "rowId": 4674,
        "timestamp": 1720606239937,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4675,
        "timestamp": 1720606241216,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 4676,
        "timestamp": 1720606241217,
        "payload": "UE 1a29: LCID 1: TX          13059 RX          94076 bytes"
    },
    {
        "rowId": 4677,
        "timestamp": 1720606241217,
        "payload": "UE 1a29: MAC:    TX     5213377156 RX       46457950 bytes"
    },
    {
        "rowId": 4678,
        "timestamp": 1720606241217,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4679,
        "timestamp": 1720606241217,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4680,
        "timestamp": 1720606241217,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4681,
        "timestamp": 1720606241217,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4682,
        "timestamp": 1720606241217,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4683,
        "timestamp": 1720606241217,
        "payload": "UE 1a29: dlsch_rounds 1771675/172359/4035/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.18087 MCS (1) 6"
    },
    {
        "rowId": 4684,
        "timestamp": 1720606241217,
        "payload": "UE 1a29: LCID 4: TX     5052622442 RX       12331368 bytes"
    },
    {
        "rowId": 4685,
        "timestamp": 1720606241217,
        "payload": "UE 1a29: ulsch_rounds 218142/1369/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00007 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.5 dB"
    },
    {
        "rowId": 4686,
        "timestamp": 1720606242497,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4687,
        "timestamp": 1720606242497,
        "payload": "UE 1a29: ulsch_rounds 218209/1369/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00472 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 4688,
        "timestamp": 1720606242497,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4689,
        "timestamp": 1720606242497,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4690,
        "timestamp": 1720606242497,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 4691,
        "timestamp": 1720606242497,
        "payload": "UE 1a29: dlsch_rounds 1772245/172382/4035/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.08711 MCS (1) 6"
    },
    {
        "rowId": 4692,
        "timestamp": 1720606242497,
        "payload": "UE 1a29: MAC:    TX     5215118483 RX       46471921 bytes"
    },
    {
        "rowId": 4693,
        "timestamp": 1720606242497,
        "payload": "UE 1a29: LCID 1: TX          13062 RX          94098 bytes"
    },
    {
        "rowId": 4694,
        "timestamp": 1720606242497,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4695,
        "timestamp": 1720606242497,
        "payload": "UE 1a29: LCID 4: TX     5054322123 RX       12334901 bytes"
    },
    {
        "rowId": 4696,
        "timestamp": 1720606242497,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4697,
        "timestamp": 1720606243777,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 4698,
        "timestamp": 1720606243777,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4699,
        "timestamp": 1720606243777,
        "payload": "UE 1a29: LCID 1: TX          13065 RX          94120 bytes"
    },
    {
        "rowId": 4700,
        "timestamp": 1720606243777,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4701,
        "timestamp": 1720606243777,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4702,
        "timestamp": 1720606243777,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4703,
        "timestamp": 1720606243777,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4704,
        "timestamp": 1720606243777,
        "payload": "UE 1a29: MAC:    TX     5216444701 RX       46486339 bytes"
    },
    {
        "rowId": 4705,
        "timestamp": 1720606243777,
        "payload": "UE 1a29: LCID 4: TX     5055612695 RX       12338375 bytes"
    },
    {
        "rowId": 4706,
        "timestamp": 1720606243777,
        "payload": "UE 1a29: ulsch_rounds 218276/1369/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00120 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 4707,
        "timestamp": 1720606243777,
        "payload": "UE 1a29: dlsch_rounds 1772701/172410/4035/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.06564 MCS (1) 6"
    },
    {
        "rowId": 4708,
        "timestamp": 1720606245057,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 4709,
        "timestamp": 1720606245057,
        "payload": "UE 1a29: dlsch_rounds 1773179/172445/4035/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.06700 MCS (1) 7"
    },
    {
        "rowId": 4710,
        "timestamp": 1720606245057,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4711,
        "timestamp": 1720606245057,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4712,
        "timestamp": 1720606245057,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4713,
        "timestamp": 1720606245057,
        "payload": "UE 1a29: ulsch_rounds 218345/1370/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.01701 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 4714,
        "timestamp": 1720606245057,
        "payload": "UE 1a29: LCID 1: TX          13068 RX          94164 bytes"
    },
    {
        "rowId": 4715,
        "timestamp": 1720606245057,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4716,
        "timestamp": 1720606245057,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4717,
        "timestamp": 1720606245057,
        "payload": "UE 1a29: LCID 4: TX     5056943321 RX       12341884 bytes"
    },
    {
        "rowId": 4718,
        "timestamp": 1720606245057,
        "payload": "UE 1a29: MAC:    TX     5217812823 RX       46501159 bytes"
    },
    {
        "rowId": 4719,
        "timestamp": 1720606246337,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 4720,
        "timestamp": 1720606246337,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4721,
        "timestamp": 1720606246337,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4722,
        "timestamp": 1720606246337,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4723,
        "timestamp": 1720606246337,
        "payload": "UE 1a29: ulsch_rounds 218415/1372/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.02782 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.5 dB"
    },
    {
        "rowId": 4724,
        "timestamp": 1720606246337,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4725,
        "timestamp": 1720606246337,
        "payload": "UE 1a29: LCID 1: TX          13074 RX          94186 bytes"
    },
    {
        "rowId": 4726,
        "timestamp": 1720606246337,
        "payload": "UE 1a29: LCID 4: TX     5058609183 RX       12345683 bytes"
    },
    {
        "rowId": 4727,
        "timestamp": 1720606246337,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4728,
        "timestamp": 1720606246337,
        "payload": "UE 1a29: dlsch_rounds 1773718/172516/4035/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.11399 MCS (1) 7"
    },
    {
        "rowId": 4729,
        "timestamp": 1720606246337,
        "payload": "UE 1a29: MAC:    TX     5219522488 RX       46516954 bytes"
    },
    {
        "rowId": 4730,
        "timestamp": 1720606247617,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 4731,
        "timestamp": 1720606247617,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4732,
        "timestamp": 1720606247617,
        "payload": "UE 1a29: ulsch_rounds 218489/1374/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.01457 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 4733,
        "timestamp": 1720606247617,
        "payload": "UE 1a29: dlsch_rounds 1774254/172573/4035/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.11324 MCS (1) 7"
    },
    {
        "rowId": 4734,
        "timestamp": 1720606247617,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4735,
        "timestamp": 1720606247617,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4736,
        "timestamp": 1720606247617,
        "payload": "UE 1a29: LCID 1: TX          13077 RX          94208 bytes"
    },
    {
        "rowId": 4737,
        "timestamp": 1720606247617,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4738,
        "timestamp": 1720606247617,
        "payload": "UE 1a29: MAC:    TX     5221144204 RX       46534863 bytes"
    },
    {
        "rowId": 4739,
        "timestamp": 1720606247617,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4740,
        "timestamp": 1720606247617,
        "payload": "UE 1a29: LCID 4: TX     5060186976 RX       12352118 bytes"
    },
    {
        "rowId": 4741,
        "timestamp": 1720606248897,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 4742,
        "timestamp": 1720606248897,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4743,
        "timestamp": 1720606248897,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4744,
        "timestamp": 1720606248897,
        "payload": "UE 1a29: dlsch_rounds 1774733/172623/4035/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.08770 MCS (1) 6"
    },
    {
        "rowId": 4745,
        "timestamp": 1720606248897,
        "payload": "UE 1a29: ulsch_rounds 218557/1374/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00411 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 4746,
        "timestamp": 1720606248897,
        "payload": "UE 1a29: MAC:    TX     5222457844 RX       46549075 bytes"
    },
    {
        "rowId": 4747,
        "timestamp": 1720606248897,
        "payload": "UE 1a29: LCID 1: TX          13080 RX          94230 bytes"
    },
    {
        "rowId": 4748,
        "timestamp": 1720606248897,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4749,
        "timestamp": 1720606248897,
        "payload": "UE 1a29: LCID 4: TX     5061466409 RX       12355697 bytes"
    },
    {
        "rowId": 4750,
        "timestamp": 1720606248897,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4751,
        "timestamp": 1720606248897,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4752,
        "timestamp": 1720606250177,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 4753,
        "timestamp": 1720606250177,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4754,
        "timestamp": 1720606250177,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4755,
        "timestamp": 1720606250177,
        "payload": "UE 1a29: LCID 4: TX     5062834926 RX       12359245 bytes"
    },
    {
        "rowId": 4756,
        "timestamp": 1720606250177,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4757,
        "timestamp": 1720606250177,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4758,
        "timestamp": 1720606250177,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4759,
        "timestamp": 1720606250177,
        "payload": "UE 1a29: ulsch_rounds 218626/1374/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00105 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 4760,
        "timestamp": 1720606250177,
        "payload": "UE 1a29: dlsch_rounds 1775222/172706/4035/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.18116 MCS (1) 8"
    },
    {
        "rowId": 4761,
        "timestamp": 1720606250177,
        "payload": "UE 1a29: LCID 1: TX          13086 RX          94274 bytes"
    },
    {
        "rowId": 4762,
        "timestamp": 1720606250177,
        "payload": "UE 1a29: MAC:    TX     5223865786 RX       46564358 bytes"
    },
    {
        "rowId": 4763,
        "timestamp": 1720606251457,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4764,
        "timestamp": 1720606251457,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 4765,
        "timestamp": 1720606251457,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4766,
        "timestamp": 1720606251457,
        "payload": "UE 1a29: dlsch_rounds 1775789/172738/4035/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.09864 MCS (1) 6"
    },
    {
        "rowId": 4767,
        "timestamp": 1720606251457,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4768,
        "timestamp": 1720606251457,
        "payload": "UE 1a29: ulsch_rounds 218694/1374/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00027 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 4769,
        "timestamp": 1720606251457,
        "payload": "UE 1a29: MAC:    TX     5225631617 RX       46579001 bytes"
    },
    {
        "rowId": 4770,
        "timestamp": 1720606251457,
        "payload": "UE 1a29: LCID 1: TX          13089 RX          94296 bytes"
    },
    {
        "rowId": 4771,
        "timestamp": 1720606251457,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4772,
        "timestamp": 1720606251457,
        "payload": "UE 1a29: LCID 4: TX     5064560816 RX       12362928 bytes"
    },
    {
        "rowId": 4773,
        "timestamp": 1720606251457,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4774,
        "timestamp": 1720606252737,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4775,
        "timestamp": 1720606252737,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 4776,
        "timestamp": 1720606252737,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4777,
        "timestamp": 1720606252737,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4778,
        "timestamp": 1720606252737,
        "payload": "UE 1a29: LCID 1: TX          13092 RX          94318 bytes"
    },
    {
        "rowId": 4779,
        "timestamp": 1720606252737,
        "payload": "UE 1a29: MAC:    TX     5227110846 RX       46593422 bytes"
    },
    {
        "rowId": 4780,
        "timestamp": 1720606252737,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4781,
        "timestamp": 1720606252737,
        "payload": "UE 1a29: LCID 4: TX     5065996251 RX       12366326 bytes"
    },
    {
        "rowId": 4782,
        "timestamp": 1720606252737,
        "payload": "UE 1a29: dlsch_rounds 1776292/172756/4035/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.05878 MCS (1) 8"
    },
    {
        "rowId": 4783,
        "timestamp": 1720606252737,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4784,
        "timestamp": 1720606252737,
        "payload": "UE 1a29: ulsch_rounds 218763/1374/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00007 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 4785,
        "timestamp": 1720606254017,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 4786,
        "timestamp": 1720606254017,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4787,
        "timestamp": 1720606254017,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4788,
        "timestamp": 1720606254017,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4789,
        "timestamp": 1720606254017,
        "payload": "UE 1a29: dlsch_rounds 1776760/172805/4035/344, dlsch_errors 76, pucch0_DTX 1265, BLER 0.10562 MCS (1) 9"
    },
    {
        "rowId": 4790,
        "timestamp": 1720606254017,
        "payload": "UE 1a29: LCID 1: TX          13095 RX          94340 bytes"
    },
    {
        "rowId": 4791,
        "timestamp": 1720606254017,
        "payload": "UE 1a29: MAC:    TX     5228459779 RX       46607409 bytes"
    },
    {
        "rowId": 4792,
        "timestamp": 1720606254017,
        "payload": "UE 1a29: LCID 4: TX     5067296672 RX       12369725 bytes"
    },
    {
        "rowId": 4793,
        "timestamp": 1720606254017,
        "payload": "UE 1a29: ulsch_rounds 218830/1374/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00002 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 4794,
        "timestamp": 1720606254017,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4795,
        "timestamp": 1720606254017,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4796,
        "timestamp": 1720606255297,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4797,
        "timestamp": 1720606255297,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4798,
        "timestamp": 1720606255297,
        "payload": "UE 1a29: ulsch_rounds 218898/1375/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00582 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 4799,
        "timestamp": 1720606255297,
        "payload": "UE 1a29: MAC:    TX     5229928379 RX       46622020 bytes"
    },
    {
        "rowId": 4800,
        "timestamp": 1720606255297,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4801,
        "timestamp": 1720606255297,
        "payload": "UE 1a29: dlsch_rounds 1777254/172856/4040/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.08798 MCS (1) 6"
    },
    {
        "rowId": 4802,
        "timestamp": 1720606255297,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 4803,
        "timestamp": 1720606255297,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4804,
        "timestamp": 1720606255297,
        "payload": "UE 1a29: LCID 1: TX          13101 RX          94384 bytes"
    },
    {
        "rowId": 4805,
        "timestamp": 1720606255297,
        "payload": "UE 1a29: LCID 4: TX     5068724139 RX       12373185 bytes"
    },
    {
        "rowId": 4806,
        "timestamp": 1720606255297,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4807,
        "timestamp": 1720606256577,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 4808,
        "timestamp": 1720606256577,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4809,
        "timestamp": 1720606256577,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4810,
        "timestamp": 1720606256577,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4811,
        "timestamp": 1720606256577,
        "payload": "UE 1a29: dlsch_rounds 1777823/172934/4040/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.11285 MCS (1) 11"
    },
    {
        "rowId": 4812,
        "timestamp": 1720606256577,
        "payload": "UE 1a29: MAC:    TX     5231743376 RX       46636631 bytes"
    },
    {
        "rowId": 4813,
        "timestamp": 1720606256577,
        "payload": "UE 1a29: ulsch_rounds 218966/1375/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00148 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 4814,
        "timestamp": 1720606256577,
        "payload": "UE 1a29: LCID 4: TX     5070490828 RX       12377114 bytes"
    },
    {
        "rowId": 4815,
        "timestamp": 1720606256577,
        "payload": "UE 1a29: LCID 1: TX          13104 RX          94406 bytes"
    },
    {
        "rowId": 4816,
        "timestamp": 1720606256577,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4817,
        "timestamp": 1720606256577,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4818,
        "timestamp": 1720606257857,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4819,
        "timestamp": 1720606257857,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 4820,
        "timestamp": 1720606257857,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4821,
        "timestamp": 1720606257857,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4822,
        "timestamp": 1720606257857,
        "payload": "UE 1a29: LCID 1: TX          13107 RX          94428 bytes"
    },
    {
        "rowId": 4823,
        "timestamp": 1720606257857,
        "payload": "UE 1a29: MAC:    TX     5233147355 RX       46650843 bytes"
    },
    {
        "rowId": 4824,
        "timestamp": 1720606257857,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4825,
        "timestamp": 1720606257857,
        "payload": "UE 1a29: ulsch_rounds 219034/1375/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00042 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 4826,
        "timestamp": 1720606257857,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4827,
        "timestamp": 1720606257857,
        "payload": "UE 1a29: dlsch_rounds 1778319/172966/4040/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.08161 MCS (1) 7"
    },
    {
        "rowId": 4828,
        "timestamp": 1720606257857,
        "payload": "UE 1a29: LCID 4: TX     5071849621 RX       12380756 bytes"
    },
    {
        "rowId": 4829,
        "timestamp": 1720606259137,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 4830,
        "timestamp": 1720606259137,
        "payload": "UE 1a29: dlsch_rounds 1778800/173000/4040/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.09219 MCS (1) 10"
    },
    {
        "rowId": 4831,
        "timestamp": 1720606259137,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4832,
        "timestamp": 1720606259137,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4833,
        "timestamp": 1720606259137,
        "payload": "UE 1a29: ulsch_rounds 219102/1375/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00011 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 4834,
        "timestamp": 1720606259137,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4835,
        "timestamp": 1720606259137,
        "payload": "UE 1a29: LCID 1: TX          13110 RX          94450 bytes"
    },
    {
        "rowId": 4836,
        "timestamp": 1720606259137,
        "payload": "UE 1a29: LCID 4: TX     5073190325 RX       12384107 bytes"
    },
    {
        "rowId": 4837,
        "timestamp": 1720606259137,
        "payload": "UE 1a29: MAC:    TX     5234530337 RX       46665486 bytes"
    },
    {
        "rowId": 4838,
        "timestamp": 1720606259137,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4839,
        "timestamp": 1720606259137,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4840,
        "timestamp": 1720606260417,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4841,
        "timestamp": 1720606260417,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 4842,
        "timestamp": 1720606260417,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4843,
        "timestamp": 1720606260417,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4844,
        "timestamp": 1720606260417,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4845,
        "timestamp": 1720606260417,
        "payload": "UE 1a29: LCID 4: TX     5074712567 RX       12387553 bytes"
    },
    {
        "rowId": 4846,
        "timestamp": 1720606260417,
        "payload": "UE 1a29: LCID 1: TX          13116 RX          94494 bytes"
    },
    {
        "rowId": 4847,
        "timestamp": 1720606260417,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4848,
        "timestamp": 1720606260417,
        "payload": "UE 1a29: ulsch_rounds 219169/1375/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00003 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 4849,
        "timestamp": 1720606260417,
        "payload": "UE 1a29: MAC:    TX     5236105046 RX       46679489 bytes"
    },
    {
        "rowId": 4850,
        "timestamp": 1720606260417,
        "payload": "UE 1a29: dlsch_rounds 1779327/173043/4040/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.09306 MCS (1) 10"
    },
    {
        "rowId": 4851,
        "timestamp": 1720606261697,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 4852,
        "timestamp": 1720606261697,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4853,
        "timestamp": 1720606261697,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4854,
        "timestamp": 1720606261697,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4855,
        "timestamp": 1720606261697,
        "payload": "UE 1a29: MAC:    TX     5237884585 RX       46694325 bytes"
    },
    {
        "rowId": 4856,
        "timestamp": 1720606261697,
        "payload": "UE 1a29: dlsch_rounds 1779904/173100/4040/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.07835 MCS (1) 6"
    },
    {
        "rowId": 4857,
        "timestamp": 1720606261697,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4858,
        "timestamp": 1720606261697,
        "payload": "UE 1a29: LCID 1: TX          13119 RX          94516 bytes"
    },
    {
        "rowId": 4859,
        "timestamp": 1720606261697,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4860,
        "timestamp": 1720606261697,
        "payload": "UE 1a29: LCID 4: TX     5076443432 RX       12391385 bytes"
    },
    {
        "rowId": 4861,
        "timestamp": 1720606261697,
        "payload": "UE 1a29: ulsch_rounds 219238/1375/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00001 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.5 dB"
    },
    {
        "rowId": 4862,
        "timestamp": 1720606262977,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 4863,
        "timestamp": 1720606262977,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4864,
        "timestamp": 1720606262977,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4865,
        "timestamp": 1720606262977,
        "payload": "UE 1a29: MAC:    TX     5239184431 RX       46708746 bytes"
    },
    {
        "rowId": 4866,
        "timestamp": 1720606262977,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4867,
        "timestamp": 1720606262977,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4868,
        "timestamp": 1720606262977,
        "payload": "UE 1a29: LCID 4: TX     5077699428 RX       12394755 bytes"
    },
    {
        "rowId": 4869,
        "timestamp": 1720606262977,
        "payload": "UE 1a29: dlsch_rounds 1780368/173140/4040/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.09666 MCS (1) 8"
    },
    {
        "rowId": 4870,
        "timestamp": 1720606262977,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4871,
        "timestamp": 1720606262977,
        "payload": "UE 1a29: LCID 1: TX          13122 RX          94538 bytes"
    },
    {
        "rowId": 4872,
        "timestamp": 1720606262977,
        "payload": "UE 1a29: ulsch_rounds 219307/1375/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 4873,
        "timestamp": 1720606264257,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 4874,
        "timestamp": 1720606264257,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4875,
        "timestamp": 1720606264257,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4876,
        "timestamp": 1720606264257,
        "payload": "UE 1a29: ulsch_rounds 219374/1375/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 4877,
        "timestamp": 1720606264257,
        "payload": "UE 1a29: LCID 1: TX          13125 RX          94560 bytes"
    },
    {
        "rowId": 4878,
        "timestamp": 1720606264257,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4879,
        "timestamp": 1720606264257,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4880,
        "timestamp": 1720606264257,
        "payload": "UE 1a29: LCID 4: TX     5079036190 RX       12398185 bytes"
    },
    {
        "rowId": 4881,
        "timestamp": 1720606264257,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4882,
        "timestamp": 1720606264257,
        "payload": "UE 1a29: MAC:    TX     5240568340 RX       46722749 bytes"
    },
    {
        "rowId": 4883,
        "timestamp": 1720606264257,
        "payload": "UE 1a29: dlsch_rounds 1780858/173166/4040/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.06489 MCS (1) 8"
    },
    {
        "rowId": 4884,
        "timestamp": 1720606265537,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 4885,
        "timestamp": 1720606265537,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4886,
        "timestamp": 1720606265537,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 4887,
        "timestamp": 1720606265537,
        "payload": "UE 1a29: dlsch_rounds 1781376/173221/4040/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.07814 MCS (1) 8"
    },
    {
        "rowId": 4888,
        "timestamp": 1720606265537,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4889,
        "timestamp": 1720606265537,
        "payload": "UE 1a29: LCID 1: TX          13131 RX          94604 bytes"
    },
    {
        "rowId": 4890,
        "timestamp": 1720606265537,
        "payload": "UE 1a29: LCID 4: TX     5080555781 RX       12401655 bytes"
    },
    {
        "rowId": 4891,
        "timestamp": 1720606265537,
        "payload": "UE 1a29: MAC:    TX     5242136636 RX       46736543 bytes"
    },
    {
        "rowId": 4892,
        "timestamp": 1720606265537,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4893,
        "timestamp": 1720606265537,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4894,
        "timestamp": 1720606265537,
        "payload": "UE 1a29: ulsch_rounds 219440/1375/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 4895,
        "timestamp": 1720606266817,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 4896,
        "timestamp": 1720606266817,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4897,
        "timestamp": 1720606266817,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4898,
        "timestamp": 1720606266817,
        "payload": "UE 1a29: dlsch_rounds 1781926/173305/4040/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.15510 MCS (1) 7"
    },
    {
        "rowId": 4899,
        "timestamp": 1720606266817,
        "payload": "UE 1a29: MAC:    TX     5243901246 RX       46750530 bytes"
    },
    {
        "rowId": 4900,
        "timestamp": 1720606266817,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4901,
        "timestamp": 1720606266817,
        "payload": "UE 1a29: LCID 1: TX          13134 RX          94626 bytes"
    },
    {
        "rowId": 4902,
        "timestamp": 1720606266817,
        "payload": "UE 1a29: LCID 4: TX     5082268293 RX       12405390 bytes"
    },
    {
        "rowId": 4903,
        "timestamp": 1720606266817,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4904,
        "timestamp": 1720606266817,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4905,
        "timestamp": 1720606266817,
        "payload": "UE 1a29: ulsch_rounds 219507/1375/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 4906,
        "timestamp": 1720606268097,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 4907,
        "timestamp": 1720606268097,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4908,
        "timestamp": 1720606268097,
        "payload": "UE 1a29: dlsch_rounds 1782398/173308/4040/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.04213 MCS (1) 10"
    },
    {
        "rowId": 4909,
        "timestamp": 1720606268097,
        "payload": "UE 1a29: ulsch_rounds 219575/1375/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 4910,
        "timestamp": 1720606268097,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4911,
        "timestamp": 1720606268097,
        "payload": "UE 1a29: LCID 4: TX     5083565281 RX       12408677 bytes"
    },
    {
        "rowId": 4912,
        "timestamp": 1720606268097,
        "payload": "UE 1a29: LCID 1: TX          13137 RX          94648 bytes"
    },
    {
        "rowId": 4913,
        "timestamp": 1720606268097,
        "payload": "UE 1a29: MAC:    TX     5245239613 RX       46765173 bytes"
    },
    {
        "rowId": 4914,
        "timestamp": 1720606268097,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4915,
        "timestamp": 1720606268097,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4916,
        "timestamp": 1720606268097,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4917,
        "timestamp": 1720606269377,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4918,
        "timestamp": 1720606269377,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4919,
        "timestamp": 1720606269377,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4920,
        "timestamp": 1720606269377,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 4921,
        "timestamp": 1720606269377,
        "payload": "UE 1a29: MAC:    TX     5246605133 RX       46780022 bytes"
    },
    {
        "rowId": 4922,
        "timestamp": 1720606269377,
        "payload": "UE 1a29: ulsch_rounds 219642/1375/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 4923,
        "timestamp": 1720606269377,
        "payload": "UE 1a29: dlsch_rounds 1782861/173359/4040/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.09511 MCS (1) 10"
    },
    {
        "rowId": 4924,
        "timestamp": 1720606269377,
        "payload": "UE 1a29: LCID 1: TX          13140 RX          94670 bytes"
    },
    {
        "rowId": 4925,
        "timestamp": 1720606269377,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4926,
        "timestamp": 1720606269377,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4927,
        "timestamp": 1720606269377,
        "payload": "UE 1a29: LCID 4: TX     5084881863 RX       12412222 bytes"
    },
    {
        "rowId": 4928,
        "timestamp": 1720606270657,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4929,
        "timestamp": 1720606270657,
        "payload": "UE 1a29: ulsch_rounds 219711/1375/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 4930,
        "timestamp": 1720606270657,
        "payload": "UE 1a29: dlsch_rounds 1783371/173436/4040/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.13619 MCS (1) 9"
    },
    {
        "rowId": 4931,
        "timestamp": 1720606270657,
        "payload": "UE 1a29: MAC:    TX     5248187464 RX       46794810 bytes"
    },
    {
        "rowId": 4932,
        "timestamp": 1720606270657,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4933,
        "timestamp": 1720606270657,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 4934,
        "timestamp": 1720606270657,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4935,
        "timestamp": 1720606270657,
        "payload": "UE 1a29: LCID 1: TX          13146 RX          94714 bytes"
    },
    {
        "rowId": 4936,
        "timestamp": 1720606270657,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4937,
        "timestamp": 1720606270657,
        "payload": "UE 1a29: LCID 4: TX     5086409990 RX       12415674 bytes"
    },
    {
        "rowId": 4938,
        "timestamp": 1720606270657,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4939,
        "timestamp": 1720606271937,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 4940,
        "timestamp": 1720606271937,
        "payload": "UE 1a29: dlsch_rounds 1783925/173514/4040/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.11033 MCS (1) 6"
    },
    {
        "rowId": 4941,
        "timestamp": 1720606271937,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4942,
        "timestamp": 1720606271937,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4943,
        "timestamp": 1720606271937,
        "payload": "UE 1a29: ulsch_rounds 219787/1378/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.01630 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 4944,
        "timestamp": 1720606271937,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4945,
        "timestamp": 1720606271937,
        "payload": "UE 1a29: LCID 1: TX          13149 RX          94736 bytes"
    },
    {
        "rowId": 4946,
        "timestamp": 1720606271937,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4947,
        "timestamp": 1720606271937,
        "payload": "UE 1a29: MAC:    TX     5250013744 RX       46813137 bytes"
    },
    {
        "rowId": 4948,
        "timestamp": 1720606271937,
        "payload": "UE 1a29: LCID 4: TX     5088191767 RX       12422216 bytes"
    },
    {
        "rowId": 4949,
        "timestamp": 1720606271937,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4950,
        "timestamp": 1720606273217,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4951,
        "timestamp": 1720606273217,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4952,
        "timestamp": 1720606273217,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4953,
        "timestamp": 1720606273217,
        "payload": "UE 1a29: dlsch_rounds 1784402/173556/4040/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.10384 MCS (1) 9"
    },
    {
        "rowId": 4954,
        "timestamp": 1720606273217,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 4955,
        "timestamp": 1720606273217,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4956,
        "timestamp": 1720606273217,
        "payload": "UE 1a29: LCID 4: TX     5089432271 RX       12425653 bytes"
    },
    {
        "rowId": 4957,
        "timestamp": 1720606273217,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4958,
        "timestamp": 1720606273217,
        "payload": "UE 1a29: MAC:    TX     5251294914 RX       46827989 bytes"
    },
    {
        "rowId": 4959,
        "timestamp": 1720606273217,
        "payload": "UE 1a29: ulsch_rounds 219856/1378/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00460 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 4960,
        "timestamp": 1720606273217,
        "payload": "UE 1a29: LCID 1: TX          13152 RX          94758 bytes"
    },
    {
        "rowId": 4961,
        "timestamp": 1720606274497,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 4962,
        "timestamp": 1720606274497,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4963,
        "timestamp": 1720606274497,
        "payload": "UE 1a29: MAC:    TX     5252693768 RX       46841558 bytes"
    },
    {
        "rowId": 4964,
        "timestamp": 1720606274497,
        "payload": "UE 1a29: dlsch_rounds 1784874/173595/4040/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.06684 MCS (1) 6"
    },
    {
        "rowId": 4965,
        "timestamp": 1720606274497,
        "payload": "UE 1a29: ulsch_rounds 219921/1378/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00117 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 4966,
        "timestamp": 1720606274497,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4967,
        "timestamp": 1720606274497,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4968,
        "timestamp": 1720606274497,
        "payload": "UE 1a29: LCID 1: TX          13155 RX          94780 bytes"
    },
    {
        "rowId": 4969,
        "timestamp": 1720606274497,
        "payload": "UE 1a29: LCID 4: TX     5090794046 RX       12429148 bytes"
    },
    {
        "rowId": 4970,
        "timestamp": 1720606274497,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4971,
        "timestamp": 1720606274497,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4972,
        "timestamp": 1720606275777,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 4973,
        "timestamp": 1720606275777,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4974,
        "timestamp": 1720606275777,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4975,
        "timestamp": 1720606275777,
        "payload": "UE 1a29: dlsch_rounds 1785404/173664/4040/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.10685 MCS (1) 8"
    },
    {
        "rowId": 4976,
        "timestamp": 1720606275777,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4977,
        "timestamp": 1720606275777,
        "payload": "UE 1a29: LCID 1: TX          13161 RX          94824 bytes"
    },
    {
        "rowId": 4978,
        "timestamp": 1720606275777,
        "payload": "UE 1a29: MAC:    TX     5254338779 RX       46856619 bytes"
    },
    {
        "rowId": 4979,
        "timestamp": 1720606275777,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4980,
        "timestamp": 1720606275777,
        "payload": "UE 1a29: ulsch_rounds 219991/1378/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00030 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 4981,
        "timestamp": 1720606275777,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4982,
        "timestamp": 1720606275777,
        "payload": "UE 1a29: LCID 4: TX     5092393043 RX       12432770 bytes"
    },
    {
        "rowId": 4983,
        "timestamp": 1720606277057,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 4984,
        "timestamp": 1720606277057,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4985,
        "timestamp": 1720606277057,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4986,
        "timestamp": 1720606277057,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 4987,
        "timestamp": 1720606277057,
        "payload": "UE 1a29: MAC:    TX     5256129603 RX       46871468 bytes"
    },
    {
        "rowId": 4988,
        "timestamp": 1720606277057,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 4989,
        "timestamp": 1720606277057,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 4990,
        "timestamp": 1720606277057,
        "payload": "UE 1a29: LCID 4: TX     5094134778 RX       12436548 bytes"
    },
    {
        "rowId": 4991,
        "timestamp": 1720606277057,
        "payload": "UE 1a29: dlsch_rounds 1785969/173730/4040/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.10950 MCS (1) 8"
    },
    {
        "rowId": 4992,
        "timestamp": 1720606277057,
        "payload": "UE 1a29: ulsch_rounds 220058/1378/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00008 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 4993,
        "timestamp": 1720606277057,
        "payload": "UE 1a29: LCID 1: TX          13164 RX          94846 bytes"
    },
    {
        "rowId": 4994,
        "timestamp": 1720606278337,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 4995,
        "timestamp": 1720606278337,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 4996,
        "timestamp": 1720606278337,
        "payload": "UE 1a29: ulsch_rounds 220124/1378/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00002 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 4997,
        "timestamp": 1720606278337,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 4998,
        "timestamp": 1720606278337,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 4999,
        "timestamp": 1720606278337,
        "payload": "UE 1a29: dlsch_rounds 1786451/173780/4040/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.09297 MCS (1) 6"
    },
    {
        "rowId": 5000,
        "timestamp": 1720606278337,
        "payload": "UE 1a29: MAC:    TX     5257440362 RX       46885230 bytes"
    },
    {
        "rowId": 5001,
        "timestamp": 1720606278337,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5002,
        "timestamp": 1720606278337,
        "payload": "UE 1a29: LCID 1: TX          13167 RX          94868 bytes"
    },
    {
        "rowId": 5003,
        "timestamp": 1720606278337,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5004,
        "timestamp": 1720606278337,
        "payload": "UE 1a29: LCID 4: TX     5095403429 RX       12439792 bytes"
    },
    {
        "rowId": 5005,
        "timestamp": 1720606279617,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 5006,
        "timestamp": 1720606279617,
        "payload": "UE 1a29: ulsch_rounds 220189/1378/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00001 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 5007,
        "timestamp": 1720606279617,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5008,
        "timestamp": 1720606279617,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5009,
        "timestamp": 1720606279617,
        "payload": "UE 1a29: LCID 4: TX     5096808436 RX       12443293 bytes"
    },
    {
        "rowId": 5010,
        "timestamp": 1720606279617,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5011,
        "timestamp": 1720606279617,
        "payload": "UE 1a29: dlsch_rounds 1786938/173837/4040/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.13523 MCS (1) 6"
    },
    {
        "rowId": 5012,
        "timestamp": 1720606279617,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5013,
        "timestamp": 1720606279617,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5014,
        "timestamp": 1720606279617,
        "payload": "UE 1a29: MAC:    TX     5258885514 RX       46898799 bytes"
    },
    {
        "rowId": 5015,
        "timestamp": 1720606279617,
        "payload": "UE 1a29: LCID 1: TX          13170 RX          94890 bytes"
    },
    {
        "rowId": 5016,
        "timestamp": 1720606280897,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5017,
        "timestamp": 1720606280897,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 5018,
        "timestamp": 1720606280897,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5019,
        "timestamp": 1720606280897,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5020,
        "timestamp": 1720606280897,
        "payload": "UE 1a29: ulsch_rounds 220254/1378/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 5021,
        "timestamp": 1720606280897,
        "payload": "UE 1a29: dlsch_rounds 1787513/173884/4041/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.11707 MCS (1) 6"
    },
    {
        "rowId": 5022,
        "timestamp": 1720606280897,
        "payload": "UE 1a29: MAC:    TX     5260594281 RX       46912384 bytes"
    },
    {
        "rowId": 5023,
        "timestamp": 1720606280897,
        "payload": "UE 1a29: LCID 4: TX     5098475190 RX       12446853 bytes"
    },
    {
        "rowId": 5024,
        "timestamp": 1720606280897,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5025,
        "timestamp": 1720606280897,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5026,
        "timestamp": 1720606280897,
        "payload": "UE 1a29: LCID 1: TX          13176 RX          94934 bytes"
    },
    {
        "rowId": 5027,
        "timestamp": 1720606282177,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 5028,
        "timestamp": 1720606282177,
        "payload": "UE 1a29: ulsch_rounds 220320/1378/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 5029,
        "timestamp": 1720606282177,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 5030,
        "timestamp": 1720606282177,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5031,
        "timestamp": 1720606282177,
        "payload": "UE 1a29: dlsch_rounds 1788010/174060/4057/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.29230 MCS (1) 6"
    },
    {
        "rowId": 5032,
        "timestamp": 1720606282177,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5033,
        "timestamp": 1720606282177,
        "payload": "UE 1a29: MAC:    TX     5262194181 RX       46926545 bytes"
    },
    {
        "rowId": 5034,
        "timestamp": 1720606282177,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5035,
        "timestamp": 1720606282177,
        "payload": "UE 1a29: LCID 4: TX     5100037106 RX       12450650 bytes"
    },
    {
        "rowId": 5036,
        "timestamp": 1720606282177,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5037,
        "timestamp": 1720606282177,
        "payload": "UE 1a29: LCID 1: TX          13179 RX          94956 bytes"
    },
    {
        "rowId": 5038,
        "timestamp": 1720606283457,
        "payload": "UE 1a29: dlsch_rounds 1788480/174290/4061/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.45117 MCS (1) 6"
    },
    {
        "rowId": 5039,
        "timestamp": 1720606283457,
        "payload": "UE 1a29: ulsch_rounds 220381/1378/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 5040,
        "timestamp": 1720606283457,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5041,
        "timestamp": 1720606283457,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5042,
        "timestamp": 1720606283457,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 5043,
        "timestamp": 1720606283457,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5044,
        "timestamp": 1720606283457,
        "payload": "UE 1a29: MAC:    TX     5263515612 RX       46939246 bytes"
    },
    {
        "rowId": 5045,
        "timestamp": 1720606283457,
        "payload": "UE 1a29: LCID 1: TX          13182 RX          94978 bytes"
    },
    {
        "rowId": 5046,
        "timestamp": 1720606283457,
        "payload": "UE 1a29: LCID 4: TX     5101323648 RX       12454178 bytes"
    },
    {
        "rowId": 5047,
        "timestamp": 1720606283457,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5048,
        "timestamp": 1720606283457,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5049,
        "timestamp": 1720606284737,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 5050,
        "timestamp": 1720606284737,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5051,
        "timestamp": 1720606284737,
        "payload": "UE 1a29: ulsch_rounds 220446/1380/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.02651 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 5052,
        "timestamp": 1720606284737,
        "payload": "UE 1a29: LCID 1: TX          13185 RX          95000 bytes"
    },
    {
        "rowId": 5053,
        "timestamp": 1720606284737,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5054,
        "timestamp": 1720606284737,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5055,
        "timestamp": 1720606284737,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5056,
        "timestamp": 1720606284737,
        "payload": "UE 1a29: dlsch_rounds 1788998/174351/4061/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.20447 MCS (1) 6"
    },
    {
        "rowId": 5057,
        "timestamp": 1720606284737,
        "payload": "UE 1a29: MAC:    TX     5264999257 RX       46953613 bytes"
    },
    {
        "rowId": 5058,
        "timestamp": 1720606284737,
        "payload": "UE 1a29: LCID 4: TX     5102766456 RX       12457698 bytes"
    },
    {
        "rowId": 5059,
        "timestamp": 1720606284737,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5060,
        "timestamp": 1720606286017,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5061,
        "timestamp": 1720606286017,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 5062,
        "timestamp": 1720606286017,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5063,
        "timestamp": 1720606286017,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5064,
        "timestamp": 1720606286017,
        "payload": "UE 1a29: dlsch_rounds 1789567/174433/4065/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.16067 MCS (1) 6"
    },
    {
        "rowId": 5065,
        "timestamp": 1720606286017,
        "payload": "UE 1a29: MAC:    TX     5266784506 RX       46966105 bytes"
    },
    {
        "rowId": 5066,
        "timestamp": 1720606286017,
        "payload": "UE 1a29: ulsch_rounds 220506/1380/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00674 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 5067,
        "timestamp": 1720606286017,
        "payload": "UE 1a29: LCID 1: TX          13191 RX          95044 bytes"
    },
    {
        "rowId": 5068,
        "timestamp": 1720606286017,
        "payload": "UE 1a29: LCID 4: TX     5104510256 RX       12461209 bytes"
    },
    {
        "rowId": 5069,
        "timestamp": 1720606286017,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5070,
        "timestamp": 1720606286017,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5071,
        "timestamp": 1720606287297,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 5072,
        "timestamp": 1720606287297,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 5073,
        "timestamp": 1720606287297,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5074,
        "timestamp": 1720606287297,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5075,
        "timestamp": 1720606287297,
        "payload": "UE 1a29: MAC:    TX     5268239988 RX       46978851 bytes"
    },
    {
        "rowId": 5076,
        "timestamp": 1720606287297,
        "payload": "UE 1a29: dlsch_rounds 1790067/174563/4073/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.24578 MCS (1) 6"
    },
    {
        "rowId": 5077,
        "timestamp": 1720606287297,
        "payload": "UE 1a29: LCID 1: TX          13194 RX          95066 bytes"
    },
    {
        "rowId": 5078,
        "timestamp": 1720606287297,
        "payload": "UE 1a29: LCID 4: TX     5105926764 RX       12464713 bytes"
    },
    {
        "rowId": 5079,
        "timestamp": 1720606287297,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5080,
        "timestamp": 1720606287297,
        "payload": "UE 1a29: ulsch_rounds 220565/1380/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00171 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 5081,
        "timestamp": 1720606287297,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5082,
        "timestamp": 1720606288577,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 5083,
        "timestamp": 1720606288577,
        "payload": "UE 1a29: ulsch_rounds 220627/1380/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00048 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 5084,
        "timestamp": 1720606288577,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5085,
        "timestamp": 1720606288577,
        "payload": "UE 1a29: dlsch_rounds 1790529/174622/4073/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.17362 MCS (1) 6"
    },
    {
        "rowId": 5086,
        "timestamp": 1720606288577,
        "payload": "UE 1a29: LCID 4: TX     5107225155 RX       12468211 bytes"
    },
    {
        "rowId": 5087,
        "timestamp": 1720606288577,
        "payload": "UE 1a29: LCID 1: TX          13197 RX          95088 bytes"
    },
    {
        "rowId": 5088,
        "timestamp": 1720606288577,
        "payload": "UE 1a29: MAC:    TX     5269574760 RX       46992192 bytes"
    },
    {
        "rowId": 5089,
        "timestamp": 1720606288577,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5090,
        "timestamp": 1720606288577,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 5091,
        "timestamp": 1720606288577,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5092,
        "timestamp": 1720606288577,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5093,
        "timestamp": 1720606289857,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5094,
        "timestamp": 1720606289857,
        "payload": "UE 1a29: LCID 1: TX          13200 RX          95110 bytes"
    },
    {
        "rowId": 5095,
        "timestamp": 1720606289857,
        "payload": "UE 1a29: LCID 4: TX     5108676890 RX       12471729 bytes"
    },
    {
        "rowId": 5096,
        "timestamp": 1720606289857,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5097,
        "timestamp": 1720606289857,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5098,
        "timestamp": 1720606289857,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5099,
        "timestamp": 1720606289857,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5100,
        "timestamp": 1720606289857,
        "payload": "UE 1a29: MAC:    TX     5271068532 RX       47004459 bytes"
    },
    {
        "rowId": 5101,
        "timestamp": 1720606289857,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 5102,
        "timestamp": 1720606289857,
        "payload": "UE 1a29: ulsch_rounds 220686/1380/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00012 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 5103,
        "timestamp": 1720606289857,
        "payload": "UE 1a29: dlsch_rounds 1791053/174622/4073/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.04413 MCS (1) 8"
    },
    {
        "rowId": 5104,
        "timestamp": 1720606291137,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 5105,
        "timestamp": 1720606291137,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 5106,
        "timestamp": 1720606291137,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5107,
        "timestamp": 1720606291137,
        "payload": "UE 1a29: ulsch_rounds 220746/1380/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00003 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 5108,
        "timestamp": 1720606291137,
        "payload": "UE 1a29: dlsch_rounds 1791612/174683/4073/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.08780 MCS (1) 8"
    },
    {
        "rowId": 5109,
        "timestamp": 1720606291137,
        "payload": "UE 1a29: MAC:    TX     5272870231 RX       47017366 bytes"
    },
    {
        "rowId": 5110,
        "timestamp": 1720606291137,
        "payload": "UE 1a29: LCID 1: TX          13206 RX          95154 bytes"
    },
    {
        "rowId": 5111,
        "timestamp": 1720606291137,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5112,
        "timestamp": 1720606291137,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5113,
        "timestamp": 1720606291137,
        "payload": "UE 1a29: LCID 4: TX     5110427749 RX       12475342 bytes"
    },
    {
        "rowId": 5114,
        "timestamp": 1720606291137,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5115,
        "timestamp": 1720606292417,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5116,
        "timestamp": 1720606292417,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 5117,
        "timestamp": 1720606292417,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5118,
        "timestamp": 1720606292417,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5119,
        "timestamp": 1720606292417,
        "payload": "UE 1a29: dlsch_rounds 1792080/174757/4073/345, dlsch_errors 76, pucch0_DTX 1265, BLER 0.16628 MCS (1) 7"
    },
    {
        "rowId": 5120,
        "timestamp": 1720606292417,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5121,
        "timestamp": 1720606292417,
        "payload": "UE 1a29: ulsch_rounds 220800/1380/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00001 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 5122,
        "timestamp": 1720606292417,
        "payload": "UE 1a29: MAC:    TX     5274210195 RX       47028588 bytes"
    },
    {
        "rowId": 5123,
        "timestamp": 1720606292417,
        "payload": "UE 1a29: LCID 4: TX     5111723919 RX       12478628 bytes"
    },
    {
        "rowId": 5124,
        "timestamp": 1720606292417,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5125,
        "timestamp": 1720606292417,
        "payload": "UE 1a29: LCID 1: TX          13209 RX          95176 bytes"
    },
    {
        "rowId": 5126,
        "timestamp": 1720606293697,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLUULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 5127,
        "timestamp": 1720606293697,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 5128,
        "timestamp": 1720606293697,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5129,
        "timestamp": 1720606293697,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5130,
        "timestamp": 1720606293697,
        "payload": "UE 1a29: LCID 1: TX          13212 RX          95198 bytes"
    },
    {
        "rowId": 5131,
        "timestamp": 1720606293697,
        "payload": "UE 1a29: dlsch_rounds 1792573/174812/4074/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.15287 MCS (1) 6"
    },
    {
        "rowId": 5132,
        "timestamp": 1720606293697,
        "payload": "UE 1a29: MAC:    TX     5275643714 RX       47042540 bytes"
    },
    {
        "rowId": 5133,
        "timestamp": 1720606293697,
        "payload": "UE 1a29: ulsch_rounds 220865/1380/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 5134,
        "timestamp": 1720606293697,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5135,
        "timestamp": 1720606293697,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5136,
        "timestamp": 1720606293697,
        "payload": "UE 1a29: LCID 4: TX     5113119973 RX       12482035 bytes"
    },
    {
        "rowId": 5137,
        "timestamp": 1720606294977,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 5138,
        "timestamp": 1720606294977,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 5139,
        "timestamp": 1720606294977,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5140,
        "timestamp": 1720606294977,
        "payload": "UE 1a29: ulsch_rounds 220920/1381/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00957 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 5141,
        "timestamp": 1720606294977,
        "payload": "UE 1a29: dlsch_rounds 1793091/174836/4074/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.08676 MCS (1) 6"
    },
    {
        "rowId": 5142,
        "timestamp": 1720606294977,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5143,
        "timestamp": 1720606294977,
        "payload": "UE 1a29: LCID 1: TX          13215 RX          95220 bytes"
    },
    {
        "rowId": 5144,
        "timestamp": 1720606294977,
        "payload": "UE 1a29: MAC:    TX     5277194359 RX       47054402 bytes"
    },
    {
        "rowId": 5145,
        "timestamp": 1720606294977,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5146,
        "timestamp": 1720606294977,
        "payload": "UE 1a29: LCID 4: TX     5114629014 RX       12485702 bytes"
    },
    {
        "rowId": 5147,
        "timestamp": 1720606294977,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5148,
        "timestamp": 1720606296257,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 5149,
        "timestamp": 1720606296257,
        "payload": "UE 1a29: ulsch_rounds 220978/1381/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00243 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 5150,
        "timestamp": 1720606296257,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5151,
        "timestamp": 1720606296257,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5152,
        "timestamp": 1720606296257,
        "payload": "UE 1a29: CQI 11, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5153,
        "timestamp": 1720606296257,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5154,
        "timestamp": 1720606296257,
        "payload": "UE 1a29: dlsch_rounds 1793665/174886/4076/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.07883 MCS (1) 6"
    },
    {
        "rowId": 5155,
        "timestamp": 1720606296257,
        "payload": "UE 1a29: LCID 4: TX     5116359419 RX       12489295 bytes"
    },
    {
        "rowId": 5156,
        "timestamp": 1720606296257,
        "payload": "UE 1a29: MAC:    TX     5278965839 RX       47066476 bytes"
    },
    {
        "rowId": 5157,
        "timestamp": 1720606296257,
        "payload": "UE 1a29: LCID 1: TX          13221 RX          95264 bytes"
    },
    {
        "rowId": 5158,
        "timestamp": 1720606296257,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5159,
        "timestamp": 1720606297537,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 5160,
        "timestamp": 1720606297537,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5161,
        "timestamp": 1720606297537,
        "payload": "UE 1a29: ulsch_rounds 221033/1382/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00069 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 5162,
        "timestamp": 1720606297537,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5163,
        "timestamp": 1720606297537,
        "payload": "UE 1a29: dlsch_rounds 1794141/174964/4078/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.14465 MCS (1) 6"
    },
    {
        "rowId": 5164,
        "timestamp": 1720606297537,
        "payload": "UE 1a29: LCID 1: TX          13224 RX          95286 bytes"
    },
    {
        "rowId": 5165,
        "timestamp": 1720606297537,
        "payload": "UE 1a29: LCID 4: TX     5117682448 RX       12492679 bytes"
    },
    {
        "rowId": 5166,
        "timestamp": 1720606297537,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5167,
        "timestamp": 1720606297537,
        "payload": "UE 1a29: MAC:    TX     5280325670 RX       47078753 bytes"
    },
    {
        "rowId": 5168,
        "timestamp": 1720606297537,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5169,
        "timestamp": 1720606297537,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5170,
        "timestamp": 1720606298817,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 5171,
        "timestamp": 1720606298817,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5172,
        "timestamp": 1720606298817,
        "payload": "UE 1a29: ulsch_rounds 221087/1383/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.01124 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.5 dB"
    },
    {
        "rowId": 5173,
        "timestamp": 1720606298817,
        "payload": "UE 1a29: dlsch_rounds 1794629/175007/4078/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.10301 MCS (1) 6"
    },
    {
        "rowId": 5174,
        "timestamp": 1720606298817,
        "payload": "UE 1a29: MAC:    TX     5281713749 RX       47090422 bytes"
    },
    {
        "rowId": 5175,
        "timestamp": 1720606298817,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5176,
        "timestamp": 1720606298817,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5177,
        "timestamp": 1720606298817,
        "payload": "UE 1a29: LCID 1: TX          13227 RX          95308 bytes"
    },
    {
        "rowId": 5178,
        "timestamp": 1720606298817,
        "payload": "UE 1a29: LCID 4: TX     5119033092 RX       12495888 bytes"
    },
    {
        "rowId": 5179,
        "timestamp": 1720606298817,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5180,
        "timestamp": 1720606298817,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5181,
        "timestamp": 1720606300097,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 5182,
        "timestamp": 1720606300097,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 5183,
        "timestamp": 1720606300097,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5184,
        "timestamp": 1720606300097,
        "payload": "UE 1a29: dlsch_rounds 1795154/175039/4078/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.08719 MCS (1) 7"
    },
    {
        "rowId": 5185,
        "timestamp": 1720606300097,
        "payload": "UE 1a29: ulsch_rounds 221143/1383/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00286 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 5186,
        "timestamp": 1720606300097,
        "payload": "UE 1a29: MAC:    TX     5283310265 RX       47102078 bytes"
    },
    {
        "rowId": 5187,
        "timestamp": 1720606300097,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5188,
        "timestamp": 1720606300097,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5189,
        "timestamp": 1720606300097,
        "payload": "UE 1a29: LCID 4: TX     5120589338 RX       12499587 bytes"
    },
    {
        "rowId": 5190,
        "timestamp": 1720606300097,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5191,
        "timestamp": 1720606300097,
        "payload": "UE 1a29: LCID 1: TX          13230 RX          95330 bytes"
    },
    {
        "rowId": 5192,
        "timestamp": 1720606301377,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 5193,
        "timestamp": 1720606301377,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 5194,
        "timestamp": 1720606301377,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5195,
        "timestamp": 1720606301377,
        "payload": "UE 1a29: ulsch_rounds 221198/1383/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00081 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 5196,
        "timestamp": 1720606301377,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5197,
        "timestamp": 1720606301377,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5198,
        "timestamp": 1720606301377,
        "payload": "UE 1a29: LCID 4: TX     5122353093 RX       12503286 bytes"
    },
    {
        "rowId": 5199,
        "timestamp": 1720606301377,
        "payload": "UE 1a29: dlsch_rounds 1795742/175103/4080/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.09269 MCS (1) 7"
    },
    {
        "rowId": 5200,
        "timestamp": 1720606301377,
        "payload": "UE 1a29: MAC:    TX     5285121579 RX       47113493 bytes"
    },
    {
        "rowId": 5201,
        "timestamp": 1720606301377,
        "payload": "UE 1a29: LCID 1: TX          13236 RX          95374 bytes"
    },
    {
        "rowId": 5202,
        "timestamp": 1720606301377,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5203,
        "timestamp": 1720606302657,
        "payload": "UE 1a29: ulsch_rounds 221261/1383/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00023 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 5204,
        "timestamp": 1720606302657,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 5205,
        "timestamp": 1720606302657,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 5206,
        "timestamp": 1720606302657,
        "payload": "UE 1a29: LCID 1: TX          13239 RX          95396 bytes"
    },
    {
        "rowId": 5207,
        "timestamp": 1720606302657,
        "payload": "UE 1a29: MAC:    TX     5286436149 RX       47126596 bytes"
    },
    {
        "rowId": 5208,
        "timestamp": 1720606302657,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5209,
        "timestamp": 1720606302657,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5210,
        "timestamp": 1720606302657,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5211,
        "timestamp": 1720606302657,
        "payload": "UE 1a29: LCID 4: TX     5123627701 RX       12506570 bytes"
    },
    {
        "rowId": 5212,
        "timestamp": 1720606302657,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5213,
        "timestamp": 1720606302657,
        "payload": "UE 1a29: dlsch_rounds 1796217/175194/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.15102 MCS (1) 6"
    },
    {
        "rowId": 5214,
        "timestamp": 1720606303937,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 5215,
        "timestamp": 1720606303937,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5216,
        "timestamp": 1720606303937,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5217,
        "timestamp": 1720606303937,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5218,
        "timestamp": 1720606303937,
        "payload": "UE 1a29: MAC:    TX     5287786871 RX       47139088 bytes"
    },
    {
        "rowId": 5219,
        "timestamp": 1720606303937,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5220,
        "timestamp": 1720606303937,
        "payload": "UE 1a29: LCID 4: TX     5124940638 RX       12509860 bytes"
    },
    {
        "rowId": 5221,
        "timestamp": 1720606303937,
        "payload": "UE 1a29: ulsch_rounds 221321/1383/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00006 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 5222,
        "timestamp": 1720606303937,
        "payload": "UE 1a29: dlsch_rounds 1796711/175226/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.08046 MCS (1) 6"
    },
    {
        "rowId": 5223,
        "timestamp": 1720606303937,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 5224,
        "timestamp": 1720606303937,
        "payload": "UE 1a29: LCID 1: TX          13242 RX          95418 bytes"
    },
    {
        "rowId": 5225,
        "timestamp": 1720606305217,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 5226,
        "timestamp": 1720606305217,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5227,
        "timestamp": 1720606305217,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 5228,
        "timestamp": 1720606305217,
        "payload": "UE 1a29: ulsch_rounds 221378/1383/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00002 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 5229,
        "timestamp": 1720606305217,
        "payload": "UE 1a29: LCID 4: TX     5126548300 RX       12513561 bytes"
    },
    {
        "rowId": 5230,
        "timestamp": 1720606305217,
        "payload": "UE 1a29: LCID 1: TX          13245 RX          95440 bytes"
    },
    {
        "rowId": 5231,
        "timestamp": 1720606305217,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5232,
        "timestamp": 1720606305217,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5233,
        "timestamp": 1720606305217,
        "payload": "UE 1a29: MAC:    TX     5289443046 RX       47150921 bytes"
    },
    {
        "rowId": 5234,
        "timestamp": 1720606305217,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5235,
        "timestamp": 1720606305217,
        "payload": "UE 1a29: dlsch_rounds 1797264/175325/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.21160 MCS (1) 7"
    },
    {
        "rowId": 5236,
        "timestamp": 1720606306497,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 5237,
        "timestamp": 1720606306497,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5238,
        "timestamp": 1720606306497,
        "payload": "UE 1a29: ulsch_rounds 221438/1384/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.01063 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 5239,
        "timestamp": 1720606306497,
        "payload": "UE 1a29: LCID 4: TX     5128318057 RX       12517495 bytes"
    },
    {
        "rowId": 5240,
        "timestamp": 1720606306497,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5241,
        "timestamp": 1720606306497,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 5242,
        "timestamp": 1720606306497,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5243,
        "timestamp": 1720606306497,
        "payload": "UE 1a29: MAC:    TX     5291254930 RX       47163796 bytes"
    },
    {
        "rowId": 5244,
        "timestamp": 1720606306497,
        "payload": "UE 1a29: LCID 1: TX          13251 RX          95484 bytes"
    },
    {
        "rowId": 5245,
        "timestamp": 1720606306497,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5246,
        "timestamp": 1720606306497,
        "payload": "UE 1a29: dlsch_rounds 1797840/175325/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.05379 MCS (1) 6"
    },
    {
        "rowId": 5247,
        "timestamp": 1720606307777,
        "payload": "ULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 5248,
        "timestamp": 1720606307777,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5249,
        "timestamp": 1720606307777,
        "payload": "UE 1a29: dlsch_rounds 1798299/175354/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.05628 MCS (1) 7"
    },
    {
        "rowId": 5250,
        "timestamp": 1720606307777,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 5251,
        "timestamp": 1720606307777,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5252,
        "timestamp": 1720606307777,
        "payload": "UE 1a29: ulsch_rounds 221493/1384/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00270 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 5253,
        "timestamp": 1720606307777,
        "payload": "UE 1a29: LCID 4: TX     5129546636 RX       12520831 bytes"
    },
    {
        "rowId": 5254,
        "timestamp": 1720606307777,
        "payload": "UE 1a29: MAC:    TX     5292521778 RX       47175227 bytes"
    },
    {
        "rowId": 5255,
        "timestamp": 1720606307777,
        "payload": "UE 1a29: LCID 1: TX          13254 RX          95506 bytes"
    },
    {
        "rowId": 5256,
        "timestamp": 1720606307777,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5257,
        "timestamp": 1720606307777,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5258,
        "timestamp": 1720606309057,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 5259,
        "timestamp": 1720606309057,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 5260,
        "timestamp": 1720606309057,
        "payload": "UE 1a29: dlsch_rounds 1798781/175429/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.10712 MCS (1) 6"
    },
    {
        "rowId": 5261,
        "timestamp": 1720606309057,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5262,
        "timestamp": 1720606309057,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5263,
        "timestamp": 1720606309057,
        "payload": "UE 1a29: ulsch_rounds 221551/1384/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00076 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 5264,
        "timestamp": 1720606309057,
        "payload": "UE 1a29: MAC:    TX     5293907566 RX       47187269 bytes"
    },
    {
        "rowId": 5265,
        "timestamp": 1720606309057,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5266,
        "timestamp": 1720606309057,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5267,
        "timestamp": 1720606309057,
        "payload": "UE 1a29: LCID 1: TX          13257 RX          95528 bytes"
    },
    {
        "rowId": 5268,
        "timestamp": 1720606309057,
        "payload": "UE 1a29: LCID 4: TX     5130891874 RX       12524011 bytes"
    },
    {
        "rowId": 5269,
        "timestamp": 1720606310337,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5270,
        "timestamp": 1720606310337,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5271,
        "timestamp": 1720606310337,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 5272,
        "timestamp": 1720606310337,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5273,
        "timestamp": 1720606310337,
        "payload": "UE 1a29: LCID 1: TX          13260 RX          95572 bytes"
    },
    {
        "rowId": 5274,
        "timestamp": 1720606310337,
        "payload": "UE 1a29: LCID 4: TX     5132499781 RX       12527608 bytes"
    },
    {
        "rowId": 5275,
        "timestamp": 1720606310337,
        "payload": "UE 1a29: ulsch_rounds 221604/1384/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00022 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 5276,
        "timestamp": 1720606310337,
        "payload": "UE 1a29: MAC:    TX     5295559411 RX       47198266 bytes"
    },
    {
        "rowId": 5277,
        "timestamp": 1720606310337,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 5278,
        "timestamp": 1720606310337,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5279,
        "timestamp": 1720606310337,
        "payload": "UE 1a29: dlsch_rounds 1799326/175457/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.04782 MCS (1) 10"
    },
    {
        "rowId": 5280,
        "timestamp": 1720606311617,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 5281,
        "timestamp": 1720606311617,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5282,
        "timestamp": 1720606311617,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5283,
        "timestamp": 1720606311617,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 5284,
        "timestamp": 1720606311617,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5285,
        "timestamp": 1720606311617,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5286,
        "timestamp": 1720606311617,
        "payload": "UE 1a29: ulsch_rounds 221656/1384/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00005 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 5287,
        "timestamp": 1720606311617,
        "payload": "UE 1a29: MAC:    TX     5297266216 RX       47209054 bytes"
    },
    {
        "rowId": 5288,
        "timestamp": 1720606311617,
        "payload": "UE 1a29: LCID 1: TX          13266 RX          95594 bytes"
    },
    {
        "rowId": 5289,
        "timestamp": 1720606311617,
        "payload": "UE 1a29: LCID 4: TX     5134161398 RX       12531341 bytes"
    },
    {
        "rowId": 5290,
        "timestamp": 1720606311617,
        "payload": "UE 1a29: dlsch_rounds 1799873/175543/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.09141 MCS (1) 6"
    },
    {
        "rowId": 5291,
        "timestamp": 1720606312897,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 5292,
        "timestamp": 1720606312897,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5293,
        "timestamp": 1720606312897,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 5294,
        "timestamp": 1720606312897,
        "payload": "UE 1a29: ulsch_rounds 221711/1386/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.02325 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 5295,
        "timestamp": 1720606312897,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5296,
        "timestamp": 1720606312897,
        "payload": "UE 1a29: MAC:    TX     5298606978 RX       47221762 bytes"
    },
    {
        "rowId": 5297,
        "timestamp": 1720606312897,
        "payload": "UE 1a29: LCID 1: TX          13269 RX          95616 bytes"
    },
    {
        "rowId": 5298,
        "timestamp": 1720606312897,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5299,
        "timestamp": 1720606312897,
        "payload": "UE 1a29: dlsch_rounds 1800366/175566/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.05517 MCS (1) 6"
    },
    {
        "rowId": 5300,
        "timestamp": 1720606312897,
        "payload": "UE 1a29: LCID 4: TX     5135462114 RX       12534901 bytes"
    },
    {
        "rowId": 5301,
        "timestamp": 1720606312897,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5302,
        "timestamp": 1720606314177,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 5303,
        "timestamp": 1720606314177,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 5304,
        "timestamp": 1720606314177,
        "payload": "UE 1a29: ulsch_rounds 221762/1386/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00657 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 5305,
        "timestamp": 1720606314177,
        "payload": "UE 1a29: dlsch_rounds 1800866/175612/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.06103 MCS (1) 10"
    },
    {
        "rowId": 5306,
        "timestamp": 1720606314177,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5307,
        "timestamp": 1720606314177,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5308,
        "timestamp": 1720606314177,
        "payload": "UE 1a29: MAC:    TX     5300044570 RX       47232357 bytes"
    },
    {
        "rowId": 5309,
        "timestamp": 1720606314177,
        "payload": "UE 1a29: LCID 4: TX     5136846897 RX       12538094 bytes"
    },
    {
        "rowId": 5310,
        "timestamp": 1720606314177,
        "payload": "UE 1a29: LCID 1: TX          13272 RX          95638 bytes"
    },
    {
        "rowId": 5311,
        "timestamp": 1720606314177,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5312,
        "timestamp": 1720606314177,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5313,
        "timestamp": 1720606315457,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 5314,
        "timestamp": 1720606315457,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 48 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 5315,
        "timestamp": 1720606315457,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5316,
        "timestamp": 1720606315457,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5317,
        "timestamp": 1720606315457,
        "payload": "UE 1a29: dlsch_rounds 1801428/175679/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.09239 MCS (1) 7"
    },
    {
        "rowId": 5318,
        "timestamp": 1720606315457,
        "payload": "UE 1a29: ulsch_rounds 221819/1386/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00185 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.5 dB"
    },
    {
        "rowId": 5319,
        "timestamp": 1720606315457,
        "payload": "UE 1a29: MAC:    TX     5301779319 RX       47244190 bytes"
    },
    {
        "rowId": 5320,
        "timestamp": 1720606315457,
        "payload": "UE 1a29: LCID 4: TX     5138528855 RX       12541762 bytes"
    },
    {
        "rowId": 5321,
        "timestamp": 1720606315457,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5322,
        "timestamp": 1720606315457,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5323,
        "timestamp": 1720606315457,
        "payload": "UE 1a29: LCID 1: TX          13278 RX          95682 bytes"
    },
    {
        "rowId": 5324,
        "timestamp": 1720606316737,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 5325,
        "timestamp": 1720606316737,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 5326,
        "timestamp": 1720606316737,
        "payload": "UE 1a29: dlsch_rounds 1801971/175775/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.21861 MCS (1) 8"
    },
    {
        "rowId": 5327,
        "timestamp": 1720606316737,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5328,
        "timestamp": 1720606316737,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5329,
        "timestamp": 1720606316737,
        "payload": "UE 1a29: LCID 1: TX          13281 RX          95704 bytes"
    },
    {
        "rowId": 5330,
        "timestamp": 1720606316737,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5331,
        "timestamp": 1720606316737,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5332,
        "timestamp": 1720606316737,
        "payload": "UE 1a29: LCID 4: TX     5140071952 RX       12545330 bytes"
    },
    {
        "rowId": 5333,
        "timestamp": 1720606316737,
        "payload": "UE 1a29: MAC:    TX     5303371113 RX       47255380 bytes"
    },
    {
        "rowId": 5334,
        "timestamp": 1720606316737,
        "payload": "UE 1a29: ulsch_rounds 221873/1386/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00047 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 5335,
        "timestamp": 1720606318017,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5336,
        "timestamp": 1720606318017,
        "payload": "UE 1a29: ulsch_rounds 221924/1387/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00711 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 5337,
        "timestamp": 1720606318017,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 5338,
        "timestamp": 1720606318017,
        "payload": "UE 1a29: dlsch_rounds 1802447/175776/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.06138 MCS (1) 6"
    },
    {
        "rowId": 5339,
        "timestamp": 1720606318017,
        "payload": "UE 1a29: LCID 1: TX          13284 RX          95726 bytes"
    },
    {
        "rowId": 5340,
        "timestamp": 1720606318017,
        "payload": "UE 1a29: LCID 4: TX     5141370730 RX       12548801 bytes"
    },
    {
        "rowId": 5341,
        "timestamp": 1720606318017,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5342,
        "timestamp": 1720606318017,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5343,
        "timestamp": 1720606318017,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 5344,
        "timestamp": 1720606318017,
        "payload": "UE 1a29: MAC:    TX     5304708564 RX       47266390 bytes"
    },
    {
        "rowId": 5345,
        "timestamp": 1720606318017,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5346,
        "timestamp": 1720606319297,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 5347,
        "timestamp": 1720606319297,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5348,
        "timestamp": 1720606319297,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5349,
        "timestamp": 1720606319297,
        "payload": "UE 1a29: ulsch_rounds 221985/1392/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.05472 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.0 dB"
    },
    {
        "rowId": 5350,
        "timestamp": 1720606319297,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 48 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 5351,
        "timestamp": 1720606319297,
        "payload": "UE 1a29: MAC:    TX     5306191601 RX       47281278 bytes"
    },
    {
        "rowId": 5352,
        "timestamp": 1720606319297,
        "payload": "UE 1a29: LCID 1: TX          13287 RX          95748 bytes"
    },
    {
        "rowId": 5353,
        "timestamp": 1720606319297,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5354,
        "timestamp": 1720606319297,
        "payload": "UE 1a29: dlsch_rounds 1802943/175852/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.15345 MCS (1) 8"
    },
    {
        "rowId": 5355,
        "timestamp": 1720606319297,
        "payload": "UE 1a29: LCID 4: TX     5142806658 RX       12554696 bytes"
    },
    {
        "rowId": 5356,
        "timestamp": 1720606319297,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5357,
        "timestamp": 1720606320577,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 5358,
        "timestamp": 1720606320577,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 48 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 5359,
        "timestamp": 1720606320577,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5360,
        "timestamp": 1720606320577,
        "payload": "UE 1a29: dlsch_rounds 1803518/175891/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.08207 MCS (1) 9"
    },
    {
        "rowId": 5361,
        "timestamp": 1720606320577,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5362,
        "timestamp": 1720606320577,
        "payload": "UE 1a29: ulsch_rounds 222040/1394/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.03477 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 5363,
        "timestamp": 1720606320577,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5364,
        "timestamp": 1720606320577,
        "payload": "UE 1a29: LCID 4: TX     5144575365 RX       12558519 bytes"
    },
    {
        "rowId": 5365,
        "timestamp": 1720606320577,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5366,
        "timestamp": 1720606320577,
        "payload": "UE 1a29: LCID 1: TX          13293 RX          95792 bytes"
    },
    {
        "rowId": 5367,
        "timestamp": 1720606320577,
        "payload": "UE 1a29: MAC:    TX     5308011289 RX       47293491 bytes"
    },
    {
        "rowId": 5368,
        "timestamp": 1720606321857,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 5369,
        "timestamp": 1720606321857,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5370,
        "timestamp": 1720606321857,
        "payload": "UE 1a29: LCID 1: TX          13296 RX          95814 bytes"
    },
    {
        "rowId": 5371,
        "timestamp": 1720606321857,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5372,
        "timestamp": 1720606321857,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5373,
        "timestamp": 1720606321857,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5374,
        "timestamp": 1720606321857,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 5375,
        "timestamp": 1720606321857,
        "payload": "UE 1a29: ulsch_rounds 222091/1394/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00982 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 5376,
        "timestamp": 1720606321857,
        "payload": "UE 1a29: MAC:    TX     5309508423 RX       47304070 bytes"
    },
    {
        "rowId": 5377,
        "timestamp": 1720606321857,
        "payload": "UE 1a29: dlsch_rounds 1804028/175929/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.06562 MCS (1) 7"
    },
    {
        "rowId": 5378,
        "timestamp": 1720606321857,
        "payload": "UE 1a29: LCID 4: TX     5146025445 RX       12562114 bytes"
    },
    {
        "rowId": 5379,
        "timestamp": 1720606323137,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 5380,
        "timestamp": 1720606323137,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5381,
        "timestamp": 1720606323137,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 5382,
        "timestamp": 1720606323137,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5383,
        "timestamp": 1720606323137,
        "payload": "UE 1a29: ulsch_rounds 222143/1394/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00277 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 5384,
        "timestamp": 1720606323137,
        "payload": "UE 1a29: LCID 1: TX          13299 RX          95836 bytes"
    },
    {
        "rowId": 5385,
        "timestamp": 1720606323137,
        "payload": "UE 1a29: LCID 4: TX     5147378178 RX       12565540 bytes"
    },
    {
        "rowId": 5386,
        "timestamp": 1720606323137,
        "payload": "UE 1a29: dlsch_rounds 1804520/176006/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.14218 MCS (1) 9"
    },
    {
        "rowId": 5387,
        "timestamp": 1720606323137,
        "payload": "UE 1a29: MAC:    TX     5310913967 RX       47314858 bytes"
    },
    {
        "rowId": 5388,
        "timestamp": 1720606323137,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5389,
        "timestamp": 1720606323137,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5390,
        "timestamp": 1720606324417,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 5391,
        "timestamp": 1720606324417,
        "payload": "UE 1a29: dlsch_rounds 1805020/176018/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.05077 MCS (1) 7"
    },
    {
        "rowId": 5392,
        "timestamp": 1720606324417,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5393,
        "timestamp": 1720606324417,
        "payload": "UE 1a29: LCID 4: TX     5148829940 RX       12569100 bytes"
    },
    {
        "rowId": 5394,
        "timestamp": 1720606324417,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5395,
        "timestamp": 1720606324417,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5396,
        "timestamp": 1720606324417,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -102 (32 meas)"
    },
    {
        "rowId": 5397,
        "timestamp": 1720606324417,
        "payload": "UE 1a29: ulsch_rounds 222197/1394/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00070 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 5398,
        "timestamp": 1720606324417,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5399,
        "timestamp": 1720606324417,
        "payload": "UE 1a29: MAC:    TX     5312407414 RX       47326495 bytes"
    },
    {
        "rowId": 5400,
        "timestamp": 1720606324417,
        "payload": "UE 1a29: LCID 1: TX          13302 RX          95858 bytes"
    },
    {
        "rowId": 5401,
        "timestamp": 1720606325697,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 5402,
        "timestamp": 1720606325697,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 5403,
        "timestamp": 1720606325697,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5404,
        "timestamp": 1720606325697,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5405,
        "timestamp": 1720606325697,
        "payload": "UE 1a29: dlsch_rounds 1805592/176116/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.13276 MCS (1) 6"
    },
    {
        "rowId": 5406,
        "timestamp": 1720606325697,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5407,
        "timestamp": 1720606325697,
        "payload": "UE 1a29: ulsch_rounds 222248/1394/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00020 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 5408,
        "timestamp": 1720606325697,
        "payload": "UE 1a29: MAC:    TX     5314227263 RX       47337090 bytes"
    },
    {
        "rowId": 5409,
        "timestamp": 1720606325697,
        "payload": "UE 1a29: LCID 4: TX     5150594664 RX       12572716 bytes"
    },
    {
        "rowId": 5410,
        "timestamp": 1720606325697,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5411,
        "timestamp": 1720606325697,
        "payload": "UE 1a29: LCID 1: TX          13308 RX          95902 bytes"
    },
    {
        "rowId": 5412,
        "timestamp": 1720606326977,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 5413,
        "timestamp": 1720606326977,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 5414,
        "timestamp": 1720606326977,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5415,
        "timestamp": 1720606326977,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5416,
        "timestamp": 1720606326977,
        "payload": "UE 1a29: dlsch_rounds 1806072/176116/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.03750 MCS (1) 9"
    },
    {
        "rowId": 5417,
        "timestamp": 1720606326977,
        "payload": "UE 1a29: MAC:    TX     5315551843 RX       47348936 bytes"
    },
    {
        "rowId": 5418,
        "timestamp": 1720606326977,
        "payload": "UE 1a29: LCID 1: TX          13311 RX          95924 bytes"
    },
    {
        "rowId": 5419,
        "timestamp": 1720606326977,
        "payload": "UE 1a29: ulsch_rounds 222303/1394/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00005 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 5420,
        "timestamp": 1720606326977,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5421,
        "timestamp": 1720606326977,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5422,
        "timestamp": 1720606326977,
        "payload": "UE 1a29: LCID 4: TX     5151880336 RX       12576272 bytes"
    },
    {
        "rowId": 5423,
        "timestamp": 1720606328257,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 5424,
        "timestamp": 1720606328257,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 5425,
        "timestamp": 1720606328257,
        "payload": "UE 1a29: CQI 9, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5426,
        "timestamp": 1720606328257,
        "payload": "UE 1a29: ulsch_rounds 222355/1395/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00986 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.5 dB"
    },
    {
        "rowId": 5427,
        "timestamp": 1720606328257,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5428,
        "timestamp": 1720606328257,
        "payload": "UE 1a29: dlsch_rounds 1806546/176203/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.12111 MCS (1) 7"
    },
    {
        "rowId": 5429,
        "timestamp": 1720606328257,
        "payload": "UE 1a29: LCID 1: TX          13314 RX          95946 bytes"
    },
    {
        "rowId": 5430,
        "timestamp": 1720606328257,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5431,
        "timestamp": 1720606328257,
        "payload": "UE 1a29: MAC:    TX     5316928983 RX       47360171 bytes"
    },
    {
        "rowId": 5432,
        "timestamp": 1720606328257,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5433,
        "timestamp": 1720606328257,
        "payload": "UE 1a29: LCID 4: TX     5153208392 RX       12579549 bytes"
    },
    {
        "rowId": 5434,
        "timestamp": 1720606329537,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 5435,
        "timestamp": 1720606329537,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -103 (32 meas)"
    },
    {
        "rowId": 5436,
        "timestamp": 1720606329537,
        "payload": "UE 1a29: ulsch_rounds 222409/1395/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00278 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 5437,
        "timestamp": 1720606329537,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5438,
        "timestamp": 1720606329537,
        "payload": "UE 1a29: dlsch_rounds 1807067/176213/4082/345, dlsch_errors 76, pucch0_DTX 1266, BLER 0.03856 MCS (1) 12"
    },
    {
        "rowId": 5439,
        "timestamp": 1720606329537,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5440,
        "timestamp": 1720606329537,
        "payload": "UE 1a29: MAC:    TX     5318478915 RX       47371776 bytes"
    },
    {
        "rowId": 5441,
        "timestamp": 1720606329537,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5442,
        "timestamp": 1720606329537,
        "payload": "UE 1a29: LCID 1: TX          13317 RX          95968 bytes"
    },
    {
        "rowId": 5443,
        "timestamp": 1720606329537,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5444,
        "timestamp": 1720606329537,
        "payload": "UE 1a29: LCID 4: TX     5154711026 RX       12583241 bytes"
    },
    {
        "rowId": 5445,
        "timestamp": 1720606330817,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 5446,
        "timestamp": 1720606330817,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5447,
        "timestamp": 1720606330817,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -104 (32 meas)"
    },
    {
        "rowId": 5448,
        "timestamp": 1720606330817,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5449,
        "timestamp": 1720606330817,
        "payload": "UE 1a29: dlsch_rounds 1807635/176304/4084/345, dlsch_errors 76, pucch0_DTX 1269, BLER 0.10278 MCS (1) 6"
    },
    {
        "rowId": 5450,
        "timestamp": 1720606330817,
        "payload": "UE 1a29: ulsch_rounds 222463/1395/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00079 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 5451,
        "timestamp": 1720606330817,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5452,
        "timestamp": 1720606330817,
        "payload": "UE 1a29: MAC:    TX     5320242479 RX       47382966 bytes"
    },
    {
        "rowId": 5453,
        "timestamp": 1720606330817,
        "payload": "UE 1a29: LCID 4: TX     5156425546 RX       12586839 bytes"
    },
    {
        "rowId": 5454,
        "timestamp": 1720606330817,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5455,
        "timestamp": 1720606330817,
        "payload": "UE 1a29: LCID 1: TX          13323 RX          96012 bytes"
    },
    {
        "rowId": 5456,
        "timestamp": 1720606332097,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 5457,
        "timestamp": 1720606332097,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5458,
        "timestamp": 1720606332097,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5459,
        "timestamp": 1720606332097,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5460,
        "timestamp": 1720606332097,
        "payload": "UE 1a29: LCID 1: TX          13326 RX          96034 bytes"
    },
    {
        "rowId": 5461,
        "timestamp": 1720606332097,
        "payload": "UE 1a29: dlsch_rounds 1808115/176319/4084/345, dlsch_errors 76, pucch0_DTX 1269, BLER 0.05758 MCS (1) 9"
    },
    {
        "rowId": 5462,
        "timestamp": 1720606332097,
        "payload": "UE 1a29: ulsch_rounds 222515/1395/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00020 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.5 dB"
    },
    {
        "rowId": 5463,
        "timestamp": 1720606332097,
        "payload": "UE 1a29: LCID 4: TX     5157722921 RX       12590103 bytes"
    },
    {
        "rowId": 5464,
        "timestamp": 1720606332097,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5465,
        "timestamp": 1720606332097,
        "payload": "UE 1a29: MAC:    TX     5321584818 RX       47393770 bytes"
    },
    {
        "rowId": 5466,
        "timestamp": 1720606332097,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5467,
        "timestamp": 1720606333377,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5468,
        "timestamp": 1720606333377,
        "payload": "UE 1a29: CQI 8, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5469,
        "timestamp": 1720606333377,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5470,
        "timestamp": 1720606333377,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5471,
        "timestamp": 1720606333377,
        "payload": "UE 1a29: LCID 4: TX     5159047473 RX       12593582 bytes"
    },
    {
        "rowId": 5472,
        "timestamp": 1720606333377,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 5473,
        "timestamp": 1720606333377,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5474,
        "timestamp": 1720606333377,
        "payload": "UE 1a29: MAC:    TX     5322950923 RX       47404558 bytes"
    },
    {
        "rowId": 5475,
        "timestamp": 1720606333377,
        "payload": "UE 1a29: ulsch_rounds 222567/1395/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00006 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 5476,
        "timestamp": 1720606333377,
        "payload": "UE 1a29: LCID 1: TX          13329 RX          96056 bytes"
    },
    {
        "rowId": 5477,
        "timestamp": 1720606333377,
        "payload": "UE 1a29: dlsch_rounds 1808594/176385/4085/345, dlsch_errors 76, pucch0_DTX 1269, BLER 0.08275 MCS (1) 6"
    },
    {
        "rowId": 5478,
        "timestamp": 1720606334657,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 5479,
        "timestamp": 1720606334657,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5480,
        "timestamp": 1720606334657,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 5481,
        "timestamp": 1720606334657,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5482,
        "timestamp": 1720606334657,
        "payload": "UE 1a29: MAC:    TX     5324506402 RX       47415555 bytes"
    },
    {
        "rowId": 5483,
        "timestamp": 1720606334657,
        "payload": "UE 1a29: LCID 1: TX          13332 RX          96078 bytes"
    },
    {
        "rowId": 5484,
        "timestamp": 1720606334657,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5485,
        "timestamp": 1720606334657,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5486,
        "timestamp": 1720606334657,
        "payload": "UE 1a29: ulsch_rounds 222620/1395/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00001 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 5487,
        "timestamp": 1720606334657,
        "payload": "UE 1a29: dlsch_rounds 1809115/176412/4085/345, dlsch_errors 76, pucch0_DTX 1269, BLER 0.04741 MCS (1) 11"
    },
    {
        "rowId": 5488,
        "timestamp": 1720606334657,
        "payload": "UE 1a29: LCID 4: TX     5160557097 RX       12597030 bytes"
    },
    {
        "rowId": 5489,
        "timestamp": 1720606335937,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5490,
        "timestamp": 1720606335937,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 5491,
        "timestamp": 1720606335937,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5492,
        "timestamp": 1720606335937,
        "payload": "UE 1a29: ulsch_rounds 222674/1396/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00957 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 5493,
        "timestamp": 1720606335937,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5494,
        "timestamp": 1720606335937,
        "payload": "UE 1a29: dlsch_rounds 1809682/176516/4086/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.12911 MCS (1) 8"
    },
    {
        "rowId": 5495,
        "timestamp": 1720606335937,
        "payload": "UE 1a29: MAC:    TX     5326309334 RX       47427591 bytes"
    },
    {
        "rowId": 5496,
        "timestamp": 1720606335937,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5497,
        "timestamp": 1720606335937,
        "payload": "UE 1a29: LCID 1: TX          13338 RX          96122 bytes"
    },
    {
        "rowId": 5498,
        "timestamp": 1720606335937,
        "payload": "UE 1a29: LCID 4: TX     5162304030 RX       12600631 bytes"
    },
    {
        "rowId": 5499,
        "timestamp": 1720606335937,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5500,
        "timestamp": 1720606337217,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 5501,
        "timestamp": 1720606337217,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 5502,
        "timestamp": 1720606337217,
        "payload": "UE 1a29: ulsch_rounds 222729/1396/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00270 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 5503,
        "timestamp": 1720606337217,
        "payload": "UE 1a29: MAC:    TX     5327612390 RX       47439437 bytes"
    },
    {
        "rowId": 5504,
        "timestamp": 1720606337217,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5505,
        "timestamp": 1720606337217,
        "payload": "UE 1a29: dlsch_rounds 1810153/176558/4087/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.11282 MCS (1) 6"
    },
    {
        "rowId": 5506,
        "timestamp": 1720606337217,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5507,
        "timestamp": 1720606337217,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5508,
        "timestamp": 1720606337217,
        "payload": "UE 1a29: LCID 1: TX          13341 RX          96144 bytes"
    },
    {
        "rowId": 5509,
        "timestamp": 1720606337217,
        "payload": "UE 1a29: LCID 4: TX     5163577160 RX       12604074 bytes"
    },
    {
        "rowId": 5510,
        "timestamp": 1720606337217,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5511,
        "timestamp": 1720606338497,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 5512,
        "timestamp": 1720606338497,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5513,
        "timestamp": 1720606338497,
        "payload": "UE 1a29: ulsch_rounds 222783/1396/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00076 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.5 dB"
    },
    {
        "rowId": 5514,
        "timestamp": 1720606338497,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5515,
        "timestamp": 1720606338497,
        "payload": "UE 1a29: dlsch_rounds 1810635/176615/4088/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.09233 MCS (1) 6"
    },
    {
        "rowId": 5516,
        "timestamp": 1720606338497,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5517,
        "timestamp": 1720606338497,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5518,
        "timestamp": 1720606338497,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5519,
        "timestamp": 1720606338497,
        "payload": "UE 1a29: LCID 4: TX     5164898267 RX       12607509 bytes"
    },
    {
        "rowId": 5520,
        "timestamp": 1720606338497,
        "payload": "UE 1a29: LCID 1: TX          13344 RX          96166 bytes"
    },
    {
        "rowId": 5521,
        "timestamp": 1720606338497,
        "payload": "UE 1a29: MAC:    TX     5328971328 RX       47450659 bytes"
    },
    {
        "rowId": 5522,
        "timestamp": 1720606339777,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 5523,
        "timestamp": 1720606339777,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 5524,
        "timestamp": 1720606339777,
        "payload": "UE 1a29: dlsch_rounds 1811142/176630/4088/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.04096 MCS (1) 8"
    },
    {
        "rowId": 5525,
        "timestamp": 1720606339777,
        "payload": "UE 1a29: ulsch_rounds 222835/1396/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00019 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 5526,
        "timestamp": 1720606339777,
        "payload": "UE 1a29: LCID 1: TX          13347 RX          96188 bytes"
    },
    {
        "rowId": 5527,
        "timestamp": 1720606339777,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5528,
        "timestamp": 1720606339777,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5529,
        "timestamp": 1720606339777,
        "payload": "UE 1a29: MAC:    TX     5330545762 RX       47461447 bytes"
    },
    {
        "rowId": 5530,
        "timestamp": 1720606339777,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5531,
        "timestamp": 1720606339777,
        "payload": "UE 1a29: LCID 4: TX     5166434062 RX       12611000 bytes"
    },
    {
        "rowId": 5532,
        "timestamp": 1720606339777,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5533,
        "timestamp": 1720606341057,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 5534,
        "timestamp": 1720606341057,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 5535,
        "timestamp": 1720606341057,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5536,
        "timestamp": 1720606341057,
        "payload": "UE 1a29: LCID 1: TX          13353 RX          96232 bytes"
    },
    {
        "rowId": 5537,
        "timestamp": 1720606341057,
        "payload": "UE 1a29: LCID 4: TX     5168205035 RX       12614675 bytes"
    },
    {
        "rowId": 5538,
        "timestamp": 1720606341057,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5539,
        "timestamp": 1720606341057,
        "payload": "UE 1a29: MAC:    TX     5332360838 RX       47472235 bytes"
    },
    {
        "rowId": 5540,
        "timestamp": 1720606341057,
        "payload": "UE 1a29: ulsch_rounds 222887/1396/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00005 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 5541,
        "timestamp": 1720606341057,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5542,
        "timestamp": 1720606341057,
        "payload": "UE 1a29: dlsch_rounds 1811682/176769/4088/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.16800 MCS (1) 6"
    },
    {
        "rowId": 5543,
        "timestamp": 1720606341057,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5544,
        "timestamp": 1720606342337,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 5545,
        "timestamp": 1720606342337,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5546,
        "timestamp": 1720606342337,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5547,
        "timestamp": 1720606342337,
        "payload": "UE 1a29: LCID 1: TX          13356 RX          96254 bytes"
    },
    {
        "rowId": 5548,
        "timestamp": 1720606342337,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5549,
        "timestamp": 1720606342337,
        "payload": "UE 1a29: dlsch_rounds 1812158/176795/4088/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.08091 MCS (1) 6"
    },
    {
        "rowId": 5550,
        "timestamp": 1720606342337,
        "payload": "UE 1a29: ulsch_rounds 222939/1396/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00001 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 5551,
        "timestamp": 1720606342337,
        "payload": "UE 1a29: LCID 4: TX     5169440213 RX       12617940 bytes"
    },
    {
        "rowId": 5552,
        "timestamp": 1720606342337,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 5553,
        "timestamp": 1720606342337,
        "payload": "UE 1a29: MAC:    TX     5333633951 RX       47483454 bytes"
    },
    {
        "rowId": 5554,
        "timestamp": 1720606342337,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5555,
        "timestamp": 1720606343617,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 5556,
        "timestamp": 1720606343617,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 5557,
        "timestamp": 1720606343617,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5558,
        "timestamp": 1720606343617,
        "payload": "UE 1a29: dlsch_rounds 1812629/176829/4088/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.07743 MCS (1) 8"
    },
    {
        "rowId": 5559,
        "timestamp": 1720606343617,
        "payload": "UE 1a29: ulsch_rounds 222992/1396/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 5560,
        "timestamp": 1720606343617,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5561,
        "timestamp": 1720606343617,
        "payload": "UE 1a29: LCID 4: TX     5170756763 RX       12621306 bytes"
    },
    {
        "rowId": 5562,
        "timestamp": 1720606343617,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5563,
        "timestamp": 1720606343617,
        "payload": "UE 1a29: MAC:    TX     5334988336 RX       47494467 bytes"
    },
    {
        "rowId": 5564,
        "timestamp": 1720606343617,
        "payload": "UE 1a29: LCID 1: TX          13359 RX          96276 bytes"
    },
    {
        "rowId": 5565,
        "timestamp": 1720606343617,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5566,
        "timestamp": 1720606344897,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 5567,
        "timestamp": 1720606344897,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 5568,
        "timestamp": 1720606344897,
        "payload": "UE 1a29: ulsch_rounds 223045/1396/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 28.0 dB"
    },
    {
        "rowId": 5569,
        "timestamp": 1720606344897,
        "payload": "UE 1a29: dlsch_rounds 1813168/176922/4088/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.15988 MCS (1) 6"
    },
    {
        "rowId": 5570,
        "timestamp": 1720606344897,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5571,
        "timestamp": 1720606344897,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5572,
        "timestamp": 1720606344897,
        "payload": "UE 1a29: MAC:    TX     5336638379 RX       47505895 bytes"
    },
    {
        "rowId": 5573,
        "timestamp": 1720606344897,
        "payload": "UE 1a29: LCID 1: TX          13362 RX          96298 bytes"
    },
    {
        "rowId": 5574,
        "timestamp": 1720606344897,
        "payload": "UE 1a29: LCID 4: TX     5172360850 RX       12624919 bytes"
    },
    {
        "rowId": 5575,
        "timestamp": 1720606344897,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5576,
        "timestamp": 1720606344897,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5577,
        "timestamp": 1720606346177,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 5578,
        "timestamp": 1720606346177,
        "payload": "UE 1a29: ulsch_rounds 223098/1396/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 5579,
        "timestamp": 1720606346177,
        "payload": "UE 1a29: LCID 1: TX          13368 RX          96342 bytes"
    },
    {
        "rowId": 5580,
        "timestamp": 1720606346177,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5581,
        "timestamp": 1720606346177,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5582,
        "timestamp": 1720606346177,
        "payload": "UE 1a29: LCID 4: TX     5173996632 RX       12628552 bytes"
    },
    {
        "rowId": 5583,
        "timestamp": 1720606346177,
        "payload": "UE 1a29: dlsch_rounds 1813697/176998/4088/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.14965 MCS (1) 6"
    },
    {
        "rowId": 5584,
        "timestamp": 1720606346177,
        "payload": "UE 1a29: MAC:    TX     5338313039 RX       47517706 bytes"
    },
    {
        "rowId": 5585,
        "timestamp": 1720606346177,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 5586,
        "timestamp": 1720606346177,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5587,
        "timestamp": 1720606346177,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5588,
        "timestamp": 1720606347457,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 5589,
        "timestamp": 1720606347457,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5590,
        "timestamp": 1720606347457,
        "payload": "UE 1a29: ulsch_rounds 223154/1396/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.5 dB"
    },
    {
        "rowId": 5591,
        "timestamp": 1720606347457,
        "payload": "UE 1a29: LCID 1: TX          13371 RX          96364 bytes"
    },
    {
        "rowId": 5592,
        "timestamp": 1720606347457,
        "payload": "UE 1a29: MAC:    TX     5339602213 RX       47529745 bytes"
    },
    {
        "rowId": 5593,
        "timestamp": 1720606347457,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5594,
        "timestamp": 1720606347457,
        "payload": "UE 1a29: LCID 4: TX     5175249191 RX       12631800 bytes"
    },
    {
        "rowId": 5595,
        "timestamp": 1720606347457,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5596,
        "timestamp": 1720606347457,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5597,
        "timestamp": 1720606347457,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 5598,
        "timestamp": 1720606347457,
        "payload": "UE 1a29: dlsch_rounds 1814162/177103/4090/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.18120 MCS (1) 6"
    },
    {
        "rowId": 5599,
        "timestamp": 1720606348737,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 5600,
        "timestamp": 1720606348737,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5601,
        "timestamp": 1720606348737,
        "payload": "UE 1a29: dlsch_rounds 1814644/177126/4090/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.07790 MCS (1) 6"
    },
    {
        "rowId": 5602,
        "timestamp": 1720606348737,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5603,
        "timestamp": 1720606348737,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5604,
        "timestamp": 1720606348737,
        "payload": "UE 1a29: ulsch_rounds 223208/1396/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 5605,
        "timestamp": 1720606348737,
        "payload": "UE 1a29: MAC:    TX     5341013109 RX       47541414 bytes"
    },
    {
        "rowId": 5606,
        "timestamp": 1720606348737,
        "payload": "UE 1a29: LCID 1: TX          13374 RX          96386 bytes"
    },
    {
        "rowId": 5607,
        "timestamp": 1720606348737,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5608,
        "timestamp": 1720606348737,
        "payload": "UE 1a29: LCID 4: TX     5176625163 RX       12635092 bytes"
    },
    {
        "rowId": 5609,
        "timestamp": 1720606348737,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5610,
        "timestamp": 1720606350017,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 5611,
        "timestamp": 1720606350017,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5612,
        "timestamp": 1720606350017,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5613,
        "timestamp": 1720606350017,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5614,
        "timestamp": 1720606350017,
        "payload": "UE 1a29: ulsch_rounds 223261/1396/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 5615,
        "timestamp": 1720606350017,
        "payload": "UE 1a29: dlsch_rounds 1815198/177128/4090/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.02380 MCS (1) 11"
    },
    {
        "rowId": 5616,
        "timestamp": 1720606350017,
        "payload": "UE 1a29: LCID 1: TX          13377 RX          96408 bytes"
    },
    {
        "rowId": 5617,
        "timestamp": 1720606350017,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5618,
        "timestamp": 1720606350017,
        "payload": "UE 1a29: MAC:    TX     5342752829 RX       47552842 bytes"
    },
    {
        "rowId": 5619,
        "timestamp": 1720606350017,
        "payload": "UE 1a29: LCID 4: TX     5178316055 RX       12638812 bytes"
    },
    {
        "rowId": 5620,
        "timestamp": 1720606350017,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5621,
        "timestamp": 1720606351297,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 5622,
        "timestamp": 1720606351297,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5623,
        "timestamp": 1720606351297,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5624,
        "timestamp": 1720606351297,
        "payload": "UE 1a29: ulsch_rounds 223314/1396/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 5625,
        "timestamp": 1720606351297,
        "payload": "UE 1a29: dlsch_rounds 1815752/177162/4090/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.05798 MCS (1) 11"
    },
    {
        "rowId": 5626,
        "timestamp": 1720606351297,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5627,
        "timestamp": 1720606351297,
        "payload": "UE 1a29: LCID 1: TX          13383 RX          96452 bytes"
    },
    {
        "rowId": 5628,
        "timestamp": 1720606351297,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5629,
        "timestamp": 1720606351297,
        "payload": "UE 1a29: LCID 4: TX     5179918914 RX       12642369 bytes"
    },
    {
        "rowId": 5630,
        "timestamp": 1720606351297,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5631,
        "timestamp": 1720606351297,
        "payload": "UE 1a29: MAC:    TX     5344414557 RX       47564286 bytes"
    },
    {
        "rowId": 5632,
        "timestamp": 1720606352577,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5633,
        "timestamp": 1720606352577,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 5634,
        "timestamp": 1720606352577,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5635,
        "timestamp": 1720606352577,
        "payload": "UE 1a29: ulsch_rounds 223370/1396/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 5636,
        "timestamp": 1720606352577,
        "payload": "UE 1a29: LCID 1: TX          13386 RX          96474 bytes"
    },
    {
        "rowId": 5637,
        "timestamp": 1720606352577,
        "payload": "UE 1a29: dlsch_rounds 1816243/177185/4091/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.04262 MCS (1) 11"
    },
    {
        "rowId": 5638,
        "timestamp": 1720606352577,
        "payload": "UE 1a29: MAC:    TX     5345791005 RX       47575894 bytes"
    },
    {
        "rowId": 5639,
        "timestamp": 1720606352577,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5640,
        "timestamp": 1720606352577,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5641,
        "timestamp": 1720606352577,
        "payload": "UE 1a29: LCID 4: TX     5181239060 RX       12645755 bytes"
    },
    {
        "rowId": 5642,
        "timestamp": 1720606352577,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5643,
        "timestamp": 1720606353857,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 5644,
        "timestamp": 1720606353857,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5645,
        "timestamp": 1720606353857,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5646,
        "timestamp": 1720606353857,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 5647,
        "timestamp": 1720606353857,
        "payload": "UE 1a29: ulsch_rounds 223425/1396/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 5648,
        "timestamp": 1720606353857,
        "payload": "UE 1a29: MAC:    TX     5347271461 RX       47587309 bytes"
    },
    {
        "rowId": 5649,
        "timestamp": 1720606353857,
        "payload": "UE 1a29: LCID 1: TX          13389 RX          96496 bytes"
    },
    {
        "rowId": 5650,
        "timestamp": 1720606353857,
        "payload": "UE 1a29: LCID 4: TX     5182668476 RX       12649171 bytes"
    },
    {
        "rowId": 5651,
        "timestamp": 1720606353857,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5652,
        "timestamp": 1720606353857,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5653,
        "timestamp": 1720606353857,
        "payload": "UE 1a29: dlsch_rounds 1816748/177263/4091/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.13072 MCS (1) 7"
    },
    {
        "rowId": 5654,
        "timestamp": 1720606355137,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5655,
        "timestamp": 1720606355137,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5656,
        "timestamp": 1720606355137,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 5657,
        "timestamp": 1720606355137,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5658,
        "timestamp": 1720606355137,
        "payload": "UE 1a29: dlsch_rounds 1817325/177302/4091/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.08703 MCS (1) 7"
    },
    {
        "rowId": 5659,
        "timestamp": 1720606355137,
        "payload": "UE 1a29: LCID 1: TX          13392 RX          96518 bytes"
    },
    {
        "rowId": 5660,
        "timestamp": 1720606355137,
        "payload": "UE 1a29: MAC:    TX     5349112547 RX       47598097 bytes"
    },
    {
        "rowId": 5661,
        "timestamp": 1720606355137,
        "payload": "UE 1a29: LCID 4: TX     5184466102 RX       12652958 bytes"
    },
    {
        "rowId": 5662,
        "timestamp": 1720606355137,
        "payload": "UE 1a29: ulsch_rounds 223477/1396/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 21.5 dB"
    },
    {
        "rowId": 5663,
        "timestamp": 1720606355137,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5664,
        "timestamp": 1720606355137,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5665,
        "timestamp": 1720606356417,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 5666,
        "timestamp": 1720606356417,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5667,
        "timestamp": 1720606356417,
        "payload": "UE 1a29: MAC:    TX     5350591880 RX       47608885 bytes"
    },
    {
        "rowId": 5668,
        "timestamp": 1720606356417,
        "payload": "UE 1a29: ulsch_rounds 223529/1396/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 5669,
        "timestamp": 1720606356417,
        "payload": "UE 1a29: LCID 1: TX          13398 RX          96562 bytes"
    },
    {
        "rowId": 5670,
        "timestamp": 1720606356417,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5671,
        "timestamp": 1720606356417,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5672,
        "timestamp": 1720606356417,
        "payload": "UE 1a29: dlsch_rounds 1817852/177326/4091/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.05368 MCS (1) 8"
    },
    {
        "rowId": 5673,
        "timestamp": 1720606356417,
        "payload": "UE 1a29: LCID 4: TX     5185899344 RX       12656318 bytes"
    },
    {
        "rowId": 5674,
        "timestamp": 1720606356417,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5675,
        "timestamp": 1720606356417,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5676,
        "timestamp": 1720606357697,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 5677,
        "timestamp": 1720606357697,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5678,
        "timestamp": 1720606357697,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5679,
        "timestamp": 1720606357697,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5680,
        "timestamp": 1720606357697,
        "payload": "UE 1a29: ulsch_rounds 223582/1397/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.01215 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 5681,
        "timestamp": 1720606357697,
        "payload": "UE 1a29: LCID 1: TX          13401 RX          96584 bytes"
    },
    {
        "rowId": 5682,
        "timestamp": 1720606357697,
        "payload": "UE 1a29: MAC:    TX     5351985432 RX       47620329 bytes"
    },
    {
        "rowId": 5683,
        "timestamp": 1720606357697,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5684,
        "timestamp": 1720606357697,
        "payload": "UE 1a29: LCID 4: TX     5187253156 RX       12659900 bytes"
    },
    {
        "rowId": 5685,
        "timestamp": 1720606357697,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5686,
        "timestamp": 1720606357697,
        "payload": "UE 1a29: dlsch_rounds 1818356/177380/4091/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.08029 MCS (1) 8"
    },
    {
        "rowId": 5687,
        "timestamp": 1720606358977,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5688,
        "timestamp": 1720606358977,
        "payload": "UE 1a29: CQI 12, RI 1, PMI (0,3)"
    },
    {
        "rowId": 5689,
        "timestamp": 1720606358977,
        "payload": "UE 1a29: LCID 1: TX          13404 RX          96606 bytes"
    },
    {
        "rowId": 5690,
        "timestamp": 1720606358977,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5691,
        "timestamp": 1720606358977,
        "payload": "UE 1a29: LCID 4: TX     5188731104 RX       12663169 bytes"
    },
    {
        "rowId": 5692,
        "timestamp": 1720606358977,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5693,
        "timestamp": 1720606358977,
        "payload": "UE 1a29: ulsch_rounds 223635/1397/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00309 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 5694,
        "timestamp": 1720606358977,
        "payload": "UE 1a29: dlsch_rounds 1818877/177381/4091/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.02387 MCS (1) 16"
    },
    {
        "rowId": 5695,
        "timestamp": 1720606358977,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 5696,
        "timestamp": 1720606358977,
        "payload": "UE 1a29: MAC:    TX     5353502581 RX       47631326 bytes"
    },
    {
        "rowId": 5697,
        "timestamp": 1720606358977,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5698,
        "timestamp": 1720606360257,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 5699,
        "timestamp": 1720606360257,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 5700,
        "timestamp": 1720606360257,
        "payload": "UE 1a29: LCID 4: TX     5190533058 RX       12667108 bytes"
    },
    {
        "rowId": 5701,
        "timestamp": 1720606360257,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5702,
        "timestamp": 1720606360257,
        "payload": "UE 1a29: MAC:    TX     5355357957 RX       47643330 bytes"
    },
    {
        "rowId": 5703,
        "timestamp": 1720606360257,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5704,
        "timestamp": 1720606360257,
        "payload": "UE 1a29: dlsch_rounds 1819428/177507/4092/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.22592 MCS (1) 7"
    },
    {
        "rowId": 5705,
        "timestamp": 1720606360257,
        "payload": "UE 1a29: LCID 1: TX          13407 RX          96628 bytes"
    },
    {
        "rowId": 5706,
        "timestamp": 1720606360257,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5707,
        "timestamp": 1720606360257,
        "payload": "UE 1a29: ulsch_rounds 223689/1397/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00087 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 5708,
        "timestamp": 1720606360257,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5709,
        "timestamp": 1720606361537,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 5710,
        "timestamp": 1720606361537,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 5711,
        "timestamp": 1720606361537,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5712,
        "timestamp": 1720606361537,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5713,
        "timestamp": 1720606361537,
        "payload": "UE 1a29: dlsch_rounds 1819910/177531/4092/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.09602 MCS (1) 6"
    },
    {
        "rowId": 5714,
        "timestamp": 1720606361537,
        "payload": "UE 1a29: ulsch_rounds 223741/1397/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00025 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.5 dB"
    },
    {
        "rowId": 5715,
        "timestamp": 1720606361537,
        "payload": "UE 1a29: MAC:    TX     5356665103 RX       47654549 bytes"
    },
    {
        "rowId": 5716,
        "timestamp": 1720606361537,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5717,
        "timestamp": 1720606361537,
        "payload": "UE 1a29: LCID 4: TX     5191803089 RX       12670323 bytes"
    },
    {
        "rowId": 5718,
        "timestamp": 1720606361537,
        "payload": "UE 1a29: LCID 1: TX          13413 RX          96672 bytes"
    },
    {
        "rowId": 5719,
        "timestamp": 1720606361537,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5720,
        "timestamp": 1720606362817,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5721,
        "timestamp": 1720606362817,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 5722,
        "timestamp": 1720606362817,
        "payload": "UE 1a29: dlsch_rounds 1820414/177543/4092/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.03206 MCS (1) 11"
    },
    {
        "rowId": 5723,
        "timestamp": 1720606362817,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 5724,
        "timestamp": 1720606362817,
        "payload": "UE 1a29: LCID 4: TX     5193127342 RX       12673714 bytes"
    },
    {
        "rowId": 5725,
        "timestamp": 1720606362817,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5726,
        "timestamp": 1720606362817,
        "payload": "UE 1a29: ulsch_rounds 223795/1397/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00006 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 5727,
        "timestamp": 1720606362817,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5728,
        "timestamp": 1720606362817,
        "payload": "UE 1a29: MAC:    TX     5358031383 RX       47666138 bytes"
    },
    {
        "rowId": 5729,
        "timestamp": 1720606362817,
        "payload": "UE 1a29: LCID 1: TX          13416 RX          96694 bytes"
    },
    {
        "rowId": 5730,
        "timestamp": 1720606362817,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5731,
        "timestamp": 1720606364097,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 5732,
        "timestamp": 1720606364097,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 5733,
        "timestamp": 1720606364097,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5734,
        "timestamp": 1720606364097,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5735,
        "timestamp": 1720606364097,
        "payload": "UE 1a29: ulsch_rounds 223846/1397/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00002 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 5736,
        "timestamp": 1720606364097,
        "payload": "UE 1a29: dlsch_rounds 1820926/177649/4092/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.13484 MCS (1) 6"
    },
    {
        "rowId": 5737,
        "timestamp": 1720606364097,
        "payload": "UE 1a29: LCID 1: TX          13419 RX          96716 bytes"
    },
    {
        "rowId": 5738,
        "timestamp": 1720606364097,
        "payload": "UE 1a29: MAC:    TX     5359613369 RX       47676733 bytes"
    },
    {
        "rowId": 5739,
        "timestamp": 1720606364097,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5740,
        "timestamp": 1720606364097,
        "payload": "UE 1a29: LCID 4: TX     5194660354 RX       12677103 bytes"
    },
    {
        "rowId": 5741,
        "timestamp": 1720606364097,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5742,
        "timestamp": 1720606365377,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 5743,
        "timestamp": 1720606365377,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5744,
        "timestamp": 1720606365377,
        "payload": "UE 1a29: ulsch_rounds 223898/1398/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.01181 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 22.5 dB"
    },
    {
        "rowId": 5745,
        "timestamp": 1720606365377,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 44 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 5746,
        "timestamp": 1720606365377,
        "payload": "UE 1a29: dlsch_rounds 1821471/177656/4092/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.04535 MCS (1) 7"
    },
    {
        "rowId": 5747,
        "timestamp": 1720606365377,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5748,
        "timestamp": 1720606365377,
        "payload": "UE 1a29: MAC:    TX     5361347877 RX       47687952 bytes"
    },
    {
        "rowId": 5749,
        "timestamp": 1720606365377,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5750,
        "timestamp": 1720606365377,
        "payload": "UE 1a29: LCID 4: TX     5196353413 RX       12680822 bytes"
    },
    {
        "rowId": 5751,
        "timestamp": 1720606365377,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5752,
        "timestamp": 1720606365377,
        "payload": "UE 1a29: LCID 1: TX          13422 RX          96738 bytes"
    },
    {
        "rowId": 5753,
        "timestamp": 1720606366657,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 5754,
        "timestamp": 1720606366657,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 5755,
        "timestamp": 1720606366657,
        "payload": "UE 1a29: dlsch_rounds 1821958/177769/4092/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.15923 MCS (1) 6"
    },
    {
        "rowId": 5756,
        "timestamp": 1720606366657,
        "payload": "UE 1a29: ulsch_rounds 223958/1400/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.02872 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 5757,
        "timestamp": 1720606366657,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5758,
        "timestamp": 1720606366657,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5759,
        "timestamp": 1720606366657,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5760,
        "timestamp": 1720606366657,
        "payload": "UE 1a29: LCID 1: TX          13428 RX          96782 bytes"
    },
    {
        "rowId": 5761,
        "timestamp": 1720606366657,
        "payload": "UE 1a29: LCID 4: TX     5197632523 RX       12687033 bytes"
    },
    {
        "rowId": 5762,
        "timestamp": 1720606366657,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5763,
        "timestamp": 1720606366657,
        "payload": "UE 1a29: MAC:    TX     5362671176 RX       47702216 bytes"
    },
    {
        "rowId": 5764,
        "timestamp": 1720606367937,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 5765,
        "timestamp": 1720606367937,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 46 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 5766,
        "timestamp": 1720606367937,
        "payload": "UE 1a29: dlsch_rounds 1822445/177792/4092/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.07236 MCS (1) 6"
    },
    {
        "rowId": 5767,
        "timestamp": 1720606367937,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5768,
        "timestamp": 1720606367937,
        "payload": "UE 1a29: ulsch_rounds 224010/1402/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.04087 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.0 dB"
    },
    {
        "rowId": 5769,
        "timestamp": 1720606367937,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5770,
        "timestamp": 1720606367937,
        "payload": "UE 1a29: MAC:    TX     5364032574 RX       47713850 bytes"
    },
    {
        "rowId": 5771,
        "timestamp": 1720606367937,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5772,
        "timestamp": 1720606367937,
        "payload": "UE 1a29: LCID 4: TX     5198957426 RX       12690445 bytes"
    },
    {
        "rowId": 5773,
        "timestamp": 1720606367937,
        "payload": "UE 1a29: LCID 1: TX          13431 RX          96804 bytes"
    },
    {
        "rowId": 5774,
        "timestamp": 1720606367937,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5775,
        "timestamp": 1720606369217,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 5776,
        "timestamp": 1720606369217,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5777,
        "timestamp": 1720606369217,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5778,
        "timestamp": 1720606369217,
        "payload": "UE 1a29: dlsch_rounds 1822971/177852/4093/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.11751 MCS (1) 9"
    },
    {
        "rowId": 5779,
        "timestamp": 1720606369217,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5780,
        "timestamp": 1720606369217,
        "payload": "UE 1a29: ulsch_rounds 224064/1404/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.02521 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 5781,
        "timestamp": 1720606369217,
        "payload": "UE 1a29: MAC:    TX     5365608528 RX       47725870 bytes"
    },
    {
        "rowId": 5782,
        "timestamp": 1720606369217,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5783,
        "timestamp": 1720606369217,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5784,
        "timestamp": 1720606369217,
        "payload": "UE 1a29: LCID 4: TX     5200488221 RX       12694062 bytes"
    },
    {
        "rowId": 5785,
        "timestamp": 1720606369217,
        "payload": "UE 1a29: LCID 1: TX          13434 RX          96826 bytes"
    },
    {
        "rowId": 5786,
        "timestamp": 1720606370497,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 5787,
        "timestamp": 1720606370497,
        "payload": "UE 1a29: dlsch_rounds 1823545/177888/4093/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.07069 MCS (1) 9"
    },
    {
        "rowId": 5788,
        "timestamp": 1720606370497,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 5789,
        "timestamp": 1720606370497,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5790,
        "timestamp": 1720606370497,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5791,
        "timestamp": 1720606370497,
        "payload": "UE 1a29: ulsch_rounds 224116/1406/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.03147 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 5792,
        "timestamp": 1720606370497,
        "payload": "UE 1a29: MAC:    TX     5367391714 RX       47737536 bytes"
    },
    {
        "rowId": 5793,
        "timestamp": 1720606370497,
        "payload": "UE 1a29: LCID 1: TX          13437 RX          96848 bytes"
    },
    {
        "rowId": 5794,
        "timestamp": 1720606370497,
        "payload": "UE 1a29: LCID 4: TX     5202211731 RX       12697766 bytes"
    },
    {
        "rowId": 5795,
        "timestamp": 1720606370497,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5796,
        "timestamp": 1720606370497,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5797,
        "timestamp": 1720606371777,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 5798,
        "timestamp": 1720606371777,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5799,
        "timestamp": 1720606371777,
        "payload": "UE 1a29: dlsch_rounds 1823999/177936/4093/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.09314 MCS (1) 9"
    },
    {
        "rowId": 5800,
        "timestamp": 1720606371777,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5801,
        "timestamp": 1720606371777,
        "payload": "UE 1a29: ulsch_rounds 224168/1407/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.01664 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 5802,
        "timestamp": 1720606371777,
        "payload": "UE 1a29: LCID 1: TX          13443 RX          96892 bytes"
    },
    {
        "rowId": 5803,
        "timestamp": 1720606371777,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5804,
        "timestamp": 1720606371777,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5805,
        "timestamp": 1720606371777,
        "payload": "UE 1a29: LCID 4: TX     5203475945 RX       12701004 bytes"
    },
    {
        "rowId": 5806,
        "timestamp": 1720606371777,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5807,
        "timestamp": 1720606371777,
        "payload": "UE 1a29: MAC:    TX     5368705957 RX       47748755 bytes"
    },
    {
        "rowId": 5808,
        "timestamp": 1720606373057,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 5809,
        "timestamp": 1720606373057,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5810,
        "timestamp": 1720606373057,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5811,
        "timestamp": 1720606373057,
        "payload": "UE 1a29: ulsch_rounds 224223/1407/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00470 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 5812,
        "timestamp": 1720606373057,
        "payload": "UE 1a29: MAC:    TX     5370059954 RX       47760170 bytes"
    },
    {
        "rowId": 5813,
        "timestamp": 1720606373057,
        "payload": "UE 1a29: dlsch_rounds 1824471/177968/4093/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.07977 MCS (1) 9"
    },
    {
        "rowId": 5814,
        "timestamp": 1720606373057,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 5815,
        "timestamp": 1720606373057,
        "payload": "UE 1a29: LCID 1: TX          13446 RX          96914 bytes"
    },
    {
        "rowId": 5816,
        "timestamp": 1720606373057,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5817,
        "timestamp": 1720606373057,
        "payload": "UE 1a29: LCID 4: TX     5204781339 RX       12704470 bytes"
    },
    {
        "rowId": 5818,
        "timestamp": 1720606373057,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5819,
        "timestamp": 1720606374337,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 5820,
        "timestamp": 1720606374337,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5821,
        "timestamp": 1720606374337,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5822,
        "timestamp": 1720606374337,
        "payload": "UE 1a29: dlsch_rounds 1824995/178058/4095/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.13319 MCS (1) 6"
    },
    {
        "rowId": 5823,
        "timestamp": 1720606374337,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5824,
        "timestamp": 1720606374337,
        "payload": "UE 1a29: ulsch_rounds 224278/1408/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.01577 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 5825,
        "timestamp": 1720606374337,
        "payload": "UE 1a29: LCID 1: TX          13449 RX          96936 bytes"
    },
    {
        "rowId": 5826,
        "timestamp": 1720606374337,
        "payload": "UE 1a29: MAC:    TX     5371647125 RX       47771968 bytes"
    },
    {
        "rowId": 5827,
        "timestamp": 1720606374337,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5828,
        "timestamp": 1720606374337,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5829,
        "timestamp": 1720606374337,
        "payload": "UE 1a29: LCID 4: TX     5206325704 RX       12707872 bytes"
    },
    {
        "rowId": 5830,
        "timestamp": 1720606375617,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 5831,
        "timestamp": 1720606375617,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 5832,
        "timestamp": 1720606375617,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5833,
        "timestamp": 1720606375617,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5834,
        "timestamp": 1720606375617,
        "payload": "UE 1a29: MAC:    TX     5373452335 RX       47784023 bytes"
    },
    {
        "rowId": 5835,
        "timestamp": 1720606375617,
        "payload": "UE 1a29: LCID 1: TX          13452 RX          96980 bytes"
    },
    {
        "rowId": 5836,
        "timestamp": 1720606375617,
        "payload": "UE 1a29: ulsch_rounds 224334/1409/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.01027 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 5837,
        "timestamp": 1720606375617,
        "payload": "UE 1a29: LCID 4: TX     5208087281 RX       12711705 bytes"
    },
    {
        "rowId": 5838,
        "timestamp": 1720606375617,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5839,
        "timestamp": 1720606375617,
        "payload": "UE 1a29: dlsch_rounds 1825561/178061/4095/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.03921 MCS (1) 9"
    },
    {
        "rowId": 5840,
        "timestamp": 1720606375617,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5841,
        "timestamp": 1720606376897,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5842,
        "timestamp": 1720606376897,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5843,
        "timestamp": 1720606376897,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5844,
        "timestamp": 1720606376897,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 5845,
        "timestamp": 1720606376897,
        "payload": "UE 1a29: MAC:    TX     5374728755 RX       47795818 bytes"
    },
    {
        "rowId": 5846,
        "timestamp": 1720606376897,
        "payload": "UE 1a29: LCID 1: TX          13458 RX          97002 bytes"
    },
    {
        "rowId": 5847,
        "timestamp": 1720606376897,
        "payload": "UE 1a29: LCID 4: TX     5209310698 RX       12715262 bytes"
    },
    {
        "rowId": 5848,
        "timestamp": 1720606376897,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5849,
        "timestamp": 1720606376897,
        "payload": "UE 1a29: dlsch_rounds 1826030/178122/4095/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.11574 MCS (1) 11"
    },
    {
        "rowId": 5850,
        "timestamp": 1720606376897,
        "payload": "UE 1a29: ulsch_rounds 224387/1410/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.01748 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 5851,
        "timestamp": 1720606376897,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5852,
        "timestamp": 1720606378177,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -105 (32 meas)"
    },
    {
        "rowId": 5853,
        "timestamp": 1720606378177,
        "payload": "UE 1a29: dlsch_rounds 1826506/178170/4095/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.08912 MCS (1) 9"
    },
    {
        "rowId": 5854,
        "timestamp": 1720606378177,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5855,
        "timestamp": 1720606378177,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5856,
        "timestamp": 1720606378177,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 5857,
        "timestamp": 1720606378177,
        "payload": "UE 1a29: ulsch_rounds 224440/1413/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.03489 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 5858,
        "timestamp": 1720606378177,
        "payload": "UE 1a29: MAC:    TX     5376084690 RX       47808108 bytes"
    },
    {
        "rowId": 5859,
        "timestamp": 1720606378177,
        "payload": "UE 1a29: LCID 4: TX     5210615032 RX       12718659 bytes"
    },
    {
        "rowId": 5860,
        "timestamp": 1720606378177,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5861,
        "timestamp": 1720606378177,
        "payload": "UE 1a29: LCID 1: TX          13461 RX          97024 bytes"
    },
    {
        "rowId": 5862,
        "timestamp": 1720606378177,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5863,
        "timestamp": 1720606379457,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 5864,
        "timestamp": 1720606379457,
        "payload": "UE 1a29: MAC:    TX     5377736101 RX       47819105 bytes"
    },
    {
        "rowId": 5865,
        "timestamp": 1720606379457,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5866,
        "timestamp": 1720606379457,
        "payload": "UE 1a29: ulsch_rounds 224493/1413/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00887 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 5867,
        "timestamp": 1720606379457,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5868,
        "timestamp": 1720606379457,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,1)"
    },
    {
        "rowId": 5869,
        "timestamp": 1720606379457,
        "payload": "UE 1a29: LCID 1: TX          13464 RX          97046 bytes"
    },
    {
        "rowId": 5870,
        "timestamp": 1720606379457,
        "payload": "UE 1a29: dlsch_rounds 1827033/178219/4095/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.11349 MCS (1) 9"
    },
    {
        "rowId": 5871,
        "timestamp": 1720606379457,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5872,
        "timestamp": 1720606379457,
        "payload": "UE 1a29: LCID 4: TX     5212216256 RX       12722128 bytes"
    },
    {
        "rowId": 5873,
        "timestamp": 1720606379457,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5874,
        "timestamp": 1720606380737,
        "payload": "[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 5875,
        "timestamp": 1720606380737,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5876,
        "timestamp": 1720606380737,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5877,
        "timestamp": 1720606380737,
        "payload": "UE 1a29: CQI 7, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5878,
        "timestamp": 1720606380737,
        "payload": "UE 1a29: LCID 4: TX     5213904757 RX       12725838 bytes"
    },
    {
        "rowId": 5879,
        "timestamp": 1720606380737,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5880,
        "timestamp": 1720606380737,
        "payload": "UE 1a29: ulsch_rounds 224546/1413/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00251 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 5881,
        "timestamp": 1720606380737,
        "payload": "UE 1a29: dlsch_rounds 1827591/178281/4095/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.08784 MCS (1) 8"
    },
    {
        "rowId": 5882,
        "timestamp": 1720606380737,
        "payload": "UE 1a29: MAC:    TX     5379478023 RX       47830086 bytes"
    },
    {
        "rowId": 5883,
        "timestamp": 1720606380737,
        "payload": "UE 1a29: LCID 1: TX          13470 RX          97090 bytes"
    },
    {
        "rowId": 5884,
        "timestamp": 1720606380737,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5885,
        "timestamp": 1720606382017,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 5886,
        "timestamp": 1720606382017,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5887,
        "timestamp": 1720606382017,
        "payload": "UE 1a29: dlsch_rounds 1828054/178367/4102/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.18587 MCS (1) 6"
    },
    {
        "rowId": 5888,
        "timestamp": 1720606382017,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5889,
        "timestamp": 1720606382017,
        "payload": "UE 1a29: MAC:    TX     5380782939 RX       47840697 bytes"
    },
    {
        "rowId": 5890,
        "timestamp": 1720606382017,
        "payload": "UE 1a29: ulsch_rounds 224597/1413/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00071 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 5891,
        "timestamp": 1720606382017,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 42 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5892,
        "timestamp": 1720606382017,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5893,
        "timestamp": 1720606382017,
        "payload": "UE 1a29: LCID 1: TX          13473 RX          97112 bytes"
    },
    {
        "rowId": 5894,
        "timestamp": 1720606382017,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5895,
        "timestamp": 1720606382017,
        "payload": "UE 1a29: LCID 4: TX     5215166216 RX       12729023 bytes"
    },
    {
        "rowId": 5896,
        "timestamp": 1720606383297,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 5897,
        "timestamp": 1720606383297,
        "payload": "UE 1a29: dlsch_rounds 1828538/178411/4102/346, dlsch_errors 76, pucch0_DTX 1269, BLER 0.15663 MCS (1) 6"
    },
    {
        "rowId": 5898,
        "timestamp": 1720606383297,
        "payload": "UE 1a29: ulsch_rounds 224650/1413/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00020 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 5899,
        "timestamp": 1720606383297,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5900,
        "timestamp": 1720606383297,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5901,
        "timestamp": 1720606383297,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 40 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5902,
        "timestamp": 1720606383297,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5903,
        "timestamp": 1720606383297,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5904,
        "timestamp": 1720606383297,
        "payload": "UE 1a29: LCID 4: TX     5216508053 RX       12732629 bytes"
    },
    {
        "rowId": 5905,
        "timestamp": 1720606383297,
        "payload": "UE 1a29: LCID 1: TX          13476 RX          97134 bytes"
    },
    {
        "rowId": 5906,
        "timestamp": 1720606383297,
        "payload": "UE 1a29: MAC:    TX     5382161323 RX       47852125 bytes"
    },
    {
        "rowId": 5907,
        "timestamp": 1720606384577,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 5908,
        "timestamp": 1720606384577,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 38 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 5909,
        "timestamp": 1720606384577,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5910,
        "timestamp": 1720606384577,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 5911,
        "timestamp": 1720606384577,
        "payload": "UE 1a29: MAC:    TX     5383894197 RX       47863071 bytes"
    },
    {
        "rowId": 5912,
        "timestamp": 1720606384577,
        "payload": "UE 1a29: LCID 4: TX     5218201706 RX       12736084 bytes"
    },
    {
        "rowId": 5913,
        "timestamp": 1720606384577,
        "payload": "UE 1a29: ulsch_rounds 224701/1414/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.02005 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 21.5 dB"
    },
    {
        "rowId": 5914,
        "timestamp": 1720606384577,
        "payload": "UE 1a29: dlsch_rounds 1829091/178455/4108/346, dlsch_errors 76, pucch0_DTX 1271, BLER 0.10852 MCS (1) 6"
    },
    {
        "rowId": 5915,
        "timestamp": 1720606384577,
        "payload": "UE 1a29: LCID 1: TX          13479 RX          97156 bytes"
    },
    {
        "rowId": 5916,
        "timestamp": 1720606384577,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5917,
        "timestamp": 1720606384577,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5918,
        "timestamp": 1720606385857,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 5919,
        "timestamp": 1720606385857,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5920,
        "timestamp": 1720606385857,
        "payload": "UE 1a29: CQI 10, RI 1, PMI (0,3)"
    },
    {
        "rowId": 5921,
        "timestamp": 1720606385857,
        "payload": "UE 1a29: dlsch_rounds 1829631/178491/4108/346, dlsch_errors 76, pucch0_DTX 1271, BLER 0.05725 MCS (1) 6"
    },
    {
        "rowId": 5922,
        "timestamp": 1720606385857,
        "payload": "UE 1a29: MAC:    TX     5385458160 RX       47875940 bytes"
    },
    {
        "rowId": 5923,
        "timestamp": 1720606385857,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5924,
        "timestamp": 1720606385857,
        "payload": "UE 1a29: LCID 4: TX     5219734945 RX       12739768 bytes"
    },
    {
        "rowId": 5925,
        "timestamp": 1720606385857,
        "payload": "UE 1a29: LCID 1: TX          13485 RX          97200 bytes"
    },
    {
        "rowId": 5926,
        "timestamp": 1720606385857,
        "payload": "UE 1a29: ulsch_rounds 224757/1415/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.01550 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 23.5 dB"
    },
    {
        "rowId": 5927,
        "timestamp": 1720606385857,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5928,
        "timestamp": 1720606385857,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5929,
        "timestamp": 1720606387137,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 5930,
        "timestamp": 1720606387137,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5931,
        "timestamp": 1720606387137,
        "payload": "UE 1a29: dlsch_rounds 1830117/178492/4109/346, dlsch_errors 76, pucch0_DTX 1272, BLER 0.01658 MCS (1) 17"
    },
    {
        "rowId": 5932,
        "timestamp": 1720606387137,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5933,
        "timestamp": 1720606387137,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5934,
        "timestamp": 1720606387137,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5935,
        "timestamp": 1720606387137,
        "payload": "UE 1a29: CQI 10, RI 1, PMI (0,3)"
    },
    {
        "rowId": 5936,
        "timestamp": 1720606387137,
        "payload": "UE 1a29: MAC:    TX     5386750787 RX       47886728 bytes"
    },
    {
        "rowId": 5937,
        "timestamp": 1720606387137,
        "payload": "UE 1a29: LCID 4: TX     5220993960 RX       12742882 bytes"
    },
    {
        "rowId": 5938,
        "timestamp": 1720606387137,
        "payload": "UE 1a29: ulsch_rounds 224809/1415/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00438 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.0 dB"
    },
    {
        "rowId": 5939,
        "timestamp": 1720606387137,
        "payload": "UE 1a29: LCID 1: TX          13488 RX          97222 bytes"
    },
    {
        "rowId": 5940,
        "timestamp": 1720606388417,
        "payload": "ULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 5941,
        "timestamp": 1720606388417,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 5942,
        "timestamp": 1720606388417,
        "payload": "UE 1a29: CQI 10, RI 1, PMI (0,3)"
    },
    {
        "rowId": 5943,
        "timestamp": 1720606388417,
        "payload": "UE 1a29: dlsch_rounds 1830607/178497/4109/346, dlsch_errors 76, pucch0_DTX 1272, BLER 0.01222 MCS (1) 17"
    },
    {
        "rowId": 5944,
        "timestamp": 1720606388417,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5945,
        "timestamp": 1720606388417,
        "payload": "UE 1a29: ulsch_rounds 224862/1417/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.01949 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 5946,
        "timestamp": 1720606388417,
        "payload": "UE 1a29: LCID 4: TX     5222393902 RX       12746521 bytes"
    },
    {
        "rowId": 5947,
        "timestamp": 1720606388417,
        "payload": "UE 1a29: MAC:    TX     5388198233 RX       47898603 bytes"
    },
    {
        "rowId": 5948,
        "timestamp": 1720606388417,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5949,
        "timestamp": 1720606388417,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5950,
        "timestamp": 1720606388417,
        "payload": "UE 1a29: LCID 1: TX          13491 RX          97244 bytes"
    },
    {
        "rowId": 5951,
        "timestamp": 1720606389697,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 5952,
        "timestamp": 1720606389697,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 5953,
        "timestamp": 1720606389697,
        "payload": "UE 1a29: CQI 10, RI 1, PMI (0,3)"
    },
    {
        "rowId": 5954,
        "timestamp": 1720606389697,
        "payload": "UE 1a29: ulsch_rounds 224912/1417/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00550 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 5955,
        "timestamp": 1720606389697,
        "payload": "UE 1a29: LCID 4: TX     5224125140 RX       12750019 bytes"
    },
    {
        "rowId": 5956,
        "timestamp": 1720606389697,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5957,
        "timestamp": 1720606389697,
        "payload": "UE 1a29: dlsch_rounds 1831181/178518/4110/346, dlsch_errors 76, pucch0_DTX 1272, BLER 0.02963 MCS (1) 17"
    },
    {
        "rowId": 5958,
        "timestamp": 1720606389697,
        "payload": "UE 1a29: MAC:    TX     5389981129 RX       47908973 bytes"
    },
    {
        "rowId": 5959,
        "timestamp": 1720606389697,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5960,
        "timestamp": 1720606389697,
        "payload": "UE 1a29: LCID 1: TX          13494 RX          97266 bytes"
    },
    {
        "rowId": 5961,
        "timestamp": 1720606389697,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5962,
        "timestamp": 1720606390977,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 5963,
        "timestamp": 1720606390977,
        "payload": "UE 1a29: dlsch_rounds 1831698/178524/4111/346, dlsch_errors 76, pucch0_DTX 1273, BLER 0.01708 MCS (1) 17"
    },
    {
        "rowId": 5964,
        "timestamp": 1720606390977,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5965,
        "timestamp": 1720606390977,
        "payload": "UE 1a29: LCID 4: TX     5225541021 RX       12755525 bytes"
    },
    {
        "rowId": 5966,
        "timestamp": 1720606390977,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5967,
        "timestamp": 1720606390977,
        "payload": "UE 1a29: CQI 10, RI 1, PMI (0,3)"
    },
    {
        "rowId": 5968,
        "timestamp": 1720606390977,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5969,
        "timestamp": 1720606390977,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 5970,
        "timestamp": 1720606390977,
        "payload": "UE 1a29: MAC:    TX     5391451742 RX       47923768 bytes"
    },
    {
        "rowId": 5971,
        "timestamp": 1720606390977,
        "payload": "UE 1a29: ulsch_rounds 224975/1418/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00737 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 24.5 dB"
    },
    {
        "rowId": 5972,
        "timestamp": 1720606390977,
        "payload": "UE 1a29: LCID 1: TX          13500 RX          97310 bytes"
    },
    {
        "rowId": 5973,
        "timestamp": 1720606392257,
        "payload": "UE 1a29: dlsch_rounds 1832178/178525/4111/346, dlsch_errors 76, pucch0_DTX 1273, BLER 0.00526 MCS (1) 17"
    },
    {
        "rowId": 5974,
        "timestamp": 1720606392257,
        "payload": "[NR_MAC]   Frame.Slot 640.0"
    },
    {
        "rowId": 5975,
        "timestamp": 1720606392257,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 5976,
        "timestamp": 1720606392257,
        "payload": "UE 1a29: CQI 10, RI 1, PMI (0,3)"
    },
    {
        "rowId": 5977,
        "timestamp": 1720606392257,
        "payload": "UE 1a29: ulsch_rounds 225029/1419/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.02008 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 5978,
        "timestamp": 1720606392257,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5979,
        "timestamp": 1720606392257,
        "payload": "UE 1a29: MAC:    TX     5392845145 RX       47938412 bytes"
    },
    {
        "rowId": 5980,
        "timestamp": 1720606392257,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5981,
        "timestamp": 1720606392257,
        "payload": "UE 1a29: LCID 4: TX     5226887289 RX       12762258 bytes"
    },
    {
        "rowId": 5982,
        "timestamp": 1720606392257,
        "payload": "UE 1a29: LCID 1: TX          13503 RX          97332 bytes"
    },
    {
        "rowId": 5983,
        "timestamp": 1720606392257,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5984,
        "timestamp": 1720606393537,
        "payload": "[NR_MAC]   Frame.Slot 768.0"
    },
    {
        "rowId": 5985,
        "timestamp": 1720606393537,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 5986,
        "timestamp": 1720606393537,
        "payload": "UE 1a29: CQI 10, RI 1, PMI (0,2)"
    },
    {
        "rowId": 5987,
        "timestamp": 1720606393537,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 5988,
        "timestamp": 1720606393537,
        "payload": "UE 1a29: dlsch_rounds 1832704/178538/4111/346, dlsch_errors 76, pucch0_DTX 1273, BLER 0.02946 MCS (1) 17"
    },
    {
        "rowId": 5989,
        "timestamp": 1720606393537,
        "payload": "UE 1a29: MAC:    TX     5394371134 RX       47949856 bytes"
    },
    {
        "rowId": 5990,
        "timestamp": 1720606393537,
        "payload": "UE 1a29: LCID 4: TX     5228363655 RX       12765757 bytes"
    },
    {
        "rowId": 5991,
        "timestamp": 1720606393537,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 5992,
        "timestamp": 1720606393537,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5993,
        "timestamp": 1720606393537,
        "payload": "UE 1a29: LCID 1: TX          13506 RX          97354 bytes"
    },
    {
        "rowId": 5994,
        "timestamp": 1720606393537,
        "payload": "UE 1a29: ulsch_rounds 225082/1419/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00510 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.0 dB"
    },
    {
        "rowId": 5995,
        "timestamp": 1720606394817,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 5996,
        "timestamp": 1720606394817,
        "payload": "UE 1a29: CQI 10, RI 1, PMI (0,2)"
    },
    {
        "rowId": 5997,
        "timestamp": 1720606394817,
        "payload": "[NR_MAC]   Frame.Slot 896.0"
    },
    {
        "rowId": 5998,
        "timestamp": 1720606394817,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 5999,
        "timestamp": 1720606394817,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 6000,
        "timestamp": 1720606394817,
        "payload": "UE 1a29: ulsch_rounds 225139/1419/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00144 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 6001,
        "timestamp": 1720606394817,
        "payload": "UE 1a29: dlsch_rounds 1833274/178551/4112/346, dlsch_errors 76, pucch0_DTX 1274, BLER 0.02714 MCS (1) 17"
    },
    {
        "rowId": 6002,
        "timestamp": 1720606394817,
        "payload": "UE 1a29: LCID 1: TX          13509 RX          97376 bytes"
    },
    {
        "rowId": 6003,
        "timestamp": 1720606394817,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 6004,
        "timestamp": 1720606394817,
        "payload": "UE 1a29: MAC:    TX     5396206272 RX       47961705 bytes"
    },
    {
        "rowId": 6005,
        "timestamp": 1720606394817,
        "payload": "UE 1a29: LCID 4: TX     5230146685 RX       12769490 bytes"
    },
    {
        "rowId": 6006,
        "timestamp": 1720606396097,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 34 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 6007,
        "timestamp": 1720606396097,
        "payload": "[NR_MAC]   Frame.Slot 0.0"
    },
    {
        "rowId": 6008,
        "timestamp": 1720606396097,
        "payload": "UE 1a29: CQI 10, RI 1, PMI (0,3)"
    },
    {
        "rowId": 6009,
        "timestamp": 1720606396097,
        "payload": "UE 1a29: MAC:    TX     5397513204 RX       47972702 bytes"
    },
    {
        "rowId": 6010,
        "timestamp": 1720606396097,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 6011,
        "timestamp": 1720606396097,
        "payload": "UE 1a29: LCID 4: TX     5231409435 RX       12772844 bytes"
    },
    {
        "rowId": 6012,
        "timestamp": 1720606396097,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 6013,
        "timestamp": 1720606396097,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 6014,
        "timestamp": 1720606396097,
        "payload": "UE 1a29: dlsch_rounds 1833743/178620/4118/347, dlsch_errors 76, pucch0_DTX 1274, BLER 0.12356 MCS (1) 6"
    },
    {
        "rowId": 6015,
        "timestamp": 1720606396097,
        "payload": "UE 1a29: ulsch_rounds 225192/1419/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00037 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 26.5 dB"
    },
    {
        "rowId": 6016,
        "timestamp": 1720606396097,
        "payload": "UE 1a29: LCID 1: TX          13515 RX          97420 bytes"
    },
    {
        "rowId": 6017,
        "timestamp": 1720606397377,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 6018,
        "timestamp": 1720606397377,
        "payload": "[NR_MAC]   Frame.Slot 128.0"
    },
    {
        "rowId": 6019,
        "timestamp": 1720606397377,
        "payload": "UE 1a29: CQI 10, RI 1, PMI (0,3)"
    },
    {
        "rowId": 6020,
        "timestamp": 1720606397377,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 6021,
        "timestamp": 1720606397377,
        "payload": "UE 1a29: MAC:    TX     5398895866 RX       47984773 bytes"
    },
    {
        "rowId": 6022,
        "timestamp": 1720606397377,
        "payload": "UE 1a29: ulsch_rounds 225248/1419/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00010 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.5 dB"
    },
    {
        "rowId": 6023,
        "timestamp": 1720606397377,
        "payload": "UE 1a29: dlsch_rounds 1834257/178620/4118/347, dlsch_errors 76, pucch0_DTX 1274, BLER 0.03490 MCS (1) 10"
    },
    {
        "rowId": 6024,
        "timestamp": 1720606397377,
        "payload": "UE 1a29: LCID 4: TX     5232766629 RX       12776312 bytes"
    },
    {
        "rowId": 6025,
        "timestamp": 1720606397377,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 6026,
        "timestamp": 1720606397377,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 6027,
        "timestamp": 1720606397377,
        "payload": "UE 1a29: LCID 1: TX          13518 RX          97442 bytes"
    },
    {
        "rowId": 6028,
        "timestamp": 1720606398657,
        "payload": "[NR_MAC]   Frame.Slot 256.0"
    },
    {
        "rowId": 6029,
        "timestamp": 1720606398657,
        "payload": "UE 1a29: MAC:    TX     5400488969 RX       47996201 bytes"
    },
    {
        "rowId": 6030,
        "timestamp": 1720606398657,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 6031,
        "timestamp": 1720606398657,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 6032,
        "timestamp": 1720606398657,
        "payload": "UE 1a29: dlsch_rounds 1834796/178634/4118/347, dlsch_errors 76, pucch0_DTX 1274, BLER 0.02656 MCS (1) 9"
    },
    {
        "rowId": 6033,
        "timestamp": 1720606398657,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 6034,
        "timestamp": 1720606398657,
        "payload": "UE 1a29: LCID 1: TX          13521 RX          97464 bytes"
    },
    {
        "rowId": 6035,
        "timestamp": 1720606398657,
        "payload": "UE 1a29: LCID 4: TX     5234307932 RX       12779963 bytes"
    },
    {
        "rowId": 6036,
        "timestamp": 1720606398657,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 6037,
        "timestamp": 1720606398657,
        "payload": "UE 1a29: ulsch_rounds 225301/1419/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00003 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 25.0 dB"
    },
    {
        "rowId": 6038,
        "timestamp": 1720606398657,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 6039,
        "timestamp": 1720606399937,
        "payload": "[NR_MAC]   Frame.Slot 384.0"
    },
    {
        "rowId": 6040,
        "timestamp": 1720606399937,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -106 (32 meas)"
    },
    {
        "rowId": 6041,
        "timestamp": 1720606399937,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 6042,
        "timestamp": 1720606399937,
        "payload": "UE 1a29: LCID 4: TX     5236094916 RX       12796466 bytes"
    },
    {
        "rowId": 6043,
        "timestamp": 1720606399937,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 6044,
        "timestamp": 1720606399937,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 6045,
        "timestamp": 1720606399937,
        "payload": "UE 1a29: ulsch_rounds 225369/1419/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00001 MCS (1) 27 (Qm 8  dB) NPRB 12  SNR 27.0 dB"
    },
    {
        "rowId": 6046,
        "timestamp": 1720606399937,
        "payload": "UE 1a29: MAC:    TX     5402338790 RX       48021842 bytes"
    },
    {
        "rowId": 6047,
        "timestamp": 1720606399937,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 6048,
        "timestamp": 1720606399937,
        "payload": "UE 1a29: LCID 1: TX          13524 RX          97486 bytes"
    },
    {
        "rowId": 6049,
        "timestamp": 1720606399937,
        "payload": "UE 1a29: dlsch_rounds 1835382/178684/4118/347, dlsch_errors 76, pucch0_DTX 1274, BLER 0.08056 MCS (1) 9"
    },
    {
        "rowId": 6050,
        "timestamp": 1720606401217,
        "payload": "UULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL[NR_MAC]   Frame.Slot 512.0"
    },
    {
        "rowId": 6051,
        "timestamp": 1720606401217,
        "payload": "UE RNTI 1a29 CU-UE-ID 1 in-sync PH 36 dB PCMAX 23 dBm, average RSRP -107 (32 meas)"
    },
    {
        "rowId": 6052,
        "timestamp": 1720606401217,
        "payload": "UE 1a29: UL-RI 1, TPMI 0"
    },
    {
        "rowId": 6053,
        "timestamp": 1720606401217,
        "payload": "UE 1a29: CQI 6, RI 2, PMI (0,0)"
    },
    {
        "rowId": 6054,
        "timestamp": 1720606401217,
        "payload": "UE 1a29: MAC:    TX     5403662891 RX       48033704 bytes"
    },
    {
        "rowId": 6055,
        "timestamp": 1720606401217,
        "payload": "UE 1a29: ulsch_rounds 225424/1419/41/8, ulsch_errors 4, ulsch_DTX 136, BLER 0.00000 MCS (1) 27 (Qm 8  dB) NPRB 5  SNR 27.0 dB"
    },
    {
        "rowId": 6056,
        "timestamp": 1720606401217,
        "payload": "UE 1a29: LCID 2: TX              0 RX              0 bytes"
    },
    {
        "rowId": 6057,
        "timestamp": 1720606401217,
        "payload": "UE 1a29: LCID 5: TX            650 RX           1655 bytes"
    },
    {
        "rowId": 6058,
        "timestamp": 1720606401217,
        "payload": "UE 1a29: LCID 4: TX     5237361656 RX       12800242 bytes"
    },
    {
        "rowId": 6059,
        "timestamp": 1720606401217,
        "payload": "UE 1a29: dlsch_rounds 1835868/178713/4118/347, dlsch_errors 76, pucch0_DTX 1274, BLER 0.06437 MCS (1) 9"
    },
    {
        "rowId": 6060,
        "timestamp": 1720606401217,
        "payload": "UE 1a29: LCID 1: TX          13530 RX          97530 bytes"
    },
    {
        "rowId": 6061,
        "timestamp": 1720606401761,
        "payload": "[PHY]   Killing gNB 0 processing threads"
    },
    {
        "rowId": 6062,
        "timestamp": 1720606401760,
        "payload": "** Caught SIGTERM, shutting down"
    },
    {
        "rowId": 6063,
        "timestamp": 1720606401763,
        "payload": "oai_exit=1"
    },
    {
        "rowId": 6064,
        "timestamp": 1720606401763,
        "payload": "Exiting ru_thread "
    },
    {
        "rowId": 6065,
        "timestamp": 1720606401763,
        "payload": "Returned from ITTI signal handler"
    },
    {
        "rowId": 6066,
        "timestamp": 1720606402439,
        "payload": "[HW]   releasing USRP"
    },
    {
        "rowId": 6067,
        "timestamp": 1720606402439,
        "payload": "UUOO[PHY]   Stopping RU 0 processing threads"
    },
    {
        "rowId": 6068,
        "timestamp": 1720606402439,
        "payload": "[HW]   stopped USRP write thread"
    },
    {
        "rowId": 6069,
        "timestamp": 1720606403328,
        "payload": "OAIBOX: Error sending data to socket!LL[PHY]   RU 0 RF device stopped"
    },
    {
        "rowId": 6070,
        "timestamp": 1720606403328,
        "payload": "[PHY]   Freeing RU signal buffers (if_south local RF) nb_tx 2"
    },
    {
        "rowId": 6071,
        "timestamp": 1720606403419,
        "payload": "Bye."
    }
]

const axios = require('axios')

function write(payload) {
    const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      };

    axios.post('http://localhost:3000/api/gnb/logs', payload, config)
    .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
}

function main() {
    for (let message of messages) {
        delete message.rowId
        write(message)
    }
}

main()
