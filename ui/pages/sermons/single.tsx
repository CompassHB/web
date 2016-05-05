import * as React from "react";
import header from "../../components/header";
import footer from "../../components/footer";

const {div, main, h1} = React.DOM;


export const SermonPage = {
  render({data, params}) {
    const sermon = data.sermons.byAlias[params.slug];

    return div({},
      header(),
      main({},
        h1({}, sermon.title),
        // TODO(ewinslow): Use an HTML sanitizer or something
        div({ dangerouslySetInnerHTML: { __html: sermon.content } })
      ),
      footer()
    );
  },

  urlPattern: '/sermons/:slug',

  data({slug}) {
    return [
      ['sermons', 'byAlias', slug, ['title', 'content']],
    ];
  },
};
