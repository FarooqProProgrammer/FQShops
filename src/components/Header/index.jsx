import React from 'react'
import Logo from "../../assets/Logo.png"
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={Logo} className='w-[104px]' alt=''/>
                    <span className="ml-3 text-xl">FQShop</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to=""  className="mr-5 hover:text-gray-900">Home</Link>
                    <Link to="/products" className="mr-5 hover:text-gray-900">products</Link>
                    <Link to="" className="mr-5 hover:text-gray-900">About</Link>
                    <Link to="" className="mr-5 hover:text-gray-900">Services</Link>
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Login
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </header>

    )
}
