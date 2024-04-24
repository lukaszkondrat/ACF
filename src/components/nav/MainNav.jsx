import { NavLink } from "react-router-dom";

import { useUser } from "../auth/useUser";

import Logout from "../auth/Logout";

import styles from "./MainNav.module.css";

function MainNav() {
  const { isAuthenticated } = useUser();
  return (
    <nav className={styles.nav}>
      <div className={styles.image}>
        <NavLink to="/">
          <img src="logo.png" alt="company logo" />
        </NavLink>
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <NavLink to="/squash">
              <span className={styles.emoji}>🎾</span> SQUASH
            </NavLink>
          </li>
          <li>
            <NavLink to="/travels">
              <span className={styles.emoji}>🌍</span> TRAVELS
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <span className={styles.emoji}>✍️</span> CONTACT
            </NavLink>
          </li>
          <li>
            {!isAuthenticated ? (
              <NavLink to="/login">
                <span className={styles.emoji}>👤</span>
              </NavLink>
            ) : (
              <Logout />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNav;
