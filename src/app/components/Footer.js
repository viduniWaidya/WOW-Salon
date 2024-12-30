// src/app/components/Footer.js
export default function Footer() {
  return (
    <footer className="">
          <div className="py-8 bg-zinc-300">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex-1 px-4">
            <h3 className="text-xl font-semibold text-gray-800">Contact</h3>
            <p className="mt-2 text-gray-600">(071) 154 - 4071</p>
            <p className="text-gray-600">wowsalon@gmail.com</p>
          </div>
          <div className="flex-1 px-4 text-center">
            <img src="/path-to-logo.png" alt="Salon WOW Logo" className="mx-auto w-16 mb-4" />
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-800 hover:text-blue-500">Facebook</a>
              <a href="#" className="text-gray-800 hover:text-blue-500">TikTok</a>
              <a href="#" className="text-gray-800 hover:text-blue-500">Instagram</a>
            </div>
          </div>
          <div className="flex-1 px-4">
            <h3 className="text-xl font-semibold text-gray-800">Location</h3>
            <p className="mt-2 text-gray-600">Pambahinna, Belihuloya</p>
            <p className="text-gray-600">Sri Lanka</p>
          </div>
        </div>
      </div>
      <div className="bg-white text-black">
      <p>© 2024 WOW Salon. All rights reserved.</p>
      </div>
    </footer>
  );
}
