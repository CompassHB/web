import * as React from "react";
import header from "../components/header";
import footer from "../components/footer";

export const SongsPage = {
  render() {
    return React.DOM.div({},
      header(),
      '/songs page',
      footer()
    );
  },

  urlPattern: '/songs',
};
