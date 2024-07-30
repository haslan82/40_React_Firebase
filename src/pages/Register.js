import { useState } from "react";
import { register } from "../firebase";

const Register = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault()
    
    const user = await register(email, password)
    console.log(user)
    }
  
    return (
      <form className="max-w-xl mx-auto grid gap-y-4 py-4" onSubmit={handleSubmit}>
        <div>
          <label 
      
            className="block text-sm font-medium text-gray-700"
          >
            E-posta
          </label>
          <div className="mt-1">
            <input
              type="email"
             
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="you@example.com"
              value={email} onChange={e=> setEmail(e.target.value)}
            />
          </div>
        </div>
  
  
        <div>
          <label
          
            className="block text-sm font-medium text-gray-700"
          >
            Parola
          </label>
          <div className="mt-1">
            <input
              type="password"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded border-gray-200 "
              placeholder="*****"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
  
      
        <div>
        <button disabled={!email || !password}
        className="inline-flex  disabled:opacity-40 cursor-pointer items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 disabled:opacity-20 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus: ring-indigo-500  "
        type="submit">
          Kayıt Ol
        </button>
        </div>
      </form>
    );
}

export default Register


/* 
<input className="rounded"
type="text"
placeholder="E-posta Adresi"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
<div className="mt-1">
<input className="rounded"
type="password"
placeholder="Parola"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
</div> */

/* import { useState } from "react";
import { register } from "../firebase";



export default function Register(){
  
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleSubmit = async e => {
e.preventDefault()

const user = await register(email, password)
console.log(user)
}

  return(
    <form onSubmit={handleSubmit}> 
        <input type="text" placeholder="E-posta adresi" value={email} onChange={e=> setEmail(e.target.value)} />
        <input type="password" placeholder="Parola" value={password} onChange={e=> setPassword(e.target.value)} />
        <button disabled={!email || !password} type="submit">Kayıt OL</button>

      </form>
  )
} */

/* 
import { useState } from "react";


export default function Login(){}

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleSubmit = async e => {
    e.preventDefault()""
    const user = await Register(email, password)
}

const Register = () => {
  return (
    <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
      <div>
        <label 
    
          className="block text-sm font-medium text-gray-700"
        >
          E-posta
        </label>
        <div className="mt-1">
          <input
            type="email"
           
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="e-mailinizi giriniz..."
            value={email} onChange={e=> setEmail(e.target.value)}
          />
        </div>
      </div>


      <div>
        <label
        
          className="block text-sm font-medium text-gray-700"
        >
          Parola
        </label>
        <div className="mt-1">
          <input
            type="password"
            
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-200 "
            placeholder="e-mailinizi giriniz..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>



      <input
        type="text"
        placeholder="E-posta Adresi"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Parola"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={!email || !password}
      className="inline-flex cursor-pointer items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 disabled:opacity-20 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus: ring-indigo-500  "
      type="submit">
        Kayıt Ol
      </button>
    </form>
  );
};

export default Register;
 */