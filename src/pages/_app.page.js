import { Provider } from "react-redux";
import configureStore from "../configureStore";

export default function App({ Component, pageProps }) {
  const initialState = {};
  const store = configureStore(initialState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
