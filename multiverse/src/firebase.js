import { initializeApp } from 'firebase/app' // no compat for new SDK
import { getDatabase, ref } from 'firebase/database'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDU3S3GFfZT3nVzv_3GfIus5frh9UNrdrQ",
    authDomain: "multiversewebsite-d1ba0.firebaseapp.com",
    databaseURL: "https://multiversewebsite-d1ba0-default-rtdb.firebaseio.com",
    projectId: "multiversewebsite-d1ba0",
    storageBucket: "multiversewebsite-d1ba0.appspot.com",
    messagingSenderId: "1070215788647",
    appId: "1:1070215788647:web:55ad1d55ca82e469a8bcc2",
    measurementId: "G-8HQ8ZXMX2E"
  };

  const app = initializeApp(firebaseConfig)

const database = getDatabase(app)
export const auth=getAuth(app)
export const methods = {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
}
export const todosRef = ref(database, "multiversewebsite")