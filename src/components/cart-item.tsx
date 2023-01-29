import React from "react";
import { ItemPayload } from "../models/item.model";
import { useItemStore } from "../store/useStore";
import ExitIcon from "./svg/exit-icon";

type Props = {
    item: ItemPayload;
};

const CartItem: React.FC<Props> = ({ item }) => {
    const increment = useItemStore(state => state.increment);
    const decrement = useItemStore(state => state.decrement);
    const remove = useItemStore(state => state.remove);
    return (
        <>
            <div className="text-gray-600 flex flex-row items-center space-x-4 px-4 justify-between hover:bg-gray-100 pt-2">
                <div className="flex flex-row items-center">
                    <div className="p-4 w-24 h-24">
                        <img src={item.imageUrl} alt="cartItem" className="object-scale-down max-h-20 pb-2" />
                    </div>
                    <div className="text-sm ml-4">
                        <div>{item.productName}</div>
                        <div className="font-semibold">₱  {(item.unitPrice * item.count).toFixed(2)}</div>
                    </div>
                </div>

                <div>
                    <span className="relative flex ">
                        <div className="border border-[#efefefe] text-white h-[34px] mr-[-20px] px-3 items-center justify-center flex">
                            <button className="bg-gray-400 hover:bg-red-500 h-5 w-5 flex justify-center items-center" onClick={() => remove(item.id)} >
                                <ExitIcon width="8px" height="8px" color="#ffffff" />
                            </button>
                        </div>
                        <input
                            id="quantity"
                            type="number"
                            name="quantity"
                            value={item.count}
                            style={{ width: "46px", height: "34px" }}
                            className="quantity-input"
                            disabled
                        />
                        <div className="input-arrow">
                            <div className="relative h-full flex flex-col">
                                <div
                                    className="h-1/2 flex justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        if (item.count < 99) {
                                            increment(item.id);
                                        }
                                    }}
                                >
                                    <i className="up-arrow"></i>
                                </div>
                                <div
                                    className="h-1/2 flex justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        if (item.count > 1) {
                                            decrement(item.id);
                                        }
                                    }}
                                >
                                    <i className="down-arrow"></i>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
            <hr className="mx-4 my-2" />
        </>
    );
};

export default CartItem;