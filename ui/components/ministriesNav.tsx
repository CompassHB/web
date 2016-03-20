import * as React from "react";

export function MinistriesNav({active}: {active: string}) {
  return <div className="col-sm-3 col-sm-pull-9">
    <section className="Settings utility-flex-container">
      <nav id="main-nav" className="Box Box--Large Box--bright">
        <ul>
          <li className={active == 'kids' ? 'active' : undefined}> <a href="/kids">Kids Ministry</a> <i className="material-icons">keyboard_arrow_right</i> </li>
          <li className={active == 'youth' ? 'active' : undefined}> <a href="/youth">Youth Ministry</a> <i className="material-icons">keyboard_arrow_right</i> </li>
          <li className={active == 'college' ? 'active' : undefined}> <a href="/college">College Ministry</a> <i className="material-icons">keyboard_arrow_right</i> </li>
          <li className={active == 'sundayschool' ? 'active' : undefined}> <a href="/sundayschool">Adult Sunday School</a> <i className="material-icons">keyboard_arrow_right</i> </li>
          <li className={active == 'fellowship' ? 'active' : undefined}> <a href="/fellowship">Home Fellowship Groups</a> <i className="material-icons">keyboard_arrow_right</i> </li>
        </ul>
      </nav>
    </section>
  </div>
}