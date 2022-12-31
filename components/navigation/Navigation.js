import React, { useEffect } from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";
import UserSection from "./userSection";

const Navigation = () => {
    useEffect(() => {
        const makeActive = (e) => {
            const links = document.querySelectorAll(".nav-link");
            links.forEach((link) => {
                link.classList.remove("active");
            });
            e.target.classList.add("active");
        };

        const links = document.querySelectorAll(".nav-link");
        links.forEach((link) => {
            link.addEventListener("click", makeActive);
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener("click", makeActive);
            });
        };
    });

    return (
        <nav className={styles.container}>
            <Link href={"/"}>Breath Note</Link>
            <ul className={styles.linksContainer}>
                <li>
                    <Link className="nav-link" href={"#"}>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" href={"#"}>
                        About
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" href={"#"}>
                        Contact Us
                    </Link>
                </li>
            </ul>

            <UserSection />
        </nav>
    );
};

export default Navigation;
