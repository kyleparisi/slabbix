var fs = require('fs');
var logger = require('./logger');

var cleanup = function (files) {
  logger('=== Clean up ===');
  files.map(function (file) {
    file.on('finish', function () {
      fs.unlink(file.path);
    });
  });
};

module.exports = cleanup;
