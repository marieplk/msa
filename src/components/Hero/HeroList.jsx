import styles from "./hero.module.css";
import Dot from "../../assets/svg/dot.svg";

const HeroList = () => {
  return (
    <div className={styles.heroList}>
      <div className={styles.leftColumn}>
        <h1 className={styles.leftColumnText2}>
          КАКИЕ СИМПТОМЫ УКАЗЫВАЮТ НА НЕОБХОДИМОСТЬ КОНСУЛЬТАЦИИ <br /> ДЕТСКОГО
          ЭНДОКРИНОЛОГА
        </h1>

        <ul className={styles.ul2}>
          <div className={styles.row2}>
            <img src={Dot} alt="" />
            <p>
              Повышенная жажда, повышенная частота мочеиспусканий, <br />{" "}
              большой объем потребляемой и&nbsp;выделяемой жидкости
            </p>
          </div>

          <div className={styles.row2}>
            <img src={Dot} alt="" />
            <p>Появление запаха ацетона</p>
          </div>

          <div className={styles.row2}>
            <img src={Dot} alt="" />
            <p>Потеря веса / быстрый набор веса</p>
          </div>

          <div className={styles.row2}>
            <img src={Dot} alt="" />
            <p>Слабость, вялость, потери сознания</p>
          </div>

          <div className={styles.row2}>
            <img src={Dot} alt="" />
            <p>Регистрируемые эпизоды низкого уровня сахара крови</p>
          </div>

          <div className={styles.row2}>
            <img src={Dot} alt="" />
            <p>Брадикардия / тахикардия в сочетании с другими жалобами</p>
          </div>

          <div className={styles.row2}>
            <img src={Dot} alt="" />
            <p>Учащение стула /запоры в сочетании с другими жалобами</p>
          </div>

          <div className={styles.row2}>
            <img src={Dot} alt="" />
            <p>
              Раздражительность, нервозность, ухудшение умственной
              работоспособности, частые головные боли в сочетании с другими
              жалобами
            </p>
          </div>

          <div className={styles.row2}>
            <img src={Dot} alt="" />
            <p>Низкие темпы роста, низкий рост</p>
          </div>

          <div className={styles.row2}>
            <img src={Dot} alt="" />
            <p>
              Появление признаков полового развития у&nbsp;девочек
              в&nbsp;возрасте менее 8 лет или&nbsp; у&nbsp;мальчиков менее
              9&nbsp;лет; отсутствие признаков полового развития у&nbsp;девочек
              старше 13&nbsp;лет, у&nbsp;мальчиков старше 14&nbsp;лет
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default HeroList;
