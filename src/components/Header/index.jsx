import React, { useState } from 'react'
import Logo from "../../assets/Logo.png"
import { Link } from 'react-router-dom'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }



    return (
        <>
    <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 md:py-6">
            <div className="flex items-center">
              <a href="/" className="text-xl font-semibold text-gray-800">
                <img src={Logo} alt="" className='h-10'/>
              </a>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
              <Link to="/products" className="text-gray-600 hover:text-gray-800">
                Products
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-800">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-800">
                Contact
              </Link>
              <button onClick={toggleDrawer} className='px-4 py-1 bg-sky-500 text-[#f7f7f7] rounded-md'>Cart</button>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                <i className="fas fa-bars text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-gray-100 py-4">
            <div className="container mx-auto px-4">
            <Link to="/" className="block  text-gray-600 hover:text-gray-800 py-2">
                Home
              </Link>
              <Link to="/products" className="block  text-gray-600 hover:text-gray-800 py-2">
                Products
              </Link>
              <Link to="/about" className="block  text-gray-600 hover:text-gray-800 py-2">
                About Us
              </Link>
              <Link to="/contact" className="block  text-gray-600 hover:text-gray-800 py-2">
                Contact
              </Link>
              
            </div>
          </div>
        )}
    </nav>

    <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
            >
                <div className='w-full h-full p-2'>
                    
                    <div className="cartOne w-full h-[300px] border-2 border-black">
                        <div className="image ">

                        </div>
                    </div>

                </div>
            </Drawer>
    </>


    )
}
