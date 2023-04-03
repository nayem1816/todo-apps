import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuFXWVOvtelvYZyrWOO65qfzHHoJRxtD0",
  authDomain: "my-todo-nym.firebaseapp.com",
  projectId: "my-todo-nym",
  storageBucket: "my-todo-nym.appspot.com",
  messagingSenderId: "898885920337",
  appId: "1:898885920337:web:4b7f8631e9aefaf9b1ba70",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

// apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
