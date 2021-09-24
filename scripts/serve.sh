#!/bin/bash

# args
port=$1
watch=$2
bin=live-server

# existing
kill `pgrep -f $bin` 2>/dev/null

# main
npx $bin --port=$port --watch=$watch --no-browser &
pid=$!
sleep 0.5
echo "$bin started, pid: $pid!"
echo "Run kill $pid to terminate"

# release terminal
sleep 0.5
cat <<END 
END
