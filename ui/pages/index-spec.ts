import * as React from "react";
import * as ReactDOMServer from 'react-dom/server';
import { IndexPage } from './index';

describe('IndexPage', function() {
  it("shows the latest sermon's title", function() {
    const result = ReactDOMServer.renderToStaticMarkup(
      IndexPage.render({
        data: {
          sermons: {
            recent: {
              0: {
                id: '1345',
                slug: 'foo-sermon',
                title: 'Foo sermon',
              },
              length: 1,
            },
          },
        },
      }));

    expect(result.includes('Foo sermon')).toBe(true);
  });

  it('Has a section for "Latest sermons"', function() {
    const result = ReactDOMServer.renderToStaticMarkup(IndexPage.render({
      data: {
        sermons: {
          recent: {
            0: {
              id: '1234',
              slug: 'the-sermon',
              title: 'The sermon',
            },
            1: {
              id: '1235',
              slug: 'the-next-sermon',
              title: 'The next sermon',
            },
            length: 2,
          },
        },
      },
    }));

    expect(result.includes('Sermons')).toBe(true);
  });
});
