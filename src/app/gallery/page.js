// src/app/gallery/page.js

import Image from 'next/image'; // Import the Next.js Image component

// Import images from the specified path
import img1 from '../assets/images/galleryImgs/1.png';
import img2 from '../assets/images/galleryImgs/2.png';
import img3 from '../assets/images/galleryImgs/3.png';
import img4 from '../assets/images/galleryImgs/4.png';
import img5 from '../assets/images/galleryImgs/5.png';
import img6 from '../assets/images/galleryImgs/6.png';

export default function Gallery() {
  return (
    <div className="font-sans">
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
            <Image src={img1} alt="Haircut 1" width={300} height={400} />
            <Image src={img2} alt="Haircut 2" width={300} height={400} />
            <Image src={img3} alt="Haircut 3" width={300} height={400} />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4 justify-center">
            <Image src={img4} alt="Haircut 4" width={300} height={400} />
            <Image src={img5} alt="Haircut 5" width={300} height={400} />
          </div>
        </section>

        {/* Color Creations */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-4 uppercase">Color Creations</h3>
          <div className="grid grid-cols-2 gap-4">
            <Image src={img4} alt="Color 1" width={300} height={400} />
            <Image src={img5} alt="Color 2" width={300} height={400} />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Image src={img3} alt="Color 3" width={300} height={400} />
            <Image src={img6} alt="Color 4" width={300} height={400} />
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
    </div>
  );
}
