import * as React from "react";
import * as gallery from "../components/gallery";
import {Page} from "../components/page";
import {ContentNav} from "../components/contentNav";
import {slice} from "../slice";
import {PageConfig} from "../config";
import {Graph} from "../../model/falcor";

export class SeriesPage implements PageConfig<{}> {
  render(data: Graph) {
    return (
      <Page title="Sermon Series" nav={<ContentNav active="series" />}>
        <ol style={gallery.container}>
          {slice<any>(data.series.recent, 0, 200).map(series => (
            <li key={series.slug} style={gallery.item}>
              <a href={`/series/${series.slug}`}>
                <img src={series.coverImage} width="200" height="125" alt={series.title} />
              </a>
              <h4 className="tk-seravek-web">
                <a href={`/series/${series.slug}`}>{series.title}</a>
              </h4>
              <p>{series.description}</p>
            </li>
          ))}
        </ol>
      </Page>
    );
  }

  data() {
    return [
      ['series', 'recent', {from: 0, to: 200}, ['alias', 'coverImage', 'description', 'title']],
      ['series', 'recent', 'length'],
    ];
  }
}
