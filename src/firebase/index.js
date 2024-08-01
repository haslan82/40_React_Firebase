
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  updateProfile,
  updatePassword, 
  sendEmailVerification, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";


import toast from 'react-hot-toast';
import {logout as logoutHandle} from "../store/auth"
import {login as loginHandle} from "../store/auth"
import {store} from "../store"

const firebaseConfig = {
  apiKey: "AIzaSyCYHbx-RTnPs7zRtdlTljtlqimtTAKqGBs",
  authDomain: "react-firebase-bdb1d.firebaseapp.com",
  projectId: "react-firebase-bdb1d",
  storageBucket: "react-firebase-bdb1d.appspot.com",
  messagingSenderId: "509073015453",
  appId: "1:509073015453:web:bce4b45bd2819442274a74"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const register = async  (email, password) =>{
  try{
 const {user} = await createUserWithEmailAndPassword (
  auth, 
  email, 
  password
);
 return user
} catch(error){
  toast.error(error.message)
}
}

export const login = async (email, password)=>{
  try{
    const{user} = await signInWithEmailAndPassword(auth, email, password)
    return user
  }catch(error){
    toast.error(error.message)
  }
}

export const logout = async () => {
  try{
await signOut(auth)
return true
  }catch(error){
    toast.error(error.message)
  }
}

export const update = async data => {
  try{
    await updateProfile (auth.currentUser, data)
    toast.success("Profil güncellendi")
    return true
  }catch(error){
    toast.error(error.message)
  }
}
export const resetPassword = async password => {
  try{
    await updatePassword(auth.currentUser, password)
    toast.success("Parolanız güncellendi")
    return true
  }catch(error){
    toast.error(error.message)
  }
}
export const emailVerification = async()=> {
  try{
    await sendEmailVerification(auth.currentUser)
    toast.success(`Doğrulama maili ${auth.currentUser.email} adresine gönderildi, lütfen kontrol edin!`)
  }catch(error){
    toast.error(error.message)
  }
}
onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(loginHandle({
      displayName:user.displayName,
      email:user.email,
      emailVerified: user.emailVerified,
      photoURL:user.photoURL,
      uid:user.uid
    }))
    
    
  } else {
   store.dispatch(logoutHandle())
  }
});

export default app;