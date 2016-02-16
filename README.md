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
* `/sermons/:slug' -- ui/pages/sermons/single.js

## TODOs

* Explore JSX
* Explore TypeScript