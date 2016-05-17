var logger = require('./logger');

/**
 * Reduce an array of objects to an array of objects with only graphid and and name properties
 * @param {array} objects - https://www.zabbix.com/documentation/2.0/manual/appendix/api/graph/get
 */
module.exports = function (key) {
  return function (objects) {
    logger('=== Reduce objects ===');
    if (!objects) return;
    objects = objects.result;

    if (objects.length === 0) throw new Error('Nothing found for ' + key);

    return objects.map(function (previous, current) {
      var output = {};
      output[key] = previous[key];
      output.name = previous.name;
      return output;
    }, []);
  };
};
