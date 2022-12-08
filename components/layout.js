import React from "react";
import Navbar from "./navbar";
import Sidebar from "./Sidebar";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
    return (
        <div className={styles.layoutContainer}>
            {/* <Navbar /> */}
            <Sidebar />
            {children}
        </div>
    );
}
