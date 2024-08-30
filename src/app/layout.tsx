import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export var metadata: Metadata = {
  title: "Cloud Rika",
  description:
    "Cloud Rika - The Best All in One Software Solution for your Business. Get Your ERP, CRM, Email Portal, Civil Operations Portal, Mobile apps, Webapps, Chrome Extensions!",
  keywords:
    "Cloud Rika, Cloudrika, cloudrika, cloud, cloudrica, cloud rica, cloud solutions, clouds, rika clouds, Ahamd Raza Khokhar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ fontFamily: "cursive" }}
        className="flex flex-col justify-between items-center w-full h-full overflow-x-hiddenn text-gray-700 overflow-x-hidden"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
