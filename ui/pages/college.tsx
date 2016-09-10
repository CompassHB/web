import * as React from "react";
import {MinistriesNav} from "../components/ministriesNav";
import {Page} from "../components/page";
import {PageConfig} from "../config";

export class CollegePage implements PageConfig {
  render() {
    return (
      <Page title="The Underground College Ministry" nav={<MinistriesNav active="college"/>}>
        <p>
          The college ministry meets Sundays at 7PM for dinner, teaching and small groups at the church.
          For more information contact info@compashb.com.
        </p>
        <p>
          <img src="https://scontent-iad3-1.xx.fbcdn.net/hphotos-xfa1/t31.0-8/12244626_782033515239161_5841761662630853834_o.jpg" width={400} height={233} />
        </p>
      </Page>
    );
  }
}
