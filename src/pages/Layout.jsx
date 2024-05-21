import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  const location = useLocation();
  const pageTitle =
    location.pathname == "/"
      ? "Dashboard"
      : location.pathname == "/settings"
      ? "Settings"
      : "";

  return (
    <div className="w-screen h-screen flex bg-primary text-white font-roboto text-base">
      <Navbar />
      <div className="w-[calc(100vw-72px)] py-4 pl-4 h-full flex flex-col gap-3">
        <div className="flex justify-between items-center pl-2 pr-4">
          <h4 className="capitalize font-semibold text-4xl">{pageTitle}</h4>
          <div>Residential</div>
        </div>
        <div className="h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
