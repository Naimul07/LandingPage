'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import { HiBars3 } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from 'react-icons/rx';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    return (
        <div className='py-4 border-b bg-white sticky top-0 z-40'>
            <div className='container mx-auto'>
                <nav className='flex justify-around md:justify-between items-center px-6'>

                    <div className=''>
                        <Link href='/'><Image src="/logo.png" width={200} height={50} layout='responsive' alt="Ambel Logo" /></Link>
                    </div>

                    {/* desktop view  */}
                    <div>
                        <ul className={`hidden md:flex gap-6 text-gray-700 text-sm relative`}>
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
                    </div>

                    {/* mobile view */}
                    {sidebar && (
                        <div className=''>
                            
                            <ul className={`${sidebar ? 'fixed top-0 left-0 w-3/4 h-screen bg-white shadow-md z-50 p-6 space-y-4' : 'hidden'}`}>
                                <div className='relative'>
                                    <li className='absolute top-0 right-0'>
                                    <RxCross2  onClick={()=>setSidebar(!sidebar)}/>
                                    </li>
                                    <li className="cursor-pointer hover:text-blue-600 flex items-center" onClick={() => setIsOpen(!isOpen)}>Features <span><IoIosArrowDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} /></span></li>
                                    {isOpen && (
                                        <ul className=' left-0 top-4  mt-2 w-40 bg-white shadow-md rounded-md p-2 '>
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
                                        <ul className='left-0 top-4  mt-2 w-40 bg-white shadow-md rounded-md p-2'>
                                            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Solution 1</li>
                                            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Solution 2</li>
                                            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Solution 3</li>
                                        </ul>
                                    )}
                                </div>

                                <div className='relative'>
                                    <li className="cursor-pointer hover:text-blue-600 flex items-center" onClick={() => setIsOpen2(!isOpen2)}>Resources <span><IoIosArrowDown className={`transition-transform ${isOpen2 ? 'rotate-180' : ''}`} /></span></li>
                                    {isOpen2 && (
                                        <ul className='left-0 top-4  mt-2 w-40 bg-white shadow-md rounded-md p-2'>
                                            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Resource 1</li>
                                            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Resource 2</li>
                                            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Resource 3</li>
                                        </ul>
                                    )}
                                </div>

                                <li className="cursor-pointer hover:text-blue-600">Find Professionals</li>
                                <li className="cursor-pointer hover:text-blue-600 flex items-center">Help</li>
                            </ul>
                        </div>
                    )}


                    <div className='flex gap-4 items-center text-xs  md:text-[14px]'>
                        <button className='text-gray-700 hover:text-blue-600'><Link href='/login'>Log In</Link> </button>
                        <button className='bg-blue-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-md hover:bg-blue-700 md:text-base'>
                            <Link href='/register'>Register</Link>
                        </button>
                        <div className=' md:hidden' onClick={() => setSidebar(!sidebar)}>
                            <HiBars3 />
                        </div>
                    </div>

                </nav>
            </div>
        </div>
    )
}

export default Navbar
