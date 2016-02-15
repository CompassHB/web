var React = require('react');
var div = React.DOM.div;
var ul = React.DOM.ul;
var li = React.DOM.li;
var h1 = React.DOM.h1;

module.exports = function homepage(posts) {
  return div({key: 'container'}, [
    h1({key: 'title'}, "Latest sermons"),

    ul({key: 'list'}, posts.map(function(post) {
      return li({key: post.id}, post.title);
    })),
  ]);
};