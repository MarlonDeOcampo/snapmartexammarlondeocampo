import { ReactNode, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

interface Props {
    children?: ReactNode;
    // any props that come into the component
}

const Layout = ({ children }: Props) => {
    const [toggled, setToggled] = useState(true);
    return (
        <>
            <Header />
            <div className={`h-[calc(100%-7rem)] fixed z-10 shadow-lg bg-white w-[${toggled ? "5rem" : "20rem"}]`}>
                <div>
                    <Sidebar />
                </div>
            </div>
            <div className={`${toggled ? "w-[calc(100%-5rem)]  ml-[5rem] " : "w-[calc(100%-20rem)]  ml-[20rem]"} overflow-auto `}>
                {children}
            </div>
            <Footer />
        </>
    );
};

export default Layout;
<div></div>;