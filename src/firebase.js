import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERS_ID,
  appId: process.env.REACT_APP_API_ID,
};

console.warn(firebaseConfig);
setTimeout(() => {
  console.log(process.env);
}, 5000);

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
