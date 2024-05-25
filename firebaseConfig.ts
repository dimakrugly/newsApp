// Import the functions you need from the SDKs you need
import AsyncStorage from '@react-native-async-storage/async-storage';
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAtAu4KYqcaqV9ho3tkZ5mP6_j5It8iu_g',
  authDomain: 'newsapp-37e56.firebaseapp.com',
  databaseURL:
    'https://newsapp-37e56-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'newsapp-37e56',
  storageBucket: 'newsapp-37e56.appspot.com',
  messagingSenderId: '782469428372',
  appId: '1:782469428372:web:c0a093f92dd651e0ceb081',
  measurementId: 'G-KSYG5HWCK0',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});
