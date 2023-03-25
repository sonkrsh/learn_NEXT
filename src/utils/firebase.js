import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpjutOKsSfQWDuU3Eyb7CtVdITeeajL5o",
  authDomain: "automobilecrunch-67442.firebaseapp.com",
  projectId: "automobilecrunch-67442",
  storageBucket: "automobilecrunch-67442.appspot.com",
  messagingSenderId: "593051352412",
  appId: "1:593051352412:web:6b3be645379745c6969599",
  measurementId: "G-N0NCG9TDEV",
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
export default authentication;

export const generateRecaptcha = () => {
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

export const sendOTP = async (contactNo, otpSendSuccess, otpSendFail) => {
  let appVerifier = window.recaptchaVerifier;

  return new Promise((resolve, reject) => {
    signInWithPhoneNumber(authentication, `+91${contactNo}-`, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        resolve(confirmationResult);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const verifyOTP = (recievedOTP) => {
  let confirmationResult = window.confirmationResult;
  return new Promise((resolve, reject) => {
    return confirmationResult
      .confirm(recievedOTP)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
