import * as React from "react";
import header from "../../components/header";
import footer from "../../components/footer";

const {div, ul, li, link, h1, html, head, img, body, a, meta, script, span} = React.DOM;

export class AboutBeliefsPage extends React.Component<{}, {}> {
  render() {
    return div({},
      header(),
      'What we believe page',
      footer()
    );
  }

  static urlPattern = '/about/beliefs';

  static redirects = {
    '/what-we-believe': 301,
  };

  static render(): Promise<React.ReactElement<any>> {
    return Promise.resolve(React.createElement(AboutBeliefsPage, {}));
  }
}
