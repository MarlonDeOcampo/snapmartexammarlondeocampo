import { create } from 'zustand';
import { persist, devtools, createJSONStorage, StateStorage } from 'zustand/middleware';
import { Item, ItemPayload } from '../models/item.model';


type Store = {
    items: ItemPayload[];
    setItemData: (val: any) => void;
    addItem: (val: any) => void;
    clear: () => void;
};

type CartStore = {
    isCart: boolean;
    showCart: (payload: boolean) => void;
};

export const useItemStore = create<Store>()(
    persist(
        (set, get: () => any) => ({
            items: [],
            setItemData(payload: ItemPayload) {
                set((state: any) => ({
                    ...state,
                    item: [],
                }));
            },

            addItem(payload: any) {
                set((state: any) => ({
                    items: [
                        { ...payload, count: 1 },
                        ...state.items,
                    ],
                }));
            },
            clear: () => {
                set(() => ({
                    items: [],
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
    },
}))

