import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBd31AO26FF4sT6XY0MVMspihBoIujAOeY",
  authDomain: "react-loveflix.firebaseapp.com",
  projectId: "react-loveflix",
  storageBucket: "react-loveflix.appspot.com",
  messagingSenderId: "105562514171",
  appId: "1:105562514171:web:99fc8606e7a1726a18c65e",
  measurementId: "G-CKQD2WB6VK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);