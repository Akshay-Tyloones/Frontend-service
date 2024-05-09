import HomePage from './components/HomePage'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import VerifyEmail from './pages/VerifyEmail';
import { useState } from 'react';
import Profile from './pages/Profile';


function App() {
 const [pass, setPass] = useState("")
 const [emailaddress, setEmailaddress] = useState("")



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<HomePage emailaddress={emailaddress} />} />
          <Route path='/' element={<SignUp setPass={setPass} setEmailaddress={setEmailaddress} />} />
          <Route path='/signin' element={<SignIn setEmailaddress={setEmailaddress} />} />
          <Route path='/verify-email' element={<VerifyEmail pass={pass} emailaddress={emailaddress} />}/>
          <Route path='/profile' element={<Profile emailaddress={emailaddress}/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
