import * as React from "react";
import { NavLink } from "react-router-dom";
import { IconType } from "react-icons";

interface NavBoxProps {
  name: string;
  icon: IconType;
}

const NavBox: React.FC<NavBoxProps> = ({ name, icon: Icon }) => {
  return (
    <>
      <NavLink
        to={`/${name}`}
        className={({ isActive }) =>
          isActive
            ? "flex items-center my-3 gap-4 p-1 px-2 color-hover text-[#EF2C5A]"
            : "flex items-center my-3 gap-4 p-1 px-2 color-hover"
        }
      >
        <Icon size={24} />
        <p className="capitalize font-inter text-sm">{name}</p>
      </NavLink>
    </>
  );
};

export default NavBox;
