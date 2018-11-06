FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . /usr/src/app

RUN ng build

EXPOSE 4200

CMD ng serve --prod