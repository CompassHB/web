import * as React from "react";
import * as gallery from "../components/gallery";
import {Page} from "../components/page";
import {MinistriesNav} from "../components/ministriesNav";
import {slice} from "../slice";

export const MenPage = {
  render({data}: any) {
    const sermons = slice<any>(data.ministries.byAlias.men.sermons.recent, 0, 100);

    return (
      <Page title="Men" nav={<MinistriesNav active="men" />}>
        <ol style={gallery.container}>
          {sermons.map((sermon) => (
          <li style={gallery.item}>
            <a href={`videos/${sermon.alias}`} style={{backgroundImage: `url(${sermon.backgroundImage})`, backgroundSize: 'cover', width: 200, height: 125, display: 'block'}} />
            <h4 className="tk-seravek-web">
              <a href={`videos/${sermon.alias}`}>{sermon.title}</a>
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
  },

  urlPattern: '/men',

  data() {
    return {
      ministries: {
        byAlias: {
          men: {
            sermons: {
              recent: {
                '0..99': {
                  $type: 'range',
                  alias: true,
                  backgroundImage: true,
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
  },
};
