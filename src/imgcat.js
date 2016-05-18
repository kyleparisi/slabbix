var termImg = require('term-img');

function fallback() {
  // do something else when not supported
  console.warn('Terminal not supported.  iTerm 2.9+ required.');
}

/**
 * Display image in iterm
 */
var imgcat = function (files) {
  files.map(function (file) {
    if (!file) return;

    file.on('finish', function () {
      // will only post image if > iterm 2.9
      // centos fallback does not happen - bug
      try {
        termImg(file.path, fallback);
      } catch(e) {
        // do nothing
      }

    });
  });

  // pass along for clean up
  return files;

};

module.exports = imgcat;
