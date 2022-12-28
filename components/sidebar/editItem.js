import React, { useEffect, useState } from "react";
import styles from "../../styles/Sidebar.module.css";
import { MdEdit } from "react-icons/md";
import * as Dialog from "@radix-ui/react-dialog";
import Modal from "../utilities/Modal";
import { useDispatch } from "react-redux";
import { editTodoItem } from "../../reducers/slices/notesSlice";
import { addNotification } from "../../reducers/slices/notificationSlice";
import { v4 as uuidv4 } from "uuid";

const EditItem = ({ id, title, setIsOpen }) => {
    const [open, setOpen] = useState(false);
    const [newTitle, setNewTitle] = useState(title);

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();

        dispatch(editTodoItem({ id, newTitle }));
        setOpen(false);
        dispatch(
            addNotification({
                id: uuidv4(),
                message: "Edited successfuly",
                type: "success",
            })
        );
        setIsOpen(false);
    }

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <div className={styles.listItemDropdownItem}>
                    Edit
                    <MdEdit className={styles.listItemDropdownItemIcon} />
                </div>
            </Dialog.Trigger>

            <Modal title={"Edit todo"}>
                <form onSubmit={handleSubmit}>
                    <fieldset className={styles.addNewItemFormGroup}>
                        <label
                            className={styles.addNewItemFormLabel}
                            htmlFor="name"
                        >
                            Title:
                        </label>
                        <input
                            placeholder="Enter new title for note"
                            className={styles.addNewItemFormField}
                            type="text"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                    </fieldset>

                    <div className={styles.saveDialogButtonContainer}>
                        <button type="submit">Edit</button>
                    </div>
                </form>
            </Modal>
        </Dialog.Root>
    );
};

export default EditItem;
