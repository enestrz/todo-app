// import { motion } from "framer-motion";
// import styles from "../styles/Navbar.module.css";
// import { useSelector, useDispatch } from "react-redux"
// import { toggleSidebar } from "../reducers/slices/sidebarSlice"

// const Path = (props) => (
//   <motion.path
//     fill="transparent"
//     strokeWidth="3.5"
//     stroke="#fff"
//     strokeLinecap="round"
//     {...props}
//   />
// );

// export const MenuToggle = () => {

//   const toggle = useSelector(state => state.sidebar.value); // redux hook
//   const dispatch = useDispatch(); // redux hook

//   function handleToggle() {
//     dispatch( toggleSidebar() ); // redux dispatch
//   }

//   return (
//     <motion.button
//       onClick={handleToggle}
//       className={styles.toggleMenuButton}
//       animate={toggle ? "open" : "closed"}
//     >
//       <svg width="24" height="24" viewBox="0 0 24 24">
//         <Path
//           variants={{
//             closed: { d: "M 2 4 L 22 4" },
//             open: { d: "M 3 22 L 22 4" },
//           }}
//         />
//         <Path
//           d="M 2 13 L 22 13"
//           variants={{
//             closed: { opacity: 1 },
//             open: { opacity: 0 },
//           }}
//           transition={{ duration: 0.1 }}
//         />
//         <Path
//           variants={{
//             closed: { d: "M 2 22 L 22 22" },
//             open: { d: "M 3 4 L 22 22" },
//           }}
//         />
//       </svg>
//     </motion.button>
//   );
// };
