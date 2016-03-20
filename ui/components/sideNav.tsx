import * as React from "react";

export class SideNav extends React.Component<{}, {}> {
  render() {
    return (
      <div className="col-sm-3 col-sm-pull-9">
        <section className="Settings utility-flex-container">
          <nav id="main-nav" className="Box Box--Large Box--bright">
            <ul>
              <li> <a href="https://www.compasshb.com/who-we-are">Who We Are</a> <i className="material-icons">keyboard_arrow_right</i> </li>
              <li className="active"> <a href="https://www.compasshb.com/eight-distinctives">8 Distinctives</a> <i className="material-icons">keyboard_arrow_right</i> </li>
              <li> <a href="https://www.compasshb.com/what-we-believe">What We Believe</a> <i className="material-icons">keyboard_arrow_right</i> </li>
            </ul>
          </nav>
        </section>
      </div>
    );
  }
}

export default function sideNav() {
  return React.createElement(SideNav);
};
