import * as React from "react";
import {Header} from "../components/header";
import {Footer} from "../components/footer";

export class GivingPage extends React.Component<{}, {}> {
  render() {
    return <div>
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9 col-sm-push-3" style={{paddingTop: 20}}>
            <h1 className="tk-seravek-web">Give to Compass HB</h1>

            <div className="well">
              <h4 className="tk-seravek-web"><i className="material-icons">loop</i> Recurring Giving</h4>
              <p>Access our online system to schedule a recurring gift or to make a one-time gift using your checking account or credit card.</p>
              <ul>
                <li><a href="https://compassbiblechurch.ccbchurch.com">Login Here (manage existing account)</a></li>
                <li><a href="https://compassbiblechurch.ccbchurch.com/w_sign_up.php">Register Here (first-time users - select Compass HB)</a></li>
              </ul>

              <h4 className="tk-seravek-web"><i className="material-icons">card_giftcard</i> One Time Gift</h4>
              <p>You can make a one-time gift using a credit card without registering in the system.</p>
              <p><a href="https://compassbiblechurch.ccbchurch.com/trx_submit.php?type=public_gift&campus_id=3">Give now without registering</a></p>

              <h4 className="tk-seravek-web"><i className="material-icons">account_balance</i> Other Ways to Support</h4>
              <p>For more information on other creative tax-wise charitable gift and estate planning strategies, please contact <a href="mailto:info@compasshb.com">info@compasshb.com</a>.</p>
              <p>
                In addition to cash gifts, there are a number of other ways to support the ministry of Compass HB&nbsp;and leave an eternal legacy with the assets God has entrusted to you.
                They include some of the following assets and gifting plans:
              </p>
              <ul>
                <li>Appreciated Securities (publicly traded stock, closely-held stock, mutual funds, bonds)</li>
                <li>Real Estate (residential, commercial, income property, leasehold, vacation home, life estate, remainder interest)</li>
                <li>Life Insurance Policy (paid-up or non-paid up policies)</li>
                <li>Personal Property (artwork, collectables, gemstones)</li>
                <li>Intellectual Property (patents, royalties, copyrights)</li>
                <li>Bequests (remember CBC in your will or living revocable trust)</li>
                <li>Beneficiary Designations (name CBC as a testamentary of your IRA, 401k, 403b, or qualified retirement plan)</li>
              </ul>
            </div>
          </div>

          <div className="col-sm-3 col-sm-pull-9">
            <section className="Settings utility-flex-container">
              <nav id="main-nav" className="Box Box--Large Box--bright">
                <ul>
                  <li className> <a href="https://www.compasshb.com/read">Scripture of the Day</a> <i className="material-icons">keyboard_arrow_right</i> </li>
                  <li className> <a href="https://www.compasshb.com/sermons">Sermons</a> <i className="material-icons">keyboard_arrow_right</i> </li>
                  <li className> <a href="https://www.compasshb.com/songs">Worship</a> <i className="material-icons">keyboard_arrow_right</i> </li>
                  <li className> <a href="https://www.compasshb.com/blog">Videos</a> <i className="material-icons">keyboard_arrow_right</i> </li>
                  <li className="active"> <a href="https://www.compasshb.com/giving">Give</a> <i className="material-icons">keyboard_arrow_right</i> </li>
                </ul>
              </nav>
            </section>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  }

  static urlPattern = '/giving';

  static render(): Promise<React.ReactElement<any>> {
    return Promise.resolve(<GivingPage/>);
  }
}