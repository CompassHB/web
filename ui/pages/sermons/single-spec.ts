import * as React from "react";
import * as ReactDOMServer from 'react-dom/server';
import {SermonPage} from './single';

describe('SermonPage', function() {
  it('Shows the sermon title', function() {
    const result = ReactDOMServer.renderToStaticMarkup(SermonPage.render({
      data: {
        sermons: {
          bySlug: {
            'foo': {
              title: 'Foobar',
              content: 'Foobar',
            },
          },
        },
      },
      params: {
        slug: 'foo',
      },
    }));

    expect(result.includes('Foobar')).toBe(true);
  });
});
