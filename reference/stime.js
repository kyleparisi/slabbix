# Need to put server time in future to represent now in the graph returned by zabbix
var dateFormat = require('dateformat');
var now = new Date();
var modifiedYear = now.getFullYear() + 2;
console.log(modifiedYear + dateFormat(now, "mmddhhMMss"));
