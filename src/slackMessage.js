var requirements = require('./requirements');
var logger = require('./logger');

var slackMessage = function (message) {
  logger('=== Slacking message ===');

  var r = requirements();
  logger(message);
  var result = r.msg.send(message);
  logger(result);
  logger('=== END ===');

};

module.exports = slackMessage;
