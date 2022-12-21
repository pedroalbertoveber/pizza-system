/* SVG */
import Logo from "assets/img/pizza.svg";

/* CSS */
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div>
        <img src={Logo} alt="Pizzaria" />
      </div>
    </header>
  ); 
};

export default Header;