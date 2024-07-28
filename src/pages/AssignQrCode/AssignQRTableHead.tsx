import { memo } from "react";
import { twMerge } from "tailwind-merge";
import {
  TableContainer,
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
} from "../../styles/table";

const AssignQRTableHead = () => {
  // const headers = [
  //   { label: "TCRC Reference No.", align: "left" },
  //   { label: "TCRC Sample Id", align: "left" },
  //   { label: "Planned Preparation Date", align: "left" },
  //   { label: "TM Seal No.", align: "left" },
  //   { label: "TCRC Seal No.", align: "left" },
  //   { label: "Plant Seal No.", align: "left" },
  //   { label: "Referee Seal No.", align: "left" },
  //   { label: "TCRC QR Code", align: "left" },
  //   { label: "Plant QR Code", align: "left" },
  //   { label: "Referee QR Code", align: "left" },
  //   { label: "Preparation Date", align: "left" },
  //   { label: "Despatch Date", align: "left" },
  //   { label: "Action", align: "left" },
  // ];

  return (
    <TableContainer className="h-[calc(100vh-84px)]">
      <Table>
        <Thead>
          <Tr>
            <Th className="w-min-[150px]">TCRC Reference No.</Th>
            <Th className="w-min-[150px]">TCRC Sample Id</Th>
            <Th className="w-min-[180px]">Planned Preparation Date</Th>
            <Th className="w-min-[150px]">TM Seal No.</Th>
            <Th className="w-min-[150px]">TCRC Seal No.</Th>
            <Th className="w-min-[150px]">Plant Seal No.</Th>
            <Th className="w-min-[150px]">Referee Seal No.</Th>
            <Th className="w-min-[150px]">TCRC QR Code.</Th>
            <Th className="w-min-[150px]">Plant QR Code</Th>
            <Th className="w-min-[150px]">Referee QR Code</Th>
            <Th>Preparation Date</Th>
            <Th>Despatch Date</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
       
      </Table>
    </TableContainer>
    // <thead className="text-xs font-extrabold bg-gray-50">
    //   <tr>
    //     {headers.map((header, index) => (
    //       <th
    //         key={index}
    //         className={twMerge(
    //           "p-2 whitespace-nowrap",
    //           `text-${header.align}`,
    //           `font-semibold`,
    //           "text-center"
    //         )}
    //       >
    //         {header.label}
    //       </th>
    //     ))}
    //   </tr>
    // </thead>
  );
};

export default memo(AssignQRTableHead);
