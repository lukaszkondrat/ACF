import { useLogout } from "./useLogout";

import styles from "./Logout.module.css";

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <button className={styles.btn} disabled={isLoading} onClick={logout}>
      <span className={styles.emoji}>🔙</span>
    </button>
  );
}

export default Logout;
