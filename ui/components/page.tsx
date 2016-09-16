import * as React from "react";
import {Header} from "./header";
import {Footer} from "./footer";

const styles = {
  main: {
    marginTop: '1em',
    padding: '1em',
  },
  nav: {
    marginTop: '1em',
  },
  heading: {
    marginTop: 0,
  },
};

export interface PageProps {children?: React.ReactElement<any>[]; title: string;}

export function Page({children = undefined, title}: PageProps) {
  return (
    <div>
      <Header/>
      <div className="row">
        <main className="col-md-8 col-md-push-2" style={styles.main}>
          <h1 style={styles.heading}>{title}</h1>
          {children}
        </main>
      </div>
      <Footer/>
    </div>
  );
}
