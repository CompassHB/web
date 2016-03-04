import * as material from "../material";
import * as React from "react";
var {div, h1, img, a, span} = React.DOM;

const styles = {
  link: (img: string) => ({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    color: 'white',
    display: 'block',
    minHeight: 438,
    position: 'relative',
    textDecoration: 'none',
    textTransform: 'uppercase',
  }),
  label: {
    backgroundColor: '#DD3F2E',
    fontSize: '1.1em',
    left: '2em',
    padding: '4px 10px',
    position: 'absolute',
    textTransform: 'none',
    top: 0,
  },
  title: {
    color: 'white',
    margin: '2em',
    textAlign: 'center',
  },
  metadata: {
    bottom: 0,
    color: '#BBB',
    left: 0,
    padding: '2em',
    position: 'absolute',
    textAlign: 'left',
  },
  aligner: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};


export default function latestSermon(sermon) {
  // TODO(ewinslow): Parameterize this URL
  return a({ href: '/sermons/' + sermon.slug, style: styles.link('https://i.vimeocdn.com/video/556184684_640.jpg') },
    span({ style: styles.label }, `Latest sermon`),

    div({ style: styles.aligner },
      h1({ style: styles.title }, sermon.title),

      div({ style: { textAlign: 'center' } },
        img({
          src: material.icons.svg.playCircleOutline.white.src,
          width: 72,
          height: 72,
          alt: 'Play',
        })
      )
    ),

    div({ style: styles.metadata },
      div({}, 'Bill Blakey'),
      div({}, 'Romans 5:6-8'),
      div({}, 'February 14, 2016')
    )
  );
}
