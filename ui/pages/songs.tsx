import * as React from "react";
import header from "../components/header";
import footer from "../components/footer";
import {PageConfig} from "../config";

export class SongsPage implements PageConfig<{}> {
  render() {
    return <div>
      <header />
      /songs page
      <footer />
    </div>;
  }
}
