// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCovB7yJ75VzQPzEd0mlXrwaRVRr1t8aOk",
  authDomain: "team-voti-dcd17.firebaseapp.com",
  databaseURL: "https://team-voti-dcd17-default-rtdb.firebaseio.com",
  projectId: "team-voti-dcd17",
  storageBucket: "team-voti-dcd17.appspot.com",
  messagingSenderId: "1049034716198",
  appId: "1:1049034716198:web:6a86c5c04158a2134962e7",
  measurementId: "G-Q66KE4KMM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);