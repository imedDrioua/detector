// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAP1TGnWmoryJmg54hlycU8aGJUsR00z_Y",
    authDomain: "detector-e0f89.firebaseapp.com",
    projectId: "detector-e0f89",
    storageBucket: "detector-e0f89.appspot.com",
    messagingSenderId: "780268472350",
    appId: "1:780268472350:web:ea4ceffc24313e7517c60f",
    measurementId: "G-MJ4S1ZPSL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Gestion de l'authentification
const auth = getAuth();
export const signup_fr = async (email, password) =>
{
    const user =  await createUserWithEmailAndPassword(auth, email, password)
    return user.user

}
export const register =  (email,password) =>
{
    let user = {}
    createUserWithEmailAndPassword(auth, email, password).then(userCredential =>
    {
        user =  userCredential.user
    }).catch(error => console.log(error))
    return user
}
export const sigin_fr =  async (email,password)  => {

  const user =  await signInWithEmailAndPassword(auth, email, password)

   return user.user

}



