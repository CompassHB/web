import * as React from "react";
import header from "../../components/header";
import footer from "../../components/footer";

const {div, ul, li, link, h1, html, head, img, body, a, meta, script, span} = React.DOM;

export class AboutUsPage extends React.Component<{}, {}> {
  render() {
    return div({},
      header(),
      'Who we are page',
      footer()
    );
  }

  static urlPattern = '/about/us';

  static render(): Promise<React.ReactElement<any>> {
    return Promise.resolve(React.createElement(AboutUsPage, {}));
  }
}
