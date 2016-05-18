var logger = require('./logger');

var storage = {
  url_api: 'process.env.HUBOT_ZABBIX_API_URL (https://zabbix.example.com/zabbix/api_jsonrpc.php)',
  url_cookie: 'process.env.HUBOT_ZABBIX_URL_COOKIE (https://zabbix.example.com/zabbix)',
  url_graph: 'process.env.HUBOT_ZABBIX_URL_GRAPH (https://zabbix.example.com/chart2.php)',
  zabbix_user: 'process.env.HUBOT_ZABBIX_USER (user)',
  zabbix_password: 'process.env.HUBOT_ZABBIX_PASSWORD (password)',
  slack_token: 'process.env.HUBOT_SLACK_TOKEN',

};
var requirements = function (hostname, search, msg) {

  if (arguments.length >= 2) {

    // Server hostname found in zabbix
    storage.hostname = hostname || 'example.com';

    // Search term for name of graph (i.e. cpu util or mem)
    storage.search = search || 'cpu util';
  }

  // TODO(kyle): find a better place for this
  if (msg) storage.msg = msg;

  storage.url_api = process.env.HUBOT_ZABBIX_URL_API || storage.url_api;
  storage.url_cookie = process.env.HUBOT_ZABBIX_URL_COOKIE || storage.url_cookie;
  storage.url_graph = process.env.HUBOT_ZABBIX_URL_GRAPH || storage.url_graph;
  storage.zabbix_user = process.env.HUBOT_ZABBIX_USER || storage.zabbix_user;
  storage.zabbix_password = process.env.HUBOT_ZABBIX_PASSWORD || storage.zabbix_password;
  storage.slack_token = process.env.HUBOT_SLACK_TOKEN || storage.slack_token;

  return storage;
};

module.exports = requirements;
