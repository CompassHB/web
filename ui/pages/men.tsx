import * as React from "react";
import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {ContentNav} from "../components/contentNav";

export class MenPage extends React.Component<{}, {}> {
  render() {
    return <div>
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9 col-sm-push-3" style={{paddingTop: 20}}>
            <div className="Setting Box Box--Large Box--bright utility-flex">
              <h1 className="Setting__heading tk-seravek-web">Men</h1>
              <div className="col-md-4" style={{clear: 'left', marginTop: 20}}>
                <a href="https://www.compasshb.com/sermons/mens-retreat-2016-session-4" style={{backgroundImage: 'url(https://i.vimeocdn.com/video/554589747_640.jpg)', backgroundSize: 'cover', width: 200, height: 125, display: 'block'}} />
                <h4 className="tk-seravek-web">
                  <a href="https://www.compasshb.com/videos/mens-retreat-2016-session-4">Men’s Retreat 2016 - Session 4 </a>
                </h4>
                <p>
                  <span style={{display: 'block'}}>Sunday, January 31, 2016</span>
                  <span style={{display: 'block'}}>Bobby Blakey</span>
                </p>
              </div>

              <div className="col-md-4" style={{marginTop: 20}}>
                <a href="https://www.compasshb.com/sermons/mens-retreat-2016-session-3" style={{backgroundImage: 'url(https://i.vimeocdn.com/video/554582150_640.jpg)', backgroundSize: 'cover', width: 200, height: 125, display: 'block'}} />
                <h4 className="tk-seravek-web">
                  <a href="https://www.compasshb.com/videos/mens-retreat-2016-session-3">Men’s Retreat 2016 - Session 3</a>
                </h4>
                <p>
                  <span style={{display: 'block'}}>Saturday, January 30, 2016</span>
                  <span style={{display: 'block'}}>Bobby Blakey</span>
                </p>
              </div>
              <div className="col-md-4" style={{marginTop: 20}}>
                <a href="https://www.compasshb.com/sermons/mens-retreat-2016-session-2" style={{backgroundImage: 'url(https://i.vimeocdn.com/video/554425400_1280.jpg)', backgroundSize: 'cover', width: 200, height: 125, display: 'block'}} />
                <h4 className="tk-seravek-web">
                  <a href="https://www.compasshb.com/videos/mens-retreat-2016-session-2">Men’s Retreat 2016 - Session 2</a>
                </h4>
                <p>
                  <span style={{display: 'block'}}>Saturday, January 30, 2016</span>
                  <span style={{display: 'block'}}>Bobby Blakey</span>
                </p>
              </div>

              <div className="col-md-4" style={{clear: 'left', marginTop: 20}}> <a href="https://www.compasshb.com/sermons/mens-retreat-2016-session-1" style={{backgroundImage: 'url(https://i.vimeocdn.com/video/554418903_1280.jpg)', backgroundSize: 'cover', width: 200, height: 125, display: 'block'}} />
                <h4 className="tk-seravek-web"><a href="https://www.compasshb.com/videos/mens-retreat-2016-session-1">Men’s Retreat 2016 - Session 1</a></h4>
                <p>
                  <span style={{display: 'block'}}>Friday, January 29, 2016</span>
                  <span style={{display: 'block'}}>Bobby Blakey</span>
                </p>
              </div>
            </div>
          </div>

          <ContentNav active="men" />
        </div>
      </div>
      <Footer/>
    </div>
  }

  static urlPattern = '/men';

  static render(): Promise<React.ReactElement<any>> {
    return Promise.resolve(<MenPage />);
  }
}
