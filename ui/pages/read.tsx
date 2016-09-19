import * as React from "react";
import {Page} from "../components/page";
import {PageConfig} from "../config";
import {Graph, Passage} from "../../model/falcor";
import {slice} from "../slice";



export class ReadPage implements PageConfig {
  constructor(private slug = '') {}

  title(data: Graph) {
    return "Scripture of the Day";
  }

  render(data: Graph) {
    const passage = this.slug ? data.passages!.bySlug![this.slug]! : data.passages!.recent![0]!;

    return this.renderPassage(data, passage);
  }

  renderPassage(data: Graph, passage: Passage) {
    const recent = slice<Passage>(data.passages!.recent!, 0, 7);

    return <Page title={passage.title!}>
      {passage.slug === recent[0].slug ||
      <div className="alert alert-info" role="alert">
        <strong>New Post!</strong> You are reading an old post. <a href="/read">Click here to read today's post.</a>
      </div>}
      <div dangerouslySetInnerHTML={{__html: passage.content!}}></div>
      <h3>Bible Overview</h3>
      <div dangerouslySetInnerHTML={{__html: passage.overview!}}></div>
      <br/>
      <p> {passage!.activity!.today} people have read today. {passage!.activity!.now} active users. </p>
      {/* TODO(ewinslow): Pull this from the ESV API */}
      <audio src="https://audio.esvbible.org/hw/43012001-43012050.mp3" controls />
      <h5 className="tk-seravek-web">This Week</h5>
      <ul>
        {recent.map(({slug, title}) => (
        <li><a href={`/read/${slug}`}>{title}</a></li>
        ))}
      </ul>
      <br/>
      <div id="disqus_thread"></div>
      <script dangerouslySetInnerHTML={{__html: `
          /* * * CONFIGURATION VARIABLES * * */
          var disqus_url = 'https://www.compasshb.com/read/${passage.slug}/';
          var disqus_title = '${passage.title} - Scripture of the Day - Compass HB';
          var disqus_identifier = 'read-${passage.id}';
      `}}></script>
      <script src="https://compasshb.disqus.com/embed.js" async defer></script>
    </Page>
  }

  data(): Graph {
    const passageDetails = {
      title: 'true',
      content: 'true',
      overview: 'true',
      slug: 'true',
      audio: 'true',
      activity: {
        today: 1,
        now: 1,
      },
    };

    return {
      passages: {
        bySlug: {
          [this.slug]: this.slug ? passageDetails : {},
        },
        recent: {
          '0': this.slug ? {} : passageDetails,
          "0..7": {
            $type: 'range',
            title: 'true',
            slug: 'true',
          },
          length: 1,
        },
      },
    };
  }
}
