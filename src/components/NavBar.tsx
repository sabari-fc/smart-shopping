import ShopLogo from "./ShopLogo";
import SearchField from "./SearchField";
import NavBarTrailing from "./NavBarTrailing";

const NavBar = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center px-[60px] py-5">
      <ShopLogo />
      <SearchField />
      <NavBarTrailing />
    </div>
  );
};

export default NavBar;
