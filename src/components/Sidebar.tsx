import logo from "/logo.svg";
import NavBox from "./NavBox";
import { TbArrowsUpDown } from "react-icons/tb";
import { PiWalletBold } from "react-icons/pi";
import { CiBullhorn } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaLink } from "react-icons/fa6";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { PiChartPieSliceBold } from "react-icons/pi";
import { BsBarChart } from "react-icons/bs";
import { TbArrowsRightLeft } from "react-icons/tb";
import { HiArrowPath } from "react-icons/hi2";
import * as React from "react";

export interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: (action: boolean) => void;
}

const navItems = [
  { name: "dashboard", icon: PiChartPieSliceBold },
  { name: "balances", icon: PiWalletBold },
  { name: "transactions", icon: TbArrowsUpDown },
  { name: "analytics", icon: BsBarChart },
  { name: "marketing", icon: CiBullhorn },
  { name: "exchange rates", icon: HiArrowPath },
];

const checkout = [
  { name: "checkout", icon: FiShoppingCart },
  { name: "payment links", icon: FaLink },
];
const wire = [{ name: "wire", icon: TbArrowsRightLeft }];

const Sidebar: React.FC<SidebarProps> = ({ showSidebar, setShowSidebar }) => {
  return (
    <>
      {showSidebar ? (
        <div
          className="hidden lg:grid grid-rows-[auto-1fr-auto]
         h-screen bg-[#FFFBF7] w-[300px] px-12 py-6 transition-all"
        >
          <div className="px-2">
            <img src={logo} alt="Klasha Dashboard" />
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-[#8D8D8D] text-base p-2 font-open-sans">
                Main Pages
              </p>
              {navItems.map((item) => (
                <NavBox key={item.name} name={item.name} icon={item.icon} />
              ))}
            </div>
            <div>
              <p className="text-[#8D8D8D] text-base p-2 font-open-sans">
                Accept Payments
              </p>
              {checkout.map((item) => (
                <NavBox key={item.name} name={item.name} icon={item.icon} />
              ))}
            </div>
            <div>
              <p className="text-[#8D8D8D] text-base p-2 font-open-sans">
                Send Payments
              </p>
              {wire.map((item) => (
                <NavBox key={item.name} name={item.name} icon={item.icon} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button className=" flex items-center gap-2 bg-[#EF2C5A] px-4 py-2 rounded-full text-white w-[120px] text-xs">
              <AiOutlineQuestionCircle size={24} />
              Support
            </button>
            <button
              onClick={() => setShowSidebar(false)}
              className="flex items-center gap-2 border-2 border-[#0A0A0A] rounded-md px-4 py-2 w-[120px] text-xs text-[#0A0A0A]"
            >
              <IoIosArrowBack size={14} /> Hide Panel
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
