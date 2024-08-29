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
      </div>
   </div>
  );
}
