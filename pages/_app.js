import "@fontsource/solway";
import Layout from "../components/layout";
import "../styles/reset.css";
import "../styles/globals.css";
import { IconContext } from "react-icons";
import { Provider } from "react-redux";
import store from "../reducers/store";

function MyApp({ Component, pageProps }) {
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
