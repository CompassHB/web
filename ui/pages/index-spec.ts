/*global expect*/
import * as ReactDOMServer from 'react-dom/server';
import homepage from './index';

describe('ui/pages/index', function() {
    it("shows the latest sermon's title", function() {
        var result = ReactDOMServer.renderToStaticMarkup(homepage([{
            id: '1345',
            slug: 'foo-sermon',
            title: 'Foo sermon',
        }]));
        
        expect(result.includes('Foo sermon')).toBe(true);
    });
    
    it('Has a section for "Latest sermons"', function() {
        var result = ReactDOMServer.renderToStaticMarkup(homepage([{
            id: '1234',
            slug: 'the-sermon',
            title: 'The sermon',
        }]));
        
        expect(result.includes('Latest sermons')).toBe(true);
    });
});