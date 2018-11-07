#!/bin/bash

set -eo

if [[ ! -z "$VERSION" ]]; then
  sh ./scripts/npm.sh
  npm --no-git-tag-version version $VERSION
  npm publish
  echo "Published api-specification@$VERSION to NPM"
fi
