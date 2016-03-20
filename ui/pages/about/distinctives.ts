import * as React from "react";
import header from "../../components/header";
import footer from "../../components/footer";

const {div, ul, li, link, h1, html, head, img, body, a, meta, script, span} = React.DOM;

export class AboutDistinctivesPage extends React.Component<{}, {}> {
  render() {
    return div({},
      header(),
      div({},
        h1({}, "8 Distinctives")
      ),
      footer()
    );
  }

  static urlPattern = '/about/distinctives';

  static redirects = {
    '/eight-distinctives': 301,
  };

  static render(): Promise<React.ReactElement<any>> {
    return Promise.resolve(React.createElement(AboutDistinctivesPage, {}));
  }
}
