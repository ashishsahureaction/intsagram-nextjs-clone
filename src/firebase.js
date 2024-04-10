// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-main-e7ec3.firebaseapp.com",
  projectId: "insta-main-e7ec3",
  storageBucket: "insta-main-e7ec3.appspot.com",
  messagingSenderId: "574232443744",
  appId: "1:574232443744:web:1bd87babcc6dbf7ebbbc05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };

// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read; 
//         allow write: if
//         request.resource.size<2 * 1024 * 1024 &&
//         request.resource.contentType.matches('image/.*')
//         ;
//       }
//     }
//   }