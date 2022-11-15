import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY ,
  authDomain: process.env.AUTO_DOMAIN ,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET ,
  messagingSenderId: process.env.MESSAGING_SENDERS_ID ,
  appId: process.env.API_ID
};

const app = initializeApp(firebaseConfig);