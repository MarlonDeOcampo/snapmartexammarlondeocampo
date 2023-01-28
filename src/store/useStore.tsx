import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ItemPayload } from '../models/item.model';
import { CartStore, Category, FilterStore, Store } from '../models/store.model';

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

