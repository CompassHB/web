import * as React from "react";
import * as ReactDOMServer from 'react-dom/server';
import {SermonPage} from './single';

describe('SermonPage', function() {
  it('Shows the sermon title', function() {
    const result = ReactDOMServer.renderToStaticMarkup(React.createElement(SermonPage, {
      title: 'Foobar',
      content: 'Foobar',
    }));

    expect(result.includes('Foobar')).toBe(true);
  });
});
