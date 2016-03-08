import * as wpcom from "wpcom";
import * as React from "react";
import header from "../components/header";

const {div, ul, li, link, h1, html, head, img, body, a, meta, script, span} = React.DOM;

export class ReadPage extends React.Component<{}, void> {
  render() {
    return div({},
      header(),
      '/read page'
    );
  }

  static urlPattern = '/read';

  static render(): Promise<React.ReactElement<any>> {
    return Promise.resolve(React.createElement(ReadPage, {}));
  }
}
