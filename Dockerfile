FROM node:10.13.0-slim
LABEL MAINTAINER="David Vuong <david@imageintelligence.com>"

COPY . /root/app
WORKDIR /root/app

RUN npm i && node -e "console.log(JSON.stringify(require('./index').v2, null, 2))"
