import styles from "./Footer.module.scss";


const Footer = () => {
  const year = new Date().getFullYear;
  return (
    <footer className={styles.footer}>
      <hr />
      <p> Copyright Giulia Notaro {year} </p>
    </footer>
  );
};

export default Footer;
