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