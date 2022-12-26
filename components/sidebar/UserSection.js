import React from "react";
import { MdAccountBox, MdArrowDropDown, MdAdd } from "react-icons/md";
import styles from "../../styles/Sidebar.module.css";

function UserSection() {
    return (
        <div className={styles.userSection}>
            {/* This will be change to user image */}
            <MdAccountBox className={styles.userImage} />
            <h5>enestrz</h5>
            <MdArrowDropDown className={styles.userDropdownIcon} />
        </div>
    );
}

export default UserSection;
