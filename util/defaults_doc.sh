#!/bin/bash

cat << EOF

### Defaults

\`\`\`javascript
$(node -p "JSON.stringify(require('./src/defaults')(), null, ' ')")
\`\`\`

stime - a time in the future to represent now

tmpdir - based on OS

EOF
