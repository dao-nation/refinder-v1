import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const getFirebaseConfig = () => {
  let firebaseConfig = {
    apiKey: 'AIzaSyDQRXMeNB-XY9Z4qe0jhUSUnLdofZFlRdc',
    authDomain: 'dao-nation-prod.firebaseapp.com',
    projectId: 'dao-nation-prod',
    storageBucket: 'dao-nation-prod.appspot.com',
    messagingSenderId: '761695380079',
    appId: '1:761695380079:web:514e210f2f30d0ae38639a',
    measurementId: 'G-F3YRM4G5QL',
  };
  if (firebaseConfig) {
    // dev config
    // firebaseConfig = {
    //   apiKey: 'AIzaSyCAJZgslWy4cqgE68mPyaqXaZNEQ1lP7KQ',
    //   authDomain: 'dao-nation-v1-dev.firebaseapp.com',
    //   projectId: 'dao-nation-v1-dev',
    //   storageBucket: 'dao-nation-v1-dev.appspot.com',
    //   messagingSenderId: '560507226442',
    //   appId: '1:560507226442:web:c8abf74d5fb2e992d019b3',
    //   measurementId: 'G-B5F0EHLHV4',
    // };
  } else {
    // firebaseConfig = {
    //   apiKey: 'AIzaSyDQRXMeNB-XY9Z4qe0jhUSUnLdofZFlRdc',
    //   authDomain: 'dao-nation-prod.firebaseapp.com',
    //   projectId: 'dao-nation-prod',
    //   storageBucket: 'dao-nation-prod.appspot.com',
    //   messagingSenderId: '761695380079',
    //   appId: '1:761695380079:web:514e210f2f30d0ae38639a',
    //   measurementId: 'G-F3YRM4G5QL',
    // };
  }
  return firebaseConfig;
};

const firebaseConfig = getFirebaseConfig();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// if (location.hostname === 'localhost') {
//   firebase.firestore().settings({
//     //     host: "http://localhost:8080",
//     ssl: false,
//   });
// }

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const fromMillis = firebase.firestore.Timestamp.fromMillis;

// export function postToJSON(doc: firebase.firestore.DocumentSnapshot) {
//   const data = doc.data();
//   return {
//     ...data,
//   };
// }

export function projectURLParser(url: string) {
  console.log('URLL', url);
  const urlArr = url.split('/');
  const projectURL = urlArr[urlArr.length - 1];
  return projectURL.split('%20').join(' ');
}
