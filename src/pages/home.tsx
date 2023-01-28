import Card from "../components/layout/card";
import useFetchData from "../hooks/useFetchData";
import { useFilterStore } from "../store/useStore";

const Home = () => {
    const category = useFilterStore(state => state.category);
    const { data, error, isLoading } = useFetchData("https://mocki.io/v1/6da62792-8543-43e0-9d84-32baf3125060", "get", category);
    return (
        <div className="w-full ">
            <Card data={data} />
        </div>
    );
};
export default Home;