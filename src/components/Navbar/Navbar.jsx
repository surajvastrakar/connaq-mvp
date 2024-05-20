import { NavLink } from "react-router-dom";
import { CiGrid42, CiSettings } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="h-full border-r-2 border-gray-300 flex flex-col gap-3 p-2">
      <NavLink
        to="/"
        aria-label="Dashboard"
        end
        className={({ isActive }) =>
          isActive ? "bg-gray-200 p-2 rounded text-[#03577b]" : "p-2 rounded"
        }
      >
        <CiGrid42 size={40} />
      </NavLink>
      <NavLink
        to="/settings"
        aria-label="Settings"
        className={({ isActive }) =>
          isActive ? "bg-gray-200 p-2 rounded text-[#03577b]" : "p-2 rounded"
        }
      >
        <CiSettings size={40} />
      </NavLink>
    </div>
  );
};

export default Navbar;
