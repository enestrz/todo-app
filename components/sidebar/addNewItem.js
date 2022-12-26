import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import styles from "../../styles/Sidebar.module.css";
import { MdAdd } from "react-icons/md";
import { addNewTodo } from "../../reducers/slices/notesSlice";
import { addNotification } from "../../reducers/slices/notificationSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Modal from "../utilities/Modal";

const AddNewItem = () => {
    const [newTodoTitle, setNewTodoTitle] = useState("");
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);

        if (newTodoTitle !== "") {
            const newTodoItem = {
                id: uuidv4(),
                title: newTodoTitle,
                content: "",
                date: today.toLocaleDateString(),
            };

            dispatch(addNewTodo(newTodoItem));
            setNewTodoTitle("");
            setOpen(false);
            dispatch(
                addNotification({
                    id: uuidv4(),
                    message: "Added successfuly",
                    type: "success",
                })
            );
        }
    }

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <div className={styles.addNewSection}>
                    <MdAdd className={styles.addNewButton} />
                    <span>Add a new note</span>
                </div>
            </Dialog.Trigger>

            <Modal title={"New todo"}>
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
                            value={newTodoTitle}
                            onChange={(e) => setNewTodoTitle(e.target.value)}
                        />
                    </fieldset>

                    <div className={styles.saveDialogButtonContainer}>
                        <button type="submit">Add</button>
                    </div>
                </form>
            </Modal>
        </Dialog.Root>
    );
};

export default AddNewItem;
