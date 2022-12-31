import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import styles from "./Utilities.module.css";
import { MdClose } from "react-icons/md";

const Modal = ({ title, children }) => {
    return (
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
                    {title}
                </Dialog.Title>

                {children}

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
    );
};

export default Modal;
