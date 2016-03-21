import * as React from "react";
import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {latestSermon} from "../components/latestSermon";

export interface Sermon {
  slug: string;
  title: string;
}

export class IndexPage extends React.Component<{ recentSermons: Array<Sermon> }, {}> {
  render() {
    const [sermon, ...sermons] = this.props.recentSermons;

    return
    <p>test < / p >
  }

    



export class IndexPage extends React.Component<{ recentSermons: Array<Sermon> }, {}> {
  render() {
    const [sermon, ...sermons] = this.props.recentSermons;

    return div({},
      header(),
      sermon && div({},
        div({ style: { padding: '1em' } },
          latestSermon(sermon)
        )
      ),
      sermons[0] && div({},
        h1({}, "Latest sermons"),

        ul({}, sermons.map((sermon, i) => (
          li({ key: i },
            a({ href: "/sermons/" + sermon.slug }, sermon.title)
          )
        )))
      ),
      footer()
    );
  }

  static urlPattern = '/';

  static render(): Promise<React.ReactElement<any>> {
    return Promise.resolve(React.createElement<any>(IndexPage, {
      recentSermons: [
        { title: "Sample Sermon Title", id: "sample-id", slug: 'sample-slug' },
      ],
    }));
  }
}
