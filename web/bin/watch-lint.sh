#! /bin/bash

set -euo pipefail

./bin/watchexec --exts js --watch ./src -i '**/flow-typed/**' -i '**/node_modules/**' './bin/lint.sh'
