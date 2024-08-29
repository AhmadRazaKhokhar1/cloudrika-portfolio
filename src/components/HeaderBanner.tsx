"use client";
import Image from "next/image";
export default function HeaderBanner({
  imgSrc,
  altText,
}: {
  imgSrc: string;
  altText: string;
}) {
  return (
    <div className="w-[100%] h-[100%] overflow-hidden flex p-0 m-0 items-center justify-center bg-red-400">
      <Image
        src={""}
        onError={(e) => {
          let target = e.target as any;
          target.onerror = null;
          target.src = imgSrc;
        }}
        alt={altText}
        width={100}
        height={100}
        className="w-[100vw] h-full"
      />
    </div>
  );
}
