import { Link, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import { logout,auth, emailVerification } from '../firebase';
import {logout as logoutHandle} from "../store/auth"
import UpdateProfile from '../components/UpdateProfile';
import { useEffect } from 'react';


const Home = () => {

const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector (state => state.auth)
  const handleLogout = async ()=> {
    await logout()
    dispatch(logoutHandle())
    navigate ("/login", {
      replace:true
    })
  }



const handleVerification = async()=>{
await emailVerification()
}
if (user) {
  return(
    <div className='max-w-2xl mx-auto py-5'>
      <h1 className='flex gap-x-4 items-center'>
        {user.photoURL && <img src={user.photoURL} className='w-12 h-12 rounded-full' />}
        Oturumun açık({user.email})
        <button onClick={handleLogout} className='h-8 rounded px-4 text-sm
         text-white bg-indigo-700'>Çıkış Yap</button> 
         {!user.emailVerified &&  
         <button onClick={handleVerification} className='h-8 rounded px-4 text-sm
         text-white bg-indigo-700'>E-posta Onayla</button> }
         </h1>

<UpdateProfile/>

    </div>
  )
}

  return (
    <div>
    <Link to="/register">Kayıt Ol</Link>
    <Link to="/login">Giriş Yap</Link>
    </div>
  )
}

export default Home
