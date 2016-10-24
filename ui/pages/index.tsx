import * as React from "react";
import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {LatestSermon, latestSermonData} from "../components/latestSermon";
import {slice} from "../slice";
import {Event, Graph, Photo, Sermon} from '../../model/falcor';
import {PageConfig} from "../config";
import {BoxShadow, Size} from "../components/boxShadow";

const boxerStyles: React.CSSProperties = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  color: '#fff',
  display: 'block',
  minHeight: 129,
  padding: 10,
  textTransform: 'uppercase',
  width: '100%',
};

const clickableStyles: React.CSSProperties = {
  textDecoration: 'none',
};

const drawerStyles: React.CSSProperties = {
  backgroundImage: 'url("https://compasshb.smugmug.com/photos/i-dVdWJ7B/0/S/i-dVdWJ7B-S.jpg")',
  padding: '20px 10px',
  textAlign: 'center',
};

export class IndexPage implements PageConfig {
  title() { return 'CompassHB'; }

  data() {
    return {
      passages: {
        logo: {
          src: 'true',
        },
        recent: {
          "0": {
            title: 'true',
          },
          length: 1,
        },
      },
      photos: {
        recent: {
          '0..7': {
            $type: 'range',
            url: 'true',
            thumbnail: 'true',
          },
          length: 1,
        },
      },
      sermons: {
        recent: {
          length: 1,
          "0..4": {
            $type: 'range',
            slug: 'true',
            coverImage: 'true',
            date: 'true',
            text: 'true',
            title: 'true',
            teacher: 'true',
          },
        },
      },
      events: {
        upcoming: {
          length: 1,
          "0..1": {
            $type: 'range',
            slug: 'true',
            coverImage: 'true',
            startTime: 'true',
            title: 'true',
            description: 'true',
          },
        },
      },
    };
  }

  render(data: Graph) {
    const [sermon, ...sermons] = slice<Sermon>(data.sermons!.recent!, 0, 5);
    const events = slice<Event>(data.events!.upcoming!, 0, 2);

    return <div className="page-container">
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">

            {/* Announcements */}
            <div className="row" style={Object.assign({}, drawerStyles)}>
              <div className="col-sm-9">
                <BoxShadow size={Size.LARGE}>
                  <LatestSermon sermon={sermon} />
                </BoxShadow>
              </div>
              <div className="col-sm-3">
                <div style={{display: 'flex', flexDirection:'column', justifyContent: 'space-between'}}>
                  <BoxShadow>
                    <a href="/read" style={Object.assign({}, clickableStyles, boxerStyles, {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${data.passages!.logo!.src})`})}>
                      <h4 className="tk-seravek-web">{data.passages!.recent![0]!.title}</h4>
                      <p>Scripture of the Day</p>
                    </a>
                  </BoxShadow>
                  {events.map((event) =>
                  <BoxShadow>
                    <a className="featuredblog" href={"/events/" + event.slug} style={Object.assign({}, clickableStyles, boxerStyles, {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${event.coverImage})`})}>
                      <h4 className="tk-seravek-web">{event.title}</h4>
                      <p>{event.startTime}</p>
                    </a>
                  </BoxShadow>
                  )}
                </div>
              </div>
            </div>

            {/* Mission statement */}
            <div className="row" style={{backgroundColor: '#497f9e', padding: '0 0 15px 0', borderTop: '3px solid #F9F9F9'}}>
              <div className="col-sm-10 col-sm-offset-1">
                <p style={{color: '#FFF', fontSize: '1.3em', marginTop: 20, lineHeight: '1.6em', textAlign: 'center'}}>
                  <span style={{fontSize: '1.5em', fontWeight: 'bold'}}>Compass HB exists to make disciples of Jesus Christ</span>
                  <br />by&nbsp;
                  <span style={{fontWeight: 'bold', fontStyle: 'italic'}}>reaching</span> as many people as possible for Christ,&nbsp;
                  <span style={{fontWeight: 'bold', fontStyle: 'italic'}}>teaching</span> them to be like Christ, and&nbsp;
                  <span style={{fontWeight: 'bold', fontStyle: 'italic'}}>training</span> them to serve Christ.
                  <br />
                  <a href="/who-we-are" className="btn btn-default" style={{fontSize: '1em', marginTop: 20}}>
                    Find out more about Compass HB
                  </a>
                </p>
              </div>
            </div>

            {/* Metadata */}
            <div className="row" style={{background: 'none', backgroundColor: '#f7f7f7', paddingTop: 30, paddingBottom: 30}}>
              <div className="col-sm-10 col-sm-offset-1">
                <div className="col-md-4 text-center">
                  <h2 className="tk-seravek-web">
                    Saturdays at 6:30pm <br/>
                    Sundays at 9am and 11am
                  </h2>
                  <br />
                  <p>5082 Argosy Avenue<br />Huntington Beach, CA 92649</p>
                  <br />
                </div>
                <div className="col-md-4 text-center">
                  <h2 className="tk-seravek-web">Directions</h2>
                  <br />
                  <a href="https://www.google.com/maps?ll=33.74078,-118.040232&z=10&t=m&hl=en-US&gl=US&mapclient=embed&q=5082+Argosy+Ave+Huntington+Beach,+CA+92649"><img src="https://compasshb.smugmug.com/photos/i-WWb58Jn/0/M/i-WWb58Jn-M.png" width={300} height={262} alt="Map to Compass HB" /></a>
                </div>
                <div className="col-md-4 text-center">
                  <h2 className="tk-seravek-web">Midweek</h2>
                  <br />
                <h5><a href="/fellowship">Home Fellowship Groups</a></h5>
                <p>Tuesday, Wednesday, Thursday, and Friday</p>
                <br />
                <h5><a href="/kids#awana">Awana for kids</a></h5>
                <p>Wednesday</p>
                <br />
                <h5><a href="/youth">The United for Youth</a></h5>
                <p>Thursday</p>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="row">
            <div style={{backgroundImage: 'url(https://compasshb.smugmug.com/photos/i-WMM77kp/0/X3/i-WMM77kp-X3.jpg)', paddingTop: 250, backgroundAttachment: 'fixed', backgroundPosition: '50% 0', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} />
          </div>

          {/* Latest sermons */}
          <div className="row" style={{background: 'none', backgroundColor: '#fff', paddingBottom: 20}}>
            <div className="col-xs-10 col-xs-offset-1">
              <h2 className="tk-seravek-web"><a href="/sermons">Sermons</a></h2>
                {sermons.map(sermon => (
                <div className="col-sm-6 col-md-3">
                  <BoxShadow>
                    <a className="featuredblog"
                      href={`/sermons/${sermon.slug}`}
                      style={Object.assign({}, clickableStyles, boxerStyles, {backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(' + sermon.coverImage + ')'})}>
                      <h4 className="tk-seravek-web">{sermon.title}</h4>
                      <p>{sermon.date}<br />{sermon.text}</p>
                      <br /><br />
                    </a>
                  </BoxShadow>
                </div>
                ))}
            </div>
          </div>

          {/* Videos */}
          <div className="row" style={{background: 'none', backgroundColor: '#dddddd', paddingBottom: 20}}>
            <div className="col-xs-10 col-xs-offset-1">
              <h2 className="tk-seravek-web"><a href="/blog">Videos</a></h2>
              <div className="col-sm-6 col-md-6">
                <BoxShadow>
                  <a className="featuredblog" href="/blog/the-bunny-run" style={Object.assign({}, clickableStyles, boxerStyles, {backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://i.vimeocdn.com/video/560428840_1280.jpg)'})}>
                    <br /><br />
                    <h4 className="tk-seravek-web">The Bunny Run </h4>
                    <p> March 14</p>
                    <br /><br /><br /><br />
                  </a>
                </BoxShadow>
              </div>
              <div className="col-sm-6 col-md-6">
                <BoxShadow>
                  <a className="featuredblog" href="/blog/parenting-event" style={Object.assign({}, clickableStyles, boxerStyles, {backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://i.vimeocdn.com/video/558788268_640.jpg)'})}>
                    <br /><br />
                    <h4 className="tk-seravek-web">Parenting Event</h4>
                    <p> March 2</p>
                    <br /><br /><br /><br />
                  </a>
                </BoxShadow>
              </div>
            </div>
          </div>

          {/* Photos */}
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <h2 className="tk-seravek-web"><a href="/photos">Photos</a></h2>
              {slice<Photo>(data.photos!.recent!, 0, 8).map((photo) => (
              <div className="col-md-3" style={{paddingBottom: 10}}>
                <a href={photo.url}><img src={photo.thumbnail} style={{height: 175}} /></a>
              </div>
              ))}
            </div>
          </div>

          {/* Social networks */}
          <div className="row" style={{background: 'none', backgroundColor: '#fff', paddingBottom: 40}}>
            <div className="col-xs-10 col-xs-offset-1">
              <div className="col-md-5">
                <h2 className="tk-seravek-web"><a href="https://www.facebook.com/CompassHB">Facebook</a></h2>
                <div className="fb-like-box" data-href="https://www.facebook.com/CompassHB" data-colorscheme="light" data-show-faces="false" data-header="false" data-stream="true" data-show-border="false" />
                <div id="fb-root"></div>
                <script src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0&appId=386571371526429" id="facebook-jssdk" async defer></script>
              </div>
              <div className="col-md-7">
                <h2 className="tk-seravek-web"><a href="https://www.twitter.com/compasshb">Tweets</a></h2>
                <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/BradMSmith/lists/compasshb" data-widget-id="566872417012690945" data-chrome="noheader">
                  Tweets from https://twitter.com/BradMSmith/lists/compasshb
                </a>
                <script src="https://platform.twitter.com/widgets.js" id="twitter-wjs" async defer></script>
                </div>
              </div>
              <br /><br />&nbsp;<br /><br />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>;
  }
}
