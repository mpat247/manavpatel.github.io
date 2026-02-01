import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

console.log('🔥 [Firebase Config] Initializing Firebase...');
console.log('🔥 [Firebase Config] Project ID:', firebaseConfig.projectId);
console.log('🔥 [Firebase Config] Auth Domain:', firebaseConfig.authDomain);
console.log('🔥 [Firebase Config] Has API Key:', !!firebaseConfig.apiKey);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
console.log('🔥 [Firebase Config] Firestore initialized');

// Initialize Auth
export const auth = getAuth(app);
console.log('🔥 [Firebase Config] Auth initialized');

console.log('🔥 [Firebase Config] Firebase setup complete!');

export default app;
