import React from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { useSelector } from "react-redux";

const UserSection = () => {
    const user = useSelector((state) => state.user);

    if (user.user && user.isLogged) {
        return (
            <ul
                className={[styles.linksContainer, styles.userSection].join(
                    " "
                )}
            >
                <li>
                    <Link href={"#"} className="nav-link">
                        Logout
                    </Link>
                </li>
            </ul>
        );
    }

    return (
        <ul className={[styles.linksContainer, styles.userSection].join(" ")}>
            <li>
                <Link href={"register"} className="nav-link">
                    Sign Up
                </Link>
            </li>
            <li>
                <Link href={"login"} className="nav-link">
                    Login
                </Link>
            </li>
        </ul>
    );
};

export default UserSection;
