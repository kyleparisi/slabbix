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
//   hubot [zabbix|zab] [hostname] [graph name] <lookback:|l:[xd|xh]> - Post graphs to Slack <optional>
//
// Author:
//   kyleparisi

var cleanup = require('./src/cleanup');
var defaults = require('./src/defaults');
var main = require('./src/main');
var parseLookbackToSeconds = require('./src/parseLookbackToSeconds');
var parseSearchFromLookback = require('./src/parseSearchFromLookback');
var requirements = require('./src/requirements');
var slackCommands = require('./slackCommands');
var slackFile = require('./src/slackFile');
var slackMessage = require('./src/slackMessage');

module.exports = function (robot) {
  robot.respond(slackCommands, function (msg) {
    var matches = msg.match;
    var hostname = matches[2];

    var searchAndOptions = matches[3];
    var searchAndLookback = parseSearchFromLookback(searchAndOptions);
    var lookback = searchAndLookback.lookback;
    var search = searchAndLookback.search;

    lookback = parseLookbackToSeconds(lookback);
    if (typeof lookback === 'string') {
      msg.send(lookback);
      return;
    }

    defaults(lookback);
    requirements(hostname, search, msg);

    main()
      .then(slackFile)
      .then(cleanup)
      .catch(slackMessage);

  });
};
