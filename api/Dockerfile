FROM node:18.16.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3333
CMD [ "node", "dist/server.js" ]