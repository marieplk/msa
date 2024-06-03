import styles from "./hero.module.css";
import Hero2 from "../../assets/img/hero2.png";
import Dot from "../../assets/svg/dot.svg";

const HeroSecond = () => {
  return (
    <div className={styles.hero2}>
      <div className={styles.heroImage} id={styles.hero2}>
        <img src={Hero2} alt="" />
      </div>
      <div className={styles.leftColumn}>
        <h1 className={styles.leftColumnText2}>С ЧЕМ Я МОГУ ПОМОЧЬ?</h1>

        <ul className={styles.ul}>
          <div className={styles.row}>
            <img src={Dot} alt="" />
            <p>Сахарный диабет</p>
          </div>

          <div className={styles.row}>
            <img src={Dot} alt="" />
            <p>Ожирение</p>
          </div>

          <div className={styles.row}>
            <img src={Dot} alt="" />
            <p>Несахарный диабет</p>
          </div>

          <div className={styles.row}>
            <img src={Dot} alt="" />
            <p>Задержка роста</p>
          </div>

          <div className={styles.row}>
            <img src={Dot} alt="" />
            <p>Гипокортицизм</p>
          </div>

          <div className={styles.row}>
            <img src={Dot} alt="" />
            <p>Заболевания щитовидной железы</p>
          </div>

          <div className={styles.row}>
            <img src={Dot} alt="" />
            <p>Нарушения полового развития</p>
          </div>

          <div className={styles.row}>
            <img src={Dot} alt="" />
            <p>Патология фосфорно-кальциевого <br /> обмена, дефицит витамина D</p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default HeroSecond;
