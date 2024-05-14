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
import ComingSoon from "@/components/vectors/ComingSoon";
import Anticipate from "@/components/vectors/Anticipate";


export default function Home() {
  const { isDarkmode } = useContext(DarkmodeContext);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState<number>(0);
  const [deviceWidth, setDeviceWidth] = useState<number>(null!);

  console.log(deviceWidth)

  useEffect(() => {
    if (navbarRef.current) {
      const navbarHeight = navbarRef.current.getBoundingClientRect().height;
      setNavHeight(navbarHeight)
    }

    setDeviceWidth(window.screen.width);
  }, [])
  return (
    <>
      <Navbar ref={navbarRef} />
        <main className="min-h-screen w-full">
          <section id="hero" className={`h-screen md:h-[90vh] px-5 md:px-0 relative transition-all duration-500 flex justify-center items-center ${isDarkmode ? "hero-grad-dark": ""}`}>
            <div className={`flex flex-col items-center md:max-w-[600px] mt-[348px] md:mt-[112px]`}>
              <div className="text-center md:mb-[68px] mb-[140px]">
                <h2 className="text-5xl leading-[3rem] md:text-[56px] md:leading-[67.2px] mb-3 font-semibold header-gradient md:mt-auto">FlutterBytes Conference 2024</h2>
                <p className={`font-medium transition-all duration-500 text-[28px] leading-[33.6px] ${isDarkmode ? "text-[#D0EFFF]" : "text-[#2A9DF4]"}`}>IS COMING SOON...</p>
              </div>
              <div className="text-center mb-11">
                <p className={`leading-6 text-sm md:text-base max-w-[340px] md:max-w-[503px] transition-all duration-500 mb-5 ${isDarkmode ? "text-[#E0E1E2]" : "text-[#576672]"}`}>
                  To get the latest updates about FlutterBytes Conference 2024<br className="hidden md:block" /> 
                  directly in your email inbox,<br className="md:hidden" /> subscribe below.
                </p>
                <GetNotifiedForm />
              </div>
              <div className="flex flex-col gap-y-4">
              <MoreInfoBanner otherstyles="md:hidden self-center" withoutArrows />
              <div className="flex items-center gap-x-4">
                <IconContainer icon={<TwitterIcon />} href="https://x.com/flutterbyteconf" />
                <IconContainer icon={<LinkedInIcon />} href="https://www.linkedin.com/company/flutterbytes/" />
                <MoreInfoBanner otherstyles="hidden md:flex" />
                <IconContainer icon={<MessageIcon />} href="mailto:contact.flutterbytes@gmail.com" />
                <IconContainer icon={<InstagramIcon />} href="https://www.instagram.com/flutterbytes_c" />
              </div>
              </div>
            </div>
          </section>
          <section className={`py-[127px] transition-all duration-500 flex flex-col md:justify-center md:items-center ${isDarkmode ? "hero-gradient-dark" : deviceWidth < 768 ? "hero-gradient-light-mobile" : "hero-gradient-light"}`}>
            <div className="flex flex-col items-center md:max-w-[694.62px]">
              <Image src={Hero2} alt="" className="object-contain md:rounded-[20px] mb-10 mt-9 md:mt-0 md:mb-16" />
              <div className="text-center">
                <h3 className="text-[28px] leading-[32.17px] md:text-[40px] md:leading-[45.96px] mb-8 font-semibold header-gradient">No doubts, FlutterBytes Conference 2023 was amazing!</h3>
                <div className="flex flex-col gap-y-4 justify-center">
                <MoreInfoBanner withoutArrows text="FlutterBytes Conference 2023" otherstyles="!border-[#D0EFFF] md:hidden self-center" />
                <div className="flex items-center justify-center md:gap-x-5 gap-x-[13px]">
                  <ButtonChip handleClick={() => {
                    window.open("https://drive.google.com/drive/folders/1ZJtcPiSPNKjkc1V7fxbgl7Jmjy3vOYCc?usp=share_link", "_blank")
                  }} text="View pictures" icon={<Image src={ImageIcon} alt="image" className="w-[12.58px] h-[12.58px] md:w-5 md:h-5" />} />
                  <MoreInfoBanner text="FlutterBytes Conference 2023" otherstyles="!border-[#D0EFFF] hidden md:flex" />
                  <ButtonChip handleClick={() => {
                    window.open("https://www.youtube.com/live/Yc3wAKyx2JI?si=fyREEExAdzhJLTTT", "_blank")
                  }} text="Watch event" icon={<Image src={Youtube} alt="image" className="w-[17.9px] h-[12.58px] md:w-5 md:h-5" />} />
                </div>
                </div>
              </div>
            </div>
          </section>
          <GallerySection />
          <section id="section4" className="h-[257.54px] px-5 md:px-0 md:h-[832px] section4-bg flex items-center justify-center">
            <div className="rounded-[30.77px] md:rounded-[100px] px-[25.23px] md:px-[82px] pt-[16px] md:pt-[52px] pb-[19.08px] md:pb-[62px] text-center middlecard w-[253.46px] md:w-[709px]">
              <p className="font-semibold text-[10px] md:text-lg text-[#D0EFFF] mb-2 md:mb-6">Now, we’re in 2024  <span className="font-normal">—</span>  Not settling for less</p>
              <h3 className="text-sm leading-[16.09px] md:text-[42px] md:leading-[48.26px] font-semibold text-white">And we’re planning for an even better experience!</h3>
            </div>
          </section>
          <section id="section5" className="py-8 md:py-0 px-5 md:px-0 md:h-[832px] section5-bg flex items-center justify-center">
            <div className="flex flex-col items-center w-[244px] md:w-[532px] gap-y-7 md:gap-y-16">
              <Image src={Conference} alt="conference-logo" className="w-[69.24px] h-[29.19px] md:w-auto md:h-auto" />
              <div className="text-center">
                <h3 className="text-[28px] leading-[29.37px] md:text-[56px] md:leading-[67.14px] font-semibold header-gradient mb-[11px]">FlutterBytes Conference 2024</h3>
                <p className="text-[10px] md:text-lg font-medium text-[#2A9DF4]">1st & 2nd November</p>
              </div>
              <div className="flex flex-col gap-y-4">
              <MoreInfoBanner dark withoutArrows otherstyles="md:hidden self-center" />
              <div className="flex items-center justify-between md:gap-x-4">
                <IconContainer otherstyles="!py-4 px-[9.6px]" href="https://x.com/flutterbyteconf" dark icon={<TwitterIcon dark small={deviceWidth < 768 ? true : false} />} />
                <IconContainer otherstyles="!py-4 px-[9.6px]" href="https://www.linkedin.com/company/flutterbytes/" dark icon={<LinkedInIcon dark small={deviceWidth < 768 ? true : false} />} />
                <MoreInfoBanner dark otherstyles="hidden md:flex" />
                <IconContainer otherstyles="!py-4 px-[9.6px]" href="mailto:contact.flutterbytes@gmail.com" dark icon={<MessageIcon dark small={deviceWidth < 768 ? true : false} />} />
                <IconContainer otherstyles="!py-4 px-[9.6px]" href="https://www.instagram.com/flutterbytes_c" dark icon={<InstagramIcon dark small={deviceWidth < 768 ? true : false} />} />
              </div>
              </div>
            </div>
          </section>
        </main>
      <Footer />
    </>
  );
}