// src/app/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-violet-300 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/booking">Booking</Link>
        </li>
      </ul>
    </nav>
  );
}
