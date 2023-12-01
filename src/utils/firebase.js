// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogappnextjs-406117.firebaseapp.com",
  projectId: "blogappnextjs-406117",
  storageBucket: "blogappnextjs-406117.appspot.com",
  messagingSenderId: "586784083267",
  appId: "1:586784083267:web:485389229db8682566f3f6",
  measurementId: "G-TT78VRLK70",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
