import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYr07vOl6SlZxzJrmZxVJzunMs-BR2Fh8",
  authDomain: "whatsapp-clone-6aadb.firebaseapp.com",
  projectId: "whatsapp-clone-6aadb",
  storageBucket: "whatsapp-clone-6aadb.appspot.com",
  messagingSenderId: "870687249071",
  appId: "1:870687249071:web:482d253f5a1c0ddad47a5a",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
