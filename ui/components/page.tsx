import * as React from "react";
import {Header} from "./header";
import {Footer} from "./footer";

const mainStyles: React.CSSProperties = {
  marginTop: '1em',
  padding: '1em',
  width: '66.6666666%',
};

const navStyles: React.CSSProperties = {
  marginTop: '1em',
};

const outerMainStyles: React.CSSProperties = {
  backgroundColor: '#EEE',
  display: 'flex',
  justifyContent: 'center',
};

const headingStyles: React.CSSProperties = {
  marginTop: 0,
};

export interface PageProps {children?: React.ReactElement<any>[]; title: string;}

export function Page({children = undefined, title}: PageProps) {
  return (
    <div className="page-container">
      <Header/>
      <div style={outerMainStyles}>
        <main style={mainStyles}>
          <h1 style={headingStyles}>{title}</h1>
          {children}
        </main>
      </div>
      <Footer/>
    </div>
  );
}
