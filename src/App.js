import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Toaster position="top-right"/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Register" element={<Register/>} />
    </Routes>
    </>
  )
}

export default App




/* import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Register from "./pages/Register";
import Home from './pages/Home';


function App() {



  return (
    <>
      <Toaster position="top-right"/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Register" element={<Register/>} />
    </Routes>
    </>
  )
}
export default App; */

/*   <>

    <Toaster position="top-right"/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Register" element={<Register/>} />
    </Routes>
    
    </> */