import * as wpcom from "wpcom";
import * as express from "express";
import * as ReactDOMServer from "react-dom/server";
import homepage from "./ui/pages/index";
import sermonpage from "./ui/pages/sermons/single";

const app = express();
const site = wpcom().site('compasshb.wordpress.com');

app.get('/', function (req, res) {
  site.postsList().then(function(data) {
    var content = ReactDOMServer.renderToStaticMarkup(homepage(data.posts));
    
    res.send(content);
  });
});

app.get('/sermons/:slug', function (req, res) {
  site.post({slug: req.params.slug}).get().then(function(sermon) {
    res.send(ReactDOMServer.renderToStaticMarkup(sermonpage(sermon)));
  });
});


app.listen(process.env.PORT);