import { memo } from "react";
import { twMerge } from "tailwind-merge";
import { Tbody, Th, Tr } from "../../styles/table";

const TMEntryTableHead = () => {
  const headers = [
    { label: "TCRC QR Code", align: "left" },
    { label: "TM Seal No.", align: "left" },
    { label: "TM Entry Date", align: "left" },
    { label: "TM Value", align: "left" },
    { label: "Action", align: "left" }
  ];

  return (
    <Tbody>
      <Tr>
        {headers.map((header, index) => (
          <Th
            key={index}
            className={twMerge(
              "p-2 whitespace-nowrap",
              `text-${header.align}`,
              `font-semibold`,
            )}
          >
            {header.label}
          </Th>
        ))}
      </Tr>
    </Tbody>
  );
};

export default memo(TMEntryTableHead);
