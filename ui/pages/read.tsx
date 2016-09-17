import * as React from "react";
import {Page} from "../components/page";
import {PageConfig} from "../config";
import {Graph, Passage} from "../../model/falcor";
import {slice} from "../slice";

export class ReadPage implements PageConfig {
  title(data: Graph) {
    return "Scripture of the Day";
  }

  render(data: Graph) {
    const passage = data.passages.recent[0];
    const passages = slice<Passage>(data.passages.recent, 0, 7);

    return <Page title={passage.title}>
      <div dangerouslySetInnerHTML={{__html: passage.content}}></div>
      <h3>Bible Overview</h3>
      <div dangerouslySetInnerHTML={{__html: passage.overview}}></div>
      <br/>
      <p> {passage.activity.today} people have read today. {passage.activity.now} active users. </p>
      {/* TODO(ewinslow): Pull this from the ESV API */}
      <audio src="https://audio.esvbible.org/hw/43012001-43012050.mp3" controls />
      <h5 className="tk-seravek-web">This Week</h5>
      <ul>
        {passages.map(({slug, title}) => (
        <li><a href={`/read/${slug}`}>{title}</a></li>
        ))}
      </ul>
      <br/>
      TODO: Disqus comments go here...
    </Page>
  }

  data() {
    return {
      passages: {
        recent: {
          "0": {
            title: true,
            content: true,
            overview: true,
            slug: true,
            activity: {
              today: true,
              now: true,
            },
          },
          "0..7": {
            $type: 'range',
            title: true,
            slug: true,
          },
          length: true,
        },
      },
    };
  }
}
