import Image from 'next/image';
import wowlogo from '@/app/assets/images/wowlogo.png';
import col1 from '@/app/assets/images/col1.png';
import color from '@/app/assets/images/color.png';
import hstyle1 from '@/app/assets/images/hstyle1.png';
import hstyle3 from '@/app/assets/images/hstyle3.png';
import hstylebrown from '@/app/assets/images/hstylebrown.png';
import hstyle2 from '@/app/assets/images/hstyle2.png';
import bluehair from '@/app/assets/images/bluehair.png';

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
          
          
          <div className="flex items-center justify-center my-4">
  <div className="w-10 border-t border-black"></div>
  <h3 className="mx-4 text-black text-xl text-center uppercase" style={{ fontFamily: 'Cinzel, serif' }}>
    Haircuts & Styling
  </h3>
  <div className="w-10 border-t border-black"></div>
</div>


              <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="relative group">
                    <Image
                      src={hstyle3}
                      alt="Haircut 3"
                      width={400}
                      height={400}
                      className="rounded-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg flex items-center justify-center">
                      <p className="text-white text-lg font-semibold">Haircut 3</p>
                    </div>
                  </div>
                  <div className="relative group">
                    <Image
                      src={hstylebrown}
                      alt="Haircut 1"
                      width={400}
                      height={400}
                      className="rounded-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg flex items-center justify-center">
                      <p className="text-white text-lg font-semibold">Haircut 1</p>
                    </div>
                  </div>
                  <div className="relative group">
                    <Image
                      src={hstyle1}
                      alt="Haircut 2"
                      width={400}
                      height={400}
                      className="rounded-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg flex items-center justify-center">
                      <p className="text-white text-lg font-semibold">Haircut 2</p>
                    </div>
                  </div>
                </div>
              </div>





        </section>
<br></br>
        {/* Color Creations */}
        <section className="mb-12">
          
          <div className="flex items-center justify-center my-8">
            <div className="w-10 border-t border-black"></div>
            <h3 className="mx-4 text-black text-xl text-center uppercase " style={{ fontFamily: 'Cinzel, serif' }}>
            Color Creations
            </h3>
            <div className="w-10 border-t border-black"></div>
            </div>

            
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="relative group">
                    <Image
                      src={bluehair}
                      alt="Haircut 3"
                      width={400}
                      height={400}
                      className="rounded-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg flex items-center justify-center">
                      <p className="text-white text-lg font-semibold">Haircut 3</p>
                    </div>
                  </div>
                  <div className="relative group">
                    <Image
                      src={hstyle2}
                      alt="Haircut 1"
                      width={400}
                      height={400}
                      className="rounded-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg flex items-center justify-center">
                      <p className="text-white text-lg font-semibold">Haircut 1</p>
                    </div>
                  </div>
                  <div className="relative group">
                    <Image
                      src={color}
                      alt="Haircut 2"
                      width={400}
                      height={400}
                      className="rounded-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg flex items-center justify-center">
                      <p className="text-white text-lg font-semibold">Haircut 2</p>
                    </div>
                  </div>
                </div>
              </div>
             
        </section>

        {/* The WOW Experience */}
        <section>
         
          <div className="flex items-center justify-center my-8">
            <div className="w-10 border-t border-black"></div>
            <h3 className="mx-4 text-black text-xl text-center uppercase " style={{ fontFamily: 'Cinzel, serif' }}>
            The WOW Experience
            </h3>
            <div className="w-10 border-t border-black"></div>
            </div>

          <p className="text-black text-center mb-10">
          Want to see the process in action? Watch our exclusive videos that take you behind the scenes of our most popular services. From the initial consultation to the final reveal, experience the Wow journey with us.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
                    <video 
                    className="w-full h-64 bg-gray-300 rounded-lg" 
                    controls 
                    >
                    <source src="https://github.com/mSrishan/WOW-Salon/blob/thanushi/src/app/assets/images/video3.mp4" type="video/mp4" />
                    
                    </video>

                    

            
                    <video 
                    className="w-full h-64 bg-gray-300 rounded-lg" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    >
                    <source src="https://www.facebook.com/share/r/15ADZ8kGpg/" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>


                    <div className="w-full h-64 bg-gray-300 rounded-lg">
  <iframe
    className="w-full h-full rounded-lg"
    src="https://www.facebook.com/share/r/15ADZ8kGpg/"
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>



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
