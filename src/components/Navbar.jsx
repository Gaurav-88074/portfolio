import React from "react";
import styles from "./Navbar.module.css";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useState } from "react";
const Navbar = () => {
    const [lightMode, setLightMode] = useState(true);
    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <a>Gaurav</a>
            </div>
            <div className={styles.menu}>
                <ul className={styles.submenu}>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Skills</a>
                    </li>
                    <li>
                        <a>Projects</a>
                    </li>
                    <li>
                        <a>Contact Me</a>
                    </li>
                </ul>
            </div>
            <div className={styles.navButton}
                onClick={()=>{
                    setLightMode((p)=>!p);
                }}
            >
                {
                    lightMode
                    &&
                    <DarkModeOutlinedIcon
                        sx={{
                            color: "#716b74",
                            fontSize :'1.3rem',
                            backgroundColor: "#fbfbfe",

                            ":hover": {
                                color: "#6f58df",
                                cursor: "pointer",
                            },
                            // border :
                        }}
                        
                    />
                }
                {
                    !lightMode
                    &&
                    <LightModeOutlinedIcon
                    sx={{
                        color: "#716b74",
                        fontSize :'1.3rem',
                        backgroundColor: "#fbfbfe",

                        ":hover": {
                            color: "#6f58df",
                            cursor: "pointer",
                        },
                        // border :
                    }}
                    />
                }
            </div>
        </nav>
    );
};

export default Navbar;
