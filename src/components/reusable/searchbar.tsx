import { forwardRef } from "react";
import { useSearchStore } from "../../store/useGlobalStore";


const SearchBar = forwardRef<HTMLInputElement>((props, ref) => {
    const setSearchString = useSearchStore(state => state.setSearchString);
    const searchString = useSearchStore(state => state.searchString);

    const onInputChange = () => {
        if (typeof ref === 'function') return;
        if (ref?.current?.value !== undefined && ref?.current?.value !== null) {
            setSearchString(ref.current.value);
        }
    };

    return (
        <div>
            <input
                placeholder="Search Product"
                type="search"
                ref={ref}
                value={searchString}
                className="border w-full focus:outline-none h-10 px-4 text-[gray] text-sm"
                onChange={onInputChange}
            />
        </div>
    );
});

export default SearchBar;