// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW652YZkgG-DdxjJ-OIaEvIb0v-NUMfsA",
  authDomain: "portfollio-aaf93.firebaseapp.com",
  projectId: "portfollio-aaf93",
  storageBucket: "portfollio-aaf93.appspot.com",
  messagingSenderId: "1012787701179",
  appId: "1:1012787701179:web:d3281868220611872f909e",
  measurementId: "G-SCWNB18LNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Log page view event
logEvent(analytics, 'page_view');

export { app, analytics, logEvent };
