var request = require('request-promise');
var requirements = require('./requirements');
var logger = require('./logger');

var options = {
  method: 'POST',
  url: '',  // REQUIRED
  headers: {
    'content-type': 'application/json',
  },
  body: {
    jsonrpc: '2.0',
    method: 'host.get',
    params: {
      output: 'extend',
      search: {},
    },
    auth: '',
    id: 1,
  },
  json: true,
};

module.exports = function (name) {
  return function () {
    logger('=== Search for hosts ===');
    var r = requirements();
    options.url = r.url_api;
    options.body.auth = process.env.zabbix_token;
    options.body.params.search.name = name;

    return request(options);
  };
};
