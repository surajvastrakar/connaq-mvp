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
    <div className="w-full h-screen flex bg-[#03577b] text-white font-poppins text-base">
      <Navbar />
      <div className="flex-1 py-4 pl-4 h-full flex flex-col gap-3">
        <div className="flex justify-between items-center pl-2 pr-4">
          <h4 className="capitalize font-semibold text-4xl">{pageTitle}</h4>
          <div>Residential</div>
        </div>
        <div className="h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
