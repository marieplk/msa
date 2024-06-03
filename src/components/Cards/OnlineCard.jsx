import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./cardbutton.module.css";
import emailjs from "@emailjs/browser";

const OnlineCard = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_m64mydc", "template_i9g4irj", form.current, {
        publicKey: "-AoxajydB39rDgEZA",
      })
      .then(() => {
        console.log("SUCCESS!");
        setIsActive("third"); // Установка состояния на "third" при успешной отправке
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Ошибка отправки - повторите попытку");
      });
  };

  const [isActive, setIsActive] = useState("first");

  return (
    <>
      {isActive === "first" && (
        <div className={styles.cardButtonOffline}>
          <div className={styles.cardText}>
            <h2>Запись на онлайн-консультацию</h2>
            <p>
              Онлайн-консультация возможна после первичного очного приема
              с&nbsp;целью обсуждения результатов обследования, разъяснения
              рекомендаций, разработке дальнейшего плана наблюдения
              и&nbsp;лечения. <br />
              Пациентов с&nbsp;диабетом консультирую онлайн по&nbsp;дневникам
              питания, отчетам сенсоров и&nbsp;отчетов инсулиновых помп. Буду
              рада помочь в&nbsp;коррекции инсулинотерапии для достижения
              лучшего контроля диабета!
            </p>
          </div>

          <Button onClick={() => setIsActive("second")}>Записаться</Button>
        </div>
      )}

      {isActive === "second" && (
        <div className={styles.cardButtonOffline}>
          <div className={styles.cardForm}>
            <h2>Запись на онлайн-консультацию</h2>
            <form ref={form} onSubmit={sendEmail}>
              <label className={styles.formRow} htmlFor="fio">
                ФИО
                <input type="text" name="name" id="fio" required />
              </label>
              <label className={styles.formRow} htmlFor="email">
                Email
                <input type="email" name="email" id="email" required />
              </label>
              <label className={styles.formRow} htmlFor="date">
                Дата записи
                <input type="date" name="date" id="date" required />
              </label>

              <label className={styles.formRow} htmlFor="msg">
                Комментарий
                <textarea name="message" id="msg" required></textarea>
              </label>
              <button type="submit" className={styles.accent}>
                Записаться
              </button>
            </form>
            <a target="_blank" href="/politics.pdf">
              <span className={styles.politics}>
                Политика конфиденциальности
              </span>
            </a>
          </div>
        </div>
      )}

      {isActive === "third" && (
        <div className={styles.cardButtonOffline}>
          <div className={styles.cardForm}>
            <h2>Вы успешно записаны на прием!</h2>
          </div>
          <Link to="/service">
            <Button>Ок</Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default OnlineCard;
