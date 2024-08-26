import { useQuery } from "@tanstack/react-query";
import { getSampleDataSet } from "../../services";

import {
  TableContainer,
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
} from "../../styles/table";
import ValidateDataRow from "./components/ValidateDataRow";
import { withRole } from "../../hooks";
import { menuRolesMap } from "../../constants/roleBasedMenuItemsWithComponent";
import { Navigate } from "react-router-dom";

function ValidateData() {
  const { data, isLoading } = useQuery({
    queryKey: ["sample-data-set"],
    queryFn: async () => {
      const { data } = await getSampleDataSet();
      return data;
    },
  });

  return (
    <TableContainer className="h-[calc(100vh-84px)]">
      <Table className="min-w-[1800px]">
        <Thead>
          <Tr>
            <Th>Job No.</Th>
            <Th>Sample ID</Th>
            <Th>Rake No.</Th>
            <Th>TCRC QR Code</Th>
            <Th>TCRC Seal No.</Th>
            <Th>Plant Seal No.</Th>
            <Th>Plant QR Code</Th>
            <Th>Reference Seal No.</Th>
            <Th>Reference Qr Code</Th>
            <Th>TM Seal No.</Th>
            <Th>Despatch Date</Th>
            <Th>Preparation Date</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((sample) => (
            <ValidateDataRow key={sample.jobNumber} data={sample} />
          ))}
          {isLoading ? (
            <tr>
              <td colSpan={13} className="text-center">
                Loading...
              </td>
            </tr>
          ) : null}
        </Tbody>
      </Table>
    </TableContainer>
  );
}


export default withRole(ValidateData, {
  roles: menuRolesMap["Validate data"],
  OnNoAccess: () => <Navigate to="/" replace />,
});
