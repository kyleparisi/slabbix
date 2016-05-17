#!/usr/bin/env bash

echo 'jscs files'
style='airbnb'
./node_modules/.bin/jscs ./src/*.js -p $style
