import { useEffect } from "react";
import { useCartStore, useItemStore } from "../store/useStore";
import CartItem from "./cart-item";
import ExitIcon from "./svg/exit-icon";
import RecyclebonIcon from "./svg/recyclebin.icon";

const MiniCart = () => {
    const items = useItemStore(state => state.items);
    const showCart = useCartStore(state => state.showCart);
    const clear = useItemStore(state => state.clear);
    useEffect(() => {
        console.log(items);
    }, [items]);
    return (
        <div className="absolute max-h-[80vh] w-[25rem] z-50 top-16 right-10 bg-neutral-100 shadow-lg">
            <div className="bg-primary flex flex-row items-center justify-between px-4 py-2">
                <div className="font-bold">My Cart</div>
                <div className="flex flex-row items-center space-x-4">
                    <button className="bg-red-600 py-2 px-4 text-sm" onClick={() => clear()}>Clear Cart</button>
                    <div className="cursor-pointer" onClick={() => showCart(false)}>
                        <ExitIcon width="14px" height="14px" color="#FFFFFF" />
                    </div>
                </div>
            </div>
            {items.length > 0 ?
                <>
                    <div className="overflow-y-auto">
                        <div className="max-h-[50vh]">
                            {items.map((item) => (
                                <CartItem item={item} />
                            ))}
                        </div>
                    </div>
                    <div className="h-40 bg-neutral-200 text-black p-6 flex flex-col space-y-4 mt-10">
                        <div className="flex justify-between">
                            <div>Total Items</div>
                            <div className="text-red-500 font-semibold">{items.length}</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Total Amount</div>
                            <div>price</div>
                        </div>
                        <button className="bg-primary text-white py-2">Checkout</button>
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