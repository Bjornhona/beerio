# FROM node:14.14.0-alpine // use the same version you have been using to make sure
FROM node:13.12.0-alpine
WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "run", "start"]