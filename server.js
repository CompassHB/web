var wpcom = require('wpcom')();
var express = require('express');
var ReactDOMServer = require('react-dom/server');
var app = express();

var site = wpcom.site('compasshb.wordpress.com');


var homepage = require('.ui/pages/index');

app.get('/', function (req, res) {
  site.postsList().then(function(data) {
    var content = ReactDOMServer.renderToStaticMarkup(homepage(data.posts));
    
    res.send(content);
  });
});

var sermonpage = require('./ui/pages/sermons/single');

app.get('/sermons/:slug', function (req, res) {
  site.post({slug: req.params.slug}).get(function(error, sermon) {
    if (error) {
      res.send("Oops, something went wrong...");
    } else {
      res.send(ReactDOMServer.renderToStaticMarkup(sermonpage(sermon)));
    }
  });
});


app.listen(process.env.PORT);