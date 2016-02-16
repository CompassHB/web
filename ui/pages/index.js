var React = require('react');
var div = React.DOM.div;
var ul = React.DOM.ul;
var li = React.DOM.li;
var h1 = React.DOM.h1;
var html = React.DOM.html;
var head = React.DOM.head;
var body = React.DOM.body;
var a = React.DOM.a;

var header = require('../components/header');

module.exports = function homepage(posts) {
  return html({}, [
    head({key: 'head'}, []),
    body({key: 'body'}, div({key: 'container'}, [
      header(),
      div({}, [
        h1({key: 'title'}, "Latest sermons"),
    
        ul({key: 'list'}, posts.map(function(post) {
          return li({key: post.id},
            a({href: "/sermons/" + post.slug}, post.title)
          );
        })),
      ]),
    ]))
  ]);
};