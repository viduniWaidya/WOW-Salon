import Image from 'next/image';
import wowlogo from '@/app/assets/images/wowlogo.png';
import layout1 from '@/app/assets/images/layout1.png';
import layout2 from '@/app/assets/images/layout2.png';


export default function Gallery() {
  return (
    <div className="font-sans text-black">
      {/* Header */}
      <header className="bg-gray-100 py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-black text-xl font-bold">Salon WOW</div>
          <nav className="space-x-6">
        
            
          <div className="flex items-center space-x-2">
              <Image 
                src={wowlogo} // Use the imported image variable
                alt="Wow Salon Logo"
                width={50} 
                height={50} 
              />
          </div>

            <a href="#" className="text-black hover:text-gray-700">Home</a>
            <a href="#" className="text-black hover:text-gray-700">About Us</a>
            <a href="#" className="text-black hover:text-gray-700">Services</a>
            <a href="#" className="text-black hover:text-gray-700">Pricing</a>
            <a href="#" className="text-black hover:text-gray-700">Gallery</a>
          </nav>
          <a href="#" className=" bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800">Book Now</a>
        </div>
      </header>

      {/* Main Section */}
      <main className="container mx-auto my-12 text-center">
        {/* Gallery Header */}
        <h1 className="text-4xl font-bold mb-4">Gallery – Discover the WOW Transformation</h1>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Step into the world of beauty, style, and grooming through our Wow Unisex Salon Gallery! Explore the transformations we create and get inspired for your next look. From bold hair makeovers to flawless skin treatments, our gallery showcases the artistry, skill, and passion we put into every service.
        </p>

        {/* Services Section */}
        <h2 className="text-2xl font-bold mb-6 uppercase">Our Services in Action</h2>

        {/* Haircuts & Styling */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-4 uppercase">Haircuts & Styling</h3>
          <div className="grid grid-cols-3 gap-4">
            <Image src={hstyle2} alt="Haircut 1" width={300} height={400} />

            <Image src={hstyle2} alt="Haircut 1" width={300} height={400} /> 
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4 justify-center">
            <Image src={hstyle2} alt="Haircut 1" width={300} height={400} />    
            <Image src={hstyle1} alt="Haircut 1" width={300} height={400} />
          </div>
        </section>




        {/* Color Creations */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-4 uppercase">Color Creations</h3>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/color1.jpg" alt="Color 1" width={300} height={400} />
            <Image src="/color2.jpg" alt="Color 2" width={300} height={400} />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Image src="/color3.jpg" alt="Color 3" width={300} height={400} />
            <Image src="/color4.jpg" alt="Color 4" width={300} height={400} />
          </div>
        </section>

        {/* The Wow Experience */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-4 uppercase">The Wow Experience</h3>
          <p className="text-gray-600 mb-4">
            Want to see the process in action? Watch our exclusive videos that take you behind the scenes!
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
              <span className="text-gray-500">Video Placeholder 1</span>
            </div>
            <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
              <span className="text-gray-500">Video Placeholder 2</span>
            </div>
            <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
              <span className="text-gray-500">Video Placeholder 3</span>
            </div>
          </div>
        </section>

        <p className="text-xl font-semibold mt-8">
          Come in for a visit, and your transformation could be featured next in our gallery!
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-700">Facebook</a>
            <a href="#" className="text-gray-700">TikTok</a>
            <a href="#" className="text-gray-700">Instagram</a>
          </div>
          <div className="text-gray-700 mb-4 md:mb-0 text-center">
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
