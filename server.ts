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
      const {json: data}: {json: Graph} = await falcorModel.get(...pathSets);
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
          } catch (e) {
            return e;
          }
        }));
      } else {
        console.error(errors.stack);
      }
    }
  });
});

app.use(express.static('_out'));
app.use('/node_modules/bootstrap/dist', express.static('node_modules/bootstrap/dist'));

let server: Server;

server = app.listen(process.env.PORT || 8080, function() {
  console.log(`CompassHB ready for requests on ${server.address().address} port ${server.address().port}!`);
});
