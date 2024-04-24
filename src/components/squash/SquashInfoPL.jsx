import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";

import styles from "./SquashInfoPL.module.css";

function SquashInfoPL() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.item}>
          Zajęcia prowadzone przez certyfikowanego{" "}
          <span className={styles.highlight}>trenera</span> (ESF/WSF Level 2
          Coach od 2015r.) - byłego członka polskiej kadry{" "}
          <span className={styles.highlight}>Narodowej</span> i 3-krotnego
          drużynowego <span className={styles.highlight}>mistrza</span> Polski.
        </li>
        <li className={styles.item}>
          <span className={styles.highlight}>10+</span> lat doświadczenia w
          nauczaniu
        </li>
        <li className={styles.item}>
          Indywidualne/grupowe zajęcia dla graczy na{" "}
          <span className={styles.highlight}>każdym poziomie</span>.
        </li>
        <li className={styles.item}>
          Cena za zajęcia od <span className={styles.highlight}>100 PLN/</span>
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
