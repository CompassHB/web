import * as React from "react";

const styles = {
  nav: {
    background: '#f6f6f6',
    border: '1px solid #ddd',
    borderBottomWidth: '2px',
    borderTop: 'none',
    borderRadius: '3px',
  },
  list: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  item: {
    borderBottom: '1px solid #ddd',
  },
  link: {
    color: '#3a3a3a',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1em',
    whiteSpace: 'nowrap',
  },
};

export function Nav({links}: {links: Array<{href: string, label: string}>}) {
  return (
    <nav style={styles.nav}>
      <ul style={styles.list}>
        {links.map((link) => (
        <li style={styles.item} key={link.href}>
          <a href={link.href} style={styles.link}>
            {link.label} <i className="material-icons">keyboard_arrow_right</i>
          </a>
        </li>
        ))}
      </ul>
    </nav>
  );
}