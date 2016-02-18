import * as wpcom from "wpcom";
import * as express from "express";
import * as ReactDOMServer from "react-dom/server";
import homepage from "./ui/pages/index";
import sermonpage from "./ui/pages/sermons/single";

const app = express();
const site = wpcom().site('compasshb.wordpress.com');

app.get('/', function(req, res) {
  site.postsList().then(function({posts: sermons}) {
    res.send(200, ReactDOMServer.renderToStaticMarkup(homepage(sermons)));
  }).catch(function(e) {
    res.send(500, '<pre>' + e + '</pre>');
  });
});

app.get('/sermons/:slug', function(req, res) {
  site.post({ slug: req.params.slug }).get().then(function(sermon) {
    res.send(ReactDOMServer.renderToStaticMarkup(sermonpage(sermon)));
  });
});

app.use(express.static('_out'));

const server = app.listen(process.env.PORT || 1743, function() {
  console.log(`CompassHB ready for requests on port ${server.address().port}!`);
});
