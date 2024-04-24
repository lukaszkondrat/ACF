import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";

import styles from "./SquashInfoPL.module.css";

function SquashInfoPL() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.item}>
          Zajecia prowadzone przez certyfikowanego{" "}
          <span className={styles.highlight}>trenera</span> (ESF/WSF Level 2
          Coach od 2015r.) - bylego czlonka polskiej kadry{" "}
          <span className={styles.highlight}>Narodowej</span> i 3-krotnego
          druzynowego <span className={styles.highlight}>mistrza</span> Polski.
        </li>
        <li className={styles.item}>
          <span className={styles.highlight}>10+</span> lat doswiadczenia w
          nauczaniu
        </li>
        <li className={styles.item}>
          Indywidualne/grupowe zajecia dla graczy na{" "}
          <span className={styles.highlight}>kazdym poziomie</span>.
        </li>
        <li className={styles.item}>
          Cena za zajecia od <span className={styles.highlight}>100 PLN/</span>
          1h.
        </li>
        <li className={styles.item}>
          <Button onClick={() => navigate("/contact")} btnWidth="70%">
            Zarezerwuj!
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default SquashInfoPL;
