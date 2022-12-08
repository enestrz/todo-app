import Head from "next/head";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { MdAdd } from "react-icons/md";

// Hello world
export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.container}>
                
            </main>
        </>
    );
}
