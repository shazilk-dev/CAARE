
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 p-4 md:p-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="#" className="text-white text-3xl font-bold font-playfair-display">
          Canva
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-white hover:text-gray-200">
            Features
          </Link>
          <Link href="#" className="text-white hover:text-gray-200">
            Templates
          </Link>
          <Link href="#" className="text-white hover:text-gray-200">
            Pricing
          </Link>
          <Link href="#" className="text-white hover:text-gray-200">
            Contact
          </Link>
          <Link href="#" className="text-white hover:text-gray-200">
            Login
          </Link>
          <Link
            href="#"
            className="bg-white text-black font-bold py-2 px-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Menu Button - Placeholder for now */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
