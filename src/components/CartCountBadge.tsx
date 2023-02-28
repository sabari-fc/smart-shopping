const cartIcon = require("../icons/icon_cart.svg").default;

type BadgeProps = {
  count: number;
};
const CartCountBadge = (props: BadgeProps) => {
  return (
    <div className="flex flex-row mx-4 font-bold">
      <div className="relative items-center justify-center">
        <img src={cartIcon} alt="nav-Item" className="w-6 mr-2" />
        {props.count > 0 && (
          <div className="absolute w-4 h-4 bg-red-color rounded-full flex items-center justify-center p-2 left-[10px] -top-[2px] border border-white text-sm text-white">
            <span>{props.count}</span>
          </div>
        )}
      </div>
      <span>Cart</span>
    </div>
  );
};

export default CartCountBadge;
