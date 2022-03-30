import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCAJZgslWy4cqgE68mPyaqXaZNEQ1lP7KQ",
  authDomain: "dao-nation-v1-dev.firebaseapp.com",
  projectId: "dao-nation-v1-dev",
  storageBucket: "dao-nation-v1-dev.appspot.com",
  messagingSenderId: "560507226442",
  appId: "1:560507226442:web:c8abf74d5fb2e992d019b3",
  measurementId: "G-B5F0EHLHV4",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

if (location.hostname === "localhost") {
  firebase.firestore().settings({
    host: "http://localhost:8080",
    ssl: false,
  });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
