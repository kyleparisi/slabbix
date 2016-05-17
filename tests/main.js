require('../src/defaults')
  (require('../src/parseLookbackToSeconds')
    ('l:5d'))

require("../src/main")
  ("hello", "disk space")
  .then(require('../src/cleanup'))
  .catch(console.log)
