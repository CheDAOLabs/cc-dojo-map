#!/bin/bash
set -euo pipefail
pushd $(dirname "$0")/..

export WORLD_ADDRESS="0x52bec888add6c968772ca5f240b0da537dff15863eb6d5a37c931010dd26bb2";

# enable system -> component authorizations
COMPONENTS=("Position" "Moves" )

for component in ${COMPONENTS[@]}; do
    sozo auth writer $component spawn --world $WORLD_ADDRESS
done

for component in ${COMPONENTS[@]}; do
    sozo auth writer $component move --world $WORLD_ADDRESS
done

echo "Default authorizations have been successfully set."