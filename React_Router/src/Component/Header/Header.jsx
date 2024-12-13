
import React from 'react'
import { Link,NavLink } from 'react-router-dom'


function Header() {
    return (
        <header className='shadow sticky z-50 top-0'>
            <nav className='bg-blue-500 border-gray-200 px-6 lg:px-6 py-2.5'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                   
                   
                    <Link to="/" className='flex items-center'>
                            <img src="data:image/jpeg;base64,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" 
                            alt="Logo"
                            className='mr-3 h-12' />
                    </Link>


                    <div className='flex items-center lg:order-2'>
                        <Link to="#" className='text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'>Log in</Link>
                        <Link to="#"  className='text-white bg-red-300 hover:bg-red-400 focus-ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none'>Get Started</Link>
                    </div>

                    <div className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1' id='menu'>
                       
                        <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                           
                           <li>
                                <NavLink to="/" className={({isActive})=> `block py-2 pr-4 pl-3 duration-200
                                                                           ${isActive ? "text-red-700" : "text-gray-700"} 
                                                                           border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>

                                            Home
                                </NavLink>
                            </li>

                            <li>
                            <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>

                        </ul>


                    </div>
                </div>
            </nav>
        </header>
    ); 
}

export default Header
