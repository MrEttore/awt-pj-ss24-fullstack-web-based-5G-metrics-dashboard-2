FROM node:21.7.3-alpine3.20
WORKDIR /usr/src/app
# Kopiere package.json und package-lock.json in das Arbeitsverzeichnis
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]