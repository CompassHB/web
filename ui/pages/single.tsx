import * as React from "react";
import {ContentNav} from "../components/contentNav";
import {Page} from "../components/page";

export const PagesPage = {
  render({data, params}: any) {
    // TODO(): redirect 404 if results are undefined
    const page = data.pages.bySlug[params.slug];

    // TODO(ewinslow): Use an HTML sanitizer or something}
    return <Page title={page.title}>
      <div dangerouslySetInnerHTML={{__html: page.content}}></div>
    </Page>;
  },

  urlPattern: '/:slug',

  data({slug}: {slug: string}) {
    return {
      pages: {
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
