// src/app/gallery/page.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// export default function Gallery() {
//   return (
//     <>
  
//       <div className="p-8">
//         <h1 className="text-3xl font-bold">Gallery</h1>
//         <p>Check out our beautiful work.</p>
//       </div>
  
//     </>
//   );
// }


import Image from 'next/image';

export default function Gallery() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-gray-200 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-bold">Salon WOW</div>
          <nav className="space-x-6">
            <a href="#" className="text-gray-700">Home</a>
            <a href="#" className="text-gray-700">About Us</a>
            <a href="#" className="text-gray-700">Services</a>
            <a href="#" className="text-gray-700">Pricing</a>
            <a href="#" className="text-gray-700 font-semibold">Gallery</a>
            <a href="#" className="text-white bg-black px-4 py-2 rounded-full">Book Now</a>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="container mx-auto my-12 text-center">
        {/* Gallery Header */}
        <h1 className="text-4xl font-bold mb-4">Gallery – Discover the WOW Transformation</h1>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Step into the world of beauty, style, and grooming through our WOW Unisex Salon Gallery! Explore the transformations we create and get inspired for your next look.
        </p>

        {/* Services Section */}
        <h2 className="text-2xl font-bold mb-6">Our Services in Action</h2>

        {/* Haircuts & Styling */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4">Haircuts & Styling</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Image src="/haircut1.jpg" alt="Haircut 1" width={300} height={400} />
            <Image src="/haircut2.jpg" alt="Haircut 2" width={300} height={400} />
            <Image src="/haircut3.jpg" alt="Haircut 3" width={300} height={400} />
          </div>
        </div>

        {/* Color Creations */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4">Color Creations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Image src="/color1.jpg" alt="Color 1" width={300} height={400} />
            <Image src="/color2.jpg" alt="Color 2" width={300} height={400} />
            <Image src="/color3.jpg" alt="Color 3" width={300} height={400} />
          </div>
        </div>

        {/* The Wow Experience */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-bold mb-4">The Wow Experience</h3>
          <p className="text-gray-600 mb-4">
            Want to see the process in action? Watch our exclusive videos that take you behind the scenes!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-300 w-full h-64"></div>
            <div className="bg-gray-300 w-full h-64"></div>
            <div className="bg-gray-300 w-full h-64"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-700">Facebook</a>
            <a href="#" className="text-gray-700">TikTok</a>
            <a href="#" className="text-gray-700">Instagram</a>
          </div>
          <div className="text-gray-700 mb-4 md:mb-0">
            Mon to Fri: 8am - 6pm | Sat: 9am - 7pm | Sun: 9am - 3pm
          </div>
          <div className="text-gray-700">Pambahinna, Belihuloya, Sri Lanka</div>
        </div>
        <div className="text-center text-gray-700 mt-4">
          Copyright © 2024 Wow Unisex Salon. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
