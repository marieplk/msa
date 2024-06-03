import Button from "../Button/Button";
import styles from "./cardbutton.module.css";
import { Link } from "react-router-dom";

const OfflineCard = () => {
  return (
    <div className={styles.cardButtonOffline}>
      <div className={styles.cardText}>
        <h2>Запись на оффлайн прием в клинике</h2>
        <p>
          Вы&nbsp;можете записаться на&nbsp;очный прием в&nbsp;Бейби-мед <br />{" "}
          в&nbsp;Гатчине (ул.Госпитальный переулок 15а) по&nbsp;телефону:
          <br />8 (921) 790-99-20
          <br />8 (81371) 220-39
          <br />8 (921) 566-65-32
        </p>
      </div>
      <Link to="/service">
        <Button >Ок</Button>
      </Link>
    </div>
  );
};

export default OfflineCard;
