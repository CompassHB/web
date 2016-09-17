import * as React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Logo from './logo';

export class Footer extends React.Component<{}, {}> {
  render() {
    return <footer>
      <Grid fluid={true} style={{ paddingTop: 40, borderTop: '1px solid #EEE', lineHeight: '2em' }}>
        <Row>
          <Col md={2}>
            <Logo />
          </Col>
          <Col md={2}>
            <h4>Ministries</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href='/kids'>Kids</a></li>
              <li><a href='/youth'>Youth</a></li>
              <li><a href='/college'>College</a></li>
              <li><a href='/sundayschool'>Sunday School</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h4>Resources</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href='/read'>Scripture of the Day</a></li>
              <li><a href='/sermons'>Sermons</a></li>
              <li><a href='/songs'>Worship</a></li>
              <li><a href='/videos'>Videos</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h4>Social</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href='https://www.facebook.com/compasshb'>Facebook</a></li>
              <li><a href='https://instagram.com/compasshb'>Instagram</a></li>
              <li><a href='https://twitter.com/compasshb'>Twitter</a></li>
              <li><a href='https://vimeo.com/compasshb'>Vimeo</a></li>
              <li><a href='https://appsto.re/us/n_WA6.i'>iPhone App</a></li>
              <li><a href='https://play.google.com/store/apps/details?id=com.compasshb.mobile'>Android App</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Contact</h4>
            <a href="/giving">
              <Button label="Give" style={{ margin: 12, padding: '0 50px' }} />
            </a>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>5082 Argosy, Huntington Beach, CA 92649</li>
              <li>(714) 895-0034</li>
              <li>info@compasshb.com</li>
            </ul>
          </Col>
        </Row>

        <Row style={{ padding: 10, textAlign: "right", backgroundColor: "#222222", color: "#A9A9A9" }}>
          Copyright 2014-2016 Compass Bible Church Huntington Beach
        </Row>
      </Grid>
    </footer>;
  }
}

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
