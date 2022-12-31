import React from "react";
import { MdAccountBox, MdArrowDropDown, MdAdd } from "react-icons/md";
import styles from "./Sidebar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

function UserSection() {
    const user = useSelector((state) => state.user);

    if (user.loggedIn) {
        return (
            <div className={styles.userSection}>
                {/* This will be change to user image */}
                <MdAccountBox className={styles.userImage} />
                <h5>{user}</h5>
                <MdArrowDropDown className={styles.userDropdownIcon} />
            </div>
        );
    }

    return (
        <div className={styles.userSection}>
            <p>
                You are using guest mode. Please{" "}
                <Link href={"register"}> sign up </Link> or{" "}
                <Link href={"login"}>login</Link> to save notes.
            </p>
        </div>
    );
}

export default UserSection;
