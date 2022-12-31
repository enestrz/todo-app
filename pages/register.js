import React from "react";
import styles from "../styles/Registration.module.css";

const register = () => {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className={styles.container}>
            <h1>Register for free!</h1>

            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                </div>
            </form>
        </div>
    );
};

export default register;
