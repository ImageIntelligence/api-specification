#!/bin/bash
NPMRC_FILE=$HOME/.npmrc
touch $NPMRC_FILE

cat <<EOF >$NPMRC_FILE
//registry.npmjs.org/:_authToken=$NPM_AUTH_TOKEN
scope=image-intelligence
@image-intelligence:registry=https://registry.npmjs.org
EOF
