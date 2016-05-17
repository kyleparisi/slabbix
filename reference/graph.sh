#!/bin/bash

# graph.sh user password chartid
# 5-29-2009
# This script expects three arguments, the first is the zabbix login
# the second is the password and the third is the numeric chart id
#
# **** WARNING!!!! ****
# THIS SCRIPT DOES NOT DO ANY ERROR CHECKING! DO NOT USE BLINDLY
# Also there is no simple way to check the validity of a graph id or whether
# the results were successful as Zabbix will always return a JPEG image
#
# How it works:
# First we need to log into the zabbix system and receive a session id
# cookie.  Then when we have the cookie we can then retrieve the graph.
# The cookie file is deleted after every execution and requested anew
# to prevent stale cookies.

zbx_host="https://zabbix.example.com"
cookies="/tmp/zabbix-cookies.txt"
image="/tmp/zabbix-chart.jpg"
period=3600
width=829

result=$(wget --save-cookies=$cookies --keep-session-cookies --post-data="name=$1&password=$2&enter=Sign in&autologin=1&request=" -O - -S $zbx_host/index.php?login=1 | grep document.location)

# for some stupid reason zabbix thinks it's +2 years date
year=$(($(date +%Y) + 2))
date=$year$(date +%m%d%H%M%S)

if [ "$result" ]
then
	echo "Authenticated successfully, getting graph"
	echo "$zbx_host/chart2.php?graphid=$3&width=$width&period=$period&stime=$date"
	wget --load-cookies=$cookies -O $image -q "$zbx_host/chart2.php?graphid=$3&width=$width&period=$period&stime=$date"
fi

# rm $cookies

exit 0
