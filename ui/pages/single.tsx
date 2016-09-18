import * as React from "react";
import {Page} from "../components/page";
import {PageConfig} from "../config";
import {Graph} from "../../model/falcor";

export class PagesPage implements PageConfig {
  constructor(private slug: string) {}

  render(data: Graph) {
    // TODO(): redirect 404 if results are undefined
    const page = data.pages!.bySlug![this.slug]!;

    // TODO(ewinslow): Use an HTML sanitizer or something}
    return <Page title={page.title || ''}>
      <link rel="stylesheet" href="https://api.compasshb.com/wp-content/plugins/js_composer/assets/css/js_composer.min.css?ver=4.12.1" />
      <div dangerouslySetInnerHTML={{__html: page.content || ''}}></div>
    </Page>;
  }

  data(): Graph {
    return {
      pages: {
        bySlug: {
          [this.slug]: {
            title: 'true',
            content: 'true',
          },
        },
      },
    };
  }
}
