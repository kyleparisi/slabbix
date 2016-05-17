var util = require('util');

function reduceObject(filters, response) {
  return filters.reduce(function (prev, curr) {
      return prev[curr];
    }, response);
}

/**
 * Utility function to reduce an object based on an array of property strings
 */
var parseResponseFor = function (filters) {
  return function (response) {
      if (!response) return;

      if (util.isArray(response)) {
        return response.map(function (aResponse) {
            return reduceObject(filters, aResponse);
          });
      }

      return reduceObject(filters, response);
    };
};

module.exports = parseResponseFor;
