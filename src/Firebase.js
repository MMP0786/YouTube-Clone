import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAEpdvkhr6EqHTv1_hiOIrUK8lj1hpizz4",
  authDomain: "myproject-37f3a.firebaseapp.com",
  databaseURL: "https://myproject-37f3a-default-rtdb.firebaseio.com",
  projectId: "myproject-37f3a",
  storageBucket: "myproject-37f3a.appspot.com",
  messagingSenderId: "1042079597114",
  appId: "1:1042079597114:web:c816aac826156ef8dbab03"
};
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)

export const database ={
  videos: collection(firestore, "videos")
}