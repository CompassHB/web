require('dotenv').config({path: __dirname + '/../.env'});

import * as React from "react";
import * as express from "express";
import * as FalcorExpress from 'falcor-express';
import { assert } from './model/debug';
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

if (process.env.NEWRELIC_LICENSE_KEY) {
  require('newrelic');
}

const app = express();
const falcorModel = model();

// publicly available files
// TODO(ewinslow): Put all source files into _out directory too...
app.use('/manifest.json', (req, res) => {
  res.send(JSON.stringify({
    short_name: "Compass HB",
    name: "Compass Bible Church Huntington Beach",
    icons: [
      {
        src: "https://compasshb.smugmug.com/photos/i-thfGZ3w/0/L/i-thfGZ3w-L.jpg",
        sizes: "144x144",
        type: "image/png"
      }
    ],
    start_url: `/read?webapp=1`,
    display: "standalone"
  }));
});
app.use('/offline.html', express.static('../offline.html'));
app.use('/service-worker.js', express.static('service-worker.js'));
app.use('/service-worker.js.map', express.static('service-worker.js.map'));
app.use('/service-worker.ts', express.static('../service-worker.ts'));
app.use('/ui/common.js', express.static('ui/common.js'));
app.use('/ui/common.js.map', express.static('ui/common.js.map'));
app.use('/ui/common.ts', express.static('../ui/common.ts'));

// falcor data model
app.use('/model.json', FalcorExpress.dataSourceRoute(function(req, res) {
  return falcorModel.asDataSource();
}));

/**
 * Call this function as a default parameter in order to enforce required
 * URL parameters. It will throw an Error if the param is not provided.
 *
 * ```
 * ({slug = required('slug')}) => new Page(slug)
 * ```
 *
 * For optional parameters, just provide a default string value:
 *
 * ```
 * ({offset = '0'}) => new OtherPage(offset);
 * ```
 */
function required(name: string): string {
  throw new Error('Missing required parameter: ' + name);
}

const routes: Array<[string, (params: any) => PageConfig]> = [
  ['/', () => new IndexPage()],
  ['/college', () => new CollegePage()],
  ['/eight-distinctives', () => new PagesPage('8-distinctives')],
  ['/fellowship', () => new FellowshipPage()],
  ['/giving', () => new PagesPage('giving')],
  ['/ice-cream-evangelism', () => new PagesPage('ice-cream-evangelism')],
  ['/kids', () => new KidsPage()],
  ['/men', () => new MenPage()],
  ['/read', () => new ReadPage()],
  ['/read/:slug', ({slug = require('slug')}) => new ReadPage(slug)],
  ['/series', () => new SeriesPage()],
  ['/sermons', () => new SermonsPage()],
  ['/sermons/:slug', ({slug = required('slug')}) => new SermonPage(slug)],
  ['/songs', () => new SongsPage()],
  ['/sundayschool', () => new SundaySchoolPage()],
  ['/videos', () => new VideosPage()],
  ['/what-we-believe', () => new PagesPage('what-we-believe')],
  ['/who-we-are', () => new PagesPage('who-we-are')],
  ['/women', () => new WomenPage()],
  ['/youth', () => new YouthPage()],
];

routes.forEach(([urlPattern, pageFactory]) => {
  app.get(urlPattern, async function({params, url}, res) {
    try {
      const config = pageFactory(params);
      const pathSets = getPathSets(config.data ? config.data() : {});
      const {json: data}: {json: Graph} = await falcorModel.get(...pathSets) || {json: {}};
      const title = config.title ? config.title(data) : 'CompassHB';
      const content = config.render(data);
      const html = await renderHtmlPage(title, content);
      res.send(html);
    } catch (errors) {
      res.send('<pre>Whoops, something went wrong.</pre>');

      console.error(`Something went wrong while serving ${url} (pattern: ${urlPattern})`);
      if (Array.isArray(errors)) {
        console.error(errors.map((e: { value: string }) => {
          try {
            return JSON.parse(e.value);
          } catch (error) {
            return e;
          }
        }));
      } else {
        console.error(errors.stack);
      }
    }
  });
});

let server: Server;

server = app.listen(process.env.PORT || 8080, function() {
  console.log(`CompassHB ready for requests on ${server.address().address} port ${server.address().port}!`);
});
