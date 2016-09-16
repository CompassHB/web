import * as React from "react";
import {Page} from "../components/page";
import {PageConfig} from "../config";

export class WomenPage implements PageConfig {
  render() {
    return <Page title="Women">
      Sermons by Christa...
    </Page>;
  }
}
