#!/bin/bash

# args
port=$1
watch=$2
bin=live-server

# existing
pid=`pgrep -f $bin`
[[ -n $pid ]] && kill $pid

# main
npx $bin --port=$port --watch=$watch &
pid=$!
sleep 0.3
echo "$bin started, pid: $pid!"
echo "Run kill $pid to terminate"

# release terminal
sleep 0.3
cat <<END 
END
