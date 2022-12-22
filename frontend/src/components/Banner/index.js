/* CSS */
import styles from "./Banner.module.scss";

const Banner = ({ title }) => {
  return (
    <div className={styles.bannerContainer}>
      <h4>{ title }</h4>
    </div>
  );
};

export default Banner;