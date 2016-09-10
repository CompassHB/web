import * as React from "react";
import {ContentNav} from "../components/contentNav";
import {Page} from "../components/page";
import {PageConfig} from "../config";
import {Graph} from "../../model/falcor";

export class PagesPage implements PageConfig {
  constructor(private slug: string) {}

  render(data: Graph) {
    // TODO(): redirect 404 if results are undefined
    const page = data.pages.bySlug[this.slug];

    // TODO(ewinslow): Use an HTML sanitizer or something}
    return <Page title={page.title}>
      <div dangerouslySetInnerHTML={{__html: page.content}}></div>
    </Page>;
  }

  data() {
    return {
      pages: {
        bySlug: {
          [this.slug]: {
            title: true,
            content: true,
          },
        },
      },
    };
  }
}
