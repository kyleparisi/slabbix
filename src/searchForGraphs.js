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
    method: 'graph.get',
    params: {
      limit: 6,
      output: 'extend',
      filter: {
        host: [],  // REQUIRED: Server hostname found in zabbix
      },
      search: {},  // REQUIRED: Search term for name of graph (i.e. cpu util, mem)
    },
    auth: '', // DYNAMIC: set by authAPI.js
    id: 1,
  },
  json: true,
};

/**
 * API request to search graphs for a specified host
 */
module.exports = function (hosts) {
  logger('=== Query for graphs ===');
  var r = requirements();
  options.url = r.url_api;
  options.body.params.search.name = r.search;
  options.body.auth = process.env.zabbix_token;
  hosts.map(function (host) {
    options.body.params.filter.host.push(host.name);
  });

  logger(options);
  return request(options);
};
