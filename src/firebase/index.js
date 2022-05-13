import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

//Firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyB8G_iPnQYV_LK_N4WUq3_90blS8aUGO6o",
  authDomain: "e-commerce-3ec83.firebaseapp.com",
  projectId: "e-commerce-3ec83",
  storageBucket: "e-commerce-3ec83.appspot.com",
  messagingSenderId: "275336867335",
  appId: "1:275336867335:web:e34cc614122bb54fcbc4a2",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
