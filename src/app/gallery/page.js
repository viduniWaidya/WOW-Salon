
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
    </div>
  );
}
