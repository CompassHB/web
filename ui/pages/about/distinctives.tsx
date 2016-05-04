import * as React from "react";
import {Page} from '../../components/page';
import {AboutNav} from './nav';
import {model} from '../../../model/model';

export class AboutDistinctivesPage extends React.Component<any, {}> {
  render() {
    const {distinctives} = this.props;

    return (
      <Page title="8 Distinctives" nav={<AboutNav/>}>
        <p>
          At Compass Bible Church we are called to make disciples of Christ (Matthew 28:18-20).
          As we do, we will always work to express and maintain these eight ministry values.
        </p>

        <ol style={{listStyleType: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
          {distinctives.map((distinctive, i) => (
          <li className="well" style={{width: '48%', marginBottom: '4%'}}>
            <h3 style={{marginTop: 0}}>{i+1}. {distinctive.title}</h3>
            <p>{distinctive.description}</p>
            <p>{distinctive.references}</p>
          </li>
          ))}
        </ol>
      </Page>
    );
  }

  static urlPattern = '/about/distinctives';

  static redirects: {[url: string]: number} = {
    '/eight-distinctives': 301,
  };

  static render(): any {
    return model().get(
      ['distinctives', 'inOrder', {from: 0, to: 8}, ['title', 'description', 'references']],
      ['distinctives', 'inOrder', 'length']
    ).then((jsong: any) => {
      return Array.prototype.slice.call(jsong.json.distinctives.inOrder);
    }).then((distinctives) => {
      return <AboutDistinctivesPage distinctives={distinctives} />;
    });
  }
}
