"use client"

import Image from "next/image";
import { useContext, useRef, useEffect, useState } from "react";

import { DarkmodeContext } from "@/Context/DarkMode";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import GetNotifiedForm from "@/components/GetNotifiedForm";
import { ButtonChip } from "@/components/Chip";
import IconContainer from "@/components/IconContainer";
import MoreInfoBanner from "@/components/MoreInfoBanner";
import GallerySection from "@/components/GallerySection";
import TwitterIcon from "@/components/vectors/TwitterIcon";
import MessageIcon from "@/components/vectors/MessageIcon";
import LinkedInIcon from "@/components/vectors/LinkedInIcon";
import InstagramIcon from "@/components/vectors/InstagramIcon";
import Conference from "@/assets/images/Conference.png";
import Hero2 from "@/assets/images/Hero2.png";
import ImageIcon from "@/assets/icons/Image.svg";
import Youtube from "@/assets/icons/Youtube.svg";


export default function Home() {
  const { isDarkmode } = useContext(DarkmodeContext);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState<number>(0);

  const heroTopMargin = `${(navHeight * 2).toString()}px`;

  useEffect(() => {
    if (navbarRef.current) {
      const navbarHeight = navbarRef.current.getBoundingClientRect().height;
      setNavHeight(navbarHeight)
    }
  }, [])
  return (
    <>
      <Navbar ref={navbarRef} />
        <main className="min-h-screen">
          <section id="hero" className={`h-screen transition-all duration-500 flex justify-center items-center ${isDarkmode ? "hero-grad-dark": ""}`}>
            <div className={`flex flex-col items-center md:max-w-[600px]`} style={{marginTop: heroTopMargin}}>
              <div className="text-center mb-[68px]">
                <h2 className="text-3xl md:text-[56px] md:leading-[67.2px] mb-3 font-semibold header-gradient">FlutterBytes Conference 2024</h2>
                <p className={`font-medium transition-all duration-500 text-[28px] leading-[33.6px] ${isDarkmode ? "text-[#D0EFFF]" : "text-[#2A9DF4]"}`}>IS COMING SOON...</p>
              </div>
              <div className="text-center mb-11">
                <p className={`leading-6 transition-all duration-500 mb-5 ${isDarkmode ? "text-[#E0E1E2]" : "text-[#576672]"}`}>
                  To get the latest updates about FlutterBytes Conference 2024<br /> 
                  directly in your email inbox, subscribe below.
                </p>
                <GetNotifiedForm />
              </div>
              <div className="flex items-center gap-x-4">
                <IconContainer icon={<TwitterIcon />} />
                <IconContainer icon={<LinkedInIcon />} />
                <MoreInfoBanner />
                <IconContainer icon={<MessageIcon />} />
                <IconContainer icon={<InstagramIcon />} />
              </div>
            </div>
          </section>
          <section className={`py-[127px] transition-all duration-500 flex justify-center items-center ${isDarkmode ? "hero-gradient-dark" : "hero-gradient-light"}`}>
            <div className="flex flex-col items-center md:max-w-[694.62px]">
              <Image src={Hero2} alt="" className="object-contain rounded-[20px] mb-16" />
              <div className="text-center">
                <h3 className="text-3xl md:text-[40px] md:leading-[45.96px] mb-8 font-semibold header-gradient">No doubts, FlutterBytes Conference 2023 was amazing!</h3>
                <div className="flex items-center gap-x-5">
                  <ButtonChip text="View pictures" icon={<Image src={ImageIcon} alt="image" width={20} height={20} />} />
                  <MoreInfoBanner text="FlutterBytes Conference 2023" otherstyles="!border-[#D0EFFF]" />
                  <ButtonChip text="Watch event" icon={<Image src={Youtube} alt="image" width={20} height={20} />} />
                </div>
              </div>
            </div>
          </section>
          <GallerySection />
          <section id="section4" className="h-[832px] section4-bg flex items-center justify-center">
            <div className="rounded-[100px] px-[82px] pt-[52px] pb-[62px] text-center middlecard w-[709px]">
              <p className="font-semibold text-lg text-[#D0EFFF] mb-6">Now, we’re in 2024  <span className="font-normal">—</span>  Not settling for less</p>
              <h3 className="text-3xl md:text-[42px] leading-[48.26px] font-semibold text-white">And we’re planning for an even better experience!</h3>
            </div>
          </section>
          <section id="section5" className="h-[832px] section5-bg flex items-center justify-center">
            <div className="flex flex-col items-center md:w-[532px] gap-y-16">
              <Image src={Conference} alt="conference-logo" />
              <div className="text-center">
                <h3 className="text-3xl md:text-[56px] leading-[67.14px] font-semibold header-gradient mb-[11px]">FlutterBytes Conference 2024</h3>
                <p className="text-lg font-medium text-[#2A9DF4]">1st & 2nd November</p>
              </div>
              <div className="flex items-center gap-x-4">
                <IconContainer dark icon={<TwitterIcon dark />} />
                <IconContainer dark icon={<LinkedInIcon dark />} />
                <MoreInfoBanner dark text="For updates and enquiry" />
                <IconContainer dark icon={<MessageIcon dark />} />
                <IconContainer dark icon={<InstagramIcon dark />} />
              </div>
            </div>
          </section>
        </main>
      <Footer />
    </>
  );
}
