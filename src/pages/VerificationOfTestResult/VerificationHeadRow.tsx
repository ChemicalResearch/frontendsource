import { Fragment } from "react";

const VerificationHeadRow = () => (
  <Fragment>
    <tr>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">Test End Date</div>
      </th>
      {/* <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">JRF No.</div>
      </th> */}
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">TCRC QR Code</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">JRF Number</div>
      </th>
      
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">TCRC Sample ID</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">ADB IM</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">ADB ASH</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">ADB GCV</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">ADB BAND</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">ADB FC</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">ARB TM</div>
      </th>
     
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">ARB VM</div>
      </th>
     
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">ARB FC</div>
      </th>
      
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">ARB GCV</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">ARB BAND</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">em EM</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">em VM</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">em Ash</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">em FC</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">em GCV</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">em Band</div>
      </th>
      {/* <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">Verification Flag</div>
      </th> */}
      
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">Test End Date</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">Test Report</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">GCV Report</div>
      </th>
      <th className="p-2 whitespace-nowrap" colSpan={2}>
        <div className="font-semibold text-center">Action</div>
      </th>
    </tr>
  </Fragment>
);

export default VerificationHeadRow;
