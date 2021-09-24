#!/bin/bash

# args
src=$1
dist=$2

# clean up
[[ -d $dist ]] && rm -rf $dist/*

# functions
build() {
    npx rollup -c --environment file:$1,dist:$dist
}

# main
echo "Looking for apps in $src..."

for a in `ls -d $src/*`; do
    echo "App: $a"
    for f in `find $a -type f`; do
        echo "Found file: $f"
        build $f
    done
done
