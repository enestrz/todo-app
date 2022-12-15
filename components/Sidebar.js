import styles from "../styles/Sidebar.module.css";
import { MdAccountBox, MdArrowDropDown, MdAdd } from "react-icons/md";
import ListItem from "./sidebar/ListItem";
import { useSelector } from "react-redux";

import AddNewItem from "./sidebar/addNewItem";

export default function Sidebar() {
    const noteList = useSelector((state) => state.notes.todos);

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
            <AddNewItem />

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
