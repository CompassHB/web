if (process.env.NEWRELIC_LICENSE_KEY) {
  require('newrelic');
}

import * as React from "react";
import * as express from "express";
import * as FalcorExpress from 'falcor-express';
import { Server } from 'http';
import { CollegePage } from "./ui/pages/college";
import { DistinctivesPage } from "./ui/pages/eight-distinctives";
import { FellowshipPage } from "./ui/pages/fellowship";
import { GivingPage } from "./ui/pages/giving";
import { IndexPage } from "./ui/pages/index";
import { PagesPage } from "./ui/pages/single";
import { KidsPage } from "./ui/pages/kids";
import { MenPage } from "./ui/pages/men";
import { ReadPage } from "./ui/pages/read";
import { SeriesPage } from "./ui/pages/series";
import { SermonPage } from "./ui/pages/sermons/single";
import { SermonsPage } from "./ui/pages/sermons";
import { SongsPage } from "./ui/pages/songs";
import { SundaySchoolPage } from "./ui/pages/sundayschool";
import { VideosPage } from "./ui/pages/videos";
import { WhatWeBelievePage } from "./ui/pages/what-we-believe";
import { WhoWeArePage } from "./ui/pages/who-we-are";
import { WomenPage } from "./ui/pages/women";
import { YouthPage } from "./ui/pages/youth";
import { getPathSets } from './ui/paths';
import { model } from './model/model';
import { renderHtmlPage } from './ui/render_html_page';

const app = express();
const falcorModel = model();

// static js bundles
app.use(express.static('_out/ui'));
app.use('/model.json', FalcorExpress.dataSourceRoute(function(req, res) {
  return falcorModel.asDataSource();
}));
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
  PagesPage,
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
  app.get(config.urlPattern, async function({params}, res) {
    try {
      const pathSets = getPathSets(config.data ? config.data(params) : {});
      const {json: data} = await falcorModel.get(...pathSets);
      const title = config.title ? config.title(data) : 'CompassHB';
      const content = config.render({ data, params });
      const html = await renderHtmlPage(title, content);
      res.send(html);
    } catch (errors) {
      res.send('<pre>');
      res.send(JSON.stringify(errors.map((e: { value: string }) => {
        try {
          return JSON.parse(e.value);
        } catch (e) {
          return e;
        }
      })));
      res.send('</pre>');
    }
  });

  for (var url of Object.keys(config.redirects || {})) {
    var status = config.redirects![url];

    app.get(url, function(req, res) {
      res.redirect(status, config.urlPattern);
    });
  }
});

app.use(express.static('_out'));
app.use('/node_modules/bootstrap/dist', express.static('node_modules/bootstrap/dist'));

let server: Server;

server = app.listen(process.env.PORT || 8080, function() {
  console.log(`CompassHB ready for requests on ${server.address().address} port ${server.address().port}!`);
});
