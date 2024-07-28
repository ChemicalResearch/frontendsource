import { Th, Thead, Tr } from "../../styles/table";

const VerificationHeadRow = () => (
  <Thead>
    <Tr>
      <Th>Test End Date</Th>
      <Th>TCRC QR Code</Th>
      <Th>JRF Number</Th>
      <Th>TCRC Sample ID</Th>
      <Th>ADB IM</Th>
      <Th>ADB ASH</Th>
      <Th>ADB GCV</Th>
      <Th>ADB BAND</Th>
      <Th>ADB FC</Th>
      <Th>ARB TM</Th>
      <Th>ARB VM</Th>
      <Th>ARB FC</Th>
      <Th>ARB GCV</Th>
      <Th>ARB BAND</Th>
      <Th>em EM</Th>
      <Th>em VM</Th>
      <Th>em Ash</Th>
      <Th>em FC</Th>
      <Th>em GCV</Th>
      <Th>em Band</Th>
      <Th>Test End Date</Th>
      <Th>Test Report</Th>
      <Th>GCV Report</Th>
      <Th colSpan={2}>Action</Th>
    </Tr>
  </Thead>
);

export default VerificationHeadRow;
