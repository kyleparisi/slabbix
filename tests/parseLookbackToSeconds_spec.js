const assert = require('assert');
const parser = require('../src/parseLookBackToSeconds');

assert(parser('cpu util lookback:1h') === 3600);
assert(parser('cpu util l:1h') === 3600);
assert(parser('cpu util l:1d') === 86400);
// w || m not supported
assert(parser('cpu util l:1w') === 3600);
assert(parser('cpu      l:1m') === 3600);
