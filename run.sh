#!/bin/bash

docker run -d -p 8585:8585 --rm \
  --env-file ./app.env \
  --name "ceres-api" \
  -v $HOME/.aws:/root/.aws -v $HOME/.ssh:/root/.ssh \
  -v "$(pwd)"/src:/usr/src/app/src  mthomas/ceres-api 