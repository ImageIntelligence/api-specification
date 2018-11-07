#!/bin/bash

set -eo

BRANCH_NAME_CLEAN=$(sed 's/\//-/g' <<< "$BRANCH_NAME")
DOCKER_TAG="$COMMIT_ID.$BRANCH_NAME_CLEAN"

docker build --tag imageintelligence/$APP_NAME:$DOCKER_TAG .
if [[ ! -z "$VERSION" ]]; then
  docker run --rm -e VERSION=$VERSION -e NPM_AUTH_TOKEN=$NPM_AUTH_TOKEN imageintelligence/$APP_NAME:$DOCKER_TAG bash -lc "sh /root/app/scripts/npm_publish.sh"
  echo "Published api-specification@$VERSION to NPM"
fi
