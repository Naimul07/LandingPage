import Image from 'next/image';
import { CiShare1 } from "react-icons/ci";

const Card = () => {
    const featureData = [
        {
            title: "One brand in one easy-to-use system, across all your locations",
            description: "Give customers a consistent brand experience, online and in person. With one source for all your business information, you'll unify your guest data, business operations, marketing efforts, and more from one login area.",
            imageSrc: "/Card/Multi Branch FF.png",
            bgColor: "bg-[#00B0AD]",
            textColor: "text-white",

        },
        {
            title: "Invite unlimited team members and assign custom roles and permissions",
            description: "This feature enables organizations to efficiently manage team members across one or multiple locations. Roles can be assigned and customized to control access, ensuring that team members only view or edit information and resources relevant to their roles.",
            imageSrc: "/Card/Roles Home.png",
            bgColor: "bg-[#327FF0]",
            textColor: "text-white",

        },
        {
            title: "Securely manage and organize payments: Cash, Debit, Credit",
            description: "Customers can securely pay via online credit, debit card, or in-person POS. Tap to pay and keep all transactions recorded with cash and card payment reports. Stripe, Clover, Square, and PayPal integrations provide comprehensive support for accounting and bookkeeping needs.",
            imageSrc: "/Card/payment Home.png",
            bgColor: "bg-[#0046B0]",
            textColor: "text-white",

        },
        {
            title: "Third party apps Integrations tailored your business",
            description: "Connect tools like Google Meet, Zoom, Loom, Zapier, Zendesk, and WhatsApp to streamline operations. Ambel also integrates with payment gateways such as Stripe, PayPal, Clover, and Square, allowing you to access all features in one convenient platform",
            imageSrc: "/Card/Intrgration Home.png",
            bgColor: "bg-[#D0D5DD]",
            textColor: "text-black",
        },
        {
            title: "Create a free website and start selling your products online",
            description: "With our Online Shop and Inventory Management System, you can easily manage inventory, streamline e-commerce operations, and provide an exceptional shopping experience for your customers. Enjoy full e-commerce functionality to manage products, orders, and inventory seamlessly",
            imageSrc: "/Card/Shopping.png",
            bgColor: "bg-[#FD9F00]",
            textColor: "text-black",
        },
        {
            title: "Boost Sales with Gift Cards, Packages, and Memberships",
            description: "Enhance customer loyalty and increase revenue by offering gift cards for easy gifting, tailored packages that add value, and membership programs that reward repeat purchases. These options attract new customers, encourage larger purchases, and build a loyal customer base.",
            imageSrc: "/Card/Gift card.png",
            bgColor: "bg-[#79A78A]",
            textColor: "text-white",

        },
        {
            title: "Boost Sales with Gift Cards, Packages, and Memberships",
            description: "Enhance customer loyalty and increase revenue by offering gift cards for easy gifting, tailored packages that add value, and membership programs that reward repeat purchases. These options attract new customers, encourage larger purchases, and build a loyal customer base.",
            imageSrc: "/Card/Gift red.png",
            bgColor: "bg-[#E41728]",
            textColor: "text-white",

        },
        {
            title: "Unlimited SMS and Email Reminders, Notifications, and Marketing",
            description: "Stay connected with your customers effortlessly with unlimited SMS and email options. Send reminders for upcoming bookings, real-time notifications, and targeted marketing emails to keep your audience engaged and informed, all without limits. Boost customer satisfaction and retention while promoting your brand effectively via your own business email.",
            imageSrc: "/Card/SMS Home.png",
            bgColor: "bg-[#EFFCFA]",
            textColor: "text-black",
        },
        {
            title: "Boost Sales with Gift Cards, Packages, and Memberships",
            description: "Enhance customer loyalty and increase revenue by offering gift cards for easy gifting, tailored packages that add value, and membership programs that reward repeat purchases. These options attract new customers, encourage larger purchases, and build a loyal customer base.",
            imageSrc: "/Card/Website widget.png",
            bgColor: "bg-[#19525A]",
            textColor: "text-white",

        }
        
    ]
    return (
        <div>
            <div className="max-w-6xl mx-auto mt-10 space-y-10 py-8">
                <div className='relative'>


                    {
                        featureData.map((item) => (
                            <FeatureCard
                                title={item.title}
                                description={item.description}
                                imageSrc={item.imageSrc}
                                bgColor={item.bgColor}
                                textColor={item.textColor}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Card

function FeatureCard({ title, description, imageSrc, bgColor, textColor }) {
    return (
        <div className={`${bgColor} ${textColor} sticky top-24 p-8 rounded-xl flex flex-col md:flex-row items-center justify-center mb-8 shadow-lg`}>
            <div className="md:w-1/2">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-4 text-sm font-normal">{description}</p>
                <div className='flex items-center gap-2 mt-4'>
                    <button className="py-2 underline">Learn more </button>
                    <CiShare1 />
                </div>

            </div>
            <div className="md:w-1/2 flex justify-center">
                <Image src={imageSrc} alt="Feature Image" width={350} height={250} className="rounded-lg" />
            </div>
        </div>
    );
}
