"use client"

import { useState } from "react";
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
    const [currentImgPrev, setCurrentImgPrev] = useState<ImageProps>({ src: "", height: 0, width: 0});
    const [openModal, setOpenModal] = useState<boolean>(false);
    const deviceWidth = window.innerWidth;

    function calcOffsetPosition(val: number): number {
        return ((val / deviceWidth) * 100)
    }

    function previewImage(image: ImageProps) {
        setCurrentImgPrev(image);
        setOpenModal(true);
    }
   
    return <section className="h-[832px] gallery-sec-bg relative flex items-center justify-center overflow-hidden">
        <Image onMouseOver={() => previewImage(PrevImage1)} onMouseLeave={() => setOpenModal(false)} src={GalImage1} alt="gallery-img-1" width={329} height={163.88} className="absolute rounded-[10px] top-[78px]" style={{left: `${calcOffsetPosition(161)}%`}} />
        <Image onMouseOver={() => previewImage(PrevImage2)} onMouseLeave={() => setOpenModal(false)} src={GalImage2} alt="gallery-img-2" width={206} height={102.61} className="absolute rounded-[10px] top-[125px]" style={{right: `${calcOffsetPosition(388)}%`}} />
        <Image onMouseOver={() => previewImage(PrevImage3)} onMouseLeave={() => setOpenModal(false)} src={GalImage3} alt="gallery-img-3" width={250} height={175.53} className="absolute rounded-[10px] -top-2.5" style={{right: `${calcOffsetPosition(-9)}%`}} />
        <div className="text-center w-[545px]">
            <h3 className="font-semibold text-3xl md:text-[42px] md:leading-[48.26px] text-white">
                Lots of technical stuff learnt, connections made, evidences shown.
            </h3>
        </div>
        <Image onMouseOver={() => previewImage(PrevImage4)} onMouseLeave={() => setOpenModal(false)} src={GalImage4} alt="gallery-img-4" width={170} height={119} className="absolute rounded-[10px] top-[364px]" style={{left: `${calcOffsetPosition(-19)}%`}} />
        <Image onMouseOver={() => previewImage(PrevImage5)} onMouseLeave={() => setOpenModal(false)} src={GalImage5} alt="gallery-img-5" width={250} height={175.53} className="absolute rounded-[10px] top-[363px]" style={{right: `${calcOffsetPosition(-1)}%`}} />
        <Image onMouseOver={() => previewImage(PrevImage6)} onMouseLeave={() => setOpenModal(false)} src={GalImage6} alt="gallery-img-6" width={250} height={175.53} className="absolute rounded-[10px] bottom-[104.47px]" style={{left: `${calcOffsetPosition(271)}%`}} />
        <Image onMouseOver={() => previewImage(PrevImage7)} onMouseLeave={() => setOpenModal(false)} src={GalImage7} alt="gallery-img-7" width={170} height={119} className="absolute rounded-[10px] bottom-[163px]" style={{right: `${calcOffsetPosition(388)}%`}} />
        <ImageModal image={currentImgPrev} openModal={openModal} />
    </section>
}