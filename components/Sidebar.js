import React from "react";
import styles from "../styles/Sidebar.module.css";
import { motion } from "framer-motion";
import { MdAccountBox, MdArrowDropDown, MdAdd } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";

export default function Sidebar() {
    return (
        <motion.nav className={styles.sidebarContainer}>
            {/* User section */}
            <div className={styles.userSection}>
                {/* This will be change to user image */}
                <MdAccountBox className={styles.userImage} />
                <h5>enestrz</h5>
                <MdArrowDropDown className={styles.userDropdownIcon} />
            </div>

            {/* Add new note section */}
            <div className={styles.addNewSection}>
                <MdAdd className={styles.addNewButton} />
                <span>Add a new note</span>
            </div>

            {/* List section */}
            <div className={styles.listSection}>
                <div className={styles.listItemContainer}>
                    <span>Watch List</span>
                    <HiDotsVertical className={styles.listItemIcon} />
                </div>
                <div className={styles.listItemContainer}>
                    <span>Lorem, ipsum dolor.</span>
                    <HiDotsVertical className={styles.listItemIcon} />
                </div>
                <div className={styles.listItemContainer}>
                    <span>Lorem ipsum dolor sit.</span>
                    <HiDotsVertical className={styles.listItemIcon} />
                </div>
                <div className={styles.listItemContainer}>
                    <span>Lorem ipsum dolor sit amet.</span>
                    <HiDotsVertical className={styles.listItemIcon} />
                </div>
                <div className={styles.listItemContainer}>
                    <span>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Esse, quas?
                    </span>
                    <HiDotsVertical className={styles.listItemIcon} />
                </div>
            </div>
        </motion.nav>
    );
}
