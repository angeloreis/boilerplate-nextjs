#!/bin/sh
. "$(dirname "$0"/_/husky.sh)"

npx --no-install lint-staged
