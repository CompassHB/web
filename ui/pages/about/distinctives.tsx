import * as React from "react";
import {Header} from "../../components/header";
import {Footer} from "../../components/footer";

export class AboutDistinctivesPage extends React.Component<{}, {}> {
  render() {
    return (<div>
      <Header/>,
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9 col-sm-push-3" style={{paddingTop: 20}}>
            <h1 className="tk-seravek-web">8 Distinctives</h1>
            <p>
              At Compass Bible Church we are called to make disciples of Christ (Matthew 28:18-20). As we do, we will always work to express and maintain these eight ministry values.
            </p>

            <div className="col-md-5 well">
              <i className="material-icons" style={{textAlign: 'center'}}>ibrary_books</i>
              <h3 className="tk-seravek-web">1. THE BIBLE IS CENTRAL</h3>
              <p>While the Bible is not an end in itself, it is certainly the indispensable “compass” for our knowledge and understanding of God and his plan for our lives.</p>
              <p>Psalm 43:3; Psalm 119:105; John 17:17; 1 Timothy 3:15</p>
            </div>

            <div className="col-md-5 col-md-offset-1 well">
              <i className="material-icons" style={{textAlign: 'center'}}>fullscreen_exit</i>
              <h3 className="tk-seravek-web">2. WE SHOWCASE EXPOSITORY PREACHING</h3>
              <p>Because God’s written revelation to us is “living and active and sharper than any two-edged sword” it is our intention to allow it to utilize Compass preachers to get to our hearts and minds as they open the word and let its message out. Our goal is that Compass pastors won’t use the Bible to preach their messages, but that the Bible will use Compass pastors to preach its message. God’s powerful and life-changing truth!</p>
              <p>Hebrews 4:12</p>
            </div>

            <div className="col-md-5 well">
              <i className="material-icons" style={{textAlign: 'center'}}>satellite</i>
              <h3 className="tk-seravek-web">3. WE SEEK TO MAINTAIN A HIGH VIEW OF GOD</h3>
              <p>In a day when many have attempted to reduce God to be their spiritual therapist, it is important for us to remember that God, our Creator, is the highly exalted, transcendent, King of all things. We cannot afford to think less of God than he really is. We dare not respond to him as merely our comfortable friend and fail to worship him as our Sovereign Lord.</p>
              <p>Malachi 1:6-11</p>
            </div>

            <div className="col-md-5 col-md-offset-1 well">
              <i className="material-icons" style={{textAlign: 'center'}}>volume_up</i>
              <h3 className="tk-seravek-web">4. WE WORK TO PROCLAIM A BIBLICAL GOSPEL</h3>
              <p>It is imperative that we understand what God’s word says about how one becomes a disciple of Christ and thus a child of God. We cannot truncate, sterilize, simplify, adjust or in any other way modify the message of the gospel that was once and for all delivered to God’s people in God’s word. We will not shy away from clearly articulating God’s truth on heaven, hell, sin, judgment, repentance and faith. It will be our goal to hold tightly to a biblical gospel.</p>
              <p>Romans 1:16</p>
            </div>

            <div className="col-md-5 well">
              <i className="material-icons" style={{textAlign: 'center'}}>cloud_upload</i>
              <h3 className="tk-seravek-web">5. WE HAVE A GENUINE RELIANCE ON PRAYER</h3>
              <p>We understand that the mission, the goals and the values at Compass Bible Church are humanly impossible. We do not inherently possess the wherewithal to make disciples or aid them in knowing, loving and serving Christ. These are works of God and we will always rely on him as we ardently ask him to accomplish these biblical objectives among us.</p>
              <p>Colossians 4:2-6</p>
            </div>

            <div className="col-md-5 col-md-offset-1 well">
              <i className="material-icons" style={{textAlign: 'center'}}>people</i>
              <h3 className="tk-seravek-web">6. WE HAVE HIGHLY COMMITTED PARTICIPANTS</h3>
              <p>To effectively and efficiently accomplish all that God has called us to do, we cannot maintain the all-too-common “20% of the people do 80% of the work.” At Compass we must always encourage that “each part does its work.” (Eph.4:16b)</p>
              <p>Ephesians 4:11-16; Acts 4:34-35</p>
            </div>

            <div className="col-md-5 well">
              <i className="material-icons" style={{textAlign: 'center'}}>person_pin</i>
              <h3 className="tk-seravek-web">7. WE WILL LOOK TO AUTHENTIC AND SACRIFICIAL LEADERS</h3>
              <p>The kind of people that God calls to lead at Compass Bible Church is extremely important. Obviously our pastors and teachers must meet the biblical qualifications as set forth in the books of 1 Timothy and Titus. Beyond that we expect our leaders to follow in Apostle Paul’s example of being authentic, forthright, honest, hard-working and sacrificial. In a phrase we expect that our leaders set the example of saying to Christ daily: “any thing, any place, any time!”</p>
              <p>2 Corinthians 6:3-11; 1 Thessalonians 2:8-9</p>
            </div>

            <div className="col-md-5 col-md-offset-1 well">
              <i className="material-icons" style={{textAlign: 'center'}}>navigation</i>
              <h3 className="tk-seravek-web">8. WE WILL ALWAYS BE WORKING TO PLANT NEW CHURCHES</h3>
              <p>It is our concern that we work to regularly launch more Bible-teaching churches that are resolved and constrained to move into more communities with a biblical purpose, a biblical mission and clearly maintained biblical values. It is our hope that Compass will never lose its commitment to this end.</p>
              <p>Acts 1:8</p>
            </div>
          </div>

          <div className="col-sm-3 col-sm-pull-9">
            <section className="Settings utility-flex-container">
              <nav id="main-nav" className="Box Box--Large Box--bright">
                <ul>
                  <li className> <a href="https://www.compasshb.com/who-we-are">Who We Are</a> <i className="material-icons">keyboard_arrow_right</i> </li>
                  <li className="active"> <a href="https://www.compasshb.com/eight-distinctives">8 Distinctives</a> <i className="material-icons">keyboard_arrow_right</i> </li>
                  <li className> <a href="https://www.compasshb.com/what-we-believe">What We Believe</a> <i className="material-icons">keyboard_arrow_right</i> </li>
                </ul>
              </nav>
            </section>
          </div>
        </div>
      </div>
      <Footer/>
    </div>);
  }

  static urlPattern = '/about/distinctives';

  static redirects: {[url: string]: number} = {
    '/eight-distinctives': 301,
  };

  static render(): Promise<React.ReactElement<any>> {
    return Promise.resolve(<AboutDistinctivesPage/>);
  }
}
