import * as React from 'react';
import {RaisedButton} from 'material-ui';

const {a, div} = React.DOM;

function raisedButton(props, ...children) {
    return React.createElement(RaisedButton, props, ...children);
}

class Footer extends React.Component<void, void> {
    render() {
        return React.DOM.footer({style: { margin: 20 }},
            a({href: "/giving"},
                raisedButton({label: "Give", style: { margin: 12 }})
            ),
            div({style: {padding: 10, textAlign: "right", backgroundColor: "#222222", color: "#A9A9A9"}},
                'Copyright 2014-2016 Compass Bible Church Huntington Beach'
            )
        );
    }
}

export default function footer() {
    return React.createElement(Footer);
};