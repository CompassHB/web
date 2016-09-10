import * as React from "react";
import header from "../components/header";
import footer from "../components/footer";
import {PageConfig} from "../config";

export class ReadPage implements PageConfig<{}> {
  render() {
    return <div>
      <header />
      /read page
      <footer />
    </div>
  }
}
