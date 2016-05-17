var requirements = require('./requirements');
var request = require('request-promise');
var logger = require('./logger');

/**
 * API authentication, used to set process.env.HUBOT_ZABBIX_TOKEN
 * https://www.zabbix.com/documentation/2.0/manual/appendix/api/user/login
 */
options = {
  method: 'POST',
  url: '',
  headers: {
    'content-type': 'application/json',
  },
  body: {
    jsonrpc: '2.0',
    method: 'user.login',
    params: {
      user: '',
      password: '',
    },
    id: 1,
    auth: null,
  },
  json: true,
};

var post = function () {
  logger('=== Authenticate via API ===');

  var r = requirements();
  options.url = r.url_api;
  options.body.params.user = r.zabbix_user;
  options.body.params.password = r.zabbix_password;

  logger(options);
  return request(options);
};

module.exports = post;
