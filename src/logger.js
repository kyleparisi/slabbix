var info = require('winston').info;

module.exports = function (data) {

  if (process.argv[2] === '-v') {
    info(data);
  }

  return data;
};
