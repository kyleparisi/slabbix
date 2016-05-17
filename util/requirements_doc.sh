#!/bin/bash

cat << EOF

### Requirements:

\`\`\`javascript
# ./src/requirements.js
$(env -i /usr/local/bin/node -p "JSON.stringify(require('./src/requirements')('example.com', 'cpu util'), null, ' ')")
\`\`\`

EOF
