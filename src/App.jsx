import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Welcome from './component/Welcome.jsx'
import SignIn from './component/SignIn.jsx'
import SignUp from './component/SignUp.jsx'
import Account from './component/Account.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/account' element={ <Account/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
