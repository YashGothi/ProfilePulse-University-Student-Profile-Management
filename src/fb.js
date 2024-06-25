// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACeeqver5DyFaJRylgB6eB5zhtHrqE0e0",
  authDomain: "authenticateapp-778fc.firebaseapp.com",
  projectId: "authenticateapp-778fc",
  storageBucket: "authenticateapp-778fc.appspot.com",
  messagingSenderId: "260813457271",
  appId: "1:260813457271:web:a898a457e4720b86ff4372"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
export default db;
