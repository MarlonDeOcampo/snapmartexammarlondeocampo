import { useCartStore } from "../../store/useStore";
import MiniCart from "../minicart";
import Carticon from "../svg/cart-icon";

const Header: React.FC = () => {
    const isCart = useCartStore(state => state.isCart);
    const showCart = useCartStore(state => state.showCart);
    return (
        <div className="flex justify-between items-center h-14 px-10 bg-primary text-white">
            <div><span className="font-semibold">Sample App:</span>  <span className="text-sm">By Marlon C. De Ocampo</span> </div>
            <div className="flex flex-row space-x-2 cursor-pointer" onClick={() => showCart(!isCart)}>
                <p>Cart</p>
                <div><Carticon /></div>
            </div>
            {isCart ? <MiniCart /> : null}
        </div>
    );
};

export default Header;