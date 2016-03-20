import * as React from "react";
import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {MinistriesNav} from "../components/ministriesNav";

export class SundaySchoolPage extends React.Component<{}, {}> {
  render() {
    return <div>
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9 col-sm-push-3" style={{paddingTop: 20}}>
            <h1 className="tk-seravek-web">Sunday School</h1>
            <p>Meets Sundays at 9AM at church for breakfast and teaching.</p>
            <br />
            <h3 className="tk-seravek-web">Current Series: Parables</h3>
            <p>The mysteries of God’s kingdom revealed through the stories Jesus told.</p>
            <table className="table table-striped">
              <thead>
                <tr> <th>Title</th> <th>Teacher</th> <th>Date</th> </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="https://www.compasshb.com/sermons/parable-soils">Parable of the Soils</a></td>
                  <td>Bill Blakey</td>
                  <td>Sunday, March 13, 2016</td>
                </tr>
                <tr>
                  <td><a href="https://www.compasshb.com/sermons/introduction-parables">Introduction to the Parables</a></td>
                  <td>Bill Blakey</td>
                  <td>Friday, March 4, 2016</td>
                </tr>
              </tbody>
            </table>

            <h3 className="tk-seravek-web">All Sunday School Series</h3>
            <div className="col-sm-6 col-md-4" style={{height: 300}}>
              <div className="thumbnail" style={{width: 310, height: 150, backgroundImage: 'url("https://compasshb.s3.amazonaws.com/images/parables.jpeg")', backgroundSize: 'cover', backgroundPosition: 'top center', paddingTop: 150}}>
                <div className="caption">
                  <h3><a href="https://www.compasshb.com/series/parables">Parables</a></h3>
                  <p>The mysteries of God’s kingdom revealed through the stories Jesus told.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4" style={{height: 300}}>
              <div className="thumbnail" style={{width: 310, height: 150, backgroundImage: 'url("https://compasshb.smugmug.com/photos/i-k9Sq2D3/0/S/i-k9Sq2D3-S.png")', backgroundSize: 'cover', backgroundPosition: 'top center', paddingTop: 150}}>
                <div className="caption">
                  <h3><a href="https://www.compasshb.com/series/the-protestant-reformation-33-years-that-shook-the-world">The Protestant Reformation: 33 Years That Shook the World</a></h3>
                  <p>The Protestant Reformation: 33 Years That Shook the World</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4" style={{height: 300}}>
              <div className="thumbnail" style={{width: 310, height: 150, backgroundImage: 'url("https://compasshb.s3.amazonaws.com/images/buildingbibledictionaryseries.jpg")', backgroundSize: 'cover', backgroundPosition: 'top center', paddingTop: 150}}>
                <div className="caption">
                  <h3><a href="https://www.compasshb.com/series/building-your-bible-dictionary">Building Your Bible Dictionary</a></h3>
                  <p>On July 12, 2015 Compass Bible Church Huntington Beach will begin a new Adult Sunday School series on important words and concepts of the Bible. Please join us at 9:00 AM in Room 102 for breakfast. The teaching beings at 9:30 AM.</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4" style={{height: 300}}>
              <div className="thumbnail" style={{width: 310, height: 150, backgroundImage: 'url("https://compasshb.s3.amazonaws.com/images/Road%20to%20Emmaus.png")', backgroundSize: 'cover', backgroundPosition: 'top center', paddingTop: 150}}>
                <div className="caption">
                  <h3><a href="https://www.compasshb.com/series/road-to-emmaus">Road to Emmaus</a></h3>
                  <p>The New Testamant in the Old Testament</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4" style={{height: 300}}>
              <div className="thumbnail" style={{width: 310, height: 150, backgroundImage: 'url("https://compasshb.s3.amazonaws.com/images/Attributes%20of%20God.png")', backgroundSize: 'cover', backgroundPosition: 'top center', paddingTop: 150}}>
                <div className="caption">
                  <h3><a href="https://www.compasshb.com/series/the-attributes-of-god">The Attributes of God</a></h3>
                  <p>Beginning April 12, 2015, Compass Bible Church will begin a new Sunday School series on the Attributes of God. Please join u at 9:00 am in room 102 for breakfast. The teaching beings at 9:30 am.</p>
                </div>
              </div>
            </div>
          </div>
          
          <MinistriesNav active="sundayschool"/>
        </div>
      </div>
      <Footer/>
    </div>
  }

  static urlPattern = '/sundayschool';

  static render(): Promise<React.ReactElement<any>> {
    return Promise.resolve(<SundaySchoolPage />);
  }
}