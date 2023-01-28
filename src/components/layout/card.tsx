import { useEffect, useRef } from "react";
import { Item, ItemPayload } from "../../models/item.model";
import { useItemStore } from "../../store/useStore";

interface Props {
    data: Item[];
}

const Card: React.FC<Props> = ({ data: items }) => {
    const addItem = useItemStore(state => state.addItem);
    // const itemRef: React.MutableRefObject<HTMLDivElement[] | null[]> = useRef([]);
    const addItemToCart = (item: Item) => {
        console.log(item);
        addItem(item);
    };

    // useEffect(() => {
    //     console.log(items[0]);
    // }, [items]);
    return (
        <div className="overflow-auto relative mt-14">
            <div className="h-[80vh] grid grid-cols-cards justify-around gap-y-4">
                {items && items.map((item, i) => (
                    <div
                        key={item.id}
                        className="relative p-5 m-1 cursor-pointer border border-[#F5F5F5] w-[14rem] h-[22rem] text-gray-600 flex flex-col justify-between shadow-lg "
                    >
                        <div className="h-full">
                            <div className="flex justify-center py-4 ">
                                <img
                                    src={item.imageUrl}
                                    alt="item"
                                    className="h-24"
                                />
                            </div>
                            <div className="text-sm whitespace-nowrap  mb-2">
                                <div className=" font-semibold text-ellipsis overflow-hidden" >{item?.productName}</div>
                            </div>
                            <div className="text-xs  mb-2 ">
                                <span className="font-semibold">Category:</span> <span>{item.category}</span>
                            </div>
                            <div className="text-sm">
                                <p className="text-ellipsis3 text-xs">{item.description}</p>
                            </div>
                            <div className="mt-2 text-red-500 font-semibold">₱ {item.unitPrice}</div>
                        </div>
                        <button
                            className="bg-secondary hover:bg-primary w-full py-2 text-white text-sm"
                            onClick={() => addItemToCart(item)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Card;;;;