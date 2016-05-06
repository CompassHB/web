import * as React from "react";
import {AboutNav} from './nav';
import {Page} from '../../components/page';
import {slice} from '../../slice';

export const AboutBeliefsPage = {
  render({data}) {
    const beliefs = slice(data.beliefs.inOrder, 0, 8);
    return (
      <Page title="What We Believe" nav={<AboutNav/>}>
        <ul style={{margin: 0, padding: 0, listStyleType: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
          {beliefs.map((belief: any) => (
          <li className="well" style={{width: '49%', marginBottom: '2%'}}>
            <h3 style={{marginTop: 0}}>{belief.title}</h3>
            <p>{belief.content}</p>
          </li>
          ))}
        </ul>
      </Page>
    );
  },

  urlPattern: '/beliefs',

  redirects: {
    '/what-we-believe': 301,
  } as {[url: string]: number},

  data() {
    return {
      beliefs: {
        inOrder: {
          "0..7": {
            $type: 'range',
            title: true,
            content: true,
          },
          length: true,
        },
      },
    };
  },
};
