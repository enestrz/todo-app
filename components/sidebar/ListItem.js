import React from "react";
import styles from "./Sidebar.module.css";
import { HiDotsVertical } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../reducers/slices/notesSlice";
import { motion } from "framer-motion";
import EditItem from "./editItem";
import { v4 as uuidv4 } from "uuid";
import { addNotification } from "../../reducers/slices/notificationSlice";

export default function ListItem({ id, title, content, date }) {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = React.useState(false);

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
        dispatch(
            addNotification({
                id: uuidv4(),
                message: "Deleted successfuly",
                type: "success",
            })
        );
    };

    return (
        <div className={styles.listItemContainer}>
            <span>{title}</span>

            <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenu.Trigger asChild>
                    <motion.button className={styles.listItemIcon}>
                        <HiDotsVertical />
                    </motion.button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                    <DropdownMenu.Content
                        sideOffset={5}
                        className={styles.listItemDropdown}
                    >
                        <DropdownMenu.Arrow
                            className={styles.listItemDropdownArrow}
                        />

                        {/* Edit Item */}
                        <EditItem {...{ id, title, setIsOpen }} />

                        {/* Delete Item */}
                        <DropdownMenu.Item
                            className={styles.listItemDropdownItem}
                            onClick={() => handleDelete(id)}
                        >
                            Delete
                            <MdDeleteForever
                                className={styles.listItemDropdownItemIcon}
                            />
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>
        </div>
    );
}
