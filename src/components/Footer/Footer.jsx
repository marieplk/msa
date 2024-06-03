import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerColumn}>
        <span className={styles.footerText}>Анна Плаксина </span>
        <span className={styles.footerLink}>plananyuta@mail.ru</span>{" "}
      </div>
    </div>
  );
};

export default Footer;
