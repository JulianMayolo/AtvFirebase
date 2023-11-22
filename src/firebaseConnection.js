import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAWQZa8-nzkv9ugEtS1dFtrWgBImX9P1iE",
  authDomain: "projtask-76bce.firebaseapp.com",
  databaseURL: "https://projtask-76bce-default-rtdb.firebaseio.com",
  projectId: "projtask-76bce",
  storageBucket: "projtask-76bce.appspot.com",
  messagingSenderId: "419945480317",
  appId: "1:419945480317:web:35ef509937fafd1dcf7114",
  measurementId: "G-B77Z82E1KR"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db, app };