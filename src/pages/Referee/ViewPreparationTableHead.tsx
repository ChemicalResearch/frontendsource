import { memo } from "react";
import { twMerge } from "tailwind-merge";
import { Th, Thead, Tr } from "../../styles/table";

const ViewPreparationTableHead = () => {
  const headers = [
    { label: "Sample ID.", align: "left" },
    // { label: "JRF No.", align: "left" },
    { label: "TCRC QR Code", align: "left" },
    { label: "ADB IM", align: "left" },
    { label: "ADB VM.", align: "left" },
    { label: "ADB Ash.", align: "left" },
    { label: "ADB Fc", align: "left" },
    { label: "ADB Band", align: "left" },
    { label: "ADB GCV", align: "left" },
    { label: "ARB TM", align: "left" },
    { label: "ARB VM", align: "left" },
    { label: "ARB ASH", align: "left" },
    { label: "ARB FC", align: "left" },
    { label: "ARB GCV", align: "left" },
    { label: "ARB BAND", align: "left" },
    { label: "EM EM", align: "left" },
    { label: "EM VM", align: "left" },
    { label: "EM ASH", align: "left" },
    { label: "EM FC", align: "left" },
    { label: "EM GCV", align: "left" },
    { label: "EM BAND", align: "left" },
    // { label: "jrfLink", align: "left" },
    { label: "paymentDate", align: "left" },
    { label: "adviceUrl", align: "left" },
    { label: "labDetails", align: "left" },
    { label: "resultDate", align: "left" },
    { label: "resultUrl", align: "left" },
    { label: "ACTION", align: "left" }
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
