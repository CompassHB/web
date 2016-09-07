import * as React from "react";
import * as gallery from '../components/gallery';
import {AboutNav} from '../components/aboutNav';
import {Page} from '../components/page';
import {slice} from '../slice';

const styles = {
  heading: {
    marginTop: 0,
  },
};

export const WhatWeBelievePage = {
  render({data}: any) {
    const beliefs = slice(data.beliefs.inOrder, 0, 8);
    return (
      <Page title="What We Believe" nav={<AboutNav active="what-we-believe" />}>
        <ul style={gallery.container}>
          {beliefs.map((belief: any) => (
          <li className="well" style={gallery.item}>
            <h3 style={styles.heading}>{belief.title}</h3>
            <p>{belief.content}</p>
          </li>
          ))}
        </ul>
      </Page>
    );
  },

  urlPattern: '/what-we-believe',

  redirects: {
    '/what-we-believe': 301,
  } as {[url: string]: number},

  data() {
    return {
      beliefs: {
        inOrder: {
          "0..7": {
            $type: 'range',
            title: true,
            content: true,
          },
          length: true,
        },
      },
    };
  },
};
