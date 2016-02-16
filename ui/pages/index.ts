import * as React from "react";
import header from "../components/header";

var {div,ul,li,h1,html,head,body,a} = React.DOM;

export default function homepage(posts) {
  return html({}, [
    head({key: 'head'}, []),
    body({key: 'body'}, div({key: 'container'}, [
      header(),
      div({}, [
        h1({key: 'title'}, "Latest sermons"),
    
        ul({key: 'list'}, posts.map(function(post) {
          return li({key: post.id},
            a({href: "/sermons/" + post.slug}, post.title)
          );
        })),
      ]),
    ]))
  ]);
};