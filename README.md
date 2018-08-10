# node-api

## Build

```bash
docker build -t mthomas/node-api .
```

## Run

```bash
docker run -p 3000:3000 -p 3001:3001 -v "$(pwd)"/src:/usr/src/app/src  mthomas/node-api
```

or, to run in background as daemon...

```bash
docker run -p 3000:3000 -p 3001:3001 -v "$(pwd)"/src:/usr/src/app/src -d mthomas/node-api
```