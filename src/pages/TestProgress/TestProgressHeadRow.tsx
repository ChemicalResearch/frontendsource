import { Fragment } from "react";

const TestProgressHeadRow = () => (
  <Fragment>
    <tr>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">TCRC Sample Id</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">Test End Date</div>
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
        <div className="font-semibold text-center">Actions</div>
      </th>
    </tr>
  </Fragment>
);

export default TestProgressHeadRow;
