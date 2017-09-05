FROM node:6.11.2-alpine

WORKDIR /home/react

EXPOSE 8080

ADD . /home/react

RUN npm install --quiet