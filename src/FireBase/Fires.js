import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getMessaging } from "firebase/messaging";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyByuUckWdgyfBGiZPsS8Zm_yQwnB_pGlD0",
  authDomain: "loginauth-e0c6b.firebaseapp.com",
  projectId: "loginauth-e0c6b",
  storageBucket: "loginauth-e0c6b.appspot.com",
  messagingSenderId: "956654077334",
  appId: "1:956654077334:web:a187006ca28c11c32709b7",
  measurementId: "G-Y801B3VREW"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const messaging = getMessaging(app);

export const db = getDatabase(app);






// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyByuUckWdgyfBGiZPsS8Zm_yQwnB_pGlD0",
//   authDomain: "loginauth-e0c6b.firebaseapp.com",
//   projectId: "loginauth-e0c6b",
//   storageBucket: "loginauth-e0c6b.appspot.com",
//   messagingSenderId: "956654077334",
//   appId: "1:956654077334:web:a187006ca28c11c32709b7",
//   measurementId: "G-Y801B3VREW"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);