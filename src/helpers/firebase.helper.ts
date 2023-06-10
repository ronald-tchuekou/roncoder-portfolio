import {initializeApp} from "firebase/app";
import {getAnalytics, logEvent} from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAINE,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

console.log(firebaseConfig)

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const fireAnalytics = getAnalytics(fireApp);
const fireFirestore = getFirestore(fireApp)

logEvent(fireAnalytics, 'notification_received');

export {
    fireApp,
    fireAnalytics,
    fireFirestore
}
