import React from "react";
import Sidebar from "./sidebar/Sidebar";
import styles from "../styles/Layout.module.css";
import NotificationBar from "./utilities/NotificationBar";
import Navigation from "./navigation/Navigation";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../reducers/firebase";
import { login, logOut } from "../reducers/slices/userSlice";
import { useDispatch } from "react-redux";

export default function Layout({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(login(user));
                console.log("Logged in");
            } else {
                dispatch(logOut());
                console.log("Logged out");
            }
        });
    });

    return (
        <>
            <div className={styles.layoutContainer}>
                <Navigation />
                <div className={styles.layoutWrapper}>
                    <Sidebar />
                    {children}
                </div>
            </div>

            <NotificationBar />
        </>
    );
}
