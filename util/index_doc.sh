#!/usr/bin/env bash

cat << EOF
// Description:
//   Query zabbix for a graph to upload to slack
//
// Dependencies:
//   zabbix-to-slack
//
// Configuration:
//   HUBOT_ZABBIX_URL_API
//   HUBOT_ZABBIX_URL_COOKIE
//   HUBOT_ZABBIX_URL_GRAPH
//   HUBOT_ZABBIX_USER
//   HUBOT_ZABBIX_PASSWORD
//   HUBOT_SLACK_TOKEN
//
// Commands:
//   $(grep // ./src/slackCommands.js | sed 's/\/\/ //')
//
// Author:
//   $(node -p 'require("./package.json").author')

EOF
