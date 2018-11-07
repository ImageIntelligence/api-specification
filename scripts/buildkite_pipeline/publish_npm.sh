#!/bin/bash

set -eo

node -v
npm -v

if [[ ! -z "$VERSION" ]]; then
  sh ./npm.sh
  npm --no-git-tag-version version $VERSION
  npm publish
  echo "Published api-specification@$VERSION to NPM"
fi
