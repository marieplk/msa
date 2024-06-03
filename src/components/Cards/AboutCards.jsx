import styles from "./homecards.module.css";
import Icon1 from "../../assets/svg/icon4.svg";
import Icon2 from "../../assets/svg/icon5.svg";
import Icon3 from "../../assets/svg/icon6.svg";
import cn from "classnames";

const AboutCards = () => {
  return (
    <div className={styles.cardsSection}>
      <div className={styles.cardsTopText}>
        <h1>ОБО МНЕ</h1>
        <p>
          Чутко отношусь к&nbsp;симптомам болезни, <br /> бережно
          к&nbsp;эмоциональному состоянию семьи, <br /> руководствуюсь принципам
          доказательной медицины. <br />
          И&nbsp;люблю свою работу!
        </p>
      </div>
      <div className={styles.cardsContainer}>
        <div className={cn(styles.card, styles.red)}>
          <img src={Icon1} alt="" />
          <h2>Публикую статьи</h2>
          <span>
            Основная тема интересов&nbsp;&mdash; сахарный диабет 1&nbsp;типа
            у&nbsp;детей; фундаментальное изучение патогенетических основ
            нарушений полового развития детей.
          </span>
        </div>
        <div className={cn(styles.card, styles.green)}>
          <img src={Icon2} alt="" />
          <h2>Участвую в научных конференциях</h2>
          <span>
            Ежегодно являюсь участником Всероссийских конференций
            по&nbsp;педиатрии и&nbsp;эндокринологии.
          </span>
        </div>
        <div className={cn(styles.card, styles.orange)}>
          <img src={Icon3} alt="" />
          <h2>Учу врачей</h2>
          <span>
            Обучаю студентов и&nbsp;клинических ординаторов основам
            и&nbsp;тонкостям детской эндокринологии.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
