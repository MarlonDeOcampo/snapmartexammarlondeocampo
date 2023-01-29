import { create } from 'zustand';

export type searchStore = {
    searchString: string;
    setSearchString: (val: string) => void;
};

export type sortStore = {
    sortby: string;
    setSortString: (val: string) => void;
};

export type SuccessModalStore = {
    isOpen: boolean;
    setisOpen: (val: boolean) => void;
};

export const useSearchStore = create<searchStore>((set) => ({
    searchString: "",
    setSearchString(payload: string) {
        set((state) => ({
            ...state,
            searchString: payload
        }));
    }
}));

export const useSortStore = create<sortStore>((set) => ({
    sortby: "",
    setSortString(payload: string) {
        set((state) => ({
            sortby: payload
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
