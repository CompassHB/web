import * as React from 'react';

export default function logo(props: { key?: string } = {}) {
  return (
    <a className="navbar-brand" href='/'>
      <img src='https://www.compasshb.com/CBC-HB-logo.png'
           alt='Compass Bible Church Huntington Beach'
           height={50} width={182} id="logo" />
    </a>
  );
}
