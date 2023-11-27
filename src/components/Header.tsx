import { IoIosArrowDown } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { SidebarProps } from "./Sidebar";
import * as React from "react";

const Header: React.FC<SidebarProps> = ({ showSidebar, setShowSidebar }) => {
  return (
    <nav className="flex items-center justify-between h-[64px] px-3 border-b border-[#EDEDED] ">
      <div>
        {!showSidebar && (
          <button
            className="border-2 border-[#0A0A0A] rounded-md
           px-4 py-2 w-[120px] text-xs text-[#0A0A0A]"
            onClick={() => {
              setShowSidebar(true);
              console.log(showSidebar);
            }}
          >
            Show Panel
          </button>
        )}
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center">
          <FaRegCircleUser size={32} />
          <IoIosArrowDown size={24} />
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-[#0A0A0A] font-inter text-sm font-semibold">En</p>
          <IoIosArrowDown size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
