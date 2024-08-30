import HeaderBanner from "@/components/HeaderBanner";
import headerImageMain from "../assets/Cloud Rika Home Banner.webp";
import FlexComp from "@/components/FlexComp";
import flexComp1Image from "../assets/Coudrika Software Excellence.webp";
import MiniBanner from "@/components/MiniBanner";
import miniBanner1 from '../assets/The Best Software Solution Cloudrika Mini Banner 1.png'

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center h-full w-full">
      {/* header banner  */}
      <div className="w-full h-auto">
        <HeaderBanner
          altText="Cloud Rika - The Best All In One Productivity Software Solutions For Your Business"
          imgSrc={headerImageMain.src}
        />
        <button
          className="absolute block lg:px-8 text-white lg:py-5 bg-[#1e99d5] right-1 top-48 sm:top-80 md:top-96 lg:top-[30rem] px-3 py-1 w-24 text-xs lg:text-md lg:w-52 xl:right-12 xl:top-[36rem] shadow-lg shadow-[#2f375c] rounded-md hover:shdow-xl hover:shadow-black hover:scale-105 transition 
      ease-in-out delay-75"
        >
          Schedule a free call
        </button>
      </div>
      {/* flex comp 1  */}
      <FlexComp
        altText="The Best Software Solution For Your Business With Cloudrika Software Company"
        flexDirection="flex-row-reverse"
        imgSrc={flexComp1Image.src}
        textContent='At Cloudrika, we specialize in delivering a diverse array of software solutions tailored to meet the unique requirements of your business. Our offerings are designed to streamline processes and enhance efficiency with fully dynamic, scalable solutions suitable for any business type. Whether you are a small startup or an established enterprise, Cloudrika provides the tools and expertise you need to optimize operations and achieve your business goals. Discover how our innovative software solutions can transform your business and drive success.

This version is slightly longer, maintains a professional tone, and includes keywords like "business needs," "software solutions," and "optimize operations," which can help with SEO.'
        heading={"The Best Software Solution For Your Business"}
      />
      <MiniBanner imgSrc={miniBanner1.src} altText="A beautiful Software Solution Company For Your Business - Cloudrika" />
    </div>
  );
}
