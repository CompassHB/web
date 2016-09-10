if (process.env.NEWRELIC_LICENSE_KEY) {
  require('newrelic');
}

import * as React from "react";
import * as express from "express";
import * as FalcorExpress from 'falcor-express';
import { Server } from 'http';
import { PageConfig } from "./ui/config";
import { CollegePage } from "./ui/pages/college";
import { FellowshipPage } from "./ui/pages/fellowship";
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
import { WomenPage } from "./ui/pages/women";
import { YouthPage } from "./ui/pages/youth";
import { getPathSets } from './ui/paths';
import { model } from './model/model';
import { renderHtmlPage } from './ui/render_html_page';
import { Graph } from './model/falcor';

const app = express();
const falcorModel = model();

// static js bundles
app.use(express.static('_out/ui'));
app.use('/model.json', FalcorExpress.dataSourceRoute(function(req, res) {
  return falcorModel.asDataSource();
}));

const routes: Array<[string, PageConfig<any>]> = [
  ['/', new IndexPage()],
  ['/college', new CollegePage()],
  ['/eight-distinctives', new PagesPage('8-distinctives')],
  ['/fellowship', new FellowshipPage()],
  ['/giving', new PagesPage('giving')],
  ['/ice-cream-evangelism', new PagesPage('ice-cream-evangelism')],
  ['/kids', new KidsPage()],
  ['/men', new MenPage()],
  ['/read', new ReadPage()],
  ['/series', new SeriesPage()],
  ['/sermons', new SermonsPage()],
  ['/sermons/:slug', new SermonPage()],
  ['/songs', new SongsPage()],
  ['/sundayschool', new SundaySchoolPage()],
  ['/videos', new VideosPage()],
  ['/what-we-believe', new PagesPage('what-we-believe')],
  ['/who-we-are', new PagesPage('who-we-are')],
  ['/women', new WomenPage()],
  ['/youth', new YouthPage()],
];

routes.forEach(([urlPattern, config]) => {
  app.get(urlPattern, async function({params}, res) {
    try {
      const pathSets = getPathSets(config.data ? config.data(params) : {});
      const {json: data}: {json: Graph} = await falcorModel.get(...pathSets);
      const title = config.title ? config.title(data, params) : 'CompassHB';
      const content = config.render(data, params);
      const html = await renderHtmlPage(title, content);
      res.send(html);
    } catch (errors) {
      res.send('<pre>');
      if (Array.isArray(errors)) {
        res.send(JSON.stringify(errors.map((e: { value: string }) => {
          try {
            return JSON.parse(e.value);
          } catch (e) {
            return e;
          }
        })));
      } else {
        res.send(JSON.stringify(errors));
      }
      res.send('</pre>');
    }
  });
});

app.use(express.static('_out'));
app.use('/node_modules/bootstrap/dist', express.static('node_modules/bootstrap/dist'));

let server: Server;

server = app.listen(process.env.PORT || 8080, function() {
  console.log(`CompassHB ready for requests on ${server.address().address} port ${server.address().port}!`);
});
