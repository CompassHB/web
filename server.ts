import * as React from "react";
import * as express from "express";
import {CollegePage} from "./ui/pages/college";
import {DistinctivesPage} from "./ui/pages/eight-distinctives";
import {FellowshipPage} from "./ui/pages/fellowship";
import {GivingPage} from "./ui/pages/giving";
import {IndexPage} from "./ui/pages/index";
import {IceCreamEvangelismPage} from "./ui/pages/ice-cream-evangelism";
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
import {WhatWeBelievePage} from "./ui/pages/what-we-believe";
import {WhoWeArePage} from "./ui/pages/who-we-are";
import {WomenPage} from "./ui/pages/women";
import {YouthPage} from "./ui/pages/youth";
import {getPathSets} from './ui/paths';
import {model} from './model/model';
import {renderHtmlPage} from './ui/render_html_page';

const app = express();

// static js bundles
app.use(express.static('_out/ui'));

interface PageConfig {
  title?(data: any): string;
  render(props: { data: any, params: any }): React.ReactElement<any>;
  redirects?: { [url: string]: number };
  urlPattern: string;
  data?(params: any): any,
}

var routes: Array<PageConfig> = [
  CollegePage,
  DistinctivesPage,
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
  WhatWeBelievePage,
  WhoWeArePage,
  WomenPage,
  YouthPage,
];

routes.forEach(config => {
  app.get(config.urlPattern, function({params}, res) {
    return Promise.resolve()
      .then(() => {
        return model().get(...getPathSets(config.data ? config.data(params) : {})) as any;
      })
      .then(({json} = { json: {} }) => {
        return renderHtmlPage(config.title ? config.title(json) : 'CompassHB', config.render({ data: json, params }));
      })
      .then((content) => {
        res.send(content);
      })
      .catch((e) => {
        res.send(`<pre>${e.stack}</pre>`);
      });
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
