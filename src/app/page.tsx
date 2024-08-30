import HeaderBanner from "@/components/HeaderBanner";
import headerImageMain from '../assets/Cloud Rika Home Banner.webp'
export default function Home() {
  return (
   <div className="flex flex-col justify-between items-center h-full w-full">
      <div className="w-full h-auto">
      <HeaderBanner 
      altText="Cloud Rika - The Best All In One Productivity Software Solutions For Your Business"
      imgSrc={headerImageMain.src}
      />
      <button 
      className="absolute block lg:px-8 text-white lg:py-5 bg-[#1e99d5] right-2 top-32 px-3 py-1 w-32 text-xs lg:text-md lg:w-52 
      xl:right-12 xl:top-[36rem] shadow-lg shadow-[#2f375c] rounded-md hover:shdow-xl hover:shadow-black hover:scale-105 transition 
      ease-in-out delay-75"
      
      >
        Schedule a free call
      </button>
      </div>
   </div>
  );
}
