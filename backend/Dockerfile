FROM node:14 AS dependencies
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

FROM node:14-alpine
WORKDIR /usr/src/app
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
