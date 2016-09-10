import * as React from "react";
import * as ReactDOMServer from 'react-dom/server';
import { IndexPage } from './index';

describe('IndexPage', function() {
  it("shows the latest sermon's title", function() {
    const result = ReactDOMServer.renderToStaticMarkup(
      new IndexPage().render(
        {
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
          events: {
            upcoming: {
              0: {
                slug: "save-the-date-high-school-junior-high-summer-camp",
                title: 'Save the date: High School & Junior High Summer Camp',
                startTime: 'Sunday, July 30, 2017',
              },
              1: {
                slug: "save-the-date-camp-compass",
                title: 'Save the date: Camp Compass',
                startTime: 'Monday, July 10, 2017',
              },
              length: 2,
            },
          },
        } as any));

    expect(result.includes('Foo sermon')).toBe(true);
  });

  it('Has a section for "Latest sermons"', function() {
    const result = ReactDOMServer.renderToStaticMarkup(new IndexPage().render(
      {
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
        events: {
          upcoming: {
            0: {
              slug: "save-the-date-high-school-junior-high-summer-camp",
              title: 'Save the date: High School & Junior High Summer Camp',
              startTime: 'Sunday, July 30, 2017',
            },
            1: {
              slug: "save-the-date-camp-compass",
              title: 'Save the date: Camp Compass',
              startTime: 'Monday, July 10, 2017',
            },
            length: 2,
          },
        },
      } as any
    ));

    expect(result.includes('Sermons')).toBe(true);
  });
});
