import Image from 'next/image';
import wowlogo from '@/app/assets/images/wowlogo.png';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-200 py-4">
        <div className="container mx-auto flex justify-between items-center px-12">
          <div className="flex items-center">
            <Image
              src={wowlogo}
              alt="Wow Salon Logo"
              width={70}
              height={70}
            />
          </div>
          <nav className="space-x-7">
            <a href="/" className="text-black hover:text-gray-600">Home</a>
            <a href="/about" className="text-black hover:text-gray-600">About Us</a>
            <a href="/services" className="text-black hover:text-gray-600">Services</a>
            <a href="/gallery" className="text-black hover:text-gray-600">Gallery</a>
          </nav>
          <a href="/booking" className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800">
            Book Now
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <section className="text-center">
        <h1 className="text-3xl font-bold text-black mb-4"
        style={{ fontFamily: 'Cinzel, serif' }} >
             GALLERY – DISCOVER THE WOW TRANSFORMATION
        </h1>
<br></br>
            <p className="text-black mb-8 px-10 text-justify">
                Step into the world of beauty, style, and grooming through our Wow Unisex Salon Gallery! Explore the transformations we create and get inspired for your next look. From bold hair makeovers to flawless skin treatments, our gallery showcases the artistry, skill, and passion we put into every service.
            </p>

        </section>

        {/* Services in Action */}
        <section className="mb-12">
        <h2 className="text-2xl font-bold  text-center text-black mb-4"
        style={{ fontFamily: 'Cinzel, serif' }} >Our Services in Action</h2> <br></br><br></br>
          
          <h3 className="text-xl text-center text-black mb-4">Haircuts & Styling</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Image src="/assets/haircut1.jpg" alt="Haircut 1" width={400} height={400} className="rounded-lg" />
            <Image src="/assets/haircut2.jpg" alt="Haircut 2" width={400} height={400} className="rounded-lg" />
            <Image src="/assets/haircut3.jpg" alt="Haircut 3" width={400} height={400} className="rounded-lg" />
          </div>
        </section>

        {/* Color Creations */}
        <section className="mb-12">
          <h3 className="text-xl text-center text-black mb-4">Color Creations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Image src="/assets/color1.jpg" alt="Color 1" width={400} height={400} className="rounded-lg" />
            <Image src="/assets/color2.jpg" alt="Color 2" width={400} height={400} className="rounded-lg" />
            <Image src="/assets/color3.jpg" alt="Color 3" width={400} height={400} className="rounded-lg" />
          </div>
        </section>

        {/* The WOW Experience */}
        <section>
          <h3 className="text-xl text-center text-black mb-4">The WOW Experience</h3>
          <p className="text-black text-center mb-6">
            Want to see the process in action? Watch our exclusive videos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 py-8">
        <div className="container mx-auto text-center">
          <Image
            src="/assets/logo.png"
            alt="Wow Salon Logo"
            width={50}
            height={50}
            className="mx-auto mb-4"
          />
          <p className="text-black mb-4">Come in for a visit, and your transformation could be featured next in our gallery!</p>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-black hover:text-gray-600">Facebook</a>
            <a href="#" className="text-black hover:text-gray-600">TikTok</a>
            <a href="#" className="text-black hover:text-gray-600">Instagram</a>
          </div>
          <p className="text-black text-sm">
            Copyright © 2024 Wow Unisex Salon. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
