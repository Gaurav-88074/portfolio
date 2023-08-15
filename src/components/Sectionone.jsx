import React from "react";
import styles from "./Sectionone.module.css";
const SectionOne = () => {
  return (
    <section className={styles.home__section} id="home">
        <div className={styles.home__container}>
            <div className={styles.home__content}>
                <div className={styles.home__social}>
                    <a href="linked in url" target="_blank" className={styles.home__social_icon}>
                       linkedIn{" "}
                    </a>
                    <a href="leetcode url" target="_blank" className={styles.home__social_icon}>
                       leetcode{" "}
                    </a>
                    <a href="github Url" target="_blank" className={styles.home__social_icon}>
                       github
                    </a>
                </div>

                

                <div className={styles.home__data}>
                    <h1 className={styles.home__title}>Hi, I'm Gaurav</h1>
                    <h3 className={styles.home__subtitle}>Software Engineer</h3>
                    <p className={styles.home__description}>
                        I'm an engineer with excellent problem-solving skills and the
                        ability to perform well in a team. Passionate about coding and
                        enjoy building stuff for the web.
                    </p>
                    <a href="#contact" className={styles.button}>
                        Contact Me
                    </a>
                </div>
                <div className={styles.home__img}><img src="https://lh3.googleusercontent.com/a/AAcHTteFsZ2cr3Ob_tnb-3XoNmGiF8NTqcgoEVJr-HEZ8boNew=s96-c-rg-br100" alt="img" /></div> 
            </div>
        </div>
    </section>
  );
};

export default SectionOne;
