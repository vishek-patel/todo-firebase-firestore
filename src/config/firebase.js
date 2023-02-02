
import { initializeApp } from "firebase/app";

//firestore
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTGdmkcVBQu8t9gIbk9yXUanHOxGf589E",
  authDomain: "todoapp-2710c.firebaseapp.com",
  projectId: "todoapp-2710c",
  storageBucket: "todoapp-2710c.appspot.com",
  messagingSenderId: "671674912151",
  appId: "1:671674912151:web:103c7859dfbe957b0588d2",
  measurementId: "G-SW14YRJ6T2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
