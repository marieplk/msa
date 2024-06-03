import { useState } from "react";
import ButtonRound from "../Button/ButtonRound";
import styles from "./slider.module.css";
import Reviewer1 from "../../assets/img/reviewer1.png";
import Reviewer2 from "../../assets/img/reviewer2.png";

const SliderReview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % 2);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + 2) % 2);
  };

  return (
    <div className={styles.reviews}>
      <div className={styles.reviewsTop}>
        <h1>ОТЗЫВЫ</h1>
        <div className={styles.slidernav}>
          <ButtonRound onClick={prevSlide}>
            <b>ᐸ</b>
          </ButtonRound>
          <ButtonRound onClick={nextSlide}>
            <b>ᐳ</b>
          </ButtonRound>
        </div>
      </div>
      <div className={styles.reviewsCarusel}>
        <div
          className={styles.card}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <span>
            Анна Олеговна очень заботливый доктор! Мы&nbsp;с&nbsp;малышкой почти
            сразу после рождения оказались в&nbsp;стационаре Алмазова,
            я&nbsp;узнала что у&nbsp;дочки врожденный гиперинсулинизм. Это
            редкое и&nbsp;тяжелое заболевание, мы&nbsp;прошли много
            диагностических процедур, но на&nbsp;этом пути Анна Олеговна все
            подробно объясняла, мы&nbsp;чувствовали, что мы&nbsp;в&nbsp;надежных
            руках. В&nbsp;центре нам была сделана операция, спасибо
            врачам-хирургам! <br /> Сейчас мы&nbsp;наблюдаемся у&nbsp;Анны
            Олеговны но&nbsp;уже здоровые!!!! <br /> Спасибо!
          </span>
          <div className={styles.cardReviewer}>
            <img src={Reviewer1} alt="" />
            <h2>
              Мама Евы, 2 года <br /> Врожденный гиперинсулинизм
            </h2>
          </div>
        </div>

        <div
          className={styles.card}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <span>
            С&nbsp;Анной Олеговна мы впервые узнали, что&nbsp;у&nbsp;моей дочки диабет. 
            Вместе мы узнали&nbsp;о&nbsp;правильном рационе питания, узнали способы 
            контроля диабета и правила коррекции инсулинотерапии. Хочется 
            отметить бережное и чуткое отношение Анны Олеговны! 
            <br />Недавно поставили помпу, и это значительно облегчило нашу жизнь! 
            <br />Спасибо!

          </span>
          <div className={styles.cardReviewer}>
            <img src={Reviewer2} alt="" />
            <h2>
              Мама Лизы, лет <br /> Дибает 1 типа
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderReview;
