import { create } from 'zustand';
import { searchStore, sortStore, SuccessModalStore } from '../models/store.model';


export const useSearchStore = create<searchStore>((set) => ({
    searchString: "",
    setSearchString(payload: string) {
        set((state) => ({
            searchString: payload
        }));
    },
    clearSearch() {
        set(() => ({
            searchString: ""
        }));
    }
}));

export const useSortStore = create<sortStore>((set) => ({
    sortby: "",
    setSortString(payload: string) {
        set((state) => ({
            sortby: payload
        }));
    },
    clearSort() {
        set(() => ({
            sortby: "Low to High"
        }));
    }
}));

export const useSuccessModalStore = create<SuccessModalStore>((set) => ({
    isOpen: false,
    setisOpen(payload: boolean) {
        set(() => ({
            isOpen: payload
        }));
    }
}));
