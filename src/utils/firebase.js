import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
// const analytics = getAnalytics(app);

export default getAuth(app);
