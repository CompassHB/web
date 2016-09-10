import * as React from "react";
import * as gallery from '../components/gallery';
import {AboutNav} from '../components/aboutNav';
import {Page} from '../components/page';
import {slice} from '../slice';
import {PageConfig} from "../config";
import {Graph, Belief} from "../../model/falcor";

const styles = {
  heading: {
    marginTop: 0,
  },
};

export class WhatWeBelievePage implements PageConfig<{}> {
  render(data: Graph) {
    const beliefs = slice<Belief>(data.beliefs.inOrder, 0, 8);
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
  }

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
  }
}
