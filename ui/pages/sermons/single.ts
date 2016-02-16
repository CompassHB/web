import * as React from "react";
import header from '../../components/header';
var {html,head,body,main,h1,div} = React.DOM;

/**
 * @param sermon The sermon to be displayed
 * 
 * @return
 */
export default function sermonpage({title, content}) {
    return html({}, [
        head({}, []),
        body({}, [
            header(),
            main({}, [
                h1({}, title),
                // TODO(ewinslow): Use an HTML sanitizer or something
                div({dangerouslySetInnerHTML: {__html: content}}),
            ]),
        ]),
    ]);
}