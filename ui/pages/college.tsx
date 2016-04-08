import * as React from "react";
import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {MinistriesNav} from "../components/ministriesNav";

export class CollegePage extends React.Component<{}, {}> {
  render() {
    return <div>
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9 col-sm-push-3" style={{paddingTop: 20}}>
            <h1 className="tk-seravek-web">The Underground College Ministry</h1>
            <p>
              The college ministry meets Sundays at 7PM for dinner, teaching and small groups at the church.
              For more information contact info@compashb.com.
            </p>
            <p>
              <img src="https://scontent-iad3-1.xx.fbcdn.net/hphotos-xfa1/t31.0-8/12244626_782033515239161_5841761662630853834_o.jpg" width={400} height={233} />
            </p>
          </div>
          <div className="col-sm-3 col-sm-pull-9">
            <MinistriesNav active="college"/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  }

  static urlPattern = '/college';

  static render(): Promise<React.ReactElement<any>> {
    return Promise.resolve(<CollegePage />);
  }
}
