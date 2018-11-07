#!/bin/bash

set -eo

sh /root/app/scripts/npm.sh
npm --no-git-tag-version version $VERSION
npm publish
