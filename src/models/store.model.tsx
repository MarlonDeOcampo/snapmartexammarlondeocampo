import { Item, ItemPayload } from "./item.model";

export type Store = {
    items: ItemPayload[];
    totalItems: number;
    addItem: (val: Item) => void;
    increment: (val: string) => void;
    decrement: (val: string) => void;
    remove: (val: string) => void;
    clear: () => void;
};

export type CartStore = {
    isCart: boolean;
    showCart: (payload: boolean) => void;
};

export type Category = {
    name: string,
    isActive: boolean;
};

export type FilterStore = {
    category: Category;
    setFilter: (filter: Category) => void;
    clearFilter: () => void;
};

export type searchStore = {
    searchString: string;
    setSearchString: (val: string) => void;
    clearSearch: () => void;
};

export type sortStore = {
    sortby: string;
    setSortString: (val: string) => void;
    clearSort: () => void;
};

export type SuccessModalStore = {
    isOpen: boolean;
    setisOpen: (val: boolean) => void;
};