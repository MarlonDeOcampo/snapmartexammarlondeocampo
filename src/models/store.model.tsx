import { ItemPayload } from "./item.model";

export type Store = {
    items: ItemPayload[];
    setItemData: (val: any) => void;
    addItem: (val: any) => void;
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