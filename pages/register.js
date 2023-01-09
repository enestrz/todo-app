import React from "react";
import styles from "../styles/Registration.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const register = () => {
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
                    console.log("Values: ", values);
                }}
            >
                <Form className={styles.formContainer} noValidate>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>
                            Email
                        </label>
                        <div>
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
                        <div>
                            <Field
                                type="password"
                                name="password"
                                className={styles.formInput}
                            />
                        </div>
                        <ErrorMessage
                            name="password"
                            className={styles.formErrorMessage}
                            component="span"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <button type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default register;
