import "@fontsource/solway";
import "@fontsource/jost";
import "../styles/reset.css";
import "../styles/globals.css";
import Layout from "../components/layout";
import { IconContext } from "react-icons";
import { Provider } from "react-redux";
import store from "../reducers/store";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../reducers/firebase";

function MyApp({ Component, pageProps }) {
    console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                // console.log("User logged in, " + uid);
            } else {
                // console.log("No user logged in");
            }
        });
    });

    return (
        <Provider store={store}>
            <IconContext.Provider
                value={{ style: { verticalAlign: "middle" } }}
            >
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </IconContext.Provider>
        </Provider>
    );
}

export default MyApp;
