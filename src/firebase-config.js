// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "@firebase/firestore"
import { getStorage } from "firebase/storage"
import ToolDetails from "./pages/ToolDetails"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)

export async function getToolById(toolId) {
  const docRef = doc(db, "tools", toolId)
  const docSnap = await getDoc(docRef)
  return docSnap.data()
}

export async function getToolsByCategory(category, currentToolId) {
  const customQuery = query(
    collection(db, "tools"),
    where("category", "array-contains", category),
  )

  const querySnapshot = await getDocs(customQuery)
  const allSimilarCategory = querySnapshot.docs.map((doc) => {
    if (doc.id != currentToolId) return doc.data()
  })

  const uniqueSimilarCategory = allSimilarCategory.filter(
    (element) => element != null,
  )

  return uniqueSimilarCategory
}
