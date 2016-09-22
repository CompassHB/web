import * as material from "../material";
import * as React from "react";
import {Sermon} from '../../model/falcor';

function linkStyles(img: string): React.CSSProperties {
  return {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    color: 'white',
    display: 'block',
    minHeight: 438,
    position: 'relative',
    textDecoration: 'none',
    textTransform: 'uppercase',
  };
}

const labelStyles: React.CSSProperties = {
  backgroundColor: '#DD3F2E',
  fontSize: '1.1em',
  left: '2em',
  padding: '4px 10px',
  position: 'absolute',
  textTransform: 'none',
  top: 0,
};

const titleStyles: React.CSSProperties = {
  color: 'white',
  fontFamily: 'Fira Sans',
  fontSize: '2.4em',
  fontWeight: 500,
  letterSpacing: '-0.01em',
  margin: '2em',
  textAlign: 'center',
  textTransform: 'uppercase',
};

const metadataStyles: React.CSSProperties = {
  bottom: 0,
  color: '#BBB',
  left: 0,
  padding: '2em',
  position: 'absolute',
  textAlign: 'left',
};

const alignerStyles: React.CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};


export function LatestSermon({sermon}: {sermon: Sermon}) {
  return <a href={'/sermons/' + sermon.slug} style={linkStyles(sermon.coverImage!)}>
    <span style={labelStyles}>Latest sermon</span>

    <div style={alignerStyles}>
      <h1 style={titleStyles}>{sermon.title}</h1>

      <div style={{textAlign: 'center'}}>
        <img src={material.icons.svg.playCircleOutline.white.src} width={72} height={72} alt='Play' />
      </div>
    </div>

    <div style={metadataStyles}>
      <div>{sermon.teacher}</div>
      <div>{sermon.text}</div>
      <div>{sermon.date}</div>
    </div>
  </a>;
}

export const latestSermonData = {
  sermon: {
    coverImage: 'true',
    slug: 'true',
    teacher: 'true',
    text: 'true',
    title: 'true',
    date: 'true',
  },
};