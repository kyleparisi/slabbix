#!/usr/bin/env bash

cat << EOF

## Development

\`\`\`bash
# curently using node v5.3.0
npm install
\`\`\`

A pre-commite hook will run \`util/checks.sh\`.  Also this
README.md file will be rendered.

\`\`\`bash
node tests/main.js -v
\`\`\`

The \`-v\` flag controls the logging output for all steps in the process flow.
The logging library can be swapped at any time in \`./src/logger.js\`.

__Hubot:__

One way to test this library with hubot is to symlink your local dev copy to the
\`node_modules\` in your local hubot. Then proceed to run \`./bin/hubot\` as changes
are made to this library.

EOF
