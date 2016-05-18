var info = require('winston').info;

module.exports = function (data) {

  if (process.argv[2] === '-v' || process.env.HUBOT_LOG_LEVEL === 'debug') {
    info(data);
  }

  return data;
};
