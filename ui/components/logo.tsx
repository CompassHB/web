import * as React from 'react';

export default function logo(props: { key?: string } = {}) {
  return (
    <a key={props.key} href='./'>
      <img src='https://www.compasshb.com/CBC-HB-logo.png'
           alt='Compass Bible Church Huntington Beach'
           height={50} width={182}/>
    </a>
  );
}
