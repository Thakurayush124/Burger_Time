import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD8kLrWgQAuMd3mvQdViSK1_3_Ka7v-mLo",
  authDomain: "login-form-3f222.firebaseapp.com",
  projectId: "login-form-3f222",
  storageBucket: "login-form-3f222.appspot.com",
  messagingSenderId: "422152153019",
  appId: "1:422152153019:web:f3bf945fa9f7510a72069e",
  measurementId: "G-W60C6PRDY7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup };
