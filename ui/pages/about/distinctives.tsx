import * as React from "react";
import {Page} from '../../components/page';
import {AboutNav} from './nav';
import {model} from '../../../model/model';
import {slice} from "../../slice";

export const AboutDistinctivesPage = {
  render({data}) {
    const distinctives = slice<any>(data.distinctives.inOrder, 0, 8);

    return (
      <Page title="8 Distinctives" nav={<AboutNav/>}>
        <p>
          At Compass Bible Church we are called to make disciples of Christ (Matthew 28:18-20).
          As we do, we will always work to express and maintain these eight ministry values.
        </p>

        <ol style={{listStyleType: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
          {distinctives.map((distinctive, i) => (
          <li className="well" style={{width: '49%', marginBottom: '2%'}}>
            <h3 style={{marginTop: 0}}>{i+1}. {distinctive.title}</h3>
            <p>{distinctive.description}</p>
            <p>{distinctive.references}</p>
          </li>
          ))}
        </ol>
      </Page>
    );
  },

  urlPattern: '/distinctives',

  redirects: {
    '/eight-distinctives': 301,
  } as {[url: string]: number},

  data() {
    return {
      distinctives: {
        inOrder: {
          length: true,
          "0..7": {
            $type: 'range',
            title: true,
            description: true,
            references: true,
          },
        },
      },
    };
  },
};
