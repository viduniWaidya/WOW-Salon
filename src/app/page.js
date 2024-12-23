
import Image from 'next/image'; // Import the Next.js Image component
import hero from './assets/images/hero.png'; // Import the image

export default function Home() {
  return (
    <>
         <Image
          src={hero}         // Use the imported image
          alt="Salon interior"
          width={1750}       // Set the width
          height={400}      // Set the height
          className="object-cover" // Optional: Add classes for better styling
        />
      <div className="p-8">
        <h1 className="text-3xl font-bold">Welcome to WOW Salon!</h1>
        <p>Your comfort and style are our priority.</p>
      </div>

    </>
  );
}
