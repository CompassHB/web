import * as React from "react";
import {Header} from "./header";
import {Footer} from "./footer";

export function Page({children = undefined, nav = undefined, title}) {
  return (
    <div>
      <Header/>
      <div style={{display: 'flex', flexDirection: 'row-reverse', backgroundColor: '#eee', padding: '2em'}}>
        <main>
          <h1 style={{marginTop: 0}}>{title}</h1>
          {children}
        </main>
        <div style={{marginRight: '2em'}}>
          {nav}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
