import * as React from 'react';
const {a, img} = React.DOM;

var styles = {
  img: {
    padding: '15px 15px',
    height: 50,
  },
};

export default function logo(props) {
  return a({ key: props.key, href: '/' }, [
    img({
      src: 'https://www.compasshb.com/CBC-HB-logo.png',
      alt: 'Compass Bible Church Huntington Beach',
      style: styles.img,
    }),
  ]);
};
