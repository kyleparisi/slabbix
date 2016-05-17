#!/usr/bin/env bash

cat  << EOF

### Slack
\`\`\`
$(grep '//' ./slackCommands.js | sed 's/\/\/ //')
\`\`\`

Hostname is a search term.  It's limited to a total of 6 hosts otherwise an
exception is thrown to be more specific with the list of resulting hosts.
Graph name is a search term.
EOF
