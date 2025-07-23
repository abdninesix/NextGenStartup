import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">NextGenBites</h2>
            <p className="text-gray-400 mt-2">Serving deliciousness since 1995.</p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="text-gray-300 space-y-1">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/menu" className="hover:text-white">Menu</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-red-400"><Facebook /></a>
              <a href="#" className="hover:text-pink-400"><Instagram /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} NextGenBites. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
