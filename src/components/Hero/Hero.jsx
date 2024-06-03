import styles from "./hero.module.css";
import Hero1 from "../../assets/img/hero1.png";
import Button from "../Button/Button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.leftColumn}>
        <h1 className={styles.leftColumnText}>
          ВАШ ДОКТОР — ДЕТСКИЙ <br /> ЭНДОКРИНОЛОГ <br /> ПЛАКСИНА АННА
        </h1>

        <Link to="/service">
            <Button >Записаться</Button>
          </Link>
      </div>
      <div className={styles.heroImage}>
        <img src={Hero1} alt="" />
      </div>
    </div>
  );
};

export default Hero;
