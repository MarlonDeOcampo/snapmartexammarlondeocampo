import Toggle from "../svg/toggle";

type Props = {
    toggled: boolean;
    toggleMenu: () => void;
};

const Sidebar: React.FC<Props> = ({ toggled, toggleMenu }) => {

    return (
        <div className="w-full">
            <div className="px-2 py-10">
                <button className="w-12 h-12 flex justify-center items-center rounded border " onClick={toggleMenu}>
                    <Toggle />
                </button>
            </div>
        </div>
    );
};

export default Sidebar;