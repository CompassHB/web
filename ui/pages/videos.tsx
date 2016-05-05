import * as React from "react";
import header from "../components/header";
import footer from "../components/footer";

const {div, ul, li, link, h1, html, head, img, body, a, meta, script, span} = React.DOM;

export const VideosPage = {
  render() {
    return div({},
      header(),
      '/videos page',
      footer()
    );
  },

  urlPattern: '/videos',
};
