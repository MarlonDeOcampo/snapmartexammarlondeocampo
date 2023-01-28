import axios from 'axios';
import { useEffect, useState } from 'react';


const useFetchData = (url: string, method: string) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        if (method === "get") {
            axios
                .get(url)
                .then((res) => {
                    setData(res?.data);
                })
                .catch((err) => {
                    setError(err);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [url]);
    return { data, error, isLoading };
};

export default useFetchData;