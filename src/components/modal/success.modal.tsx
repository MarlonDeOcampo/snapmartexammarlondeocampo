import ExitIcon from "../svg/exit-icon";
import { createPortal } from "react-dom";

interface Props {
    onClose: (val: boolean) => void;
    message?: string,
    title?: string,
    image?: string,
}

const SuccessModal = ({
    message = "Thank you for purchasing",
    title = "Success!",
    onClose
}: Props) => {
    return createPortal(
        <>
            <div
                id="staticModal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true"
                className="fixed top-0 left-0 right-0 z-40 md:inset-0 h-modal md:h-full w-full flex items-center justify-center"
            >
                <div className="bg-white mt-2 p-4 rounded w-[24rem] bg-slate-50 shadow-xl z-50">
                    <div className="flex justify-end items-center cursor-pointer" onClick={() => onClose(false)}>
                        <ExitIcon width="14px" height="14px" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4">
                        <img src={"src/assets/check-icon.png"} alt="image" width="100px" height="100px" />
                        <h3 className="text-[#48c49c] font-bold text-lg">{title.toUpperCase()}</h3>
                        <div className="font-bold text-primary">{message}</div>
                    </div>
                    <div className="flex flex-row justify-center items-center py-4 px-2">
                        <button className=" bg-primary rounded p-2 w-40 text-white" onClick={() => onClose(false)}>Close</button>
                    </div>
                </div>
            </div>
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#000000] opacity-20 z-30" />
        </>, document.body
    );
};

export default SuccessModal;