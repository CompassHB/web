import * as React from "react";
import {Grid, Row, Col} from 'react-bootstrap';
import header from "../components/header";
import footer from "../components/footer";

const {div, ul, li, link, h1, html, head, img, body, a, meta, script, span} = React.DOM;

function grid(props, ...children) {
  return React.createElement(Grid, props, ...children);
}

function row(props, ...children) {
  return React.createElement(Row, props, ...children);
}

export class KidsPage extends React.Component<{}, void> {
  render() {
    return div({},
      header(),

      grid({},
        row({},
          '/kids page'
        )
      ),

      footer()
    );
  }

  static urlPattern = '/kids';

  static render(): Promise<React.ReactElement<any>> {
    return Promise.resolve(React.createElement(KidsPage, {}));
  }
}
