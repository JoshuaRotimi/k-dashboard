import * as React from "react";
interface CardProps {
  time: string;
  amount: string;
  range: string;
  image: string;
  bg: boolean;
}

const Card: React.FC<CardProps> = ({ time, amount, bg, image, range }) => {
  return (
    <div
      className={`border border-black rounded-lg font-open-sans p-6 w-[250px] min-h-[240px] ${
        bg ? "bg-black" : "bg-white"
      } ${bg ? "text-white" : "text-black"}`}
    >
      <p className={"font-inter text-sm"}>{range}</p>
      <img className="py-5" src={image} alt={`Graph for ${time}`} />
      <p className="text-sm py-2">{time}</p>
      <p className="text-xl">{amount}</p>
    </div>
  );
};

export default Card;
