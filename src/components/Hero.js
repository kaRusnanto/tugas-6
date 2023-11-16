import styles from "./Hero.module.css";

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>ONE PIECE</h2>
                    <h3 className={styles.hero__genre}>Monky D Luffy, Roronoa Zoro, Vinsmoke Sanji</h3>
                    <p className={styles.hero__descrption}>Kapten dan kedua sayap kapten, mereka adalah trio monster kru Mugiwara No Luffy</p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className="hero__right">
                    <img className={styles.hero__image} src="https://i.pinimg.com/originals/45/b1/26/45b126d51d2c847faad2cdfde248939e.png" alt="placeholder"/>
                </div>
            </section>
        </div>
    );
}

export default Hero;