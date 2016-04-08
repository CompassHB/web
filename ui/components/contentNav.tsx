import * as React from "react";

export function ContentNav({active}: {active: string}) {
  return <section className="Settings utility-flex-container">
    <nav id="main-nav" className="Box Box--Large Box--bright">
      <ul>
        <li className={active == 'read' ? 'active' : undefined}> <a href="https://www.compasshb.com/read">Scripture of the Day</a> <i className="material-icons">keyboard_arrow_right</i> </li>
        <li className={active == 'sermons' ? 'active' : undefined}> <a href="https://www.compasshb.com/sermons">Sermons</a> <i className="material-icons">keyboard_arrow_right</i> </li>
        <li className={active == 'songs' ? 'active' : undefined}> <a href="https://www.compasshb.com/songs">Worship</a> <i className="material-icons">keyboard_arrow_right</i> </li>
        <li className={active == 'videos' ? 'active' : undefined}> <a href="https://www.compasshb.com/blog">Videos</a> <i className="material-icons">keyboard_arrow_right</i> </li>
        <li className={active == 'giving' ? 'active' : undefined}> <a href="https://www.compasshb.com/giving">Give</a> <i className="material-icons">keyboard_arrow_right</i> </li>
      </ul>
    </nav>
  </section>
}
