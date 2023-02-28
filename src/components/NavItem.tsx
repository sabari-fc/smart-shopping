type NavItemProps = {
  label: string;
  image: string;
  loggedIn?: boolean;
};

const expandIcon = require("../icons/icon_expand.svg").default;

const NavItem = (props: NavItemProps) => {
  return (
    <div className=" flex flex-row items-center gap-x-2 text-base text-black-color font-bold mx-6">
      <img src={props.image} alt="nav-Item" className="w-6" />

      <span>{props.label}</span>

      {props.loggedIn && (
        <img src={expandIcon} alt="nav-Item" className="w-6" />
      )}
    </div>
  );
};

export default NavItem;
