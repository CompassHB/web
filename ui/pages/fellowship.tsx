import * as React from "react";
import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {MinistriesNav} from "../components/ministriesNav";

export class FellowshipPage extends React.Component<{}, {}> {
  render() {
    return <div>
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9 col-sm-push-3" style={{paddingTop: 20}}>
            <div className="Setting Box Box--Large Box--bright utility-flex">
              <h1 className="Setting__heading tk-seravek-web">Home Fellowship Groups</h1> <br />
              <p>
                We want every adult in our church to be part of a home fellowship group! We have groups Tuesday, Wednesday, Thursday and Friday nights ready for you to join!
                Stop by the Compass Connect table for more information or email info@compasshb.com
              </p><br />
              <div className="row"></div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title tk-seravek-web">About</h3>
                </div>
                <div className="panel-body">
                  <p>
                    Worksheet questions are designed for the application of this week's sermon.
                    Take some time to thoughtfully write out the answers.
                    It is also helpful to discuss in a home fellowship group.
                    If you would like more information on a home fellowship group, email info@compassHB.com.
                  </p>
                  <p><a href="mailto:info@compasshb.com" className="btn btn-primary"><i className="material-icons">email</i> Sign Up</a></p>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Latest Sermon and Worksheet</h3>
                </div>
                <div className="panel-body">
                  <p>The materials on this page are to help you prepare for home fellowship group discussions.</p>
                  <p><a href="https://www.compasshb.com/sermons" className="btn btn-primary">Latest Sermon</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-sm-pull-9">
            <MinistriesNav active="fellowship"/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  }

  static urlPattern = '/fellowship';

  static render(): Promise<React.ReactElement<any>> {
    return Promise.resolve(React.createElement(FellowshipPage, {}));
  }
}
