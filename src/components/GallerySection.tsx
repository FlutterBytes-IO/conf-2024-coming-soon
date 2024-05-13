"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

import GalImage1 from "@/assets/images/GalImage1.png";
import GalImage2 from "@/assets/images/GalImage2.png";
import GalImage3 from "@/assets/images/GalImage3.png";
import GalImage4 from "@/assets/images/GalImage4.png";
import GalImage5 from "@/assets/images/GalImage5.png";
import GalImage6 from "@/assets/images/GalImage6.png";
import GalImage7 from "@/assets/images/GalImage7.png";
import PrevImage1 from "@/assets/images/PrevImage1.png";
import PrevImage2 from "@/assets/images/PrevImage2.png";
import PrevImage3 from "@/assets/images/PrevImage3.png";
import PrevImage4 from "@/assets/images/PrevImage4.png";
import PrevImage5 from "@/assets/images/PrevImage5.png";
import PrevImage6 from "@/assets/images/PrevImage6.png";
import PrevImage7 from "@/assets/images/PrevImage7.png";
import ImageModal, { ImageProps } from "./Modals/ImageModal";

export default function GallerySection() {
    const [currentImgPrev, setCurrentImgPrev] = useState<ImageProps>({ src: "", height: 0, width: 0 });
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [deviceWidth, setDeviceWidth] = useState<number>(0);

    useEffect(() => {
        setDeviceWidth(window.innerWidth)
    }, []);

    function previewImage(image: ImageProps) {
        setCurrentImgPrev(image);
        setOpenModal(true);
    }

    console.log(currentImgPrev)

    function hideImage() {
        setOpenModal(false);
        setCurrentImgPrev({ src: "", height: 0, width: 0 })
    }

    return (
        <section className="h-[746px] px-5 md:px-0 md:h-[832px] gallery-sec-bg relative flex items-center justify-center overflow-hidden">
            <Image
                onMouseEnter={() => previewImage(PrevImage1)}
                src={GalImage1}
                alt="gallery-img-1"
                width={329}
                height={163.88}
                className="absolute rounded-[5.84px] md:rounded-[10px] top-[90.05px] -left-7 md:left-[161px] md:top-[78px] w-[176.67px] md:w-auto h-[88px] md:h-auto"
            />
            <Image
                onMouseEnter={() => previewImage(PrevImage2)}
                src={GalImage2}
                alt="gallery-img-2"
                width={206}
                height={102.61}
                className="absolute rounded-[5.84px] md:rounded-[10px] top-[195.21px] md:top-[125px] right-[90px] md:right-[388px] w-[96.36px] md:w-auto h-12 md:h-auto"
            />
            <Image
                onMouseEnter={() => previewImage(PrevImage3)}
                src={GalImage3}
                alt="gallery-img-3"
                width={250}
                height={175.53}
                className="absolute rounded-[5.84px] md:rounded-[10px] -top-[7.42px] md:-top-2.5 -right-[16.42px] md:-right-[9px] w-[142.42px] md:w-auto h-[100px] md:h-auto"
            />
            <div className="text-center w-[326px] md:w-[545px]">
                <h3 className="font-semibold text-[28px] leading-[32.17px] md:text-[42px] md:leading-[48.26px] text-white">
                    Lots of technical stuff learnt, connections made, evidences shown.
                </h3>
            </div>
            <Image
                onMouseEnter={() => previewImage(PrevImage4)}
                src={GalImage4}
                alt="gallery-img-4"
                width={170}
                height={119}
                className="absolute rounded-[10px] md:top-[364px] md:-left-[19px] -left-3 bottom-[238px] w-[97.14px] md:w-auto h-[68px] md:h-auto"
            />
            <Image
                onMouseEnter={() => previewImage(PrevImage5)}
                src={GalImage5}
                alt="gallery-img-5"
                width={250}
                height={175.53}
                className="absolute rounded-[10px] md:top-[363px] bottom-[196px] -right-1 w-[113.94px] md:w-auto h-20 md:h-auto"
            />
            <Image
                onMouseEnter={() => previewImage(PrevImage6)}
                src={GalImage6}
                alt="gallery-img-6"
                width={250}
                height={175.53}
                className="absolute rounded-[10px] md:bottom-[104.47px] bottom-[24.72px] -left-5 md:left-[271px] w-[142.42px] md:w-auto h-[100px] md:h-auto"
            />
            <Image
                onMouseEnter={() => previewImage(PrevImage7)}
                src={GalImage7}
                alt="gallery-img-7"
                width={170}
                height={119}
                className="absolute rounded-[10px] bottom-[114.01px] md:bottom-[163px] md:right-[388px] right-1/2 w-[102.86px] md:w-auto h-[72px] md:h-auto translate-x-1/2"
            />
          <ImageModal image={currentImgPrev} openModal={openModal} onMouseLeave={hideImage} onClick={hideImage} />
        </section>
    );
}
