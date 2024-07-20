// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfspeyk_LeYOXWL6SR-0wG508NNJwv-wY",
    authDomain: "cybersecurity-dashboard-a7ff2.firebaseapp.com",
    databaseURL: "https://cybersecurity-dashboard-a7ff2-default-rtdb.firebaseio.com",
    projectId: "cybersecurity-dashboard-a7ff2",
    storageBucket: "cybersecurity-dashboard-a7ff2.appspot.com",
    messagingSenderId: "636832495945",
    appId: "1:636832495945:web:94dd4fa7e09ef694758298",
    measurementId: "G-E17XTHHF9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);