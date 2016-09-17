import * as React from "react";
import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {PageConfig} from "../config";

export class ReadPage implements PageConfig {
  render() {
    return <div>
      <Header />
      /read page
      <Footer />
    </div>
  }
}
