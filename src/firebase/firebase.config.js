// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAofQUwPWrEUKeX0WMB6MMngbtwy1GfGpk",
  authDomain: "auth-firebase-tailwind-c-9abe3.firebaseapp.com",
  projectId: "auth-firebase-tailwind-c-9abe3",
  storageBucket: "auth-firebase-tailwind-c-9abe3.appspot.com",
  messagingSenderId: "262035726589",
  appId: "1:262035726589:web:f678e35d3626d912951e94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;