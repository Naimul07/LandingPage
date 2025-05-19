import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div>
            <section className="flex flex-col items-center text-center py-16 px-4 gap-6">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
                    Looking for a <span className="text-red-600">Business Solution</span>
                    <br />
                    <div className='mt-2'>
                        <span className="text-red-600">for</span> appointments?
                    </div>
                </h1>
                <p className="text-[#667085] font-normal max-w-5xl">
                    Ambel simplifies business management by providing tools for scheduling appointments,
                    managing bookkeeping, accepting payments, sharing resources with customers, sending
                    reminders, and running email marketing campaigns.
                </p>
                <div className='relative'>
                    <div className="flex gap-x-14 text-[14px]">
                        <button className="bg-[#19525A] text-white px-8 py-2 rounded-lg shadow-md hover:bg-gray-900">
                            Start A Free Trial
                        </button>
                        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600">
                            Find Professionals
                        </button>
                    </div>
                    <div className="flex gap-14 font-normal mt-6 text-xs text-green-600 ">
                        <div className="flex items-center py-1 px-1 gap-1 rounded-xl bg-[#ECFDF3]">
                            <span>✔️</span>
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center py-1 px-1 gap-1 rounded bg-[#ECFDF3]">
                            <span>✔️</span>
                            <span>Try one month for free</span>
                        </div>
                    </div>
                    <Image src="/pointer.svg" alt='icon' height={100} width={40} className='absolute -left-16 top-1/2 transform -translate-y-1/2' />
                </div>
            </section>
            <section>
                <div className='flex items-center justify-center'>
                    {/* <Image src='/Hero.jpg' alt='image' height={500} width={850} /> */}

                </div>
            </section>
        </div>
    )
}

export default Hero