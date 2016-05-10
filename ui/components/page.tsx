import * as React from "react";
import {Header} from "./header";
import {Footer} from "./footer";

const styles = {
  body: {
    backgroundColor: '#eee',
    padding: '1em 2em 2em',
  },
  main: {
    marginTop: '1em',
  },
  nav: {
    marginTop: '1em',
  },
  heading: {
    marginTop: 0,
  },
}

export function Page({children = undefined, nav = undefined, title}) {
  return (
    <div>
      <Header/>
      <div style={styles.body}>
        <div className="row">
          <main className="col-md-9 col-md-push-3" style={styles.main}>
            <h1 style={styles.heading}>{title}</h1>
            {children}
          </main>
          <div style={styles.nav} className="col-md-3 col-md-pull-9">
            {nav}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
