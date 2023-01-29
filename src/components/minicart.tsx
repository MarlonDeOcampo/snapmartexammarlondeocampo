import { useEffect, useRef } from "react";
import { ItemPayload } from "../models/item.model";
import { useSuccessModalStore } from "../store/useGlobalStore";
import { useCartStore, useItemStore } from "../store/useStore";
import CartItem from "./cart-item";
import ExitIcon from "./svg/exit-icon";

const MiniCart = () => {
    const items = useItemStore(state => state.items);
    const showCart = useCartStore(state => state.showCart);
    const clear = useItemStore(state => state.clear);
    const setisOpen = useSuccessModalStore(state => state.setisOpen);
    const cartRef = useRef<HTMLInputElement>(null);


    const totalItems = items.reduce((total: number, item: ItemPayload) => {
        return total + item.count;
    }, 0);

    const totalPrice = items.reduce((total: number, item: ItemPayload) => {
        const totalPerItem = item.unitPrice * item.count;
        return total + totalPerItem;
    }, 0);

    const onCheckout = () => {
        clear();
        showCart(false);
        setisOpen(true);
    };

    useEffect(() => {
        let handleMenu = (e: any) => {
            if (cartRef.current !== null) {
                if (!cartRef.current.contains(e.target)) {
                    setTimeout(() => {
                        showCart(false);
                    }, 150);
                }
            }
        };
        document.addEventListener("mousedown", handleMenu);
        return () => {
            document.removeEventListener("mousedown", handleMenu);
        };
    }, []);

    return (
        <div className="absolute max-h-[80vh] w-[25rem] z-50 top-16 right-10 bg-neutral-50 shadow-lg" ref={cartRef}>
            <div className="h-12 bg-primary flex flex-row items-center justify-between px-4 py-2">
                <div className="font-semibold">My Cart</div>
                <div className="flex flex-row items-center space-x-4">
                    <div className="cursor-pointer" onClick={() => showCart(false)}>
                        <ExitIcon width="14px" height="14px" color="#FFFFFF" />
                    </div>
                </div>
            </div>
            {items.length > 0 ?
                <>
                    <div className="overflow-y-auto">
                        <div className="flex justify-end">
                            <button className="text-red-500 text-sm underline cursor-pointer mr-4 mt-4" onClick={() => clear()}>Clear Cart</button>
                        </div>
                        <div className="max-h-[55vh]">
                            {items.map((item) => (
                                <CartItem item={item} key={item.id} />
                            ))}
                        </div>
                    </div>
                    <div className="h-40 bg-neutral-200 text-black p-6 flex flex-col space-y-4 ">
                        <div className="flex justify-between text-md">
                            <div className="font-semibold">Total Items</div>
                            <div className="text-red-500 font-semibold">{totalItems}</div>
                        </div>
                        <div className="flex justify-between font-semibold">
                            <div className="flex items-end">Total Amount</div>
                            <div className="text-xl text-red-500">₱ {totalPrice.toFixed(2)}</div>
                        </div>
                        <button className="bg-secondary hover:bg-primary text-white py-2" onClick={onCheckout}>Checkout</button>
                    </div>
                </>
                :
                <div className="h-20 w-full flex items-center justify-center text-black">
                    No Item/s Found
                </div>
            }
        </div>
    );
};

export default MiniCart;