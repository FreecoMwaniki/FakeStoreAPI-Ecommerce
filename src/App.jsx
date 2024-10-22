import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import RegistrationForm from './pages/Registration'
import LoginForm from './pages/Login'
import Products from './pages/Product'
import Layout from './components/layout/Layout'
import AboutUs from './pages/AboutUs'
import Cart from './pages/Cart'


function App() {
  return (
    <>

<BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/landingpage" element={<LandingPage/>} />
            <Route path="/registration" element={<RegistrationForm/>} />
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/AboutUs" element={<AboutUs/>} />
            <Route path="/cart" element={<Cart/>} />



          </Route>
        </Routes>
      </BrowserRouter>
    
    </>
    
  
  )
}


export default App