import styles from "./Sidebar.module.css";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import AddNewItem from "./addNewItem";
import UserSection from "./userSection";

export default function Sidebar() {
    const noteList = useSelector((state) => state.notes.todos);

    return (
        <nav className={styles.sidebarContainer}>
            {/* User section */}
            <UserSection />
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
