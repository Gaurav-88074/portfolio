import React from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                Gaurav
            </div>
            <div className={styles.menu}>
                <ul className={styles.submenu}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Services</li>
                    <li>Contact Me</li>
                </ul>
            </div>
            <div className={styles.navButton}>
                <button>
                    click
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
