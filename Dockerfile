FROM imageintelligence/nodejs:2a0b500eb1aae78740602d304dc0f5b90a87e567
LABEL MAINTAINER="David Vuong <david@imageintelligence.com>"

COPY . /root/app
WORKDIR /root/app

RUN npm i && node -e "console.log(JSON.stringify(require('./index').v2, null, 2))"
