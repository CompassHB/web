import * as React from "react";
import {Page} from "../components/page";

export const IceCreamEvangelismPage = {
  render() {
    return (
      <Page title="Ice Cream Evangelism">
        <div>
          <div className="col-md-4 col-xs-offset-1">
            <img width={800} height={434} src="https://compasshb.smugmug.com/photos/i-GrwwS7w/0/L/i-GrwwS7w-L.png" alt="Ice Cream Evangelism" />
          </div>
          <div className="col-md-5 col-xs-offset-1 well">
            <h2 className="tk-seravek-web">Free Ice Cream for HB</h2>
            <p>Maybe you have seen our ice cream truck driving around the streets of Huntington Beach.</p>
            <p>Maybe you were even given FREE ICE CREAM!</p>
            <p>Free ice cream for HB is <em>good news</em> and our goal is to give away as much free ice cream as we can afford while we tell everyone we can the <em>good news</em> of Jesus.</p>

            <h3 className="tk-seravek-web">Our passion at Compass HB is the gospel of Jesus</h3>
            <p>Because Jesus did something better than buy everyone ice cream.</p>
            <p>Jesus died for us on the cross.</p><br />
          </div>
        </div>
        <div className="row" style={{backgroundColor: '#fff'}}><br />
          <div className="col-md-3 col-md-offset-1">
            <h3 className="tk-seravek-web">We believe Jesus is God </h3>
            <p>
              Jesus is fully 100% God, one with the Father, but he humbled himself to be born as a man.
              When we say the name Jesus Christ, we are not using Christ like his last name.
              Christ is his title. It means he is the Messiah. He is the holy and anointed one of God.
            </p>
          </div>
          <div className="col-md-4">
            <h3 className="tk-seravek-web">We believe Jesus died on the cross for our sins </h3>

            <p>
              The name Jesus means savior. He came down to earth on a rescue mission to seek and to save the lost.
              People like us. We have all fallen short of the glory of God.
              No one besides Jesus has lived perfectly up to God’s standard of holiness.
              Yet, Jesus paid for our sins when he died on the cross in our place.
            </p>
          </div>

          <div className="col-md-3">
            <h3 className="tk-seravek-web">Jesus rose from the dead and offers eternal life</h3>
            <p>
              Jesus did not stay dead. On the third day, he rose again. He appeared to his disciples.
              There were over 500 eye witnesses and some of them have written accounts in the New Testament for us to read and believe today.
              Because Jesus rose from the dead, everyone who believes in him has a new life.
              Not only can they live a new way now, but they know with 100% confidence they will be with Jesus when they die.
            </p>
          </div>
        </div>

        <div className="row"><br />
          <div className="col-md-5 col-md-offset-1">
            <blockquote>
              <p style={{textAlign: 'left'}}>
                For I delivered to you as of first importance what I also received:
                  that Christ died for our sins in accordance with the Scriptures,
                  that he was buried, and that he was raised on the third day
                  in accordance with the Scriptures
              </p>
              <p style={{textAlign: 'left'}}>- 1 Corinthians 15:3-4</p>
            </blockquote>
          </div>

          <div className="col-md-5">
            <blockquote>
              <p style={{textAlign: 'left'}}>
                I am the resurrection and the life.&nbsp;Whoever believes in me, though he die, yet shall he live,
                And everyone who lives and believes in me shall never die. Do you believe this?
              </p>
              <p style={{textAlign: 'left'}}>– Jesus in John 11:25-26</p>
            </blockquote>
          </div>
        </div>
      </Page>
    );
  },

  urlPattern: '/ice-cream-evangelism',
}