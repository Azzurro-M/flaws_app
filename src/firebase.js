import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY , 
  authDomain: process.env.REACT_APP_AUTH_DOMAIN , 
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET ,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERS_ID ,
  appId: process.env.REACT_APP_API_ID
};

console.warn(firebaseConfig);
console.log(process.env);

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default app;
export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword}; 