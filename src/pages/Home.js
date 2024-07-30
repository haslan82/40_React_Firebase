import { Link, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import { logout } from '../firebase';
import {logout as logoutHandle} from "../store/auth"


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

if (user) {
  return(
    <div className='max-w-xl mx-auto py-5'>
      <h1 className='flex gap-x-4 items-center'>Oturumun açık({user.email})
        <button onClick={handleLogout} className='h-8 rounded px-4 text-sm text-white bg-indigo-700'>Çıkış Yap</button> </h1>
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
