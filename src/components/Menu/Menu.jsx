import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./menu.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <div ref={menuRef} className={styles.burger}>
      <RxHamburgerMenu onClick={toggleMenu} />

      {isMenuOpen && (
        <ul className={styles.nav}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Главная
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              Обо мне
            </Link>
          </li>
          <li>
            <Link to="/service" onClick={toggleMenu}>
              Услуги
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={toggleMenu}>
              Блог
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Контакты
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Menu;
