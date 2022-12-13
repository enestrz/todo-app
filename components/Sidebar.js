import React from "react";
import styles from "../styles/Sidebar.module.css";
import { MdAccountBox, MdArrowDropDown, MdAdd } from "react-icons/md";
import { noteList } from "../reducers/sampleData";
import ListItem from "./ListItem";

export default function Sidebar() {
    return (
        <nav className={styles.sidebarContainer}>
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
                {noteList.map((note) => (
                    <ListItem
                        key={note.id}
                        id={note.id}
                        title={note.title}
                        content={note.content}
                        date={note.date}
                    />
                ))}
            </div>
        </nav>
    );
}
