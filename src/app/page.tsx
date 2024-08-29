import Image from "next/image";
import { Fragment } from "react";
import bannerImage from "../assets/Cloud Rika - Top Banner.webp";
import excellentSoftwareSolutionSideMiniBanner from "../assets/Coudrika Software Excellence.webp";
export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center w-full">
      <div className="w-full h-[25vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] overflow-hidden bg-cover">
        <Image
          src={bannerImage}
          alt="The Best Software Solution For Your Business - CloudRika"
          className="w-full"
        />
      </div>

      <div className="flex flex-wrap w-[100%] p-5 h-full self-start top-0 items-center justify-center">
        <span className="paragraph text-left w-[50%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
          quam tempore, numquam maiores ullam necessitatibus rerum? Facere
          nesciunt, voluptates in voluptatibus ex eveniet odio molestiae ad
          assumenda dolorum aliquid fugit.
        </span>
        <span className="overflow-hidden w-[30%] h-[30%] rounded-md shadow-md shadow-black">
          <Image
            src={excellentSoftwareSolutionSideMiniBanner}
            alt="The Best Software Solution For Your Business - CloudRika"
            className="w-full"
          />
        </span>
      </div>
      <div className="flex flex-wrap w-[100%] p-5 h-full self-start top-0 items-center justify-center">
        <span className="overflow-hidden w-[30%] h-[30%] flex-row-reverse rounded-md shadow-md shadow-black">
          <Image
            src={excellentSoftwareSolutionSideMiniBanner}
            alt="The Best Software Solution For Your Business - CloudRika"
            className="w-full"
          />
        </span>
        <span className="paragraph text-left w-[50%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
          quam tempore, numquam maiores ullam necessitatibus rerum? Facere
          nesciunt, voluptates in voluptatibus ex eveniet odio molestiae ad
          assumenda dolorum aliquid fugit.
        </span>
      </div>
    </div>
  );
}
