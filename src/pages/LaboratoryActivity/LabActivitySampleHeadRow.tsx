const LabActivitySampleHeadRow = () => (
  <tr>
    <th className="p-2 whitespace-nowrap">
      <div className="font-semibold text-left">JRF No.</div>
    </th>
    <th className="p-2 whitespace-nowrap">
      <div className="font-semibold text-left">Sample ID</div>
    </th>
    <th className="p-2 whitespace-nowrap">
      <div className="font-semibold text-left">Despatched Date</div>
    </th>
    <th className="p-2 whitespace-nowrap">
      <div className="font-semibold text-left">TCRC QR Code</div>
    </th>
    <th className="p-2 whitespace-nowrap">
      <div className="font-semibold text-center">Lab Received Date</div>
    </th>
    <th className="p-2 whitespace-nowrap">
      <div className="font-semibold text-center">Lab Code</div>
    </th>
    <th className="p-2 whitespace-nowrap">
      <div className="font-semibold text-right">Test Start Date</div>
    </th>
    <th className="p-2 whitespace-nowrap">
      <div className="font-semibold text-center">Actions</div>
    </th>
  </tr>
);

export default LabActivitySampleHeadRow;
