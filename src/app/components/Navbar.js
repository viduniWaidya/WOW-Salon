
import Link from 'next/link'; 
import Image from 'next/image';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  return (
    <nav className="bg-zinc-300 flex flex-col sm:flex-row justify-between items-center px-6 py-3">
      <Image src={logo} alt="WOW Salon" className="w-15 h-15 mb-2 sm:mb-0" />

      <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-16">
        <li>
          <Link href="/" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/services" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            Services
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/booking" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            Booking
          </Link>
        </li>
      </ul>

      <div className="mt-3 sm:mt-0">
        <button className="relative h-12 w-40 overflow-hidden border border-black text-black shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-black before:duration-300 before:scale-100 hover:text-white hover:before:h-64 hover:before:-translate-y-32 rounded-full">
          <span className="relative z-10 transition-colors duration-300">Book Now</span>
        </button>
      </div>
    </nav>
  );
}
