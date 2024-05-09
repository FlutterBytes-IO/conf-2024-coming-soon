import Image from "next/image";

export type ImageProps = {
    src: string;
    height: number;
    width: number;
}

export default function ImageModal({openModal, image}: {openModal: boolean; image: ImageProps}) {
    return <div className={`fixed w-full h-full top-0 left-0 ${openModal ? "flex" : "hidden"} items-center justify-center bg-black/50`}>
            <Image src={image.src} alt="gallery-image" width={image.width} height={image.height} className="transition-all" />
    </div>
}