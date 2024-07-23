import { memo } from "react";
import { twMerge } from "tailwind-merge";

const TMEntryTableHead = () => {
  const headers = [
    { label: "TCRC QR Code", align: "left" },
    { label: "TM Seal No.", align: "left" },
    { label: "TM Entry Date", align: "left" },
    { label: "TM Value", align: "left" },
    { label: "Action", align: "left" }
  ];

  return (
    <thead className="text-xs font-extrabold bg-gray-50">
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            className={twMerge(
              "p-2 whitespace-nowrap",
              `text-${header.align}`,
              `font-semibold`,
            )}
          >
            {header.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default memo(TMEntryTableHead);
