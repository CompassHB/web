import * as wpcom from "wpcom";
import * as React from "react";
import header from "../components/header";

const {div, ul, li, link, h1, html, head, img, body, a, meta, script, span} = React.DOM;

export class GivingPage extends React.Component<{}, void> {
  render() {
    return div({},
      header(),
      '/giving page'
    );
  }

  static urlPattern = '/giving';

  static render(): Promise<React.ReactElement<any>> {
    return Promise.resolve(React.createElement(GivingPage, {}));
  }
}
