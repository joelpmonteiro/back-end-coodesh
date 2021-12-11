FROM node:latest

WORKDIR /back-end-coodesh

COPY package.json /back-end-coodesh

RUN npm install

COPY . /back-end-coodesh

CMD node index.js

EXPOSE 3333
