import * as React from "react";
import * as gallery from "../components/gallery";
import {Page} from "../components/page";
import {MinistriesNav} from "../components/ministriesNav";
import {slice} from "../slice";
import {PageConfig} from "../config";
import {Graph, Sermon} from "../../model/falcor";

export class MenPage implements PageConfig<{}> {
  render(data: Graph) {
    const sermons = slice<Sermon>(data.ministries.bySlug['men'].sermons.recent, 0, 100);

    return (
      <Page title="Men" nav={<MinistriesNav active="men" />}>
        <ol style={gallery.container}>
          {sermons.map((sermon) => (
          <li style={gallery.item}>
            <a href={`videos/${sermon.slug}`} style={{backgroundImage: `url(${sermon.coverImage})`, backgroundSize: 'cover', width: 200, height: 125, display: 'block'}} />
            <h4 className="tk-seravek-web">
              <a href={`videos/${sermon.slug}`}>{sermon.title}</a>
            </h4>
            <p>
              <span style={{display: 'block'}}>{sermon.date}</span>
              <span style={{display: 'block'}}>{sermon.teacher.name}</span>
            </p>
          </li>
          ))}
        </ol>
      </Page>
    );
  }

  data() {
    return {
      ministries: {
        bySlug: {
          ['men']: {
            sermons: {
              recent: {
                '0..99': {
                  $type: 'range',
                  slug: true,
                  coverImage: true,
                  title: true,
                  date: true,
                  teacher: {
                    name: true,
                  },
                },
                length: true,
              },
            },
          },
        },
      },
    };
  }
}
