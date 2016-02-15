var wpcom = require('wpcom')();
var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var app = express();
var homepage = require('./homepage');

var html = React.DOM.html;
var head = React.DOM.head;
var body = React.DOM.body;

var site = wpcom.site('compasshb.wordpress.com');

app.get('/', function (req, res) {
  console.log('Requesting posts...');
  site.postsList().then(function(data) {
    console.log('Got posts!');
    
    var content = ReactDOMServer.renderToStaticMarkup(
      html({},
        head({}, []),
        body({}, homepage(data.posts))
      )
    );
    
    res.send(content);
  });
});

app.listen(process.env.PORT);