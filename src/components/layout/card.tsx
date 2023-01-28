import { useEffect } from "react";

interface Item {
    id: string;
    productName: string;
    description: string;
    unitPrice: number;
    category: string;
    imageUrl: string;
}

interface Props {
    data: Item[];
}
const Card: React.FC<Props> = ({ data: items }) => {

    useEffect(() => {
        console.log(items[0]);
    }, [items]);
    return (
        <div className="overflow-auto relative mt-14">
            <div className="h-[80vh] grid grid-cols-cards justify-around gap-y-4">
                {items && items.map((item) => (
                    <div key={item.id} className="p-5 m-1 cursor-pointer border w-[12rem] h-[16rem]">
                        <div className="text-red=300" >{item?.productName}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;;;;