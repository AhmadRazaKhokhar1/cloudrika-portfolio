"use client";
import { FlexCompType } from "@/types/types";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function FlexComp({
  flexDirection,
  imgSrc,
  textContent,
  altText,
  heading,
}: FlexCompType) {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  //handle scroll
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      opacity: scrollY > 50 ? 1 : 0,
      y: scrollY > 200 ? 0 : 100,
      transition: { duration: 0.5 },
    });
  }, [scrollY, controls]);

  return (
    <motion.div
      className={`flex ${flexDirection} w-full h-full my-3 px-8 py-2 justify-between items-center`}
      animate={controls}
    >
      <motion.div className="flex flex-col justify-between w-[60%] h-[60%] items-center">
        <h2 className="my-2 text-xl font-extrabold">{heading}</h2>
        <div className="flex flex-wrap text-wrap w-[60%]">{textContent}</div>
      </motion.div>
      <motion.div className="w-[40%] h-[40%] overflow-hidden rounded-md shadow-md shadow-black">
        <img
          src={imgSrc}
          onError={(e) => {
            const target = e.target as any;
            target.onerror = null;
            target.src = imgSrc;
          }}
          alt={altText}
          width={100}
          height={100}
          className="object-cover w-full h-full"
        />
      </motion.div>
    </motion.div>
  );
}
