import { Link } from 'react-router-dom';
import Button from "../Button/Button";
import styles from "./cardbutton.module.css";

const CardButtonArticle2 = () => {
  return (
    <div className={styles.cardButton}>
      <div className={styles.cardText}>
        <h2>Запись на онлайн-консультацию</h2>
        <p>
          Вместе мы&nbsp;простыми словами говорим о&nbsp;диабете и&nbsp;других
          заболеваниях
        </p>
      </div>
      <Link to="/online">
            <Button >Записаться</Button>
          </Link>
    </div>
  );
};

export default CardButtonArticle2;
