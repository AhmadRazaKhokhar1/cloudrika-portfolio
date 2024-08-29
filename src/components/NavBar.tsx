"use client";
import Image from "next/image";
import cloudRikaLogo from "../assets/CloudRika.png";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import { HiMenu, HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { navItems } from "@/globals/global";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <nav className="relative bg-white text-[#32469b] shadow-md w-[100vw] flex mx-auto">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center h-16 w-full">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={cloudRikaLogo}
              alt="Cloud Rika - The Best All in One Software Solution for your Business"
              width={120}
              height={32}
            />
          </Link>
        </div>

        {/* Menu Desktop */}
        <div className="hidden lg:flex items-center justify-between w-[30%] space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveItem(item.label)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <Link
                  href={`/${item.label}`}
                  className="flex items-center gap-1 group-hover:text-[#1e99d5] focus:outline-none"
                >
                  {item.label}
                </Link>
                {item.dropdown.length > 0 && activeItem === item.label && (
                  <motion.ul
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: -10 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible"
                  >
                    {item.dropdown.map((subItem) => (
                      <motion.li
                        key={subItem}
                        whileHover={{ scale: 1.01, background:"#1e99d5", color:"white" }}
                        transition={{ duration: 0.2 }}
                        className="px-4 py-2"
                      >
                        <Link href={`/${item.label}/${subItem.replace(/ /g, "-")}`}>
                          {subItem}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </li>
            ))}
          </ul>
          {/* Profile Icon */}
          <Link href="/profile">
            <FaUserCircle size={24} />
          </Link>
        </div>

        {/* Menu Button Mobile */}
        <div className="flex lg:hidden items-center space-x-4">
          <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiMenuAlt1 size={24} /> : <HiMenu size={24} />}
          </button>
          {/* Profile Icon Mobile */}
          <Link href="/profile">
            <FaUserCircle size={24} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -200 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 lg:hidden z-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              className="text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose size={24} />
            </button>
          </div>
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
                            href={`/${item.label}/${subItem.replace(/ /g, "-")}`}
                            onClick={() => setIsOpen(false)}
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
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
