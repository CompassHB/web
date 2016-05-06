import * as React from "react";
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
import {PathSet} from "falcor-json-graph";
import {ReadPage} from "./ui/pages/read";
import {SeriesPage} from "./ui/pages/series";
import {SermonPage} from "./ui/pages/sermons/single";
import {SermonsPage} from "./ui/pages/sermons";
import {SongsPage} from "./ui/pages/songs";
import {SundaySchoolPage} from "./ui/pages/sundayschool";
import {VideosPage} from "./ui/pages/videos";
import {WomenPage} from "./ui/pages/women";
import {YouthPage} from "./ui/pages/youth";
import {getPathSets} from './ui/paths';
import {model} from './model/model';
import {renderHtmlPage} from './ui/render_html_page';

const app = express();

// static js bundles
app.use(express.static('_out/ui'));

interface PageConfig {
  render(props: {data: any, params: any}): React.ReactElement<any>;
  redirects?: { [url: string]: number };
  urlPattern: string;
  data?(params: any): any,
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

routes.forEach(config => {
  app.get(config.urlPattern, function({params}, res) {
    return model().get(...getPathSets(config.data ? config.data(params): {}))
      .then((jsong = {json: {}}) => {
        return renderHtmlPage(config.render({data: jsong.json, params}));
      })
      .then(
        (content) => res.send(content),
        (e) => res.send(`<pre>${e.stack}</pre>`)
      );
  });

  for (var url of Object.keys(config.redirects || {})) {
    var status = config.redirects[url];

    app.get(url, function(req, res) {
      res.redirect(status, config.urlPattern);
    });
  }
});

app.use(express.static('_out'));
app.use('/node_modules/bootstrap/dist', express.static('node_modules/bootstrap/dist'));

const server = app.listen(process.env.PORT || 1743, function() {
  console.log(`CompassHB ready for requests on port ${server.address().port}!`);
});
