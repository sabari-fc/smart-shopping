import VerticalDivider from "../components/VerticalDivider";
import NavItem from "../components/NavItem";
import { useState } from "react";
import CartCountBadge from "./CartCountBadge";

const personIcon = require("../icons/icon_person.svg").default;

const NavBarTrailing = () => {
  const ls = window.localStorage;
  const [loginStatus] = useState(ls.getItem("loggedIn"));
  console.log(loginStatus);
  return (
    <div className="flex flex-row">
      <CartCountBadge count={0} />
      <VerticalDivider />
      <NavItem
        label={loginStatus === "true" ? "My Account" : "Sign Up/Sign In"}
        image={personIcon}
        loggedIn={true}
      />
    </div>
  );
};

export default NavBarTrailing;
