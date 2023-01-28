import axios from 'axios';
import { useEffect, useState } from 'react';
import { Item } from '../models/item.model';
import { Category } from '../models/store.model';


const useFetchData = (url: string, method: string, filter: Category) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        if (method === "get") {
            axios
                .get(url)
                .then((res) => {
                    if (filter !== undefined && filter !== null && filter.name.length > 0) {
                        const data = res?.data.filter((item: Item) => item.category === filter.name.toLowerCase());
                        setData(data);
                    } else {
                        setData(res.data);
                    }
                })
                .catch((err) => {
                    setError(err);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [url, filter?.name]);
    return { data, error, isLoading };
};

export default useFetchData;