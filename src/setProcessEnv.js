/**
 * Utility function to set env variable
 */
module.exports = function (ENV) {
  return function (value) {
    process.env[ENV] = value;
  };
};
