import { Item, ItemPayload } from "../models/item.model";
import ExitIcon from "./svg/exit-icon";

type Props = {
    item: ItemPayload;
};

const CartItem: React.FC<Props> = ({ item }) => {
    return (
        <div className="text-gray-600 flex flex-row items-center space-x-4 px-4 justify-between mt-6">
            <div className="flex flex-row items-center">
                <div className="p-4 w-24 h-24">
                    <img src={item.imageUrl} alt="cartItem" className="object-scale-down max-h-20" />
                </div>
                <div className="text-sm ml-4">
                    <div>{item.productName}</div>
                    <div>{item.unitPrice}</div>
                </div>
            </div>
            <div>
                <span className="relative flex">
                    <button className="bg-red-600 text-white h-[34px] mr-[-20px] px-3">
                        <ExitIcon width="10px" height="10px" color="#ffffff" />
                    </button>
                    <input
                        id="quantity"
                        type="number"
                        name="quantity"
                        value={0}
                        min={1}
                        max={9}
                        style={{ width: "46px", height: "34px" }}
                        className="quantity-input"
                        disabled
                    />
                    <div className="input-arrow">
                        <div className="relative h-full flex flex-col">
                            <div
                                className="h-1/2 flex justify-center items-center cursor-pointer"
                            // onClick={() => increaseQty(item.productId)}
                            >
                                <i className="up-arrow"></i>
                            </div>
                            <div
                                className="h-1/2 flex justify-center items-center cursor-pointer"
                            // onClick={() => decreaseQty(item.productId)}
                            >
                                <i className="down-arrow"></i>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    );
};

export default CartItem;