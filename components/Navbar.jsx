'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';

import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);


    return (
        <div className='py-4 border-b bg-white sticky top-0 z-40'>
            <div className='container mx-auto'>
                <nav className='flex justify-between items-center px-6'>

                    <div className=''>
                        <Link href='/'><Image src="/logo.png" width={150} height={40} alt="Ambel Logo" /></Link>
                    </div>


                    <ul className='hidden lg:flex gap-6 text-gray-700 text-sm relative'>
                        <div className='relative'>
                            <li className="cursor-pointer hover:text-blue-600 flex items-center" onClick={() => setIsOpen(!isOpen)}>Features <span><IoIosArrowDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} /></span></li>
                            {isOpen && (
                                <ul className='absolute left-0 top-4  mt-2 w-40 bg-white shadow-md rounded-md p-2 z-10'>
                                    <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Feature 1</li>
                                    <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Feature 2</li>
                                    <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Feature 3</li>
                                </ul>
                            )}
                        </div>

                        <li className="cursor-pointer hover:text-blue-600"><a href="/price"> Pricing</a></li>
                        <div className='relative'>
                            <li className="cursor-pointer hover:text-blue-600 flex items-center" onClick={() => setIsOpen1(!isOpen1)}>Solutions <span><IoIosArrowDown className={`transition-transform ${isOpen1 ? 'rotate-180' : ''}`} /></span></li>
                            {isOpen1 && (
                                <ul className='absolute left-0 top-4  mt-2 w-40 bg-white shadow-md rounded-md p-2 z-10'>
                                    <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Solution 1</li>
                                    <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Solution 2</li>
                                    <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Solution 3</li>
                                </ul>
                            )}
                        </div>

                        <div className='relative'>
                            <li className="cursor-pointer hover:text-blue-600 flex items-center" onClick={() => setIsOpen2(!isOpen2)}>Resources <span><IoIosArrowDown className={`transition-transform ${isOpen2 ? 'rotate-180' : ''}`} /></span></li>
                            {isOpen2 && (
                                <ul className='absolute left-0 top-4  mt-2 w-40 bg-white shadow-md rounded-md p-2 z-10'>
                                    <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Resource 1</li>
                                    <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Resource 2</li>
                                    <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Resource 3</li>
                                </ul>
                            )}
                        </div>

                        <li className="cursor-pointer hover:text-blue-600">Find Professionals</li>
                        <li className="cursor-pointer hover:text-blue-600 flex items-center">Help</li>
                    </ul>


                    <div className='flex gap-4 items-center text-[14px]'>
                        <button className='text-gray-700 hover:text-blue-600'><Link href='/login'>Log In</Link> </button>
                        <button className='bg-blue-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-md hover:bg-blue-700'>
                            <Link href='/register'>Register</Link>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
