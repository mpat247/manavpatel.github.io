import { doc, getDoc, updateDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "./config";

const ABOUT_COLLECTION = "about";
const ABOUT_DOC_ID = "main";

export const getAboutData = async () => {
  console.log('🔥 [Firebase] getAboutData() called');
  try {
    const docRef = doc(db, ABOUT_COLLECTION, ABOUT_DOC_ID);
    console.log('🔥 [Firebase] Document reference created:', ABOUT_COLLECTION + "/" + ABOUT_DOC_ID);
    
    const docSnap = await getDoc(docRef);
    console.log('🔥 [Firebase] Document snapshot obtained');
    
    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log('🔥 [Firebase] Document data retrieved:', data);
      return data;
    } else {
      console.log("🔥 [Firebase] No about document found - will use fallback");
      return null;
    }
  } catch (error) {
    console.error("🔥 [Firebase] Error details:", error);
    console.error("🔥 [Firebase] Error code:", error.code);
    console.error("🔥 [Firebase] Error message:", error.message);
    
    if (error.code === 'permission-denied') {
      console.error("🔥 [Firebase] PERMISSION DENIED");
      console.error("🔥 [Firebase] This is expected if Firestore rules aren't set up yet");
      console.error("🔥 [Firebase] The app will use fallback content");
    }
    
    // Don't throw error - let the component handle it gracefully
    return null;
  }
};

export const updateAboutData = async (data) => {
  console.log('🔥 [Firebase] updateAboutData() called with:', data);
  try {
    const docRef = doc(db, ABOUT_COLLECTION, ABOUT_DOC_ID);
    console.log('🔥 [Firebase] Updating document:', ABOUT_COLLECTION + "/" + ABOUT_DOC_ID);
    
    await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
    console.log("🔥 [Firebase] Update successful!");
    return true;
  } catch (error) {
    console.error("🔥 [Firebase] Update error:", error);
    
    if (error.code === 'not-found') {
      console.log("🔥 [Firebase] Document doesn't exist, creating it...");
      try {
        const docRef = doc(db, ABOUT_COLLECTION, ABOUT_DOC_ID);
        await setDoc(docRef, { ...data, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
        console.log("🔥 [Firebase] Document created successfully!");
        return true;
      } catch (createError) {
        console.error("🔥 [Firebase] Create error:", createError);
        throw createError;
      }
    }
    throw error;
  }
};

export const initializeAboutData = async () => {
  console.log('🔥 [Firebase] initializeAboutData() called');
  try {
    const docRef = doc(db, ABOUT_COLLECTION, ABOUT_DOC_ID);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      console.log('🔥 [Firebase] Creating initial about document...');
      const initialData = {
        content: `I'm **Manav Patel**, a recent [**Software Engineering**](https://www.torontomu.ca/calendar/2024-2025/programs/feas/computer_eng/) graduate now pursuing an [**MEng in Artificial Intelligence**](https://www.torontomu.ca/engineering-architectural-science/programs/graduate-programs/electrical-computer-engineering-graduate-programs/) at Toronto Metropolitan University.

I've gained over a year of hands-on experience through internships at [Lockheed Martin](https://www.lockheedmartin.com/en-ca/) and [FGF Brands](https://www.fgfbrands.com/). Currently, I'm a Junior Software Engineer at [Cashly Inc.](https://www.linkedin.com/company/gocashly/)

I'm actively seeking *new-grad/junior/entry-level* opportunities in backend development, machine learning, or data engineering.

Feel free to reach me at [manav1.patel@torontomu.ca](mailto:manav1.patel@torontomu.ca).`,
        isVisible: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };
      
      await setDoc(docRef, initialData);
      console.log('🔥 [Firebase] Initial document created successfully!');
      return initialData;
    } else {
      console.log('🔥 [Firebase] Document already exists');
      return docSnap.data();
    }
  } catch (error) {
    console.error('🔥 [Firebase] Initialize error:', error);
    throw error;
  }
};
