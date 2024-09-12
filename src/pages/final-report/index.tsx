import { useQuery, queryOptions } from "@tanstack/react-query";
import { getFinalReport } from "../../services";
import FinalReportBodyRow from "./components/FinalReportBodyRow";
import { Table, TableContainer, Th, Thead, Tr } from "../../styles/table";
import { withRole } from "../../hooks";
import { Navigate } from "react-router-dom";

export const finalReportsOptions = queryOptions({
  queryKey: ["final-reports"],
  queryFn: async () => {
    const { data } = await getFinalReport();
    return data;
  },
});

function FinalReport() {
  const { data, isLoading } = useQuery(finalReportsOptions);
  return (
    <TableContainer className="h-[calc(100vh-84px)]">
      <Table className="min-w-[1200px]">
        <Thead>
          <Tr>
            <Th>Jrf Number</Th>
            <Th>Upload</Th>
            <Th>Test Report</Th>
            <Th>GCV Report</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Thead>
          {data?.map((report, key) => (
            <FinalReportBodyRow key={key} report={report} />
          ))}
          {isLoading ? (
            <tr>
              <td colSpan={5} className="text-center">
                Loading...
              </td>
            </tr>
          ) : null}
        </Thead>
      </Table>
    </TableContainer>
  );
}

export default withRole(FinalReport, {
  menu: "Final report",
  OnNoAccess: () => <Navigate to="/" replace />,
});
