import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { useSelector } from "react-redux";

const UserSection = ({ dispatch, auth, signOut, logOut }) => {
    const user = useSelector((state) => state.user);
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        setCurrentUser(user);
    }, [user]);

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(logOut());
            })
            .catch((error) => {
                console.log(error);
            });
    };

    if (currentUser.user && currentUser.isLogged) {
        return (
            <ul
                className={[styles.linksContainer, styles.userSection].join(
                    " "
                )}
            >
                <li>
                    <div
                        style={{ cursor: "pointer" }}
                        onClick={() => handleLogOut()}
                        className="nav-link"
                    >
                        Logout
                    </div>
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
