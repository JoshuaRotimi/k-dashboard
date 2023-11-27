import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import Table from "../components/Table";
import { useState } from "react";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Transactions = () => {
  const pages = ["1", "2", "3", "...", "8", "9", "10"];
  const [selected, setSelected] = useState("1");
  console.log(selected);

  return (
    <div className="w-[95%] m-auto mt-24 border border-[#F0F0F0] rounded-lg py-3 overflow-x-auto">
      <h4 className="font-open-sans text-lg pb-4 px-3">Transaction history</h4>
      <div className="flex items-center justify-between border-y border-y-[#F0F0F0] p-3">
        <div className="flex border b-[#F0F0F0] p-2 items-center justify-between rounded-lg">
          <input
            type="text"
            placeholder={"Search"}
            className={"border-0 h-[20px]"}
          />
          <IoIosSearch size={24} />
        </div>
        <div className="flex gap-3 items-center">
          <button className=" flex items-center gap-2 font-semibold border border-[#0A0A0A] rounded-md px-4 py-2 text-sm text-[#0A0A0A]">
            Filter <IoFilter size={16} />
          </button>
          <button className=" flex items-center gap-2 font-semibold border border-[#0A0A0A] rounded-md px-4 py-2 text-sm text-[#0A0A0A]">
            Export
          </button>
        </div>
      </div>
      <Table />

      <div className="flex overflow-x-auto sm:justify-center lg:justify-end px-4">
        <ul className="xs:mt-0 mt-2 p-2 inline-flex items-center -space-x-px  border border-[#E8E8E8] rounded-lg gap-4">
          <li>
            <IoIosArrowBack
              size={20}
              className={"hover:text-black"}
              color={"#A39D9E"}
            />
          </li>
          {pages.map((item) => (
            <li key={item}>
              <button
                onClick={() => setSelected(item)}
                className={`w-8 h-8 hover:text-black bg-white
                 hover:bg-[#F0F0F0] hover:rounded-full ${
                   selected === item
                     ? "bg-[#F0F0F0] rounded-full text-black"
                     : "text-[#A39D9E]"
                 }`}
              >
                {item}
              </button>
            </li>
          ))}
          <li>
            <IoIosArrowForward size={20} color={"#A39D9E"} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Transactions;
