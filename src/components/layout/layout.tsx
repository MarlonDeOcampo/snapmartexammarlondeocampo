import { ReactNode, useCallback, useState } from "react";
import MiniCart from "../minicart";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

interface Props {
    children?: ReactNode;
    // any props that come into the component
}

const Layout = ({ children }: Props) => {
    const [toggled, setToggled] = useState(false);

    const toggleMenu = useCallback(() => {
        setToggled(prev => !prev);
    }, []);
    return (
        <div className="relative bg-neutral">
            <Header />
            <div className={`h-[calc(100%-7rem)] fixed z-10 shadow-lg bg-white w-[${!toggled ? "5rem" : "18rem"}]`}>
                <div>
                    <Sidebar toggled={toggled} toggleMenu={toggleMenu} />
                </div>
            </div>
            <div className={`${!toggled ? "w-[calc(100%-5rem)]  ml-[5rem] " : "w-[calc(100%-18rem)]  ml-[18rem]"} overflow-auto`}>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
<div></div>;