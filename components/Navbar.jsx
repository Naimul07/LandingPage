import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
    return (
        <div className='py-4 border-b bg-white sticky top-0 z-40'>
            <div className='container mx-auto'>
                <nav className='flex justify-between items-center px-6'>

                    <div className=''>
                        <Image src="/logo.png" width={150} height={40} alt="Ambel Logo" />
                    </div>


                    <ul className='flex gap-6 text-gray-700 text-sm'>
                        <li className="cursor-pointer hover:text-blue-600 flex items-center">Features <span><IoIosArrowDown /></span></li>
                        <li className="cursor-pointer hover:text-blue-600"><a href="/price"> Pricing</a></li>
                        <li className="cursor-pointer hover:text-blue-600 flex items-center">Solutions <span><IoIosArrowDown /></span></li>
                        <li className="cursor-pointer hover:text-blue-600 flex items-center">Resources <span><IoIosArrowDown /></span></li>
                        <li className="cursor-pointer hover:text-blue-600">Find Professionals</li>
                        <li className="cursor-pointer hover:text-blue-600 flex items-center">Help <span><IoIosArrowDown /></span></li>
                    </ul>


                    <div className='flex gap-4 items-center text-[14px]'>
                        <button className='text-gray-700 hover:text-blue-600'>Log In</button>
                        <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'>
                            Sign Up
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
