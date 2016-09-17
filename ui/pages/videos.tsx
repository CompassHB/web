import * as React from "react";
import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {PageConfig} from "../config";

export class VideosPage implements PageConfig {
  render() {
    return <div>
      <Header />
      /videos page,
      <Footer />
    </div>;
  }
}
