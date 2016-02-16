/*global expect*/
var ReactDOMServer = require('react-dom/server');
var homepage = require('./index');

describe('homepage', function() {
    it('shows the latest sermon titles', function() {
        var result = ReactDOMServer.renderToStaticMarkup(homepage([
            {id: 'foo', title: 'Foo sermon'},
        ]));
        
        expect(result.includes('Foo sermon')).toBe(true);
    });
    
    it('has a title "Latest sermons"', function() {
        var result = ReactDOMServer.renderToStaticMarkup(homepage([]));
        
        expect(result.includes('Latest sermons')).toBe(true);
    });
});