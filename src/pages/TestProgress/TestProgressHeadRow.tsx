import { Fragment } from "react";

const TestProgressHeadRow = () => (
  <Fragment>
    <tr>
      <th rowSpan={2} className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">Test End Date</div>
      </th>
      <th colSpan={7} className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">Result</div>
      </th>
    </tr>
    <tr>
      <th rowSpan={2} className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">TM</div>
      </th>
      <th colSpan={7} className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">IM</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">VM</div>
      </th>
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-left">ASH</div>
      </th>
      
      <th className="p-2 whitespace-nowrap">
        <div className="font-semibold text-center">EM</div>
      </th>
    </tr>
  </Fragment>
);

export default TestProgressHeadRow;
