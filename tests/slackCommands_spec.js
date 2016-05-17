const assert = require('assert');
const sc = require('../slackCommands');

assert(! sc.test('zabbix') 					|| sc.test('zab'));
assert(! sc.test('zabbix example') 			|| sc.test('zab example'));
assert(! sc.test('zabbix example.com') 		|| sc.test('zab exmaple.com'));

assert(sc.test('zabbix example cpu')		|| sc.test('zab example cpu'));
assert(sc.test('zabbix example.com cpu')	|| sc.test('zab example.com cpu'))

console.log(sc.exec('zabbix example.com cpu util lookback'));
assert(sc.exec('zabbix example.com cpu util lookback')[3] === 'cpu util lookback')
assert(sc.exec('zabbix example.com cpu util lookback:1d')[3] === 'cpu util lookback:1d')
