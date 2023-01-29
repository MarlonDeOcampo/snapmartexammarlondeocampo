import { useCallback, useEffect, useState } from "react";
import Card from "../components/card";
import SelectField from "../components/reusable/select-field";
import useFetchData from "../hooks/useFetchData";
import { useSearchStore, useSortStore } from "../store/useGlobalStore";
import { useFilterStore } from "../store/useStore";

const Home: React.FC = () => {
    const category = useFilterStore(state => state.category);
    const searchString = useSearchStore(state => state.searchString);
    const sortby = useSortStore(state => state.sortby);
    const setSortString = useSortStore(state => state.setSortString);
    const url = "https://mocki.io/v1/6da62792-8543-43e0-9d84-32baf3125060";
    const method = "get";
    const options = [
        { name: "High to Low", value: "0" },
        { name: "Low to High", value: "1" },
    ];
    const { data, error, isLoading } = useFetchData(
        url,
        method,
        category,
        searchString,
        sortby
    );

    useEffect(() => {
        setSortString(options[1]?.name);
    }, []);
    return (
        <div className="w-full">
            <div className="bg-secondary w-full flex justify-end items-center h-10 px-10">
                <SelectField
                    classes="h-6 w-[10rem] border-[#e5e7eb] border text-center"
                    label="Sort By"
                    setValue={setSortString}
                    value={sortby}
                    options={options}
                />
            </div>

            <Card data={data} />
        </div>
    );
};
export default Home;