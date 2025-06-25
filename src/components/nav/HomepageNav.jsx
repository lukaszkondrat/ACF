import { NavLink } from "react-router-dom";

import styles from "./HomepageNav.module.css";

function HomepageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
{/*         <li>
          <NavLink to="/squash">
            <span>🎾</span>
            <span> SQUASH</span>
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/travels">
            <span>🌍</span>
            <span> TRAVELS</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <span>✍️</span>
            <span> CONTACT</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HomepageNav;
