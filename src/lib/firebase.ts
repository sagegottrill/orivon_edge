import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBjic-UvhFIvnIXTeGQ3X5TYpZCN2YbHzU",
    authDomain: "orivon-edge.firebaseapp.com",
    projectId: "orivon-edge",
    storageBucket: "orivon-edge.firebasestorage.app",
    messagingSenderId: "144539070716",
    appId: "1:144539070716:web:d0dc36f7b49c476b8de779"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
