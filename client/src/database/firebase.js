// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_tlRUGDnOfCtBs-OhfU2aUZPfLtvaMIE",
  authDomain: "vaishnavi-fabrications.firebaseapp.com",
  projectId: "vaishnavi-fabrications",
  storageBucket: "vaishnavi-fabrications.appspot.com",
  messagingSenderId: "34068303742",
  appId: "1:34068303742:web:404b98ead1df38d9832d2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
export { app,auth,storage };