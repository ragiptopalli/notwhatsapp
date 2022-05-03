import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwwDd9lQdVcjUM48g5aAiom2guQEuNwIY",
  authDomain: "notwhatsapp-5336a.firebaseapp.com",
  projectId: "notwhatsapp-5336a",
  storageBucket: "notwhatsapp-5336a.appspot.com",
  messagingSenderId: "196477770084",
  appId: "1:196477770084:web:00c1f393e1bdc5ea8e8271",
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore;
export const auth = app.auth();

export const provider = new GoogleAuthProvider();
