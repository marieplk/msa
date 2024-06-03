import styles from "../Education/education.module.css";
import Icon1 from "../../assets/svg/icon7.svg";
import Icon2 from "../../assets/svg/icon8.svg";
import Icon3 from "../../assets/svg/icon9.svg";
import Cert1 from "../../assets/img/cert1.png";
import Cert2 from "../../assets/img/cert2.png";
import Cert3 from "../../assets/img/cert3.png";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Education = () => {
  return (
    <div className={styles.education}>
      <div className={styles.leftColumn}>
        <div className={styles.sliderContainer}>
          <div className={styles.slides}>
            <Swiper
              effect={"fade"}
              autoplay={{
                delay: 1000,
              }}
              modules={[EffectFade, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={Cert1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Cert2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Cert3} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className={styles.rightColumn}>
        <h1 className={styles.rightColumnText}>ОБРАЗОВАНИЕ</h1>

        <ul className={styles.ul}>
          <div className={styles.row}>
            <img src={Icon1} alt="" />

            <p>
              <b>2012 - 2018</b>
              <p></p>
              Закончила Южно-Уральский государственный медицинский университет
              по&nbsp;специальности &laquo;Лечебное дело&raquo; в&nbsp;городе
              Челябинске.
            </p>
          </div>

          <div className={styles.row}>
            <img src={Icon2} alt="" />

            <p>
              <b>2018 - 2020</b>
              <p></p>
              Закончила ординатуру по&nbsp;специальности &laquo;детская
              эндокринология&raquo; в&nbsp;Национальном медицинском
              исследовательском центре&nbsp;им. В.А. Алмазова.
            </p>
          </div>

          <div className={styles.row}>
            <img src={Icon3} alt="" />
            <p>
              <b>2020 - Настоящее время</b>
              <p></p>
              Работаю на&nbsp;кафедре детских детских болезней и&nbsp;отделении
              педиатрии центра Алмазова, занимаюсь лечением детей
              по&nbsp;профилю &laquo;Детская эндокринология&raquo;, занимаюсь
              обучением ординаторов и&nbsp;студентов.
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Education;
