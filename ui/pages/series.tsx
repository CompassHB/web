import * as React from "react";
import {Page} from "../components/page";
import {ContentNav} from "../components/contentNav";

const {div, ul, li, link, h1, html, head, img, body, a, meta, script, span} = React.DOM;

export interface Series {
  alias: string;
  coverImage: string;
  description: string;
  title: string;
}

export class SeriesPage extends React.Component<{seriesList: Array<Series>}, {}> {
  render() {
    const {seriesList} = this.props;

    return (
      <Page title="Sermon Series">
        <ol style={{margin: 0, padding: 0, listStyleType: 'none'}}>
          {seriesList.map(series => (
            <li key={series.alias} className="col-md-4" style={{clear: 'left'}}>
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
  }

  static urlPattern = '/series';

  static render(): Promise<React.ReactElement<any>> {
    // TODO(ewinslow): Fetch these from a database!
    return Promise.resolve([
      {
        alias: 'parables',
        coverImage: 'https://compasshb.s3.amazonaws.com/images/parables.jpeg',
        description: 'Psalm 1',
        title: 'Parables',
      },
      {
        alias: 'the-protestant-reformation-33-years-that-shook-the-world',
        coverImage: 'https://compasshb.smugmug.com/photos/i-k9Sq2D3/0/S/i-k9Sq2D3-S.png',
        description: 'Colossians 3:12-17',
        title: 'The Protestant Reformation: 33 Years That Shook the World',
      },
      {
        alias: 'salvation-assurance',
        coverImage: 'https://compasshb.smugmug.com/photos/i-kH3t7DN/0/M/i-kH3t7DN-M.jpg',
        description: 'Colossians 3:5-11',
        title: 'Salvation Assurance',
      },
      {
        alias: 'building-your-bible-dictionary',
        coverImage: 'https://compasshb.s3.amazonaws.com/images/buildingbibledictionaryseries.jpg',
        description: 'Colossians 3:1-4',
        title: 'Building Your Bible Dictionary',
      },
    ]).then(seriesList => <SeriesPage seriesList={seriesList} />);
  }
}
