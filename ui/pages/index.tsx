import * as React from "react";
import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {LatestSermon, latestSermonData} from "../components/latestSermon";
import {slice} from "../slice";
import {Event, Graph, Sermon} from '../../model/falcor';
import {PageConfig} from "../config";

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
        <style dangerouslySetInnerHTML={{__html: "\n        .boxer {\n          display: block;\n          text-transform: uppercase;\n          color: #fff;\n          padding: 10px;\n          width: 100%;\n          min-height: 129px;\n          background-size: cover;\n          background-position: center;\n        }\n        " }} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="drawer row">
                <div className="col-sm-9">
                  <div className="Box--shadow--big" style={{width: '100%'}}>
                    <span className="Box--shadow--wrap">
                      <LatestSermon sermon={sermon} />
                    </span>
                  </div>
                </div>
          <div className="col-sm-3">
            <div className="Box--shadow" style={{width: '100%'}}>
              <span className="Box--shadow--wrap">
                <a className="clickable boxer" href="/read" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${data.passages!.logo!.src})`}}>
                  <h4 className="tk-seravek-web">{data.passages!.recent![0]!.title}</h4>
                  <p>Scripture of the Day</p>
                </a>
              </span>
            </div>
          </div>
          {events.map((event) =>
          <div className="col-sm-3">
            <div className="Box--shadow" style={{width: '100%'}}>
              <span className="Box--shadow--wrap">
                <a className="clickable featuredblog boxer" href={"/events/" + event.slug} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${event.coverImage})`}}>
                  <h4 className="tk-seravek-web">{event.title}</h4>
                  <p>{event.startTime}</p>
                </a>
              </span>
            </div>
          </div>
          )}
        </div>
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
            <div className="col-md-4 text-center" style={{}}>
              <h2 className="tk-seravek-web">Directions</h2>
              <br />
              <a href="https://www.google.com/maps?ll=33.74078,-118.040232&z=10&t=m&hl=en-US&gl=US&mapclient=embed&q=5082+Argosy+Ave+Huntington+Beach,+CA+92649"><img data-src="https://compasshb.smugmug.com/photos/i-WWb58Jn/0/M/i-WWb58Jn-M.png" width={300} height={262} alt="Map to Compass HB" className="lazyload" /></a>
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
      <div className="row">
        <div style={{backgroundImage: 'url(https://compasshb.smugmug.com/photos/i-WMM77kp/0/X3/i-WMM77kp-X3.jpg)', paddingTop: 250, backgroundAttachment: 'fixed', backgroundPosition: '50% 0', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} />
      </div>
      <div className="row" style={{background: 'none', backgroundColor: '#fff', paddingBottom: 20}}>
        <div className="col-xs-10 col-xs-offset-1">
          <h2 className="tk-seravek-web"><a href="/sermons">Sermons</a></h2>
            {sermons.map(sermon => (
              <div className="col-sm-6 col-md-3">
                <div className="Box--shadow" style={{width: '100%'}}>
                  <span className="Box--shadow--wrap">
                    <a className="clickable featuredblog boxer"
                      href={`/sermons/${sermon.slug}`}
                      style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(' + sermon.coverImage + ')'}}>
                      <h4 className="tk-seravek-web">{sermon.title}</h4>
                      <p>{sermon.date}<br />{sermon.text}</p>
                      <br /><br />
                    </a>
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="row" style={{background: 'none', backgroundColor: '#dddddd', paddingBottom: 20}}>
        <div className="col-xs-10 col-xs-offset-1">
          <h2 className="tk-seravek-web"><a href="/blog">Videos</a></h2>
          <div className="col-sm-6 col-md-6">
            <div className="Box--shadow" style={{width: '100%'}}>
                    <span className="Box--shadow--wrap">
                      <a className="clickable featuredblog boxer" href="/blog/the-bunny-run" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://i.vimeocdn.com/video/560428840_1280.jpg)'}}>
                        <br /><br />
                        <h4 className="tk-seravek-web">The Bunny Run </h4>
                        <p> March 14</p>
                        <br /><br /><br /><br />
                      </a>
                    </span>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="Box--shadow" style={{width: '100%'}}>
                    <span className="Box--shadow--wrap">
                      <a className="clickable featuredblog boxer" href="/blog/parenting-event" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://i.vimeocdn.com/video/558788268_640.jpg)'}}>
                        <br /><br />
                        <h4 className="tk-seravek-web">Parenting Event</h4>
                        <p> March 2</p>
                        <br /><br /><br /><br />
                      </a>
                    </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <h2 className="tk-seravek-web"><a href="/photos">Photos</a></h2>
          <div className="col-md-3" style={{paddingBottom: 10}}>
            <a href="https://compasshb.smugmug.com/PhotoArchive/Child-Dedications/Child-Dedications-021816/i-44qXNQg/"><img data-src="https://compasshb.smugmug.com/PhotoArchive/Child-Dedications/Child-Dedications-021816/i-44qXNQg/0/M/160228_DED_SS-085-M.jpg" className="lazyload" style={{height: 175}} alt="photos.compasshb.com" /></a>
          </div>
          <div className="col-md-3" style={{paddingBottom: 10}}>
            <a href="https://compasshb.smugmug.com/PhotoArchive/Child-Dedications/Child-Dedications-021816/i-js2tQ9G/"><img data-src="https://compasshb.smugmug.com/PhotoArchive/Child-Dedications/Child-Dedications-021816/i-js2tQ9G/0/M/160228_DED_SS-077-M.jpg" className="lazyload" style={{height: 175}} alt="photos.compasshb.com" /></a>
          </div>
          <div className="col-md-3" style={{paddingBottom: 10}}>
            <a href="https://compasshb.smugmug.com/PhotoArchive/Child-Dedications/Child-Dedications-021816/i-73Vc9pn/"><img data-src="https://compasshb.smugmug.com/PhotoArchive/Child-Dedications/Child-Dedications-021816/i-73Vc9pn/0/M/160228_DED_SS-063-M.jpg" className="lazyload" style={{height: 175}} alt="photos.compasshb.com" /></a>
          </div>
          <div className="col-md-3" style={{paddingBottom: 10}}>
            <a href="https://compasshb.smugmug.com/PhotoArchive/Child-Dedications/Child-Dedications-021816/i-2SD9Bdb/"><img data-src="https://compasshb.smugmug.com/PhotoArchive/Child-Dedications/Child-Dedications-021816/i-2SD9Bdb/0/M/160228_DED_SS-062-M.jpg" className="lazyload" style={{height: 175}} alt="photos.compasshb.com" /></a>
          </div>
          <div className="col-md-3" style={{paddingBottom: 10}}>
            <a href="https://compasshb.smugmug.com/PhotoArchive/Child-Dedications/Child-Dedications-021816/i-WZphmPD/"><img data-src="https://compasshb.smugmug.com/PhotoArchive/Child-Dedications/Child-Dedications-021816/i-WZphmPD/0/M/160228_DED_SS-022-M.jpg" className="lazyload" style={{height: 175}} alt="photos.compasshb.com" /></a>
          </div>
          <div className="col-md-3" style={{paddingBottom: 10}}>
            <a href="https://compasshb.smugmug.com/PhotoArchive/Child-Dedications/Child-Dedications-021816/i-JLs3MXT/"><img data-src="https://compasshb.smugmug.com/PhotoArchive/Child-Dedications/Child-Dedications-021816/i-JLs3MXT/0/M/160228_DED_SS-044-M.jpg" className="lazyload" style={{height: 175}} alt="photos.compasshb.com" /></a>
          </div>
          <div className="col-md-3" style={{paddingBottom: 10}}>
            <a href="https://compasshb.smugmug.com/PhotoArchive/Child-Dedications/Child-Dedications-021816/i-N6gBk9S/"><img data-src="https://compasshb.smugmug.com/PhotoArchive/Child-Dedications/Child-Dedications-021816/i-N6gBk9S/0/M/160228_DED_SS-018-M.jpg" className="lazyload" style={{height: 175}} alt="photos.compasshb.com" /></a>
          </div>
          <div className="col-md-3" style={{paddingBottom: 10}}>
            <a href="https://compasshb.smugmug.com/PhotoArchive/Child-Dedications/Child-Dedications-021816/i-6rb2q5j/"><img data-src="https://compasshb.smugmug.com/PhotoArchive/Child-Dedications/Child-Dedications-021816/i-6rb2q5j/0/M/160228_DED_SS-008-M.jpg" className="lazyload" style={{height: 175}} alt="photos.compasshb.com" /></a>
          </div>
        </div>
      </div>
      <div className="row" style={{background: 'none', backgroundColor: '#fff', paddingBottom: 40}}>
        <div className="col-xs-10 col-xs-offset-1">
          <div className="col-md-5">
            <h2 className="tk-seravek-web"><a href="https://www.facebook.com/CompassHB">Facebook</a></h2>
            <div className="fb-like-box" data-href="https://www.facebook.com/CompassHB" data-colorscheme="light" data-show-faces="false" data-header="false" data-stream="true" data-show-border="false" />
          </div>
          <div className="col-md-7">
            <h2 className="tk-seravek-web"><a href="https://www.twitter.com/compasshb">Tweets</a></h2><br />
            <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/BradMSmith/lists/compasshb" data-widget-id={566872417012690945} data-chrome="noheader">Tweets from https://twitter.com/BradMSmith/lists/compasshb</a>   </div>
          </div>
          <br /><br />&nbsp;<br /><br />
        </div>
        <div className="row" style={{background: 'none', backgroundColor: '#fff', paddingBottom: 20}}>
          <div className="col-xs-10 col-xs-offset-1">
            <h2 className="tk-seravek-web"><a href="https://www.instagram.com/compasshb">Instagram</a></h2>
            <div className="col-sm-6 col-md-3">
              <div className="thumbnail">
                <a href="https://www.instagram.com/p/BDGk9FDTXcW/">
                  <img data-src="https://scontent.cdninstagram.com/t51.2885-15/e15/12822567_1684502881815900_874786318_n.jpg?ig_cache_key=MTIwODgxNjA3Njk4MjE1NTAzMA%3D%3D.2" className="lazyload" alt="Compass HB Instagram" />
                </a>
                <p style={{padding: 10}}>The Bunny Run is TOMORROW!  Sign up today! </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="thumbnail">
                <a href="https://www.instagram.com/p/BCrr-d1TXX_/">
                  <img data-src="https://scontent.cdninstagram.com/t51.2885-15/e35/11373758_518652378317471_2137181717_n.jpg?ig_cache_key=MTIwMTI0NzEzNDI2NDY4NjA3OQ%3D%3D.2" className="lazyload" alt="Compass HB Instagram" />
                </a>
                <p style={{padding: 10}}>The Bunny Run is a week and a half away. Sign up today. Link in profile. #5k #egghunt </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="thumbnail">
                <a href="https://www.instagram.com/p/BAIMr9wTXWf/">
                  <img data-src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/1172298_1011539018903437_4968945_n.jpg?ig_cache_key=MTE1NTIyOTEwMjIyNDc5OTEzNQ%3D%3D.2.l" className="lazyload" alt="Compass HB Instagram" />
                </a>
                <p style={{padding: 10}}>Praise the Lord for answering our prayers and bringing @billblakey to be our new pastor! Now that 2016 is here let's ask God: SHOW ME YOUR GLORY! </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="thumbnail">
                <a href="https://www.instagram.com/p/-XDNzbTXbD/">
                  <img data-src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/11917839_174590899555911_1386563803_n.jpg?ig_cache_key=MTEyMzM4MDc3NDc2Mzg1MzUwNw%3D%3D.2.l" className="lazyload" alt="Compass HB Instagram" />
                </a>
                <p style={{padding: 10}}>Do people still want ice cream in November? Why yes, yes they do!!! #icecreamevangelism </p>
              </div>
            </div>
          </div>
        </div>
      </div></div></div>
      <Footer/>
    </div>
  }
}
