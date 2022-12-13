import React, {
    useEffect,
    useRef,
    useState,
    forwardRef,
    createRef,
} from "react";
import styles from "../styles/Sidebar.module.css";
import { HiDotsVertical } from "react-icons/hi";

const Dropdown = forwardRef(({ closeDropdown, lololo }, ref) => {
    lololo(ref, closeDropdown);

    return (
        <div className={styles.listItemDropdown} ref={ref}>
            <button>Delete</button>
        </div>
    );
});

export default function ListItem({ id, title, content, date }) {
    const ref = createRef();
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(true);
    };
    const closeDropdown = () => {
        setShowDropdown(false);
    };

    const lololo = (ref, closeDropdown) => {
        useEffect(() => {
            const handleClickOutside = (e) => {
                // e.stopImmediatePropagation();
                e.stopPropagation();
                if (ref.current && !ref.current.contains(e.target)) {
                    closeDropdown();
                }
            };

            document.addEventListener("click", handleClickOutside, true);

            return () => {
                document.removeEventListener("click", handleClickOutside, true);
            };
        }, [ref]);
    };

    return (
        <div className={styles.listItemContainer}>
            <span>{title}</span>
            <HiDotsVertical
                className={styles.listItemIcon}
                onClick={toggleDropdown}
            />
            {showDropdown && (
                <Dropdown
                    closeDropdown={closeDropdown}
                    showDropdown={showDropdown}
                    ref={ref}
                    lololo={lololo}
                />
            )}
        </div>
    );
}
