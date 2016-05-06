import * as React from "react";
import {Page} from "../components/page";
import {MinistriesNav} from "./ministries/nav";
import {slice} from "../slice";

export const MenPage = {
  render({data}) {
    const sermons = slice<any>(data.ministries.byAlias.men.sermons.recent, 0, 100);

    return (
      <Page title="Men" nav={<MinistriesNav active="men" />}>
        <ol style={{display: 'flex', flexWrap: 'wrap', listStyleType: 'none', justifyContent: 'space-between', margin: 0, padding: 0}}>
          {sermons.map((sermon) => (
          <li style={{marginTop: 20, width: '33%'}}>
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
