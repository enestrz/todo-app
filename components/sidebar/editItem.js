import React, { useState } from "react";
import styles from "../../styles/Sidebar.module.css";
import { MdEdit } from "react-icons/md";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Dialog from "@radix-ui/react-dialog";
import Modal from "../utilities/Modal";

const EditItem = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                    <div className={styles.listItemDropdownItem}>
                        Edit
                        <MdEdit className={styles.listItemDropdownItemIcon} />
                    </div>
                </Dialog.Trigger>

                <Modal title={"Edit todo"}>asdasda</Modal>
            </Dialog.Root>
        </>
    );
};

export default EditItem;
