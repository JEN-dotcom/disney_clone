import { initializeApp} from 'firebase/app';
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/storage';


// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

const firebaseConfig = {
  apiKey: "AIzaSyACnm0GxdnezgJRB1w_y9qetZT061BCLxk",
  authDomain: "disney-clone-bde13.firebaseapp.com",
  projectId: "disney-clone-bde13",
  storageBucket: "disney-clone-bde13.appspot.com",
  messagingSenderId: "691983447381",
  appId: "1:691983447381:web:12c71bafa6afa723452bdc"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
export default db;
