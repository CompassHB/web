import * as React from "react";
import {Page} from "../../components/page";
import {PageConfig} from "../../config";
import {Graph} from "../../../model/falcor";

export class SermonPage implements PageConfig {
  constructor(private slug: string) {}

  render(data: Graph) {
    const sermon = data.sermons!.bySlug![this.slug]!;

    // TODO(ewinslow): Use an HTML sanitizer or something}
    return <Page title={sermon.title!}>
      <div dangerouslySetInnerHTML={{__html: sermon.content!}}></div>
    </Page>;
  }

  data() {
    return {
      sermons: {
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