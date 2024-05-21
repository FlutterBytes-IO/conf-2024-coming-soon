import Image from "next/image";

export type ImageProps = {
    src: string;
    height: number;
    width: number;
}

export default function ImageModal({openModal, image, onMouseLeave, onClick }: {openModal: boolean; image: ImageProps; onMouseLeave?: () => void; onClick: () => void;}) {
    return <div className={`fixed w-full transition-all duration-500 z-50 h-full top-0 left-0 ${openModal ? "flex bg-opacity-50" : "hidden bg-opacity-0"} items-center justify-center bg-black/50`} style={{backdropFilter: "blur(5px)"}} onClick={onClick}>
            <Image src={image.src} alt="gallery-image" width={image.width} height={image.height} className={`transition-all duration-500 px-4 lg:px-0 ${openModal ? "opacity-100" : "opacity-0"}`} onMouseLeave={onMouseLeave} />
    </div>
}