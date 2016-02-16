/*global expect*/
var ReactDOMServer = require('react-dom/server');
var sermonpage = require('./single');

describe('ui/pages/sermons/single', function() {
    it('Shows the sermon title', function() {
        var result = ReactDOMServer.renderToStaticMarkup(sermonpage({title: 'Foobar'}));
        
        expect(result.includes('Foobar')).toBe(true);
    });
});