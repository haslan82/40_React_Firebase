import { update,resetPassword, auth } from "../firebase";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { login } from "../store/auth";




const UpdateProfile = () => {

  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [avatar, setAvatar] = useState(user.photoURL || "");
const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();
    await update({
      displayName, 
      photoURL:avatar
    });

   dispatch(login({
    displayName:auth.currentUser.displayName,
      email:auth.currentUser.email,
      emailVerified: auth.currentUser.emailVerified,
      photoURL:auth.currentUser.photoURL,
      uid:auth.currentUser.uid
   }));

  };

  const handleResetSubmit=async e=>{
    e.preventDefault()
    const result = await resetPassword(password)
    if(result){
     setPassword("")   
    }
    
  }

  return (
    <div className="grid gap-y-10">
    <form onSubmit={handleSubmit} className="grid gap-y-4">
      <h1 className="text-xl font-bold mb-4">Profili Güncelle</h1>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Ad Soyad
        </label>
        <div className="mt-1">
          <input
            type="text"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="isminiz..."
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
      </div>


      <div>
        <label className="block text-sm font-medium text-gray-700">
          Fotoğraf
        </label>
        <div className="mt-1">
          <input
            type="text"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder=""
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button
          className="inline-flex  disabled:opacity-40 cursor-pointer items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 disabled:opacity-20 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus: ring-indigo-500  "
          type="submit"
        >
          Güncelle
        </button>
      </div>
    </form>


    <form onSubmit={handleResetSubmit} className="grid gap-y-4">
      <h1 className="text-xl font-bold mb-4">Parolayı Güncelle</h1>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Parola
        </label>
        <div className="mt-1">
          <input
            type="password"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Yeni parolanızı girin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      
      <div>
        <button disabled={!password}
          className="inline-flex  disabled:opacity-40 cursor-pointer items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 disabled:opacity-20 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus: ring-indigo-500  "
          type="submit"
        >
          Şifreyi Güncelle
        </button>
      </div>
    </form>

    </div>
  );
};

export default UpdateProfile;
