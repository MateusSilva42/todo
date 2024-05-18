FROM node:18.16.0 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19.0-alpine
COPY --from=build /app/dist /usr/share/nginx/html