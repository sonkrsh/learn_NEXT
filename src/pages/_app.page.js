import { wrapper } from "configureStore";

const WrappedApp = ({ Component, pageProps, router }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);
