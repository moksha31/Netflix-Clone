import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXJqyuNkCcTFvibRXBSVBMSHEzmpF-bP4",
  authDomain: "react-netflix-clone-b9d5b.firebaseapp.com",
  projectId: "react-netflix-clone-b9d5b",
  storageBucket: "react-netflix-clone-b9d5b.appspot.com",
  messagingSenderId: "413765632036",
  appId: "1:413765632036:web:2b8a1ee9fe41d225b658b1",
  measurementId: "G-7M2FD9H0R1",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
