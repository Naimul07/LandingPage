import { FaTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-teal-800 text-white p-4 md:py-10 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
                <div>
                    <h3 className="text-lg font-semibold border-b-2 py-1 border-white inline-block mb-4">For Customers</h3>
                    <ul className="font-light">
                        <li className='mb-1'><a href="#">Find a Practitioner</a></li>
                        <li className='mb-1'><a href="#">Book an Appointment</a></li>
                        <li className='mb-1'><a href="#">Make Payment</a></li>
                        <li className='mb-1'><a href="#">Live Consultant</a></li>
                        <li className='mb-1'><a href="#">Refund</a></li>
                        <li className='mb-1'><a href="#">Shop</a></li>
                        <li className='mb-1'><a href="#">Resources</a></li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <h3 className="inline-block text-lg font-semibold border-b-2 py-1 border-white  mb-4">For Practitioners</h3>
                    <ul>
                        <li className='mb-1'><a href="#">Profile Setup</a></li>
                        <li className='mb-1'><a href="#">Organization Setup</a></li>
                        <li className='mb-1'><a href="#">Create Schedule</a></li>
                        <li className='mb-1'><a href="#">Collaboration</a></li>
                        <li className='mb-1'><a href="#">Withdraw</a></li>
                        <li className='mb-1'><a href="#">Pay Staff</a></li>
                        <li className='mb-1'><a href="#">QR Code</a></li>
                        <li className='mb-1'><a href="#">Booking Page</a></li>
                        <li className='mb-1'><a href="#">Business Tools</a></li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <h3 className="inline-block text-lg font-semibold border-b-2 py-1 border-white mb-4">Resources</h3>
                    <ul>
                        <li className='mb-1'><a href="#">Plans</a></li>
                        <li className='mb-1'><a href="#">Blog</a></li>
                        <li className='mb-1'><a href="#">Community</a></li>
                        <li className='mb-1'> <a href="#">FAQ</a></li>
                        <li className='mb-1'><a href="#">Reviews</a></li>
                        <li className='mb-1'><a href="#">Refund & Return</a></li>
                        <li className='mb-1'><a href="#">Documentations</a></li>
                        <li className='mb-1'><a href="#">Road Map</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold border-b-2 py-1 border-white mb-4 inline-block">Company</h3>
                    <ul>
                        <li className='mb-1'><a href="#">About Us</a></li>
                        <li className='mb-1'><a href="#">Contact Us</a></li>
                        <li className='mb-1'><a href="#">Career</a></li>
                        <li className='mb-1'><a href="#">Support Center</a></li>
                        <li className='mb-1'><a href="#">Affiliate Program</a></li>
                        <li className='mb-1'><a href="#">Trust and Safety</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center border-t border-teal-600 pt-4">
                <div className="flex space-x-4">
                    <a href="#" aria-label="Twitter"><FaTwitter /></a>
                    <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                    <a href="#" aria-label="Facebook"><FaFacebookSquare /></a>
                    <a href="#" aria-label="Instagram"><FaInstagram /></a>
                    <a href="#" aria-label="YouTube"><FaYoutube /></a>
                </div>
                <div className="text-sm mt-4 md:mt-0">
                    <p>Copyright &copy; 2022. Ambel. All rights reserved.</p>
                </div>
                <div className="flex space-x-4 text-sm mt-4 md:mt-0">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookies</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;