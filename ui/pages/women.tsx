import * as React from "react";
import {MinistriesNav} from "../components/ministriesNav";
import {Page} from "../components/page";
import {PageConfig} from "../config";

export class WomenPage implements PageConfig<{}> {
  render() {
    return <Page title="Women" nav={<MinistriesNav active="women" />}>
      Sermons by Christa...
    </Page>;
  }
}
