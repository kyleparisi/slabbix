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
      termImg(file.path, fallback);
    });
  });

  // pass along for clean up
  return files;

};

module.exports = imgcat;
