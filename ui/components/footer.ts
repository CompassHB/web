import * as React from 'react';
import {RaisedButton} from 'material-ui';
import {Grid, Row, Col} from 'react-bootstrap';
import logo from './logo';

const {a, div, h4, img, li, ul} = React.DOM;

function raisedButton(props, ...children) {
  return React.createElement(RaisedButton, props, ...children);
}

function grid(props, ...children) {
  return React.createElement(Grid, props, ...children);
}

function row(props, ...children) {
  return React.createElement(Row, props, ...children);
}

function col(props, ...children) {
  return React.createElement(Col, props, ...children);
}

export class Footer extends React.Component<{}, {}> {
  render() {
    return React.DOM.footer({},

      grid({ fluid: true, style: { paddingTop: 40, borderTop: '1px solid #EEE', lineHeight: '2em' } },

        row({},
          col({ md: 2 },
            logo()
          ),
          col({ md: 2 },
            h4({}, 'Ministries'),
            ul({ style: { listStyle: 'none', padding: 0 } },
              li({}, a({ href: '/kids' }, 'Kids')),
              li({}, a({ href: '/youth' }, 'Youth')),
              li({}, a({ href: '/college' }, 'College')),
              li({}, a({ href: '/sundayschool' }, 'Adult Sunday School'))
            )
          ),
          col({ md: 2 },
            h4({}, 'Resources'),
            ul({ style: { listStyle: 'none', padding: 0 } },
              li({}, a({ href: '/read' }, 'Scripture of the Day')),
              li({}, a({ href: '/sermons' }, 'Sermons')),
              li({}, a({ href: '/songs' }, 'Worship')),
              li({}, a({ href: '/videos' }, 'Videos'))
            )
          ),
          col({ md: 2 },
            h4({}, 'Social'),
            ul({ style: { listStyle: 'none', padding: 0 } },
              li({}, a({ href: 'https://www.facebook.com/compasshb' }, 'Facebook')),
              li({}, a({ href: 'https://instagram.com/compasshb' }, 'Instagram')),
              li({}, a({ href: 'https://twitter.com/compasshb' }, 'Twitter')),
              li({}, a({ href: 'https://vimeo.com/compasshb' }, 'Vimeo')),
              li({}, a({ href: 'https://appsto.re/us/n_WA6.i' }, 'iPhone App')),
              li({}, a({ href: 'https://play.google.com/store/apps/details?id=com.compasshb.mobile' }, 'Android App'))
            )
          ),
          col({ md: 4 },
            h4({}, 'Contact'),
            a({ href: "/giving" },
              raisedButton({ label: "Give", style: { margin: 12, padding: '0 50px' } })
            ),
            ul({ style: { listStyle: 'none', padding: 0 } },
              li({}, '5082 Argosy, Huntington Beach, CA 92649'),
              li({}, '(714) 895-0034'),
              li({}, 'info@compasshb.com')
            )
          )
        ),

        row({ style: { padding: 10, textAlign: "right", backgroundColor: "#222222", color: "#A9A9A9" } },
          'Copyright 2014-2016 Compass Bible Church Huntington Beach'
        )
      )
    );
  }
}

export default function footer() {
  return React.createElement(Footer);
};

//TODO: include third party javascript code
// <div id="fb-root"></div>
// <script src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0&appId=386571371526429" id="facebook-jssdk" async defer></script>
//
// <script src="https://www.google-analytics.com/analytics.js" async defer></script>
// <script>
// (function (i, r) {
//   i['GoogleAnalyticsObject'] = r;
//   i[r] = i[r] || function () {
//       (i[r].q = i[r].q || []).push(arguments)
//     }, i[r].l = 1 * new Date();
// })(window, 'ga');
//
// ga('create', 'UA-53384235-1', 'auto');
// ga('send', 'pageview');
// </script>