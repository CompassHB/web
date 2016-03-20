import * as React from "react";
import header from "../components/header";
import footer from "../components/footer";

const {div, ul, li, link, h1, html, head, img, body, a, meta, script, span} = React.DOM;

export class WomenPage extends React.Component<{}, {}> {
  render() {
    return div({},
      header(),
      '/women page',
      footer()
    );
  }

  static urlPattern = '/women';

  static render(): Promise<React.ReactElement<any>> {
    return Promise.resolve(React.createElement(WomenPage, {}));
  }
}
