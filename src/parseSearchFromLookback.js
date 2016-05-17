/**
 * searchAndOptions ~= 'cpu util lookback:1d'
 * search = 'cpu util'
 * lookback = 'lookback:1d'
 */
var parseSearchFromLookback = function (searchAndOptions) {

  // split out search and lookback
  var lookbackParser = /\s+?(lookback:|l:)(.*)/i;
  var lookback = lookbackParser.exec(searchAndOptions);
  if (lookback) {
    lookback = lookback[2];
  } else {
    lookback = undefined;
  }

  var search = searchAndOptions.replace(lookbackParser, '');

  return {
    search: search,
    lookback: lookback,
  };

};

module.exports = parseSearchFromLookback;
