import React, { useEffect } from "react";
import styles from "./Utilities.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { MdThumbUpOffAlt, MdThumbDownOffAlt } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { removeNotification } from "../../reducers/slices/notificationSlice";

const iconSize = 22;

const variants = {
    hide: {
        x: 0,
    },
    show: {
        x: -200,
        transition: {
            type: "spring",
            stiffness: 130,
        },
    },
    exit: {
        x: 200,
    },
};

const NotificationBar = () => {
    const dispatch = useDispatch();

    const notifications = useSelector((state) => state.notification.items);

    console.log(notifications);

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(removeNotification(0));
        }, 5000);
        return () => clearTimeout(timeout);
    });

    // cc0000, FC100D red color of failure

    return (
        <AnimatePresence>
            {notifications.map((notification, index) => (
                <motion.div
                    layout
                    key={notification.id}
                    className={styles.content}
                    onClick={() => dispatch(removeNotification(index))}
                    style={{
                        backgroundColor:
                            notification.type === "success"
                                ? "#4BB543"
                                : "#cc0000",
                        top: index * 50,
                    }}
                    variants={variants}
                    initial="hide"
                    animate="show"
                    exit="exit"
                >
                    {notification.type === "success" ? (
                        <MdThumbUpOffAlt size={iconSize} />
                    ) : (
                        <MdThumbDownOffAlt size={iconSize} />
                    )}
                    {notification.message}
                </motion.div>
            ))}
        </AnimatePresence>
    );
};

export default NotificationBar;
