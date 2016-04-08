import * as React from "react";
import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {ContentNav} from "../components/contentNav";

const {div, ul, li, link, h1, html, head, img, body, a, meta, script, span} = React.DOM;

export interface Sermon {
  alias: string;
  coverImage: string;
  date: string;
  teacher: {name: string};
  text: string;
  title: string;
}

export class SermonsPage extends React.Component<{sermons: Array<Sermon>}, {}> {
  render() {
    const {sermons} = this.props;

    return (<div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9 col-sm-push-3" style={{paddingTop: 20}}>
            <div className="Setting Box Box--Large Box--bright utility-flex">
              <h1 className="Setting__heading tk-seravek-web">Sermons</h1>

              <ol style={{display: 'block', listStyleType: 'none', margin: 0, padding: 0}}>
              {sermons.map(sermon => (
                <li key={sermon.alias} className="col-md-4" style={{marginTop: 20}}>
                  <a href={`/sermons/${sermon.alias}`} style={{display: 'block'}}>
                    <img src={sermon.coverImage} width="200" height="125" alt={sermon.title} />
                  </a>
                  <h4 className="tk-seravek-web">
                    <a href={`/sermons/${sermon.alias}`}>{sermon.title}</a>
                  </h4>
                  <p>
                    {sermon.text}<br />
                    {sermon.date}<br />
                    {sermon.teacher.name}
                  </p>
                </li>
              ))}
              </ol>
              <div style={{clear:'both'}}></div>

              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title tk-seravek-web">Links</h3>
                </div>
                <div className="panel-body">
                  <p><a href="/series">View Sermon Series</a></p>
                  <p><a href="/feed/sermonaudio/">Audio Podcast</a></p>
                  <p>
                    <a href="https://itunes.apple.com/us/podcast/compass-hb-sermons/id938965423" target="_blank">
                      <img src="https://compasshb.smugmug.com/photos/i-2fpjmf5/0/Th/i-2fpjmf5-Th.png" width={110} height={40} alt="Subscribe on iTunes" />
                    </a>
                  </p>
                  <p><a href="http://feeds.compasshb.com/sermons">Subscribe via Feed</a></p>
                  <p /><div className="fb-share-button fb_iframe_widget" data-href="https://www.compasshb.com" data-layout="button_count" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=386571371526429&container_width=1045&href=https%3A%2F%2Fwww.compasshb.com%2F&layout=button_count&locale=en_US&sdk=joey"><span style={{verticalAlign: 'bottom', width: 91, height: 20}}><iframe name="f3d2ea12656caf8" width="1000px" height="1000px" frameBorder={0} allowTransparency="true" allowFullScreen="true" scrolling="no" title="fb:share_button Facebook Social Plugin" src="https://www.facebook.com/v2.0/plugins/share_button.php?app_id=386571371526429&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D42%23cb%3Df6b5079d01d76c%26domain%3Dwww.compasshb.com%26origin%3Dhttps%253A%252F%252Fwww.compasshb.com%252Ff3ee553628f71d%26relation%3Dparent.parent&container_width=1045&href=https%3A%2F%2Fwww.compasshb.com%2F&layout=button_count&locale=en_US&sdk=joey" style={{border: 'none', visibility: 'visible', width: 91, height: 20}} className /></span></div><p />
                  <p><iframe id="twitter-widget-0" scrolling="no" frameBorder={0} allowTransparency="true" className="twitter-share-button twitter-share-button-rendered twitter-tweet-button" title="Twitter Tweet Button" src="https://platform.twitter.com/widgets/tweet_button.fd774b599f565016d763dd860cb31c79.en.html#dnt=true&id=twitter-widget-0&lang=en&original_referer=https%3A%2F%2Fwww.compasshb.com%2Fsermons&size=m&text=Compass%20HB%20-%20Compass%20Bible%20Church&time=1460095339969&type=share&url=https%3A%2F%2Fwww.compasshb.com%2Fsermons&via=CompassHB" style={{position: 'static', visibility: 'visible', width: 60, height: 20}} /></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-sm-pull-9">
            <ContentNav active="sermons" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>);
  }

  static urlPattern = '/sermons';

  static render(): Promise<React.ReactElement<any>> {
    // TODO(ewinslow): Fetch these from a database!
    return Promise.resolve([
      {
        alias: 'psalm-of-the-day',
        coverImage: 'https://i.vimeocdn.com/video/563621117_1280.jpg',
        date: 'Sunday, April 3, 2016',
        teacher: {name: 'Bobby Blakey'},
        text: 'Psalm 1',
        title: 'Psalm of the Day',
      },
      {
        alias: 'the-new-you',
        coverImage: 'https://i.vimeocdn.com/video/563309239_640.jpg',
        date: 'Thursday, March 31, 2016',
        teacher: {name: 'Bobby Blakey'},
        text: 'Colossians 3:12-17',
        title: 'The New You',
      },
      {
        alias: 'die-to-live',
        coverImage: 'https://i.vimeocdn.com/video/563121070_1280.jpg',
        date: 'Wednesday, March 30, 2016',
        teacher: {name: 'Bobby Blakey'},
        text: 'Colossians 3:5-11',
        title: 'Die to Live',
      },
      {
        alias: 'rise-above-this-world',
        coverImage: 'https://i.vimeocdn.com/video/562924917_1280.jpg',
        date: 'Tuesday, March 29, 2016',
        teacher: {name: 'Bobby Blakey'},
        text: 'Colossians 3:1-4',
        title: 'Rise Above This World',
      },
    ]).then(sermons => <SermonsPage sermons={sermons} />);
  }
}
