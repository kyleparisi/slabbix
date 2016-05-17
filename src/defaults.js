var dateFormat = require('dateformat');
var osTmpDir = require('os').tmpdir();
var logger = require('./logger');

var storage;
var defaults;
var now;
var modifiedYear;

defaults = function (graphPeriod, graphWidth, stime, tmpdir) {

  // getter
  if (storage !== undefined && arguments.length === 0) return storage;

  logger('=== Set defaults ===');

  // Graph period - Window of time to graph
  graphPeriod = graphPeriod || 3600;

  // Graph width - image width
  graphWidth = graphWidth || 1280;

  // Server time - A time in the future to represent now or a time in the past
  now = new Date();
  modifiedYear = now.getFullYear() + 2;
  stime = stime || modifiedYear + dateFormat(now, 'mmddhhMMss');

  // Temporary Directory - where to write image to disk
  tmpdir = tmpdir || osTmpDir;

  storage = {
    graphWidth: graphWidth,
    graphPeriod: graphPeriod,
    stime: stime,
    tmpdir: tmpdir,
  };

  logger(storage);
  return storage;
};

module.exports = defaults;
