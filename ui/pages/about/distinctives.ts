import * as React from "react";
import header from "../../components/header";
import footer from "../../components/footer";

const {div, ul, li, link, h1, html, head, img, body, a, meta, script, span} = React.DOM;

export class AboutDistinctivesPage extends React.Component<{}, void> {
  render() {
    return div({},
      header(),
      'Distinctives page',
      footer()
    );
  }

  static urlPattern = '/about/distinctives';

  static render(): Promise<React.ReactElement<any>> {
    return Promise.resolve(React.createElement(AboutDistinctivesPage, {}));
  }
}
