import * as React from "react";
import header from "../../components/header";
import footer from "../../components/footer";
import * as Bootstrap from "../../bootstrap";

const {div, ul, li, link, h1, html, head, img, body, a, meta, script, span} = React.DOM;

const {grid, row, col} = Bootstrap

interface ISidenavAndContainerProps {
  title: string;
  navLinks: Array<[string, string]>;
}

class SidenavAndContainer extends React.Component<ISidenavAndContainerProps, void> {
  constructor(props: ISidenavAndContainerProps) {
    super(props);
  }

  render() {
    const {title, navLinks} = this.props
    return grid({ fluid: true, style: { backgroundColor: '#eee' } },
      row({},
        col({ xs: 12 },
          'What we believe page')))
  }
}

export class AboutBeliefsPage extends React.Component<{}, void> {
  render() {
    return div({},
      header(),
      React.createElement(SidenavAndContainer, { title: "What We Believe", navLinks: [] }),
      footer());
  }

  static urlPattern = '/about/beliefs';

  static redirects = {
    '/what-we-believe': 301,
  };

  static render(): Promise<React.ReactElement<any>> {
    return Promise.resolve(React.createElement(AboutBeliefsPage, {}));
  }
}
