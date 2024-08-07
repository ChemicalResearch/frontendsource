import { memo } from "react";
import { twMerge } from "tailwind-merge";
import { Th, Thead, Tr } from "../../styles/table";

const ViewPreparationTableHead = () => {
  const headers = [
    { label: "TCRC Reference No.", align: "left" },
    { label: "TCRC Sample Id", align: "left" },
    { label: "Planned Preparation Date", align: "left" },
    { label: "TM Seal No.", align: "left" },
    { label: "TCRC Seal No.", align: "left" },
    { label: "Plant Seal No.", align: "left" },
    { label: "Referee Seal No.", align: "left" },
    { label: "TCRC QR Code", align: "left" },
    { label: "Plant QR Code", align: "left" },
    { label: "Referee QR Code", align: "left" },
    { label: "Preparation Date", align: "left" },
    { label: "Despatch Date", align: "left" }
  ];

  return (
    <Thead className="text-xs font-extrabold bg-gray-50">
      <Tr>
        {headers.map((header, index) => (
          <Th
            key={index}
            className={twMerge(
              "p-2 whitespace-nowrap",
              `text-${header.align}`,
              `font-semibold`,
              "text-center"
            )}
          >
            {header.label}
          </Th>
        ))}
      </Tr>
    </Thead>
  );
};

export default memo(ViewPreparationTableHead);
