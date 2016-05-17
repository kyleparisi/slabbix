#!/usr/bin/env bash

cat << EOF

### Notes

By default the \`graph.get\` method call to zabbix is limited to 6.  This drives
the limits to be something like: 6 hosts, 1 graph each or the inverse of 1 host,
6 graphs.

iTerm image support requires version 2.9 or above as it is a beta feature.

This library was not tested across all zabbix api versions.

EOF
