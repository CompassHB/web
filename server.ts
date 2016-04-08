
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import * as express from "express";
import {AboutBeliefsPage} from "./ui/pages/about/beliefs";
import {AboutDistinctivesPage} from "./ui/pages/about/distinctives";
import {AboutUsPage} from "./ui/pages/about/us";
import {CollegePage} from "./ui/pages/college";
import {FellowshipPage} from "./ui/pages/fellowship";
import {IndexPage} from "./ui/pages/index";
import {IceCreamEvangelismPage} from "./ui/pages/ice-cream-evangelism";
import {GivingPage} from "./ui/pages/giving";
import {KidsPage} from "./ui/pages/kids";
import {MenPage} from "./ui/pages/men";
import {ReadPage} from "./ui/pages/read";
import {SeriesPage} from "./ui/pages/series";
import {SermonPage} from "./ui/pages/sermons/single";
import {SermonsPage} from "./ui/pages/sermons";
import {SongsPage} from "./ui/pages/songs";
import {SundaySchoolPage} from "./ui/pages/sundayschool";
import {VideosPage} from "./ui/pages/videos";
import {WomenPage} from "./ui/pages/women";
import {YouthPage} from "./ui/pages/youth";

const app = express();

// static js bundles
app.use(express.static('_out/ui'));

function renderFullHtmlPage(render: () => Promise<React.ReactElement<any>>): Promise<string> {
  return render()
    .then((reactElement) => ReactDOMServer.renderToStaticMarkup(reactElement))
    .then((markup) => `
        <!DOCTYPE html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <script src="/ui/pages/index-client.bundle.js" async></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
            <link href='https://fonts.googleapis.com/css?family=Roboto|Fira+Sans:700' rel='stylesheet' type='text/css'>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
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

interface PageConfig {
  redirects?: { [url: string]: number };
  urlPattern: string;
  render(params: any): Promise<React.ReactElement<any>>;
}

var routes: Array<PageConfig> = [
  AboutBeliefsPage,
  AboutDistinctivesPage,
  AboutUsPage,
  CollegePage,
  FellowshipPage,
  GivingPage,
  IndexPage,
  IceCreamEvangelismPage,
  KidsPage,
  MenPage,
  ReadPage,
  SeriesPage,
  SermonsPage,
  SermonPage,
  SongsPage,
  SundaySchoolPage,
  VideosPage,
  WomenPage,
  YouthPage,
];

routes.forEach(pageConfig => {
  app.get(pageConfig.urlPattern, function(req, res) {
    return renderFullHtmlPage(() => pageConfig.render(req.params))
      .then((content) => res.send(content))
      .catch(({stack}) => res.send(`<pre>${stack}</pre>`));
  });

  for (var url of Object.keys(pageConfig.redirects || {})) {
    var status = pageConfig.redirects[url];

    app.get(url, function(req, res) {
      res.redirect(status, pageConfig.urlPattern);
    });
  }
});

app.use(express.static('_out'));
app.use('/node_modules/bootstrap/dist', express.static('node_modules/bootstrap/dist'));

const server = app.listen(process.env.PORT || 1743, function() {
  console.log(`CompassHB ready for requests on port ${server.address().port}!`);
});
