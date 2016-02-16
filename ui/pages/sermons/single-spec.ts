import * as ReactDOMServer from 'react-dom/server';
import sermonpage from './single';

describe('ui/pages/sermons/single', function() {
    it('Shows the sermon title', function() {
        var result = ReactDOMServer.renderToStaticMarkup(sermonpage({
            title: 'Foobar',
            content: 'Foobar',
        }));
        
        expect(result.includes('Foobar')).toBe(true);
    });
});
