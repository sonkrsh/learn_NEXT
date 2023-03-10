import { wrapper } from "configureStore";
import { Provider } from "react-redux";

import Header from "components/Header/Loadable";
import "styles/global.scss";

const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
