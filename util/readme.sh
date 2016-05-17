#!/usr/bin/env bash

REQUIREMENTS=$(bash util/requirements_doc.sh)
DEFAULTS=$(bash util/defaults_doc.sh)
SLACK=$(bash util/slack_doc.sh)
FEATURES=$(bash util/features_doc.sh)
NOTES=$(bash util/notes_doc.sh)
DEVELOPMENT=$(bash util/development_doc.sh)

cat  << EOF
# Zabbix Graphs To Slack

This project downloads graphs from zabbix to local disk to then posts to slack
via hubot.

\`\`\`bash
npm install s slabbix
\`\`\`

$REQUIREMENTS

$DEFAULTS

$SLACK

$FEATURES

$NOTES

$DEVELOPMENT

_documentation is auto generated_
EOF
