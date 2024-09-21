type Props = {};

import { TbStar } from "react-icons/tb";
import { TbCategory } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { PiUserCircle } from "react-icons/pi";
import { PiUserCircleFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
const MobileMenu = ({}: Props) => {
  return (
    <div className="z-[100] transition-all duration-200 ease fixed w-full h-[75px] bottom-0 flex justify-center">
      <div
        id="mobileMenuBar"
        className="max-w-[512px] shadow-shx1 rounded-t-md bg-white w-full flex items-center justify-around"
      >
        <NavLink
          to="/"
          className={`text-2xl p-1 cursor-pointer border-b-2 border-white`}
        >
          {true ? <IoHome /> : <IoHomeOutline />}
        </NavLink>
        <NavLink
          to="/categories"
          className={`text-2xl p-1 cursor-pointer border-b-2 border-white`}
        >
          <TbCategory fill="black" />
        </NavLink>
        <NavLink
          to="/favorites"
          className={`text-2xl p-1 cursor-pointer border-b-2 border-white`}
        >
          <TbStar fill="black" />
        </NavLink>
        <NavLink
          to="/cart"
          className={`text-2xl p-1 cursor-pointer border-b-2 border-white`}
        >
          <FiShoppingCart fill="black" />
        </NavLink>
        <NavLink
          to="/profile"
          className={`text-2xl p-1 cursor-pointer border-b-2 border-white`}
        >
          {true ? <PiUserCircleFill /> : <PiUserCircle />}
        </NavLink>
      </div>
    </div>
  );
};

export default MobileMenu;
