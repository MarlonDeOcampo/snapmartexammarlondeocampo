import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Item, ItemPayload } from '../models/item.model';
import { CartStore, Category, FilterStore, Store } from '../models/store.model';

export const useItemStore = create<Store>()(
    persist(
        (set, get: Function) => ({
            items: [],
            totalItems: 0,

            addItem(payload: Item) {
                const data: ItemPayload[] = get().items;
                if (data.some(item => item.id === payload.id)) {
                    const Arr: ItemPayload[] = [];
                    data.forEach((item: ItemPayload) => {
                        if (item.id === payload.id) {
                            item.count = item.count + 1;
                            Arr.push(item);
                        } else {
                            Arr.push(item);
                        }
                    });
                    const total = get().items.reduce((total: number, item: ItemPayload) => {
                        return total + item.count;
                    }, 0);
                    set(() => ({
                        items: Arr,
                        totalItems: total
                    }));

                } else {
                    set((state: any) => ({
                        items: [
                            { ...payload, count: 1 },
                            ...state.items,
                        ],
                        totalItems: get().items.reduce((total: number, item: ItemPayload) => {
                            return total + item.count;
                        }, 0)
                    }));
                }
            },

            clear: () => {
                set(() => ({
                    items: [],
                }));
            },
            increment(id: string) {
                const data: ItemPayload[] = get().items;
                const Arr: ItemPayload[] = [];
                data.forEach((item: ItemPayload) => {
                    if (item.id === id) {
                        item.count = item.count + 1;
                        Arr.push(item);
                    } else {
                        Arr.push(item);
                    }

                });
                set(() => ({
                    items: Arr
                }));
            },
            decrement(id: string) {
                const data: ItemPayload[] = get().items;
                const Arr: ItemPayload[] = [];
                data.forEach((item: ItemPayload) => {
                    if (item.id === id) {
                        item.count = item.count - 1;
                        Arr.push(item);
                    } else {
                        Arr.push(item);
                    }
                });
                set(() => ({
                    items: Arr
                }));
            },
            remove(id: string) {
                const data: ItemPayload[] = get().items;
                const Arr: ItemPayload[] = [];
                data.forEach((item: ItemPayload) => {
                    if (item.id === id) {
                        return;
                    } else {
                        Arr.push(item);
                    }
                });
                set(() => ({
                    items: Arr
                }));
            }
        }),
        {
            name: 'cart',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export const useCartStore = create<CartStore>((set) => ({
    isCart: false,
    showCart(payload) {
        set((state) => ({
            ...state,
            isCart: payload
        }));
    }
}));

export const useFilterStore = create<FilterStore>((set) => ({
    category: {
        name: "",
        isActive: false
    },
    setFilter(payload: Category) {
        set((state) => ({
            ...state,
            category: {
                name: payload.name,
                isActive: !payload.isActive
            }
        }));
    },
    clearFilter() {
        set((state) => ({
            ...state,
            category: {
                name: "",
                isActive: false
            }
        }));
    }
}))

