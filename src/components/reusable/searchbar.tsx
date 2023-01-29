import React, { useEffect, useRef } from "react";
import { useSearchStore } from "../../store/useGlobalStore";


const SearchBar = () => {
    const setSearchString = useSearchStore(state => state.setSearchString);
    const searchString = useSearchStore(state => state.searchString);
    const searchRef = useRef<HTMLInputElement>(null);

    const onInputChange = () => {
        if (searchRef?.current?.value !== undefined && searchRef?.current?.value !== null) {
            setSearchString(searchRef.current.value);
        }
    };

    return (
        <div>
            <input
                placeholder="Search Product"
                type="search"
                defaultValue=""
                ref={searchRef}
                className="border w-full focus:outline-none h-10 px-4 text-[gray] text-sm"
                onChange={onInputChange}
            />
        </div>
    );
};

export default SearchBar;