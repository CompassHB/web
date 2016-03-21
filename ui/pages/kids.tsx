import * as React from "react";
import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {MinistriesNav} from "../components/ministriesNav";

export class KidsPage extends React.Component<{}, {}> {
  render() {
    return <div>
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9 col-sm-push-3" style={{paddingTop: 20}}>
            <h1 className="tk-seravek-web">Kids Ministry</h1>
            <p>
              Kids Ministry is a safe and fun environment for your child.
              Kids Ministry meets at both our services Sunday morning for relevant Bible instruction, worship, and crafts.
              All of our teachers and adult volunteers have background checks.
              Personal “Buddies” are available to assist children with special needs.
              View our <a href="https://s3-us-west-1.amazonaws.com/compasshb-kids/SICK-POLICY.pdf">sick policy</a>.
            </p>
            <div className="row" style={{background: 'none', backgroundColor: '#a0a0a0', paddingTop: 30, paddingBottom: 30}}>
              <div className="col-md-4">
                <img width={295} height={295} src="https://cdn.evbuc.com/eventlogos/142690261/sg2m8nkmyxk9l7iox7pbocaccdrk6kaliw2sf1a0gg.jpeg" alt="Camp Compass 2015" />
                <h4 className="tk-seravek-web">Camp Compass 2015</h4>
                <p style={{color: '#ffffff'}}>
                  For kids ages 2 - 6th grade, this year's Camp Compass "Our God is an Awesome God: The Story of Noah and the Ark" is Monday, July 13th - Friday July 17th each night from 6:30pm - 8:30pm.
                </p>
              </div>
              <div className="col-md-4">
                <img width={554} height={554} src="https://compasshb.smugmug.com/photos/i-WmFQJHj/0/M/i-WmFQJHj-M.png" alt="Bre and Taylor Thompson" />
                <h4 className="tk-seravek-web">Kids Ministry</h4>
                <p style={{color: '#ffffff'}}>
                  Bre Thompson is the&nbsp;Director of Kids Ministry and lives in Huntington Beach with her husband Taylor and son Cade.
                  She has been involved in&nbsp;Kids Ministry the past seven years at Compass Bible Church in Aliso Viejo.
                </p>
                <ul>
                  <li><a href="mailto:bre@compasshb.com" title="E-Mail" target="_self" style={{color: '#ffffff'}}>E-Mail</a></li>
                  <li><a href="https://twitter.com/breeethompson" title="@BreeeThompson" target="_blank" style={{color: '#ffffff'}}>@BreeeThompson</a></li>
                  <li><a href="https://www.facebook.com/breanna.thompson.5688" title="Bre on Facebook" target="_self" style={{color: '#ffffff'}}>Bre on Facebook</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <img width={682} height={682} src="https://compasshb.smugmug.com/photos/i-sk4fDTf/1/S/i-sk4fDTf-S.jpg" alt="Bible Teaching Stories" />
                <h4 className="tk-seravek-web">Bible Stories</h4>
                <p style={{color: '#ffffff'}}>
                  Your child will be instructed each week by a story from the Bible.
                  Our aim is to teach in a way that is relevant to each age group and engages your child so they are able to tell you what they learned after the service!
                </p>
              </div>
            </div>
            <div className="row" style={{background: 'none', backgroundColor: '#B9302B', padding: 30}}>
              <div className="col-md-6">
                <img src="https://compasshb.smugmug.com/photos/i-T6NWJ7h/0/S/i-T6NWJ7h-S.jpg" />
              </div>
              <div className="col-md-6">
                <a name="awana" />
                <h2 style={{color: '#ffffff'}} className="tk-seravek-web">AWANA</h2>
                <p>
                  God tells every Dad to teach his children the Bible (Deuteronomy 6:4-9 and Ephesians 6:4).
                  Mom is his ministry partner at home.
                  Together they lead their children in how to listen to God’s word.
                </p>
                <p>
                  <i>AWANA is a way our church can come alongside all of you who are parents of 4 year olds to 6th grade.</i>
                  We want to support what you are doing at home with this proven and effective program of Bible memorization.
                </p>
                <p>
                  We will always teach your children the Bible here at church, whether it is Kids ministry on Sunday mornings or AWANA during the week.
                  But AWANA provides books you can go through with your child to help them memorize verses at home and hide God’s word in their heart.
                </p>
                <p>
                  “I have stored up your word in my heart, that I might not sin against you.” ~Psalm 119:11
                </p>
                <p>
                  Let’s pray God will raise up many parents who are dedicated to teaching their children the Bible here at Compass HB.
                </p>
              </div>
            </div>
            <div className="row" style={{padding: 30, backgroundColor: '#FFF'}}>
              <div className="col-md-3">
                <img src="https://compasshb.smugmug.com/PhotoArchive/Holiday-Events/Easter-Service-040515/i-pRVQ6Vg/0/S/150405_EAS_SS-404-S.jpg" />
              </div>
              <div className="col-md-3">
                <img src="https://compasshb.smugmug.com/PhotoArchive/Holiday-Events/Easter-Service-040515/i-85HHcrH/0/S/150405_EAS_SS-457-S.jpg" />
              </div>
              <div className="col-md-3">
                <img src="https://compasshb.smugmug.com/PhotoArchive/Holiday-Events/Easter-Service-040515/i-2cKVhzp/0/S/150405_EAS_SS-461-S.jpg" />
              </div>
              <div className="col-md-3">
                <img src="https://compasshb.smugmug.com/PhotoArchive/Holiday-Events/Easter-Service-040515/i-gGMw4f7/0/S/150405_EAS_SS-379-S.jpg" />
              </div>
            </div>
            <style dangerouslySetInnerHTML={{__html: " .col-md-4 img { border: 6px solid #FFF; } " }} />
          </div>
          <MinistriesNav active="kids" />
        </div>
      </div>
      <Footer/>
    </div>
  }

  static urlPattern = '/kids';

  static render(): Promise<React.ReactElement<any>> {
    return Promise.resolve(<KidsPage />);
  }
}
