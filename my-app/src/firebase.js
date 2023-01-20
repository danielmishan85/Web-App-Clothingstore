// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDNh1M6yO357761k_R0tB9JyLuFdrsjx3Q',
  authDomain: 'online-store-auth-tutorial.firebaseapp.com',
  projectId: 'online-store-auth-tutorial',
  storageBucket: 'online-store-auth-tutorial.appspot.com',
  messagingSenderId: '718223286125',
  appId: '1:718223286125:web:2beb61a526af4df9cb4464',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to thr service
export const auth = getAuth(app);
