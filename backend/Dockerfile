# Verwende das offizielle Node.js-Image als Basis
FROM node:14

# Setze das Arbeitsverzeichnis im Container
WORKDIR /usr/src/app

# Kopiere package.json und package-lock.json in das Arbeitsverzeichnis
COPY package*.json ./

# Installiere die Abhängigkeiten
RUN npm install

# Kopiere den Rest des Codes in das Arbeitsverzeichnis
COPY . .

# Exponiere den Port, den die Anwendung nutzen wird
EXPOSE 3000

# Starte die Anwendung
CMD [ "npm", "start" ]