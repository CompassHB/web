import * as React from "react";
import * as gallery from "../components/gallery";
import {Page} from "../components/page";
import {ContentNav} from "../components/contentNav";
import {slice} from "../slice";

export interface Sermon {
  alias: string;
  coverImage: string;
  date: string;
  teacher: {name: string};
  text: string;
  title: string;
}

export const SermonsPage = {
  render({data}) {
    return (
      <Page title="Sermons" nav={<ContentNav active="sermons" />}>
        <ol style={gallery.container}>
        {slice<Sermon>(data.sermons.recent, 0, 99).map(sermon => (
          <li key={sermon.alias} style={gallery.item}>
            <a href={`/sermons/${sermon.alias}`} style={{display: 'block'}}>
              <img src={sermon.coverImage} width="200" height="125" alt={sermon.title} />
            </a>
            <h4 className="tk-seravek-web">
              <a href={`/sermons/${sermon.alias}`}>{sermon.title}</a>
            </h4>
            <div>{sermon.text}</div>
            <div>{sermon.date}</div>
            <div>{sermon.teacher}</div>
          </li>
        ))}
        </ol>
        <div style={{clear: 'both'}}></div>
        <div className="panel panel-default" style={{marginTop: '2em'}}>
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
      </Page>
    );
  },

  urlPattern: '/sermons',

  data() {
    return {
      sermons: {
        recent: {
          length: 1,
          "0..99": {
            $type: 'range',
            alias: true,
            coverImage: true,
            date: true,
            text: true,
            title: true,
            teacher: true,
          },
        },
      },
    };
  },
};
