import { useCallback, useEffect } from "react";
import Card from "../components/layout/card";
import useFetchData from "../hooks/useFetchData";

const Home = () => {
    const { data, error, isLoading } = useFetchData("https://mocki.io/v1/6da62792-8543-43e0-9d84-32baf3125060", "get");

    return (
        <div className="w-full ">
            <Card data={data} />
        </div>
    );
};
export default Home;
<div>This is Home</div>;