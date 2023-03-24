import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDGI7gQvKk7UUubO_4cgaWTHpZJXgjTwdQ",
  authDomain: "fir-52121.firebaseapp.com",
  projectId: "fir-52121",
  storageBucket: "fir-52121.appspot.com",
  messagingSenderId: "1044702590699",
  appId: "1:1044702590699:web:aca1d1829e793ebc1730ae"
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)

export const database ={
  videos: collection(firestore, "videos")
}