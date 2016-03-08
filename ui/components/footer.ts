import * as React from 'react';

class Footer extends React.Component<void, void> {
    render() {
        return React.DOM.footer({},
            'Footer'
        );
    }
}

export default function footer() {
    return React.createElement(Footer);
};