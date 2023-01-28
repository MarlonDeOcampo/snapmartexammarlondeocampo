import Carticon from "../svg/cart-icon";

const Header = () => {
    return (
        <div className="flex justify-between items-center h-14 px-10 bg-primary text-white">
            <div>My Exam</div>
            <div className="flex flex-row space-x-2 cursor-pointer">
                <p>Cart</p>
                <Carticon />
            </div>
        </div>
    );
};

export default Header;