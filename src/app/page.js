import Image from 'next/image';
import hero from './assets/images/hero.png';
import logo from './assets/images/logo.png';
import home1 from './assets/images/home1.png';
import home2 from './assets/images/home2.png';
import home3 from './assets/images/home3.png';

import homeg1 from './assets/images/homeg1.png';
import homeg2 from './assets/images/homeg2.png';
import homeg3 from './assets/images/homeg3.png';
import homeg4 from './assets/images/homeg4.png';
import homeg5 from './assets/images/homeg5.png';



export default function Home() {
  return (
    <>
      <Image
        src={hero}
        alt="Salon interior"
        width={1750}
        height={400}
        className="object-cover w-full h-auto"
      />
      <div className="p-12 pr-1 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
          <div className="md:w-2/3">
            <div className="flex items-center space-x-4 mb-6">
              <Image src={logo} alt="WOW Salon" className="w-20 h-20 md:w-24 md:h-24" />
              <h2 className="text-4xl">____________ About Us</h2>
            </div>
            <h2 className="text-5xl font-bold mb-4">Unveil Your Unique Style with Us</h2>
            <p className="text-sm text-gray-700 text-justify">
              At <strong>Wow Unisex Salon</strong>, we believe that beauty is for everyone. Our salon
              is a welcoming space where style and confidence come together. We offer a wide range
              of services tailored to all genders, from fresh haircuts and stunning beauty
              treatments to the perfect look for any special occasion. Whether you're looking to
              refresh your everyday style or transform your appearance, our team of skilled
              professionals is here to bring your vision to life.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 mt-7">
              About Us
            </button>
          </div>
          <div className="w-full md:w-1/4 flex justify-center">
            <Image
              src={home1}
              alt="Salon1"
              className="w-48 h-64 md:w-72 md:h-96"
            />
          </div>
        </div>
      </div>
<div className="w-full bg-gradient-to-b from-gray-200 to-zinc-300 py-16">
  <div className="max-w-7xl mx-auto px-4">
    {/* Heading Section */}
    <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-gray-800 mb-12">
      <span className="block border-b-4 text-center">
        ____________Our Services___________
      </span>
    </h1>

    {/* Services Images */}
    <div className="flex flex-wrap justify-center gap-8 mt-[5%]">
      {/* Service 1 */}
      <div className="group relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={home2}
          alt="Service 1"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white font-bold text-lg">Hair Styles</p>
        </div>
      </div>
      
      {/* Service 2 */}
      <div className="group relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={home3}
          alt="Service 2"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white font-bold text-lg">Facial Treatments</p>
        </div>
      </div>
    </div>
  </div>

  {/* Call-to-Action Button */}
  <div className="text-center mt-12">
    <button className="bg-gradient-to-r from-black to-gray-800 text-white px-8 py-3 rounded-md text-lg font-semibold shadow-md hover:from-gray-800 hover:to-black transition duration-300">
      Explore Our Services
    </button>
  </div>
</div>



  <div className="w-full bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-4 ">
    <h1 className="text-4xl font-bold text-gray-800 mb-[10%]">____________Our Gallery</h1>
    <div className="relative flex justify-center items-center">
      {/* Top Left - homeg1 */}
      <div className="absolute top-0 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-[150px] h-[150px] overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
          <Image src={homeg1} alt="Gallery Image 1" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Bottom Left - homeg2 */}
      <div className="absolute bottom-0 left-1/3 transform -translate-x-1/2 translate-y-1/2">
        <div className="w-[200px] h-[200px] overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
          <Image src={homeg2} alt="Gallery Image 2" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Centralized - homeg3 */}
      <div className="w-[175px] h-[275px] overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
        <Image src={homeg3} alt="Gallery Image 3" className="w-full h-full object-cover" />
      </div>

      {/* Top Right - homeg4 */}
      <div className="absolute top-0 right-1/3 transform translate-x-1/2 -translate-y-1/2">
        <div className="w-[175px] h-[150px] overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
          <Image src={homeg4} alt="Gallery Image 4" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Bottom Right - homeg5 */}
      <div className="absolute bottom-0 right-1/3 transform translate-x-1/2 translate-y-1/2">
        <div className="w-[150px] h-[175px] overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
          <Image src={homeg5} alt="Gallery Image 5" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div>
  <div className="text-center mt-[8%]">
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 mt-7">
              Gallery
            </button>
  </div>
</div>





    </>
  );
}
