import { Fragment } from "react";

const VerificationHeadRow = () => (
  <Fragment>
    <tr>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">Test End Date</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">JRF No.</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">TCRC QR Code</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">TCRC Sample ID</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">TM</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">IM</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">VM</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">ASH</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">GCV</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">EM</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">Verification Flag</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">Test Report</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">GVC Report</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">Action</div>
      </th>
    </tr>
  </Fragment>
);

export default VerificationHeadRow;
