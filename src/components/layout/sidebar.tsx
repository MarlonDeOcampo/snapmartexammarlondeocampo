import { useEffect } from "react";
import { Category } from "../../models/store.model";
import { useFilterStore } from "../../store/useStore";
import Toggle from "../svg/toggle";

type Props = {
    toggled: boolean;
    toggleMenu: () => void;
};

const Sidebar: React.FC<Props> = ({ toggled, toggleMenu }) => {
    const setFilter = useFilterStore(state => state.setFilter);
    const category = useFilterStore(state => state.category);
    const clearFilter = useFilterStore(state => state.clearFilter);
    const categoryItem = [
        { name: "Cloths", isActive: false },
        { name: "Gadgets", isActive: false },
        { name: "Groceries", isActive: false },
        { name: "Automotive", isActive: false },
        { name: "Toys", isActive: false },
        { name: "Furniture", isActive: false },
        { name: "LifeStyle", isActive: false }
    ];

    return (
        <div className="w-full">
            <div className="px-2 py-10 flex justify-end">
                <button className="w-10 h-10 flex justify-center items-center rounded border " onClick={toggleMenu}>
                    <Toggle />
                </button>
            </div>
            {!toggled ?
                <div></div>
                :
                <div className="px-4">
                    <div className="mb-2 flex justify-between items-center">
                        <div className="text-xl font-semibold">Categories</div>
                        <button className="text-sm text-red-500" onClick={clearFilter}>Reset</button>
                    </div>
                    <hr></hr>
                    <div className="mt-4 w-[16rem]">
                        {categoryItem.map((item: Category) => (
                            <div
                                className={`h-10 hover:bg-secondary flex items-center cursor-pointer ${category.isActive && category.name === item.name ? "bg-primary text-white" : null}`}
                                onClick={() => setFilter(item)}
                                key={item.name}
                            >
                                <div className={`text-md ml-2 ${!category.isActive && category.name !== item.name ? "text-primary" : null}`}>
                                    {item.name}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            }
        </div>
    );
};

export default Sidebar;