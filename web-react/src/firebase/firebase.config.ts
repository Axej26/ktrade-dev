// web-react/src/firebase/firebase.config.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyApAxzjobZqbX_LceOS63qAUARNZSZNyf8",
  authDomain: "k-trade-app.firebaseapp.com",
  projectId: "k-trade-app",
  storageBucket: "k-trade-app.firebasestorage.app",
  messagingSenderId: "349462562215",
  appId: "1:349462562215:web:61e501367d5d5b14526282",
  measurementId: "G-QQ1500Y59L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };