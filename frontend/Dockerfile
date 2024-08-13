# CRA
FROM node:21.7.3-alpine3.20 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm i
COPY . ./
RUN npm run build

# Nginx
FROM nginx:latest
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80 5173
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]