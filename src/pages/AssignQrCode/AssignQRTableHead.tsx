import { memo } from "react";
import { twMerge } from "tailwind-merge";

const AssignQRTableHead = () => {
  const headers = [
    { label: "TCRC Reference No.", align: "left" },
    { label: "TCRC Sample Id", align: "left" },
    { label: "Planned Preparation Date", align: "left" },
    { label: "TM Seal No.", align: "left" },
    { label: "TCRC Seal No.", align: "left" },
    { label: "Plant Seal No.", align: "center" },
    { label: "Referee Seal No.", align: "center" },
    { label: "TCRC QR Code", align: "center" },
    { label: "Plant QR Code", align: "center" },
    { label: "Referee QR Code", align: "center" },
    { label: "Preparation Date", align: "center" },
    { label: "Despatch Date", align: "center" },
    { label: "Action", align: "center" },
  ];

  return (
    <thead className="text-xs font-semibold text-gray-400 bg-gray-50">
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            className={twMerge(
              "p-2 whitespace-nowrap",
              `text-${header.align}`,
              `font-semibold`
            )}
          >
            {header.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default memo(AssignQRTableHead);
