## nodejs 
FROM node:14 

## create directory
WORKDIR /usr/src/app

## copy package*.json
COPY package*.json ./

## npm install
RUN npm install

## copy app source
COPY . .

## expose port 
EXPOSE 9000

CMD [ "node", "server.js" ]

