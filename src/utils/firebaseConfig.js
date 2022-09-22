// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, where } from "firebase/firestore";
import { collection, getDocs, query } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvgYPlnaxJd5J7BcOcu23g4BoCFz8IzkI",
  authDomain: "react-coder-techhouse.firebaseapp.com",
  projectId: "react-coder-techhouse",
  storageBucket: "react-coder-techhouse.appspot.com",
  messagingSenderId: "429588316952",
  appId: "1:429588316952:web:edb8d04f29b4e04f2cd46d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const firestoreFetch = async (id) => {
    let q;
    if (id) {
        q = query(collection(db, "products"), where('categoryId', '==', id));
    } else {
        q = query(collection(db, "products"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    return dataFromFirestore
}

export const oneItemFetch = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return {id: docSnap.id, ...docSnap.data()};
    } else {
        
    }   
}