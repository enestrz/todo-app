import React from "react";
import styles from "../../styles/Sidebar.module.css";
import { HiDotsVertical } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../reducers/slices/notesSlice";
import { motion } from "framer-motion";
import EditItem from "./editItem";

export default function ListItem({ id, title, content, date }) {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = React.useState(false);

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
                            onClick={() => dispatch(deleteTodo(id))}
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
