import { memo } from "react";
import {
  Thead,
  Tr,
  Th
} from "../../styles/table";

const AssignQRTableHead = () => {
  return (
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
  );
};

export default memo(AssignQRTableHead);
