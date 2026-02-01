# Firebase Setup Instructions

## 🚨 REQUIRED: Set up Firestore Security Rules

1. **Go to Firebase Console**: https://console.firebase.google.com/
2. **Select your project**: `portfoliosite-8f097`
3. **Navigate to**: Firestore Database → Rules tab
4. **Replace the existing rules with this**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read access to about collection
    match /about/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Deny all other access
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

5. **Click "Publish"** to save the rules

## 🔐 REQUIRED: Enable Authentication

1. **Go to**: Authentication → Sign-in method
2. **Enable**: Email/Password provider
3. **Click**: Save

## 👤 REQUIRED: Add Admin User

1. **Go to**: Authentication → Users
2. **Click**: Add user
3. **Enter your email and password**
4. **Click**: Add user

## 📄 OPTIONAL: Create Initial Document

If you want to pre-populate data:

1. **Go to**: Firestore Database → Data tab
2. **Click**: + Start collection
3. **Collection ID**: `about`
4. **Document ID**: `main`
5. **Add fields**:
   - `content` (string): Your about text
   - `isVisible` (boolean): `true`
6. **Click**: Save

---

After completing steps 1-3, your app will work without Firebase errors!

The public site will show fallback content if Firebase isn't set up yet.
The admin panel will require the authentication you set up.
