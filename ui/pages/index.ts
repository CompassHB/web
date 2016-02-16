import * as React from "react";
import header from "../components/header";
import latestSermon from "../components/latestSermon";

var {div,ul,li,h1,html,head,img,body,a,span} = React.DOM;

export default function homepage([sermon, ...sermons]) {
  return html({}, [
    head({key: 'head'}, []),
    body({key: 'body'}, div({}, [
      header(),
      div({}, [
        div({style: {padding:'1em'}}, [
          latestSermon(sermon),
        ]),
        
      ]),
      div({}, [
        h1({key: 'title'}, "Latest sermons"),
    
        ul({key: 'list'}, sermons.map(function(sermon) {
          return li({key: sermon.id},
            a({href: "/sermons/" + sermon.slug}, sermon.title)
          );
        })),
      ]),
    ])),
  ]);
};