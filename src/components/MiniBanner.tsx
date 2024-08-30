"use client";
import { motion } from "framer-motion";
export default function MiniBanner({
  imgSrc,
  altText,
}: {
  imgSrc: string;
  altText: string;
}) {
  return (
    <motion.div
      initial={{
        x: -400,
        y: 400,
      }}
      animate={{
        x: 70,
        y: 0,
      }}
      className="my-2"
    >
      <img
        src={imgSrc}
        alt={altText}
        className="w-[90%] rounded-md shadow-md"
      />
    </motion.div>
  );
}
