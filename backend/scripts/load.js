const fs = require('fs');
const axios = require('axios');
const path = require('path');

// Pfad zur JSON-Datei
const filePath = path.join(__dirname, 'dashboard.oaibox.com.har');

// Funktion zum Einlesen und Verarbeiten der JSON-Datei
async function loadData() {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const jsonData = JSON.parse(data);

        // Durchlaufen aller Einträge in log.entries
        for (const entry of jsonData.log.entries) {
            if (entry._webSocketMessages) {
                // Durchlaufen aller WebSocket-Nachrichten
                for (const message of entry._webSocketMessages) {
                    if (message.type === 'receive') {
                        const { data } = message;

                        // Ermitteln des Topics und des Payloads
                        const match = data.match(/destination:\/topic\/[^\n]*\.(gnb\.[^\n]*|cn5g\.[^\n]*)[^\n]*\n(?:[^\n]*\n)*\n({.*})\u0000$/);
                        if (match) {
                            const topic = match[1];
                            const payload = JSON.parse(match[2]);

                            // Anpassen des Pfads
                            let endpoint;
                            if (topic.startsWith('gnb.logs')) {
                                endpoint = '/api/gnb/logs';
                            } else if (topic.startsWith('gnb.telemetry')) {
                                endpoint = '/api/gnb/telemetry';
                            } else if (topic.startsWith('cn5g.telemetry')) {
                                endpoint = '/api/cn5g/telemetry';
                                console.log(payload)
                            } else {
                                console.error(`Unbekannter Topic-Typ: ${topic}`);
                                continue;
                            }

                            // Senden der Daten an das Backend
                            await sendToBackend(endpoint, payload);
                        }
                    }
                }
            }
        }

        console.log('Daten wurden erfolgreich verarbeitet und gesendet.');

    } catch (error) {
        console.error('Fehler beim Verarbeiten der Daten:', error);
    }
}

// Funktion zum Senden der Daten an das Backend
async function sendToBackend(endpoint, payload) {
    try {
        const url = `http://localhost:3000${endpoint}`;
        const response = await axios.post(url, payload);
        console.log(`Erfolgreich gesendet an ${url}:`, response.status);
    } catch (error) {
        console.error(`Fehler beim Senden an ${endpoint}:`, error.message);
    }
}

// Starten des Skripts
loadData();
