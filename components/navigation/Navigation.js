import React, { useEffect } from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";
import UserSection from "./userSection";
import { MdMenu } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../reducers/slices/sidebarSlice";

const Navigation = () => {
    const dispatch = useDispatch();

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
            <button
                style={{
                    padding: 0,
                }}
            >
                <MdMenu
                    className={styles.menuIcon}
                    onClick={() => {
                        dispatch(toggleSidebar());
                    }}
                />
            </button>

            <Link href={"/"}>Breath Note</Link>
            {/* <ul className={styles.linksContainer}>
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
            </ul> */}

            <UserSection />
        </nav>
    );
};

export default Navigation;
