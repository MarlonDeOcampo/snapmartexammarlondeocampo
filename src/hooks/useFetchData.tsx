import axios from 'axios';
import { useEffect, useState } from 'react';
import { Item } from '../models/item.model';
import { Category } from '../models/store.model';

const useFetchData = (url: string, method: string, filter: Category, searchString: string, sortby: string) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    function compare(a: Item, b: Item) {
        if (sortby === "Low to High") {
            if (a.unitPrice < b.unitPrice) {
                return -1;
            }
            if (a.unitPrice > b.unitPrice) {
                return 1;
            }
            return 0;
        } else {
            if (a.unitPrice > b.unitPrice) {
                return -1;
            }
            if (a.unitPrice < b.unitPrice) {
                return 1;
            }
            return 0;
        }
    }

    useEffect(() => {
        setIsLoading(true);
        if (method === "get") {
            axios
                .get(url)
                .then((res) => {
                    let result = res.data.sort(compare);
                    if (filter.name.length === 0 && searchString.length === 0) {
                        setData(result);
                        return;
                    }
                    if (filter.name.length > 0) {
                        const data = res?.data.filter((item: Item) => item.category === filter.name.toLowerCase());
                        result = data;
                    }
                    if (result.length > 0) {
                        const searched = result.filter((item: Item) => item.productName.toLowerCase().startsWith(searchString.toLowerCase()));
                        result = searched;
                    } else {
                        const searched = res.data.filter((item: Item) => item.productName.toLowerCase().startsWith(searchString.toLowerCase()));
                        result = searched;
                    }
                    setData(result);
                })
                .catch((err) => {
                    setError(err);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [url, filter?.name, searchString, sortby]);

    return { data, error, isLoading };
};

export default useFetchData;