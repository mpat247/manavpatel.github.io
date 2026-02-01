// Firebase Connection Diagnostic Tool
import { auth, db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

export const checkFirebaseConnection = async () => {
  console.log('🔍 [Firebase Check] Starting diagnostic...');
  
  // Check environment variables
  console.log('📋 [Firebase Check] Environment variables:');
  console.log('  - API Key:', import.meta.env.VITE_FIREBASE_API_KEY ? '✅ Present' : '❌ Missing');
  console.log('  - Auth Domain:', import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ? '✅ Present' : '❌ Missing');
  console.log('  - Project ID:', import.meta.env.VITE_FIREBASE_PROJECT_ID ? '✅ Present' : '❌ Missing');
  console.log('  - Storage Bucket:', import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ? '✅ Present' : '❌ Missing');
  console.log('  - Messaging Sender ID:', import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ? '✅ Present' : '❌ Missing');
  console.log('  - App ID:', import.meta.env.VITE_FIREBASE_APP_ID ? '✅ Present' : '❌ Missing');
  
  // Check Auth service
  console.log('🔐 [Firebase Check] Auth service:');
  try {
    console.log('  - Auth object:', auth ? '✅ Initialized' : '❌ Failed');
    console.log('  - Current user:', auth.currentUser ? '✅ Logged in' : '⚪ Not logged in');
  } catch (error) {
    console.error('  - Auth error:', error);
  }
  
  // Check Firestore service  
  console.log('💾 [Firebase Check] Firestore service:');
  try {
    console.log('  - DB object:', db ? '✅ Initialized' : '❌ Failed');
    
    // Try to read a test document
    const testDoc = doc(db, 'test', 'connection');
    const testSnap = await getDoc(testDoc);
    console.log('  - Connection test:', testSnap ? '✅ Connected' : '❌ Failed');
  } catch (error) {
    console.error('  - Firestore error:', error.code, ':', error.message);
    if (error.code === 'permission-denied') {
      console.log('  - 💡 This might be normal - check your Firestore rules');
    }
  }
  
  console.log('🔍 [Firebase Check] Diagnostic complete!');
  console.log('');
  console.log('🚨 [Firebase Check] Next Steps:');
  console.log('1. Go to Firebase Console: https://console.firebase.google.com/');
  console.log('2. Select your project: portfoliosite-8f097');
  console.log('3. Enable Authentication > Sign-in method > Email/Password');
  console.log('4. Set Firestore Rules to allow public read access');
  console.log('5. Create an admin user in Authentication > Users');
};
