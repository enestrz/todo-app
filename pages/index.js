import Head from "next/head";
import styles from "../styles/Home.module.css";

// Hello world
export default function Home() {
    return (
        <>
            <Head>
                <title>Breath App - Modern way to take note</title>
                <meta name="description" content="Breath. Note taking app." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.container}>This is main content</main>
        </>
    );
}
