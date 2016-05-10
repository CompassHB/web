import * as React from "react";
import {MinistriesNav} from "../components/ministriesNav";
import {Page} from "../components/page";

const {div} = React.DOM;

export const WomenPage = {
  render() {
    return <Page title="Women" nav={<MinistriesNav active="women" />}>
      Sermons by Christa...
    </Page>;
  },

  urlPattern: '/women',
};
