import { ReactNode, useCallback, useState } from "react";
import { useSuccessModalStore } from "../../store/useGlobalStore";
import SuccessModal from "../modal/success.modal";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

interface Props {
    children?: ReactNode;
}

const Layout = ({ children }: Props) => {
    const [toggled, setToggled] = useState(false);
    const setisOpen = useSuccessModalStore(state => state.setisOpen);
    const isOpen = useSuccessModalStore(state => state.isOpen);
    const toggleMenu = useCallback(() => {
        setToggled(prev => !prev);
    }, []);

    return (
        <div className="relative bg-neutral">
            {isOpen ? <SuccessModal onClose={setisOpen} /> : null}
            <Header />
            <div className={`h-[calc(100%-7rem)] fixed z-10 shadow-lg bg-white w-[${!toggled ? "5rem" : "18rem"}]`}>
                <div>
                    <Sidebar toggled={toggled} toggleMenu={toggleMenu} />
                </div>
            </div>
            <div className={`${!toggled ? "w-[calc(100%-3.6rem]  ml-[3.6rem] " : "w-[calc(100%-18rem)]  ml-[18rem]"} overflow-auto`}>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;