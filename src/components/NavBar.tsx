"use client";
import Image from "next/image";
import cloudRikaLogo from "../assets/CloudRika.png";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { navItems } from "@/globals/global";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <nav className="relative bg-white text-gray-700 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={cloudRikaLogo}
              alt="Cloud Rika - The Best All in One Software Solution for your Business"
              width={120} // Adjust width as needed
              height={32}  // Reduced height
            />
          </Link>
        </div>

        {/* Menu and Profile Icon */}
        <div className="flex items-center space-x-4">
          {/* Menu Button (Mobile) */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoMdClose size={24} /> : <HiMenu size={24} />}
          </button>
          {/* Profile Icon */}
          <Link href="/profile">
            <FaUserCircle size={24} />
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-grow items-center space-x-6">
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={() => setActiveItem(item.label)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <button className="flex items-center gap-1 hover:text-gray-500 focus:outline-none">
                {item.label}
                {item.dropdown.length > 0 && <FaChevronDown />}
              </button>
              {item.dropdown.length > 0 && activeItem === item.label && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 mt-2 w-48 bg-gray-100 rounded shadow-lg"
                >
                  {item.dropdown.map((subItem) => (
                    <motion.li
                      key={subItem}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="px-4 py-2 hover:bg-gray-200"
                    >
                      <Link href={`/${subItem.toLowerCase().replace(/ /g, "-")}`}>
                        {subItem}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </li>
          ))}
          {/* Add Blogs Button */}
          <li>
            <Link href="/blogs" className="flex items-center gap-1 hover:text-gray-500">
              Blogs
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -200 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 md:hidden z-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col h-full">
          <button
            className="p-4 text-gray-700 self-end"
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose size={24} />
          </button>
          <div className="flex-grow flex flex-col items-center pt-12 space-y-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.label} className="relative">
                  <button
                    onClick={() =>
                      setActiveItem(activeItem === item.label ? null : item.label)
                    }
                    className="text-xl text-gray-700 flex items-center gap-2"
                  >
                    {item.label}
                    {item.dropdown.length > 0 && <FaChevronDown />}
                  </button>
                  {item.dropdown.length > 0 && activeItem === item.label && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 space-y-2"
                    >
                      {item.dropdown.map((subItem) => (
                        <motion.li
                          key={subItem}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                          className="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded"
                        >
                          <Link
                            href={`/${subItem.toLowerCase().replace(/ /g, "-")}`}
                          >
                            {subItem}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              ))}
            </ul>
            <Link href="/profile" className="text-gray-700 flex items-center gap-2">
              <FaUserCircle size={24} />
              Profile
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
