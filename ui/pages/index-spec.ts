import * as React from "react";
import * as ReactDOMServer from 'react-dom/server';
import {IndexPage} from './index';

describe('IndexPage', function() {
  it("shows the latest sermon's title", function() {
    const result = ReactDOMServer.renderToStaticMarkup(React.createElement<any>(IndexPage, {
      recentSermons: [{
        id: '1345',
        slug: 'foo-sermon',
        title: 'Foo sermon',
      }],
    }));

    expect(result.includes('Out of Time')).toBe(true);
  });

  it('Has a section for "Latest sermons"', function() {
    const result = ReactDOMServer.renderToStaticMarkup(React.createElement<any>(IndexPage, {
      recentSermons: [{
        id: '1234',
        slug: 'the-sermon',
        title: 'The sermon',
      }, {
          id: '1235',
          slug: 'the-next-sermon',
          title: 'The next sermon',
        }],
    }));

    expect(result.includes('Sermons')).toBe(true);
  });
});
