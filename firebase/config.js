// import { initializeApp } from "firebase/app";
// import "firebase/firestore";

// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6FfDwkw490eiExN84DubvsUFW72f-if0",
  authDomain: "rn-hw-5.firebaseapp.com",
  projectId: "rn-hw-5",
  storageBucket: "rn-hw-5.appspot.com",
  messagingSenderId: "203098550240",
  appId: "1:203098550240:web:e2f60daf184134a9c6c585",
  measurementId: "G-0BKT6Q9J8C",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
