import * as React from "react";
import * as gallery from "../components/gallery";
import {Page} from "../components/page";
import {ContentNav} from "../components/contentNav";
import {slice} from "../slice";

export const SeriesPage = {
  render({data}: any) {
    return (
      <Page title="Sermon Series" nav={<ContentNav active="series" />}>
        <ol style={gallery.container}>
          {slice<any>(data.series.recent, 0, 200).map(series => (
            <li key={series.alias} style={gallery.item}>
              <a href={`/series/${series.alias}`}>
                <img src={series.coverImage} width="200" height="125" alt={series.title} />
              </a>
              <h4 className="tk-seravek-web">
                <a href={`/series/${series.alias}`}>{series.title}</a>
              </h4>
              <p>{series.description}</p>
            </li>
          ))}
        </ol>
      </Page>
    );
  },

  urlPattern: '/series',

  data() {
    return [
      ['series', 'recent', {from: 0, to: 200}, ['alias', 'coverImage', 'description', 'title']],
      ['series', 'recent', 'length'],
    ];
  },
}
