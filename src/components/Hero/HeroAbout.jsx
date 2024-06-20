import styles from "./hero.module.css";
import Hero1 from "../../assets/img/hero1.png";
import Button from "../Button/Button";
import { Link } from 'react-router-dom';

const HeroAbout = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.leftColumn}>
        <h1 className={styles.leftColumnText}>
          ПОЗНАКОМИМСЯ <br /> ПОБЛИЖЕ
        </h1>
        <p>
          Привет! Я&nbsp;&mdash; Анна Плаксина. <br /> Помогу решить любые
          вопросы эндокринной патологии ребенка. Лечу бережно
          и&nbsp;эмпатично.
        </p>
        <Link  to="/service">
            <Button>Записаться</Button>
          </Link>
      </div>
      <div className={styles.heroImage}>
        <img src={Hero3} alt="" />
      </div>
    </div>
  );
};

export default HeroAbout;
