import { wrapper } from "configureStore";
import { Provider } from "react-redux";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Header from "components/Header/Loadable";

import "bootstrap/dist/css/bootstrap.css";
import "styles/global.scss";
import authentication from "utils/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Message from "components/Message";

const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
        },
      },
      authentication
    );
  };

  const sendOTP = () => {
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(authentication, "+918696339239", appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("----valueee", confirmationResult);

        // ...
      })
      .catch((error) => {
        console.log("----eroor", error);
      });
  };

  const verifyOTP = () => {
    let confirmationResult = window.confirmationResult;
    confirmationResult.confirm(otp).then((result) => {});
  };

  return (
    // <button
    //   id="recaptcha-container"
    //   onClick={() => {
    //     generateRecaptcha();
    //     sendOTP();
    //   }}
    // >
    //   Click Me
    // </button>
    <Provider store={store}>
      <Box component="main">
        <Header />
        <Toolbar />
        <Component {...pageProps} />
        {/* <div id="snackbar"></div> */}
      </Box>
    </Provider>
  );
};

export default App;
