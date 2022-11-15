import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY ,
  authDomain: process.env.AUTH_DOMAIN ,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET ,
  messagingSenderId: process.env.MESSAGING_SENDERS_ID ,
  appId: process.env.API_ID
};

console.warn(firebaseConfig);
setTimeout(() => {console.log(process.env)
}, 5000);

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);