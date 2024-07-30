import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiBittorrent } from "react-icons/si";
import { CiMenuFries } from "react-icons/ci";
import { GiCrossedSabres } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Nav items here
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Sell Your Product", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left0 right-0 transition-all ease-in duration-300  z-[1000001]">
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-[#fafbfc]" : ""}`}>
        <div className="flex flex-row gap-12 justify-between">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-gray-600 flex items-center gap-2">
            <SiBittorrent className="inline-block" /> RENT.iT
          </Link>

          {/* Nav items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link key={path} to={path} className="block text-base text-black uppercase cursor-pointer hover:text-red-800">
                {link}
              </Link>
            ))}
          </ul>

          {/* Menu button for large devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button>
              <CiMenuFries className="w-5 hover:text-red-800" />
            </button>
          </div>

          {/* Menu button for mobile devices */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {isMenuOpen ? (
                <GiCrossedSabres className="h-5 w-5 text-black" />
              ) : (
                <CiMenuFries className="h-5 w-5 hover:text-black" />
              )}
            </button>
          </div>
        </div>

        {/* Nav items for small devices */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-gray-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {navItems.map(({ link, path }) => (
            <Link key={path} to={path} className="block text-base text-white uppercase cursor-pointer hover:text-red-800">
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
