#! /bin/bash

set -euo pipefail

PWD=$(pwd)

COMPUTED_COMMON_PATH=$(node ./bin/dir.js ${WATCHEXEC_CREATED_PATH:-} ${WATCHEXEC_RENAMED_PATH:-} ${WATCHEXEC_WRITTEN_PATH:-} ${WATCHEXEC_META_CHANGED_PATH:-})
COMMON_PATH=${WATCHEXEC_COMMON_PATH:-$COMPUTED_COMMON_PATH}
TARGET_PATH=${COMMON_PATH:-$PWD}
SEARCH_PATH=${1:-$TARGET_PATH}

echo "Linting ${SEARCH_PATH:-working directory}"

eslint --config ${PWD}/.eslintrc.json --color $SEARCH_PATH || true

echo "Finished linting"
