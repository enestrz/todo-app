import React from "react";
import Sidebar from "./sidebar/Sidebar";
import styles from "../styles/Layout.module.css";
import NotificationBar from "./utilities/NotificationBar";
import Navigation from "./navigation/Navigation";

export default function Layout({ children }) {
    return (
        <>
            <div className={styles.layoutContainer}>
                <Navigation />
                <div className={styles.layoutWrapper}>
                    <Sidebar />
                    <main>{children}</main>
                </div>
            </div>

            <NotificationBar />
        </>
    );
}
