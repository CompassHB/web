import * as React from "react";
import header from '../../components/header';
var {html,head,body,main,h1,div} = React.DOM;

export default function sermonpage(sermon) {
    return html({}, [
        head({}, []),
        body({}, [
            header(),
            main({}, [
                h1({}, sermon.title),
                
                // TODO(ewinslow): Use an HTML sanitizer or something
                div({dangerouslySetInnerHTML: {__html: sermon.content}}),
            ]),
        ]),
    ]);
}