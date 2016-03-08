import * as wpcom from "wpcom";
import * as React from "react";
import header from "../components/header";

const {div, ul, li, link, h1, html, head, img, body, a, meta, script, span} = React.DOM;

export class IceCreamEvangelismPage extends React.Component<{}, void> {
  render() {
    return div({},
      header(),
      'Ice cream evangelism page'
    );
  }

  static urlPattern = '/ice-cream-evangelism';

  static render(): Promise<React.ReactElement<any>> {
    return Promise.resolve(React.createElement(IceCreamEvangelismPage, {}));
  }
}
