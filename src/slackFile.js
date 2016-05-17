var fs = require('fs');
var request = require('request-promise');
var path = require('path');
var logger = require('./logger');
var requirements = require('./requirements');
var imgcat = require('./imgcat');

var options = {
  method: 'POST',
  url: 'https://slack.com/api/files.upload',
  headers: {
    'content-type': 'multipart/form-data',
  },
  formData: {
    file: {
      value: '',    // DYNAMIC: pass a fs.createReadStream('path/to/file')
      options: {
        filename: '',
        contentType: null,
      },
    },
    token: '',    // REQUIRED: process.env.HUBOT_SLACK_TOKEN
    channels: '',  // DYNAMIC: otherwise bot owns file and won't be able to read it
  },
};

/**
 * Upload file to slack channels/users
 * https://api.slack.com/methods/files.upload
 */
module.exports = function (files) {
  if (!files) return;
  logger('=== Start Slack File ===');
  files.map(function (file) {
    if (!file) return;
    var r = requirements();
    file.on('finish', function () {
      logger('=== Finished downloading graph ===');

      var room = r.msg.message.user.room;

      options.formData.file.value = fs.createReadStream(file.path);
      options.formData.file.options.filename = r.hostname + '-' + path.basename(file.path);
      options.formData.channels = room;
      options.formData.token = r.slack_token;

      logger('=== Uploading graph to Slack ===');
      logger(options);
      request(options, function (error, response, body) {
        if (error) throw new Error(error);

        // Only output for this whole process
        console.log(JSON.parse(body));
      });

    });
  });

  return files;
};
