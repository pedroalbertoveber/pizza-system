/* CSS */
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div>
        <p>
          <strong>PIZZARIA &copy;</strong> - 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;