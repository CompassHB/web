import * as React from "react";
import header from "../components/header";
import footer from "../components/footer";

const {div} = React.DOM;

export const ReadPage = {
  render() {
    return div({},
      header(),
      '/read page',
      footer()
    );
  },

  urlPattern: '/read',
};
