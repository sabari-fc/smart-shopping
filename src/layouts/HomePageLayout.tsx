import { Outlet } from "react-router-dom";

import CategoryMenu from "../components/CategoryMenu";
import NavBar from "../components/NavBar";
import TopNavMenu from "../components/TopNavMenu";

const HomePageLayout = () => {
  // return <Outlet />;
  return (
    <>
      <TopNavMenu />
      <NavBar />
      <CategoryMenu />
      <hr />
      <Outlet />
    </>
  );
};

export default HomePageLayout;
