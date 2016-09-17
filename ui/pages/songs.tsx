import * as React from "react";
import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {PageConfig} from "../config";

export class SongsPage implements PageConfig {
  render() {
    return <div>
      <Header />
      /songs page
      <Footer />
    </div>;
  }
}
