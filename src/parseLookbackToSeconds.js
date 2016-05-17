/**
 * Parse lookback to seconds
 * lookback will look something like lookback:2d or l:1h
 */
var lookbackToSeconds = function (lookback) {
  if (!lookback) return;
  var problemMsg = 'Did not understand that lookback: ' + lookback;
  lookback = lookback.split(':').pop();
  lookback = /(\d)(\w)/i.exec(lookback);
  if (lookback === null) return problemMsg;
  var multiplier = lookback[1];
  var unit = lookback[2];
  var seconds;
  switch (unit) {
    case 'd':	// days
      seconds = multiplier * 24 * 60 * 60;
      break;
    case 'h':	// hours
      seconds = multiplier * 60 * 60;
      break;
    default:
      seconds = 3600;
      break;
  }
  return seconds;
};

module.exports = lookbackToSeconds;
