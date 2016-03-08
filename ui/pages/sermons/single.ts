import * as wpcom from "wpcom";
import * as React from "react";
import header from "../../components/header";
import footer from "../../components/footer";

const {div, main, h1} = React.DOM;


export class SermonPage extends React.Component<{title:string,content:string},void> {
  render() {
    const {title, content} = this.props;

    return div({},
      header(),
      main({},
        h1({}, title),
        // TODO(ewinslow): Use an HTML sanitizer or something
        div({ dangerouslySetInnerHTML: { __html: content } })
      ),
      footer()
    );
  }

  static urlPattern = '/sermons/:slug';

  static render({slug}): Promise<React.ReactElement<any>> {
    return wpcom().site('compasshb.wordpress.com').post({slug}).get()
        .then((post) => React.createElement(SermonPage, post));
  }
}