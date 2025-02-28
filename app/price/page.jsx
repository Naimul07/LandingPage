import { LuCheck } from "react-icons/lu";
const PricingPlans = () => {
    return (
        <div className='min-h-screen bg-[#F5FFFA] flex flex-col items-center justify-center'>
            <div className='text-center mb-8'>
                <h3 className='bg-[#F9F5FF] p-2 rounded-md text-[#19525A] text-xs inline-block mb-6'>pricing plans</h3>
                <h1 className='text-4xl font-semibold text-[#307D33] mb-2'>Let’s Get Started.</h1>
                <p className='text-4xl font-semibold text-[#307D33] mb-6'>We’ve got a Plan that’s perfect for you.</p>
                <p className='text-[#0089C9] text-sm'>Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
                <div className='mt-6 flex justify-center '>
                    <div className='bg-gray-200 rounded-md px-2'>
                        <button className=' px-6 py-2 border  text-green-800 font-medium'>Monthly</button>
                        <button className='bg-gray-50 px-6 py-1 border rounded-md  text-gray-600 font-medium'>Yearly</button>
                    </div>

                </div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl'>
                {/* Pay As You Go */}
                <div className='flex flex-col items-center justify-between bg-white rounded-lg shadow-xl p-8'>
                    <h2 className='text-xl font-semibold mb-4 text-[#19525A]'>Pay As You Go</h2>
                    <p className='text-4xl font-bold text-[#101828] mb-4'>10%</p>
                    <p className='text-[#475467] font-light text-sm mb-4'>10% from your customer payment</p>
                    <ul className='space-y-2 text-sm text-[#475467] font-light'>
                        <li className='flex items-center gap-2'><LuCheck /> Only pre-paid booking</li>
                        <li className='flex items-center gap-2'><LuCheck /> Both practitioner and Organization</li>
                        <li className='flex items-center gap-2'><LuCheck /> Up to 5 practitioners in organization</li>
                        <li className='flex items-center gap-2'><LuCheck /> 2 staff members are allowed</li>
                        <li className='flex items-center gap-2'><LuCheck /> Basic chat and email support</li>
                    </ul>
                    <button className='mt-6 w-full bg-[#19525A] text-white text-sm py-2 rounded-lg'>Get started</button>
                </div>

                {/* Practitioner */}
                <div className='flex flex-col items-center justify-between bg-white rounded-lg shadow-xl p-8'>
                    <h2 className='text-xl font-semibold mb-4 text-[#19525A]'>Practitioner</h2>
                    <p className='text-4xl font-bold text-[#101828] mb-4'>$49</p>
                    <p className='text-[#475467] font-light text-sm mb-4'>1 practitioner license/monthly</p>
                    <ul className='space-y-2 text-sm text-[#475467] font-light'>
                        <li className='flex items-center gap-2'><LuCheck /> All booking options</li>
                        <li className='flex items-center gap-2'><LuCheck /> All schedule Feature</li>
                        <li className='flex items-center gap-2'> <LuCheck /> Individual single practitioner license</li>
                        <li className='flex items-center gap-2'><LuCheck /> 3 staff members are allowed</li>
                        <li className='flex items-center gap-2'><LuCheck /> Unlimited email marketing</li>
                    </ul>
                    <button className='mt-6 w-full bg-[#19525A] text-white text-sm py-2 rounded-lg'>Get started</button>
                </div>

                {/* Enterprise */}
                <div className='flex flex-col items-center justify-between bg-white rounded-lg shadow-xl p-8'>
                    <h2 className='text-xl font-semibold mb-4 text-[#19525A]'>Enterprise</h2>
                    <p className='text-4xl font-bold text-[#101828] mb-4'>$39</p>
                    <p className='text-[#475467] font-light text-sm mb-4'>Practitioner Number 10</p>
                    <ul className='space-y-2 text-sm text-[#475467] font-light'>
                        <li className='flex items-center gap-2'><LuCheck /> All booking options</li>
                        <li className='flex items-center gap-2'><LuCheck /> Only for Organization</li>
                        <li className='flex items-center gap-2'><LuCheck /> Unlimited practitioners and staff</li>
                        <li className='flex items-center gap-2'><LuCheck /> Customizable 6 page website</li>
                        <li className='flex items-center gap-2'><LuCheck /> E-commerce functionality</li>
                    </ul>
                    <button className='mt-6 w-full bg-[#19525A] text-white text-sm py-2 rounded-lg'>Get started</button>
                </div>
            </div>
        </div>
    );
};

export default PricingPlans;