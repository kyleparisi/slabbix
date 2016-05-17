var authAPI = require('./authAPI');
var authCookie = require('./authCookie');
var checkIfTooManyHosts = require('./checkIfTooManyHosts');
var cleanup = require('./cleanup');
var downloadGraphs = require('./downloadGraphs');
var imgcat = require('./imgcat');
var logger = require('./logger');
var parseResponseFor = require('./parseResponseFor');
var reduceToNameAnd = require('./reduceToNameAnd');
var request = require('request-promise');
var requirements = require('./requirements');
var searchForGraphs = require('./searchForGraphs');
var searchForHosts = require('./searchForHosts');
var setProcessEnv = require('./setProcessEnv');

/**
 * Entry point
 */
var main = function (hostname, graphSearchTerm) {
  logger(hostname, graphSearchTerm);

  // Validate requirements
  var r;
  if (hostname && graphSearchTerm) {
    r = requirements(hostname, graphSearchTerm);
  } else {
    r = requirements();
  }

  if (!r.hostname || !r.search) {
    var msg = 'hostname, graphSearchTerm are required.  You provided: ';
    msg += r.hostname + ', ';
    msg += r.search + ', ';
    throw new Error(msg);
  }

  // start authentications
  // need to establish cookies for downloadGraphs function
  return authCookie()
      .then(parseResponseFor(['headers', 'set-cookie', 0]))
      .then(logger)
      .then(setProcessEnv('zabbix_cookie'))
      .then(authAPI)
      .then(parseResponseFor(['result']))
      .then(setProcessEnv('zabbix_token'))
      .then(logger)

  // all auth completed by this point
  // search for hostname
      .then(searchForHosts(r.hostname))
      .then(logger)
      .then(reduceToNameAnd('hostid'))
      .then(logger)
      .then(checkIfTooManyHosts)

  // begin queries for graphs
      .then(searchForGraphs)
      .then(logger)
      .then(reduceToNameAnd('graphid'))
      .then(logger)

  // time to download the results
      .then(downloadGraphs)
      .then(imgcat);

};

module.exports = main;
