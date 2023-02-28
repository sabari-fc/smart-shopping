import TopNavItem from "../components/TopNavItem";
import VerticalDivider from "../components/VerticalDivider";

const locationIcon = require("../icons/icon_location.svg").default;
const truckIcon = require("../icons/icon_truck.svg").default;
const discountIcon = require("../icons/icon_discount.svg").default;

const TopNavMenu = () => {
  return (
    <div className="flex flex-row justify-between px-[60px] py-2 bg-top-nav-color">
      <span className="text-sm text-black-color">
        Welcome to worldwide Smart Shopping!
      </span>
      <div className="flex flex-row">
        <TopNavItem icon={locationIcon} label="Deliver to 423651" />
        <VerticalDivider />
        <TopNavItem icon={truckIcon} label="Track your order" />
        <VerticalDivider />

        <TopNavItem icon={discountIcon} label="All Offers" />
      </div>
    </div>
  );
};

export default TopNavMenu;
