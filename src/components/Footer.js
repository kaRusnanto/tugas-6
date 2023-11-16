import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__title}>THE MOVIE</h2>
                <p className={styles.Footer__author}>MAKER@MOVIE</p>
            </footer>
        </div>
    );
}

export default Footer;