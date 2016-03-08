import * as wpcom from "wpcom";
import * as React from "react";
import header from "../../components/header";

const {div, ul, li, link, h1, html, head, img, body, a, meta, script, span} = React.DOM;

export class AboutUsPage extends React.Component<{}, void> {
  render() {
    return div({},
      header(),
      'Who we are page'
    );
  }

  static urlPattern = '/about/us';

  static render(): Promise<React.ReactElement<any>> {
    return Promise.resolve(React.createElement(AboutUsPage, {}));
  }
}
