const Table = () => {
  const headers = [
    "Transaction ID",
    "Source",
    "Customer name",
    "Customer email",
    "Amount",
    "Request Date",
    "Status",
  ];
  const rows = [
    [
      "GB124QWERTY12346",
      "GTB",
      "Mike Owen",
      "0223337281",
      "$230.00",
      "24.08.2021",
      "Pending",
    ],
    [
      "CB328ABCEDF23416",
      "UBA",
      "Steve O'Shassy",
      "0982764829",
      "$480.00",
      "22.08.2021",
      "Successful",
    ],
    [
      "GB124QWERTY12346",
      "GTB",
      "Mike Owen",
      "0223337281",
      "$230.00",
      "24.08.2021",
      "Pending",
    ],
    [
      "GB124QWERTY12346",
      "GTB",
      "Mike Owen",
      "0223337281",
      "$230.00",
      "24.08.2021",
      "Pending",
    ],
  ];

  return (
    <table className="overflow-x-auto table-auto w-full border border-b-[#F0F0F0]">
      <thead>
        <tr className="py-3 h-[66px]">
          {headers.map((header, index) => (
            <th
              key={index}
              className="font-open-sans text-[#5F5F5F] font-semibold text-base p-2"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={"h-[66px] cursor-pointer hover:bg-[#F7F7F7]"}
          >
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className=" font-inter text-sm text-center text-[#484848] p-2"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
