import Link from 'next/link'; 
import Image from 'next/image';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-zinc-300 via-gray-200 to-zinc-300 shadow-md flex flex-col sm:flex-row justify-between items-center px-6 py-3 md:px-12">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <Image src={logo} alt="WOW Salon" className="w-20 h-20 md:w-24 md:h-24" />
        <span className="text-2xl md:text-3xl font-Cinzel font-semibold tracking-wide text-gray-700"></span>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-10 mt-4 sm:mt-0">
        {['Home', 'About Us', 'Services', 'Gallery', 'Booking'].map((item, index) => (
          <li key={index}>
            <Link
              href={item === 'Home' ? '/' : item === 'About Us' ? '/about' : `/${item.toLowerCase().replace(/ /g, '')}`}
              className="relative text-lg md:text-xl font-Cinzel font-medium text-gray-700 hover:text-black transition-colors block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Book Now Button */}
      <div className="mt-4 sm:mt-0">
        <button className="relative group h-12 w-44 md:w-48 overflow-hidden border border-gray-700 text-gray-700 font-Cinzel font-medium rounded-full shadow-md transition-all hover:text-white">
          <span className="absolute inset-0 bg-gray-700 transition-transform scale-x-0 group-hover:scale-x-100 origin-center duration-300"></span>
          <span className="relative z-10">Book Now</span>
        </button>
      </div>
    </nav>
  );
}
