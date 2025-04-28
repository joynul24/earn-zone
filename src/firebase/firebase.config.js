import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCjx8irjm9ptFUquoEE7YI_jsJAtxkK_ao",
//   authDomain: "earn-zone-956a5.firebaseapp.com",
//   projectId: "earn-zone-956a5",
//   storageBucket: "earn-zone-956a5.firebasestorage.app",
//   messagingSenderId: "824181299832",
//   appId: "1:824181299832:web:7e3be4fca1fb96886feb8d"
// };

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;