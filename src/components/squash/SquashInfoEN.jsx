import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import styles from "./SquashInfoEN.module.css";

function SquashInfoEN() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.item}>
          Squash coaching by a certified squash{" "}
          <span className={styles.highlight}>coach</span> (ESF/WSF Level 2 coach
          since 2015) and a former member of the Polish{" "}
          <span className={styles.highlight}>National</span> Squash Team and
          3-times Polish Nationals Team{" "}
          <span className={styles.highlight}>Champion</span>.
        </li>
        <li className={styles.item}>
          <span className={styles.highlight}>10+</span> years of coaching
          experience
        </li>
        <li className={styles.item}>
          Individual/group sessions for players on{" "}
          <span className={styles.highlight}>all levels</span> available.
        </li>
        <li className={styles.item}>
          Prices starting from <span className={styles.highlight}>£30/</span>
          session.
        </li>
        <li className={styles.item}>
          <Button onClick={() => navigate("/contact")} btnWidth="75%">
            Book a session!
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default SquashInfoEN;
