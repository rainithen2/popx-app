import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome/Welcome.jsx'
import SignIn from './pages/SignIn/SignIn.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import Account from './pages/Account/Account'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/account" element={<Account/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
