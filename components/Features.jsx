import Image from "next/image";


const Features = () => {

    return (
        <div className="font-normal bg-[#19525A] text-white py-8 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <h4 className="text-sm text-[#FDB022] my-4">features</h4>
                    <h2 className="text-4xl mb-4 font-medium">
                        Solve all your needs with a single software solution
                    </h2>
                    <p className="text-base max-w-3xl mx-auto">
                        This platform streamlines the entire customer management process, saving businesses time and increasing efficiency. Trusted by over 60+ businesses.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-[#25646C] shadow-md rounded-2xl p-6">
                        <div className="flex flex-col gap-6 mb-4">
                            <Image src='/feature/Frame 1000003858.png' alt='logo' height={30} width={230} />
                            <h3 className="text-xl font-semibold">Schedule & Booking</h3>
                        </div>
                        <p className="text-sm text-gray-300">
                            Create, schedule and sync all your bookings and consultations. View or edit them on any device.
                        </p>
                    </div>
                    <div className="bg-[#25646C] shadow-md rounded-2xl p-6">
                        <div className="flex flex-col gap-6 mb-4">
                            <Image src='/feature/Frame 1000003859.png' alt='logo' height={30} width={230} />
                            <h3 className="text-xl font-semibold">Live Consultant</h3>
                        </div>
                        <p className="text-sm text-gray-300">
                            Engage in real-time, one-on-one sessions via video and audio to provide seamless consultations.
                        </p>
                    </div>
                    <div className="bg-[#25646C] shadow-md rounded-2xl p-6">
                        <div className="flex flex-col gap-6 mb-4">
                            <Image src='/feature/Frame 1000003858 (2).png' alt='logo' height={30} width={230} />

                            <h3 className="text-xl font-semibold">Payments</h3>
                        </div>
                        <p className="text-sm text-gray-300">
                            Send payment invoices, take POS and accept online payments from anywhere.
                        </p>
                    </div>
                    <div className="bg-[#25646C] shadow-md rounded-2xl p-6">
                        <div className="flex flex-col gap-6 mb-4">
                            <Image src='/feature/Frame 1000003858 (3).png' alt='logo' height={30} width={230} />

                            <h3 className="text-xl font-semibold">Customer Tracking</h3>
                        </div>
                        <p className="text-sm text-gray-300">
                            Manage customer data, track history, and analyze trends with ease, helping retention and growth.
                        </p>
                    </div>
                    <div className="bg-[#25646C] shadow-md rounded-2xl p-6">
                        <div className="flex flex-col gap-6 mb-4">
                            <Image src='/feature/Frame 1000003858 (4).png' alt='logo' height={30} width={230} />

                            <h3 className="text-xl font-semibold">Notification</h3>
                        </div>
                        <p className="text-sm text-gray-300">
                            Automatically notify your clients and team members about upcoming appointments and any changes.
                        </p>
                    </div>
                    <div className="bg-[#25646C] shadow-md rounded-2xl p-6">
                        <div className="flex flex-col gap-6 mb-4">
                            <Image src='/feature/Frame 1000003858 (5).png' alt='logo' height={30} width={230} />

                            <h3 className="text-xl font-semibold">Website Builder</h3>
                        </div>
                        <p className="text-sm text-gray-300">
                            Offer an intuitive website builder to boost online presence and showcase your business efficiently.
                        </p>
                    </div>
                    <div className="bg-[#25646C] shadow-md rounded-2xl p-6">
                        <div className="flex flex-col gap-6 mb-4">
                            <Image src='/feature/Frame 1000003858 (6).png' alt='logo' height={30} width={230} />

                            <h3 className="text-xl font-semibold">Reports</h3>
                        </div>
                        <p className="text-sm text-gray-300">
                            Generate detailed reports of your financials and customer insights, helping you make data-driven decisions.
                        </p>
                    </div>
                    <div className="bg-[#25646C] shadow-md rounded-2xl p-6">
                        <div className="flex flex-col gap-6 mb-4">
                            <Image src='/feature/Frame 1000003858 (7).png' alt='logo' height={30} width={230} />

                            <h3 className="text-xl font-semibold">Resources</h3>
                        </div>
                        <p className="text-sm text-gray-300">
                            Access to the resources library, including tutorials, webinars, and industry insights to help you grow.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
