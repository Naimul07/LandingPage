import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowRoundForward } from "react-icons/io";
import Card from './Card';
const categories = ['Doctor', 'Lawyer', 'Therapist', 'Barber', 'Spa', 'Med Spa', 'Psychiatrist', 'Consultancy firm'];

const Apoinment = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-100 rounded-sm">
                {/* Header Section */}
                <div className="py-10 bg-white shadow-md">
                    <h1 className="text-2xl md:text-3xl font-semibold max-w-2xl text-[#344054] mx-auto text-center">Find and Book Appointments with Local and International Professionals</h1>
                    <div className="mt-5 flex flex-col md:flex-row justify-center items-center gap-3">
                        <div className="flex items-center border rounded-full px-4 py-2 w-80 bg-white shadow-sm">
                            <FaSearch className="text-gray-400" />
                            <input type="text" placeholder="Search Doctor, Therapist, Consultant, Spa" className="ml-2 w-full outline-none text-xs placeholder-slate-400" />
                        </div>
                        <div className="flex items-center border rounded-full px-4 py-2 w-64 bg-white shadow-sm">
                            <FaMapMarkerAlt className="text-gray-400" />
                            <input type="text" placeholder="Select your location" className="ml-2 h-4 w-full outline-none text-xs placeholder-slate-400" />
                        </div>
                        <button className="px-3 py-2 bg-[#0D99FF] text-white  text-xs rounded-full">Search</button>
                    </div>

                    <div className="flex flex-col gap-4 mt-4">
                      
                        <div className='flex flex-wrap justify-center gap-2'>
                            {categories.map((cat, index) => (
                                <button key={index} className="px-4 py-1 text-sm rounded-full border bg-white text-gray-700 flex justify-between items-center gap-4">
                                    {cat} <RxCross2 />
                                </button>
                            ))}
                        </div>
                        <div className='capitalize text-sm text-[#0D99FF] flex items-center justify-center gap-2'>
                            explore advance search <IoIosArrowRoundForward />
                        </div>
                    </div>
                </div>

               <Card/>
                
            </div>
        </div>
    )
}

export default Apoinment



