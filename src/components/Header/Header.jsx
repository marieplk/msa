import styles from "./header.module.css";
import Logo from "../../assets/svg/logo.svg";
import { Link } from "react-router-dom";

import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.logo} to="/">
        <img src={Logo} alt="" />
      </Link>

      <ul className={styles.nav}>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/about">Обо мне</Link>
        </li>
        <li>
          <Link to="/service">Услуги</Link>
        </li>
        <li>
          <Link to="/blog">Блог</Link>
        </li>
        <li>
          <Link to="/contact">Контакты</Link>
        </li>
      </ul>
      <div className={styles.menu}>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
