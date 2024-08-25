
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';

const firebaseConfig = {
  apiKey: "AIzaSyCYHbx-RTnPs7zRtdlTljtlqimtTAKqGBs",
  authDomain: "react-firebase-bdb1d.firebaseapp.com",
  projectId: "react-firebase-bdb1d",
  storageBucket: "react-firebase-bdb1d.appspot.com",
  messagingSenderId: "509073015453",
  appId: "1:509073015453:web:bce4b45bd2819442274a74"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const register = async  (email, password) =>{
  try{
 const {user} = await createUserWithEmailAndPassword (auth, email, password)
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

export default app;