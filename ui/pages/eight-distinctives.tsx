import * as React from "react";
import * as gallery from '../components/gallery';
import {Page} from '../components/page';
import {AboutNav} from '../components/aboutNav';
import {slice} from "../slice";

export const DistinctivesPage = {
  render({data}: any) {
    const distinctives = slice<any>(data.distinctives.inOrder, 0, 8);

    return (
      <Page title="8 Distinctives" nav={<AboutNav active="eight-distinctives" />}>
        <p>
          At Compass Bible Church we are called to make disciples of Christ (Matthew 28:18-20).
          As we do, we will always work to express and maintain these eight ministry values.
        </p>

        <ol style={gallery.container}>
          {distinctives.map((distinctive, i) => (
          <li className="well" style={gallery.item}>
            <h3 style={{marginTop: 0}}>{i+1}. {distinctive.title}</h3>
            <p>{distinctive.description}</p>
            <p>{distinctive.references}</p>
          </li>
          ))}
        </ol>
      </Page>
    );
  },

  urlPattern: '/eight-distinctives',

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
