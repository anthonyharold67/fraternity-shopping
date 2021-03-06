import React from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import ResponsiveAppbar from '../components/navbar/Navbar'
import Home from '../pages/Home'
import Login from '../pages/Login'
import About from '../pages/About'
import Products from '../pages/Products'
import Contact from '../pages/Contact'
import Basket from '../pages/Basket'
import Register from '../pages/Register'
import Details from '../pages/Details'
import Footer from '../components/footer/Footer'
import Checkout from '../pages/Checkout'
import PrivateRouter from './PrivateRouter'
import Profile from '../pages/Profile'

const AppRouter = () => {
  return (
    <Router>
        <ResponsiveAppbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/basket" element={<PrivateRouter/>}>
              <Route path="" element={<Basket/>}/>
            </Route>
            <Route path="/profile" element={<PrivateRouter/>}>
              <Route path="" element={<Profile/>}/>
            </Route>
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/checkout" element={<PrivateRouter/>}>
              <Route path="" element={<Checkout/>}/>
            </Route>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default AppRouter;


