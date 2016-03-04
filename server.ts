
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import * as bugsnag from "bugsnag";
import * as express from "express";
import * as wpcom from "wpcom";
import {IndexPage} from "./ui/pages/index";
import {SermonPage} from "./ui/pages/sermons/single";
import "newrelic";

const app = express();

switch (process.env.NODE_ENV) {
  case 'production':
    require('./../production.js');
    bugsnag.register(process.env.BUGSNAG_API_KEY);
    break;
}


function renderFullHtmlPage(render: () => Promise<React.ReactElement<any>>): Promise<string> {
  return render()
      .then((reactElement) => ReactDOMServer.renderToStaticMarkup(reactElement))
      .then((markup) => `
        <!DOCTYPE html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <script src="/ui/client.bundle.js" async></script>
          </head>
          <body>
            <div id="root">
              ${markup}
            </div>
          </body>
        </html>
      `);
}

var routes = [
  SermonPage,
  IndexPage,
];

routes.forEach(pageConfig => {
  app.get(pageConfig.urlPattern, function (req, res) {
    return renderFullHtmlPage(() => pageConfig.render(req.params))
        .then((content) => res.send(content))
        .catch(({stack}) => res.send(`<pre>${stack}</pre>`));
  });
});

app.use(express.static('_out'));
app.use('/node_modules/bootstrap/dist', express.static('node_modules/bootstrap/dist'));

const server = app.listen(process.env.PORT || 1743, function() {
  console.log(`CompassHB ready for requests on port ${server.address().port}!`);
});
