FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]