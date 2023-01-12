import React from "react";
import styles from "../styles/Registration.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { BiShow, BiHide } from "react-icons/bi";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../reducers/firebase";

const register = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const PasswordIcon = () => {
        return showPassword ? (
            <BiHide className={styles.passwordIcon} />
        ) : (
            <BiShow className={styles.passwordIcon} />
        );
    };

    return (
        <div className={styles.container}>
            <h1>Register for free!</h1>

            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Required"),
                    password: Yup.string().required("Required"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    signUp(values.email, values.password);
                    console.log("Values: ", values);
                }}
            >
                <Form className={styles.formContainer} noValidate>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>
                            Email
                        </label>
                        <div className={styles.formInputGroup}>
                            <Field
                                type="email"
                                name="email"
                                className={styles.formInput}
                            />
                        </div>
                        <ErrorMessage
                            name="email"
                            className={styles.formErrorMessage}
                            component="span"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password" className={styles.formLabel}>
                            Password
                        </label>
                        <div className={styles.formInputGroup}>
                            <Field
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className={styles.formInput}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <PasswordIcon />
                            </button>
                        </div>
                        <ErrorMessage
                            name="password"
                            className={styles.formErrorMessage}
                            component="span"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <motion.button
                            type="submit"
                            className={styles.submitButton}
                            whileTap={{
                                scale: 0.95,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                            }}
                        >
                            Submit
                        </motion.button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default register;
