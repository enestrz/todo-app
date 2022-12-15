import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import styles from "../../styles/Sidebar.module.css";
import { MdAdd, MdClose } from "react-icons/md";
import { addNewTodo } from "../../reducers/slices/notesSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

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
        }
    }

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <div
                    className={styles.addNewSection}
                    // onClick={() => dispatch(addNewItem())}
                >
                    <MdAdd className={styles.addNewButton} />
                    <span>Add a new note</span>
                </div>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.dialogOverlay} />
                <Dialog.Content className={styles.dialogContent}>
                    <Dialog.Title
                        style={{
                            textAlign: "center",
                            borderBottom: "2px solid aqua",
                            fontSize: "1.2rem",
                        }}
                    >
                        New Todo
                    </Dialog.Title>

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
                                onChange={(e) =>
                                    setNewTodoTitle(e.target.value)
                                }
                            />
                        </fieldset>

                        <div className={styles.saveDialogButtonContainer}>
                            <button type="submit">Add</button>
                        </div>
                    </form>

                    <Dialog.Close>
                        <MdClose
                            className={styles.closeDialogButton}
                            style={{
                                cursor: "pointer",
                            }}
                        />
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default AddNewItem;
