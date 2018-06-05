FROM node:carbon-alpine

WORKDIR /usr/src/slrm-w

COPY package*.json ./

RUN npm install --only=production

EXPOSE 8080

CMD ["npm", "start"]
