import * as React from 'react';
import {RaisedButton} from 'material-ui';

const {a, div, h4, img, li, ul} = React.DOM;

function raisedButton(props, ...children) {
  return React.createElement(RaisedButton, props, ...children);
}

class Footer extends React.Component<void, void> {
  render() {
    return React.DOM.footer({style: {display: 'flex', flexWrap: 'wrap', margin: 20, paddingTop: 40, borderTop: '1px solid #EEE', padding: '40 0', lineHeight: '2em'}},

      div({style: {width: '20%'}},
        img({src: 'https://www.compasshb.com/CBC-HB-logo.png', alt: 'Compass Bible Church Huntington Beach, CompassHB', style: {height: 40}})
      ),

      div({style: {width: '20%'}},
        h4({}, 'Ministries'),
        ul({},
          li({}, a({href: '/kids'},  'Kids')),
          li({}, a({href: '/youth'}, 'Youth')),
          li({}, a({href: '/college'}, 'College')),
          li({}, a({href: '/sundayschool'}, 'Adult Sunday School'))
        )
      ),

      div({style: {width: '20%'}},
        h4({}, 'Resources'),
        ul({},
          li({}, a({href: '/read'}, 'Scripture of the Day')),
          li({}, a({href: '/sermons'}, 'Sermons')),
          li({}, a({href: '/songs'}, 'Worship')),
          li({}, a({href: '/videos'}, 'Videos'))
        )
      ),

      div({style: {width: '20%'}},
        h4({}, 'Social'),
        ul({},
          li({}, a({href: 'https://www.facebook.com/compasshb'}, 'Facebook')),
          li({}, a({href: 'https://instagram.com/compasshb'}, 'Instagram')),
          li({}, a({href: 'https://twitter.com/compasshb'}, 'Twitter')),
          li({}, a({href: 'https://vimeo.com/compasshb'}, 'Vimeo')),
          li({}, a({href: 'https://appsto.re/us/n_WA6.i'}, 'iPhone App')),
          li({}, a({href: 'https://play.google.com/store/apps/details?id=com.compasshb.mobile'}, 'Android App'))
        )
      ),

      div({style: {width: '20%'}},
        a({href: "/giving"},
          raisedButton({label: "Give", style: {margin: 12, padding: '0 50px'}})
        ),

        h4({}, 'Contact'),
        ul({},
          li({}, '5082 Argosy, Huntington Beach, CA 92649'),
          li({}, '(714) 895-0034'),
          li({}, 'info@compasshb.com')
        )
      ),

      div({style: {flex: '1 100%'}},
        div({style: {padding: 10, textAlign: "right", backgroundColor: "#222222", color: "#A9A9A9"}},
          'Copyright 2014-2016 Compass Bible Church Huntington Beach'
        )
      )
    );
  }
}

export default function footer() {
  return React.createElement(Footer);
};