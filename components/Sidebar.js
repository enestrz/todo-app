import React from "react";
import styles from "../styles/Sidebar.module.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const toggleSidebar = useSelector((state) => state.sidebar.value);

  const variant = {
    open: {
      x: 0,
      display: "flex",
      transition: {
        type: "spring",
        stiffness: 200,
        restDelta: 40,
        damping: 20,
      },
    },
    closed: {
      x: "-200%",
      display: "none",
      transition: {
        type: "spring",
        stiffness: 200,
        restDelta: 30,
        damping: 20,
      },
    },
  };

  return (
    <motion.nav
      className={styles.navbar}
      variants={variant}
      initial={false}
      animate={toggleSidebar ? "open" : "closed"}
      layout
    >
      <ul className={styles.navList}>
        <li>Todos</li>
        <li>Notes</li>
        <li>Projects</li>
        <p>
          <i>
            <b>This sidebar still under development.</b>
          </i>
        </p>
        <p>
          <i>
            <b>So it has not effect on app.</b>
          </i>
        </p>
      </ul>
    </motion.nav>
  );
}
