import one from "/graph-one.svg";
import two from "/graph-two.svg";
import three from "/graph-three.svg";
import chart from "/chart.svg";
import Card from "../components/Card";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";

const dashboard = [
  {
    time: "This week",
    amount: "₦1,652.50",
    range: "24 Aug - 01 Sep 21",
    bg: true,
    image: one,
  },
  {
    time: "This month",
    amount: "₦1,652.50",
    range: "24 Aug - 01 Sep 21",
    bg: false,
    image: two,
  },
  {
    time: "Last month",
    amount: "₦1,652.50",
    range: "24 Aug - 01 Sep 21",
    bg: false,
    image: three,
  },
];

const HomePage = () => {
  return (
    <div className="w-[95%] m-auto mt-14">
      <h4 className="font-open-sans text-xl pb-8">Sales Overview</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="border border-black rounded-lg font-open-sans p-6 max-w-[250px] min-h-[240px]">
          <p className="text-sm py-2">Today's sales</p>
          <p className="text-xl">₦1,652.50</p>
        </div>
        {dashboard.map((item) => (
          <Card
            key={item.image}
            amount={item.amount}
            image={item.image}
            bg={item.bg}
            range={item.range}
            time={item.time}
          />
        ))}
      </div>
      <div className=" pt-8 pb-1 flex flex-wrap gap-2 items-center max-w-[768px]">
        <p className="font-open-sans text-xl font-medium">Sales</p>
        <hr className="border border-[#000000/10] h-[24px] rotate-180" />
        <p className="color-hover font-inter font-semibold">7 days</p>
        <p className="color-hover font-inter font-semibold">30 days</p>
        <p className="p-2 px-3 flex items-center gap-2 border border-[#0A0A0A] rounded-lg">
          USD <IoIosArrowDown size={16} />
        </p>
        <div className="p-2 flex justify-between items-center gap-2 border border-[#F4F4F4] rounded-lg text-[#565C69] flex-1">
          Email <IoIosArrowDown color={"black"} size={16} />
        </div>
        <button className="p-2 flex items-center gap-2 border border-[#0A0A0A] rounded-lg">
          <FaArrowDown className="hidden lg:flex" size={16} /> Download report
        </button>
      </div>
      <div className="flex justify-between flex-col pb-2 lg:flex-row gap-3">
        <img src={chart} alt="Visual Report" />
        <div
          className={`bg-[#EF2C5A] p-3 py-8 flex flex-col justify-between
               rounded-lg max-w-[305px] bg-[url('/lines.svg')] bg-no-repeat bg-cover`}
        >
          <h5 className="text-base lg:text-xl w-[80%] text-white">
            KlashaWire - send money to businesses globally from Africa
          </h5>
          <button className="bg-[#0A0A0A] rounded-lg p-3 mt-6 lg:mt-0 w-fit text-white">
            Send a Wire
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
