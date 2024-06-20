import Button from "../Button/Button";
import styles from "./cont.module.css";
import Map1 from "../../assets/img/map1.png";
import Map2 from "../../assets/img/map2.png";
import { Link } from "react-router-dom";

const Cont = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactContainer}>
        <div className={styles.leftColumn}>
          <h2>Оффлайн прием</h2>
          <p>
            «ФГБУ Национальный медицинский исследовательский
            центр им. В.А. Алмазова Минздрава России» <br /> г.Санкт-Петербург ул.Коломяжский проспект
            21
          </p>
          <Link to="/service">
            <Button>Записаться</Button>
          </Link>
        </div>

        <img src={Map1} alt="" />
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.leftColumn}>
          <h2>Оффлайн прием</h2>
          <p>Клиника «Бейби-мед» <br /> г.Гатчина ул.Госпитальный переулок 15а</p>
          <Link to="/service">
            <Button>Записаться</Button>
          </Link>
        </div>
        <img src={Map2} alt="" />
      </div>
    </div>
  );
};

export default Cont;
