import * as React from "react";
import {ContentNav} from "../../components/contentNav";
import {Page} from "../../components/page";
import {PageConfig} from "../../config";
import {Graph} from "../../../model/falcor";

export interface Params {
  slug: string;
}

export class SermonPage implements PageConfig<Params> {
  render(data: Graph, {slug}: Params) {
    const sermon = data.sermons.bySlug[slug];

    // TODO(ewinslow): Use an HTML sanitizer or something}
    return <Page title={sermon.title} nav={<ContentNav active="sermons" />}>
      <div dangerouslySetInnerHTML={{__html: sermon.content}}></div>
    </Page>;
  }

  data({slug}: Params) {
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
  }
}
