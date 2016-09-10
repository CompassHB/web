import * as React from "react";
import {ContentNav} from "../components/contentNav";
import {Page} from "../components/page";
import {PageConfig} from "../config";
import {Graph} from "../../model/falcor";

export interface Params {
  slug: string;
}

export class PagesPage implements PageConfig<Params> {
  render(data: Graph, params: Params) {
    // TODO(): redirect 404 if results are undefined
    const page = data.pages.bySlug[params.slug];

    // TODO(ewinslow): Use an HTML sanitizer or something}
    return <Page title={page.title}>
      <div dangerouslySetInnerHTML={{__html: page.content}}></div>
    </Page>;
  }

  data({slug}: Params) {
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
  }
}
