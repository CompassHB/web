import * as React from "react";
import {Page} from "../components/page";
import {MinistriesNav} from "./ministries/nav";

export class MenPage extends React.Component<{}, {}> {
  render() {
    const sermons = [
      {
        alias: 'mens-retreat-2016-session-4',
        backgroundImage: 'https://i.vimeocdn.com/video/554589747_640.jpg',
        title: 'Men’s Retreat 2016 - Session 4',
        date: 'Sunday, January 31, 2016',
        teacher: {
          name: 'Bobby Blakey',
        },
      },
      {
        alias: 'mens-retreat-2016-session-3',
        backgroundImage: 'https://i.vimeocdn.com/video/554582150_640.jpg',
        title: 'Men’s Retreat 2016 - Session 3',
        date: 'Saturday, January 30, 2016',
        teacher: {
          name: 'Bobby Blakey',
        },
      },
      {
        alias: 'mens-retreat-2016-session-2',
        backgroundImage: 'https://i.vimeocdn.com/video/554425400_1280.jpg',
        title: 'Men’s Retreat 2016 - Session 2',
        date: 'Saturday, January 30, 2016',
        teacher: {
          name: 'Bobby Blakey',
        },
      },
      {
        alias: 'mens-retreat-2016-session-1',
        backgroundImage: 'https://i.vimeocdn.com/video/554418903_1280.jpg',
        title: 'Men’s Retreat 2016 - Session 1',
        date: 'Friday, January 29, 2016',
        teacher: {
          name: 'Bobby Blakey',
        },
      },
    ];

    return (
      <Page title="Men" nav={<MinistriesNav active="men" />}>
        <ol style={{display: 'flex', flexWrap: 'wrap', listStyleType: 'none', justifyContent: 'space-between', margin: 0, padding: 0}}>
          {sermons.map((sermon) => (
          <li style={{marginTop: 20, width: '33%'}}>
            <a href={`videos/${sermon.alias}`} style={{backgroundImage: `url(${sermon.backgroundImage})`, backgroundSize: 'cover', width: 200, height: 125, display: 'block'}} />
            <h4 className="tk-seravek-web">
              <a href={`videos/${sermon.alias}`}>{sermon.title}</a>
            </h4>
            <p>
              <span style={{display: 'block'}}>{sermon.date}</span>
              <span style={{display: 'block'}}>{sermon.teacher.name}</span>
            </p>
          </li>
          ))}
        </ol>
      </Page>
    );
  }

  static urlPattern = '/men';

  static render(): Promise<React.ReactElement<any>> {
    return Promise.resolve(<MenPage />);
  }
}
