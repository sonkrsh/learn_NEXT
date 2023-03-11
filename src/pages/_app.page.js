import { wrapper } from "configureStore";
import { Provider } from "react-redux";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Header from "components/Header/Loadable";

import "styles/global.scss";

const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <Box component="main">
        <Header />
        <Toolbar />
        <Component {...pageProps} />
      </Box>
    </Provider>
  );
};

export default App;
