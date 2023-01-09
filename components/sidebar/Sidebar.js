import styles from "./Sidebar.module.css";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import AddNewItem from "./addNewItem";
// import UserSection from "./userSection";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { useEffect, useState } from "react";

export default function Sidebar() {
    const noteList = useSelector((state) => state.notes.todos);
    const isOpen = useSelector((state) => state.sidebar.isOpen);
    const [sidebarStyle, setSidebarStyle] = useState("");

    const width = useWindowWidth({ fps: 60 });

    const sideBarShow = () => {
        if (!isOpen && width <= 1000) {
            setSidebarStyle(styles.sidebarHide);
        } else {
            setSidebarStyle(styles.sidebarContainer);
        }
    };

    useEffect(() => {
        sideBarShow();
        return () => {
            sideBarShow();
        };
    });

    return (
        <nav className={sidebarStyle}>
            {/* User section */}
            {/* <UserSection /> */}
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
