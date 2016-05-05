import * as React from "react";
import {MinistriesNav} from "./ministries/nav";
import {Page} from "../components/page";

const {div} = React.DOM;

export const WomenPage = {
  render() {
    return <Page title="Women" nav={<MinistriesNav />}>
      Sermons by Christa...
    </Page>;
  },

  urlPattern: '/women',
};
