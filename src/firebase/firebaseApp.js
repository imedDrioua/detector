// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,doc ,setDoc, Timestamp,getDoc } from "firebase/firestore";

import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile ,sendEmailVerification,signOut} from "firebase/auth";
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
export const signup_fr = async (email, password,pseudo) =>
{
    const user =  await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(auth.currentUser, {
        displayName: pseudo, photoURL: ""
    })
    return user.user
}

export const sigin_fr =  async (email,password)  => {
  const user =  await signInWithEmailAndPassword(auth, email, password)
   return user.user
}

const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://google.com',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
        bundleId: 'com.example.ios'
    },
    android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
    },
    dynamicLinkDomain: 'https://www.google.com'
};
export const check_mail= async ()=>{
    return  sendEmailVerification(auth.currentUser)
}

export const signout=async (dispatch)=>{
    await signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
    dispatch({
        type : "ADD_USER",
        payload :null
    });
    dispatch({
        type : "AUTH_USER",
        payload : false
    })
    dispatch({
        type :"SET_BACKGROUND",
        payload : null
    })
}

/////// Fire store
const db = getFirestore(app)

export const createUserProfile = async (nom , prenom, date, refrence,telephone )=>{
    const doc_ref = doc(db,"users",refrence)
    const profile = {
        fname : nom,
        lname :prenom,
        date : Timestamp.fromDate(date),
        phone : telephone,
        sessions: 0

    }
    await setDoc(doc_ref,profile)
    return profile
}

export const getProfile = async (uid)=>{
    const docRef = doc(db,"users",uid)
    const snaphot = await getDoc(docRef)

    if(snaphot.exists()){
        return  snaphot.data()
    }else{
        return null
    }
}







