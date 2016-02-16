var React = require('react');
var html = React.DOM.html;
var head = React.DOM.head;
var body = React.DOM.body;
var main = React.DOM.main;
var h1 = React.DOM.h1;
var div = React.DOM.div;

var header = require('../../components/header');

module.exports = function sermonpage(sermon) {
    return html({}, [
        head({}, []),
        body({}, [
            header(),
            main({}, [
                h1({}, sermon.title),
                
                // TODO(ewinslow): Use an HTML sanitizer or something
                div({dangerouslySetInnerHTML: {__html: sermon.content}}),
            ]),
        ]),
    ]);
}