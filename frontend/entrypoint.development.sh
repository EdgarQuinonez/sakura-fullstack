#!/bin/sh

cp -rfu /cache/node_modules/. /usr/local/app/node_modules/

ng serve --host=0.0.0.0 --port=4200