var request = require('request-promise');
var logger = require('./logger');
var requirements = require('./requirements');

var options = {
  method: 'POST',
  url: '',
  resolveWithFullResponse: true, // needed for headers
  simple: false,  // ignore redirect response
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  },
  form: {
    autologin: 1,
    enter: 'Sign in',
    name: '',
    password: '',
    request: '',
  },
};

/**
 * Cookie auth is needed for the final GET request for the image.
 * This will set the process.env.zabbix_cookie
 */
var post = function () {
  logger('=== Authenticate via Cookies ===');

  var r = requirements();
  options.url = r.url_cookie;
  options.form.name = r.zabbix_user;
  options.form.password = r.zabbix_password;

  logger(options);
  return request(options);
};

module.exports = post;
