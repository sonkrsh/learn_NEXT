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
    signInWithPhoneNumber(authentication, "+919818351953", appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
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
    <Provider store={store}>
      {/* <button
        id="recaptcha-container"
        onClick={() => {
          generateRecaptcha();
          sendOTP();
        }}
      >
        cclicck
      </button> */}

      <Box component="main">
        <Header />
        <Toolbar />
        <Component {...pageProps} />
      </Box>
    </Provider>
  );
};

export default App;
