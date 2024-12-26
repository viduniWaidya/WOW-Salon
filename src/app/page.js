import Image from 'next/image';
import hero from './assets/images/hero.png';
import logo from './assets/images/logo.png';
import home1 from './assets/images/home1.png';

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
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800  mt-7">
                 About Us
           </button>

          </div>
  <div className="w-full md:w-1/4 flex justify-center">
  <Image
    src={home1}
    alt="Salon1"
    className="w-48 h-64 md:w-72 md:h-96 "
  />
</div>

        </div>
      </div>
    </>
  );
}
