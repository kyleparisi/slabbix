var request = require('request-promise');
var fs = require('fs');
var dateFormat = require('dateformat');
var defaults = require('./defaults');
var requirements = require('./requirements');
var logger = require('./logger');

var options = {
  method: 'GET',
  url: '',  // REQUIRED
  qs: {
    graphid: '', // DYNAMIC: A graph id
    period: '', // DEFAULTS
    stime: '',  // DEFAULTS
    width: '', // DEFAULTS
  },
  headers: {
    cookie: '', // DYNAMIC: set from authCookie.js
  },
};

/**
 * Download graph using get request and cookie auth. Save to tmpdir.
 */
module.exports = function (graphs) {
  if (!graphs) throw new Error('List of graph ids required.');

  logger('=== Download graphs ===');

  var r = requirements();
  options.url = r.url_graph;

  var d = defaults();
  options.qs.period = d.graphPeriod;
  options.qs.stime = d.stime;
  options.qs.width = d.graphWidth;

  options.headers.cookie = process.env.zabbix_cookie; // set by authCookie.js

  return graphs.map(function (graph) {

    logger('=== Downloading a graph ===');

    options.qs.graphid = graph.graphid;

    var tempFile = d.tmpdir + '/' + graph.graphid + '_' + graph.name.replace('/', '∕') + '.png';
    logger(tempFile);
    var writer = fs.createWriteStream(tempFile);

    // TODO(kyle): check for unauth response
    request(options).pipe(writer);
    return writer;
  });
};
