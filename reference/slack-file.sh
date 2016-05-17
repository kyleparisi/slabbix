#!/bin/bash
# https://api.slack.com/methods/files.upload
echo "Sending graph to slack"
curl -F file=@"/path/to/file" -F token=xxxx-000000-XXXXXX -F channels=xxxx https://slack.com/api/files.upload
