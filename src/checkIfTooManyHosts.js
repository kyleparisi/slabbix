var checkIfTooManyHosts = function (hosts) {

  var promise = new Promise(function (resolve, reject) {
    if (hosts.length > 6) {
      var msg = 'Number of hosts is limited to 6, please be more specific (LIKE "%..%"): ';
      hosts.map(function (host) {
        msg += host.name + ', ';
      });

      msg = msg.replace(/,\s*$/, '');
      reject(msg);
    }

    resolve(hosts);
  });

  return promise;

};

module.exports = checkIfTooManyHosts;
