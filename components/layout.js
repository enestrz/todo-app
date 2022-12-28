import React from "react";
import Sidebar from "./Sidebar";
import styles from "../styles/Layout.module.css";
import NotificationBar from "./utilities/NotificationBar";

export default function Layout({ children }) {
    return (
        <div className={styles.layoutContainer}>
            {/* <Navbar /> */}
            <Sidebar />
            {children}
            <NotificationBar />
        </div>
    );
}
