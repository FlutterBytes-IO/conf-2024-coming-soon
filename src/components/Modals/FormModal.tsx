import GetNotifiedForm from "../GetNotifiedForm";


export default function FormModal({ openModal, closeModal }: { openModal: boolean; closeModal: () => void; }) {
    return <div onClick={(e) => e.target === e.currentTarget && closeModal()} className={`fixed w-full transition-all duration-500 z-50 h-full top-0 left-0 ${openModal ? "flex bg-opacity-50" : "hidden bg-opacity-0"} items-center justify-center bg-black/50`}>
        <div className="rounded-xl p-7 gap-2.5 flex flex-col bg-white mx-4 md:mx-0 md:w-[430px] md:h-[196px]">
            <p className="text-[#576672] text-center">To get the latest updates about FlutterBytes Conference 2024 directly in your email inbox, subscribe below.</p>
            <GetNotifiedForm closeModal={closeModal} />
        </div>
    </div>
}