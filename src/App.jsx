import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"
import Products from './pages/Products'
import Header from './components/Header'
import Footer from './components/Footer'
import SingleProduct from './pages/SingleProduct'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"   element={<Home />} />
        <Route path="/products"   element={<Products />} />
        <Route path="/products/:id"   element={<SingleProduct />} />
        <Route path="/about"   element={<About />} />
        <Route path='/services' element={<Services />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
