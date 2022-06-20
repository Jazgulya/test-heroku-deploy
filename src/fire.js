import fire from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUiiyVTNnWarnVbMyeezt1bb_E6GpoaL8",
  authDomain: "react-fire-auth-42fcf.firebaseapp.com",
  projectId: "react-fire-auth-42fcf",
  storageBucket: "react-fire-auth-42fcf.appspot.com",
  messagingSenderId: "875631321502",
  appId: "1:875631321502:web:1a925dd5678bf4ad15768f",
};
export default fire.initializeApp(firebaseConfig);
