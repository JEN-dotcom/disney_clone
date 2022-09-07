import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "disney-clone-bde13.firebaseapp.com",
  projectId: "disney-clone-bde13",
  storageBucket: "disney-clone-bde13.appspot.com",
  messagingSenderId: "691983447381",
  appId: "1:691983447381:web:12c71bafa6afa723452bdc"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
