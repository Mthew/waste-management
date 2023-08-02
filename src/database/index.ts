import { initializeApp } from "firebase/app";

import { FIREBASE_CONFIG } from "@/utils";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG);
const db = getFirestore(app);

export { db };
