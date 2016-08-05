import * as React from "react";
import {ContentNav} from "../../components/contentNav";
import {Page} from "../../components/page";

export const SermonPage = {
  render({data, params}) {
    const sermon = data.sermons.bySlug[params.slug];

    // TODO(ewinslow): Use an HTML sanitizer or something}
    return <Page title={sermon.title} nav={<ContentNav active="sermons" />}>
      <div dangerouslySetInnerHTML={{__html: sermon.content}}></div>
    </Page>;
  },

  urlPattern: '/sermons/:slug',

  data({slug}) {
    return {
      sermons: {
        bySlug: {
          [slug]: {
            title: true,
            content: true,
          },
        },
      },
    };
  },
};
