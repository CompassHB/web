import * as React from "react";
import {Page} from "../components/page";
import {MinistriesNav} from "../components/ministriesNav";
import {PageConfig} from "../config";

export class FellowshipPage implements PageConfig<{}> {
  render() {
    return (
      <Page title="Home Fellowship Groups" nav={<MinistriesNav active="fellowship"/>}>
        <p>
          We want every adult in our church to be part of a home fellowship group! We have groups Tuesday, Wednesday, Thursday and Friday nights ready for you to join!
          Stop by the Compass Connect table for more information or email info@compasshb.com
        </p>
        <br />
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
            <p><a href="/sermons" className="btn btn-primary">Latest Sermon</a></p>
          </div>
        </div>
      </Page>
    );
  }
}
