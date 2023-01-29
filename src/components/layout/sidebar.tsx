import { useRef } from "react";
import { Category } from "../../models/store.model";
import { useSearchStore } from "../../store/useGlobalStore";
import { useFilterStore } from "../../store/useStore";
import SearchBar from "../reusable/searchbar";
import Toggle from "../svg/toggle";

type Props = {
    toggled: boolean;
    toggleMenu: () => void;
};

const Sidebar: React.FC<Props> = ({ toggled, toggleMenu }) => {
    const setFilter = useFilterStore(state => state.setFilter);
    const category = useFilterStore(state => state.category);
    const clearFilter = useFilterStore(state => state.clearFilter);
    const clearSearch = useSearchStore(state => state.clearSearch);
    const searchRef = useRef<HTMLInputElement>(null);
    const categoryItem = [
        { name: "Cloths", isActive: false },
        { name: "Gadgets", isActive: false },
        { name: "Groceries", isActive: false },
        { name: "Automotive", isActive: false },
        { name: "Toys", isActive: false },
        { name: "Furniture", isActive: false },
        { name: "LifeStyle", isActive: false }
    ];


    const toggleClearFilter = () => {
        clearFilter();
        clearSearch();
    };
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
                    <div className="flex justify-end mb-4">
                        <button className="text-sm text-red-500" onClick={toggleClearFilter}>Reset Filter</button>
                    </div>
                    <SearchBar ref={searchRef} />
                    <div className="mb-2 flex items-center mt-4">
                        <div className="text-xl font-semibold">Categories</div>
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