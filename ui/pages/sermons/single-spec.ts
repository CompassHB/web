import * as React from "react";
import * as ReactDOMServer from 'react-dom/server';
import { SermonPage } from './single';

describe('SermonPage', function() {
  it('Shows the sermon title', function() {
    const result = ReactDOMServer.renderToStaticMarkup(new SermonPage().render(
      {
        sermons: {
          bySlug: {
            'foo': {
              title: 'Foobar',
              content: 'Foobar',
            },
          },
        },
      } as any,
      {
        slug: 'foo',
      }
    ));

    expect(result.includes('Foobar')).toBe(true);
  });
});
