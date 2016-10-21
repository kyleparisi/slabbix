# Zabbix Graphs To Slack

This project downloads graphs from zabbix to local disk to then posts to slack
via hubot.

[no longer on npm]


### Requirements:

```javascript
# ./src/requirements.js
{
 "url_api": "process.env.HUBOT_ZABBIX_API_URL (https://zabbix.example.com/zabbix/api_jsonrpc.php)",
 "url_cookie": "process.env.HUBOT_ZABBIX_URL_COOKIE (https://zabbix.example.com/zabbix)",
 "url_graph": "process.env.HUBOT_ZABBIX_URL_GRAPH (https://zabbix.example.com/chart2.php)",
 "zabbix_user": "process.env.HUBOT_ZABBIX_USER (user)",
 "zabbix_password": "process.env.HUBOT_ZABBIX_PASSWORD (password)",
 "slack_token": "process.env.HUBOT_SLACK_TOKEN",
 "hostname": "example.com",
 "search": "cpu util"
}
```


### Defaults

```javascript
{
 "graphWidth": 1280,
 "graphPeriod": 3600,
 "stime": "20180517034319",
 "tmpdir": "/tmp"
}
```

stime - a time in the future to represent now

tmpdir - based on OS


### Slack
```
hubot [zabbix|zab] [hostname] [graph name] <lookback:|l:[xd|xh]> - Post graphs to Slack <optional>
```

Hostname is a search term.  It's limited to a total of 6 hosts otherwise an
exception is thrown to be more specific with the list of resulting hosts.
Graph name is a search term.


### Features

  - Hostname searching
  - Graph searching
  - iTerm 2.9+ image rendering support
  - Slack _and_ command line support

![iterm support](https://d.pr/i/11EzP.jpg)


### Notes

By default the `graph.get` method call to zabbix is limited to 6.  This drives
the limits to be something like: 6 hosts, 1 graph each or the inverse of 1 host,
6 graphs.

iTerm image support requires version 2.9 or above as it is a beta feature.

This library was not tested across all zabbix api versions.


## Development

```bash
# curently using node v5.3.0
npm install
```

A pre-commite hook will run `util/checks.sh`.  Also this
README.md file will be rendered.

```bash
node tests/main.js -v
```

The `-v` flag controls the logging output for all steps in the process flow.
The logging library can be swapped at any time in `./src/logger.js`.

__Hubot:__

One way to test this library with hubot is to symlink your local dev copy to the
`node_modules` in your local hubot. Then proceed to run `./bin/hubot` as changes
are made to this library.

_documentation is auto generated_
