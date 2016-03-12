
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import * as express from "express";
import * as wpcom from "wpcom";
import {AboutBeliefsPage} from "./ui/pages/about/beliefs";
import {AboutDistinctivesPage} from "./ui/pages/about/distinctives";
import {AboutUsPage} from "./ui/pages/about/us";
import {CollegePage} from "./ui/pages/college";
import {FellowshipsPage} from "./ui/pages/fellowships";
import {IndexPage} from "./ui/pages/index";
import {IceCreamEvangelismPage} from "./ui/pages/ice-cream-evangelism";
import {GivingPage} from "./ui/pages/giving";
import {KidsPage} from "./ui/pages/kids";
import {MenPage} from "./ui/pages/men";
import {ReadPage} from "./ui/pages/read";
import {SermonPage} from "./ui/pages/sermons/single";
import {SermonsPage} from "./ui/pages/sermons";
import {SongsPage} from "./ui/pages/songs";
import {WomenPage} from "./ui/pages/women";
import {YouthPage} from "./ui/pages/youth";

const app = express();

function renderFullHtmlPage(render: () => Promise<React.ReactElement<any>>): Promise<string> {
  return render()
      .then((reactElement) => ReactDOMServer.renderToStaticMarkup(reactElement))
      .then((markup) => `
        <!DOCTYPE html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <script src="/ui/client.bundle.js" async></script>
            <link href='https://fonts.googleapis.com/css?family=Roboto|Fira+Sans:700' rel='stylesheet' type='text/css'>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
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
  AboutBeliefsPage,
  AboutDistinctivesPage,
  AboutUsPage,
  CollegePage,
  FellowshipsPage,
  GivingPage,
  IndexPage,
  IceCreamEvangelismPage,
  KidsPage,
  MenPage,
  ReadPage,
  SermonsPage,
  SermonPage,
  SongsPage,
  WomenPage,
  YouthPage,
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
