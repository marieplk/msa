import styles from "./homecards.module.css";
import Icon1 from "../../assets/svg/icon1.svg";
import Icon2 from "../../assets/svg/icon2.svg";
import Icon3 from "../../assets/svg/icon3.svg";
import cn from "classnames";

const HomeCards = () => {
  return (
    <div className={styles.cardsSection}>
      <div className={styles.cardsTopText}>
        <h1>
          ПРИНЦИПЫ <br /> РАБОТЫ
        </h1>
        <p>
          Вместе мы&nbsp;простыми словами поговорим о&nbsp;диабете и&nbsp;других
          <br />
          заболеваниях, научимся бережно заботиться о&nbsp;себе и&nbsp;детях.
          <br />
          Наша цель&nbsp;&mdash; счастливое детство!
        </p>
      </div>
      <div className={styles.cardsContainer}>
        <div className={cn(styles.card, styles.red)}>
          <img src={Icon1} alt="" />
          <h2>Бережное отношение к&nbsp; каждому</h2>
          <span>
            Построение доверительных отношений в&nbsp;работе с&nbsp;ребёнком
            и&nbsp;его родными играет ключевую роль в&nbsp;вопросах наблюдения
            и&nbsp;коррекции терапии у&nbsp;пациентов, имеющих хроническую
            патологию.
          </span>
        </div>
        <div className={cn(styles.card, styles.green)}>
          <img src={Icon2} alt="" />
          <h2>
            Работа, основанная <br /> на принципах доказательной медицины
          </h2>
          <span>
            Обследование без назначения ненужных анализов, лечение согласно
            современным клиническим рекомендациям.
          </span>
        </div>
        <div className={cn(styles.card, styles.orange)}>
          <img src={Icon3} alt="" />
          <h2>
            Постоянное расширение <br />
            кругозора и развитие <br /> по специальности
          </h2>
          <span>
            Прохождение постоянных дополнительных курсов и&nbsp;интенсивов для
            получения актуальной информации.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
