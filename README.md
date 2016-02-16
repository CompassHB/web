# CompassHB.com Node frontend

This will be the new website for https://compasshb.com!

## Development commands

* Compile TypeScript to JS: `npm run compile`
* Start server on port `process.env.PORT`: `npm start`
* Run Jasmine tests: `npm test`


## Overview

UI code lives in ui/ folder.

The code for each landing page is under `/pages/`.
The directory structure attempts to match the URL structure if possible.

Examples:

* `/` -- ui/pages/index.js
* `/sermons/:slug` -- ui/pages/sermons/single.js

## Docker Reference

Commands to test changes to the Dockerfile locally:

```
docker build -t www .
docker run -p 1743:1743 -d www
docker-machine ip default
```

Commands for the CI server:

```
docker build -t revival-containers:www .
docker tag revival-containers:www 427935221337.dkr.ecr.us-east-1.amazonaws.com/revival-containers:www
docker push 427935221337.dkr.ecr.us-east-1.amazonaws.com/revival-containers:www
```
