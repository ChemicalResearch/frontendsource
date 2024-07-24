import { useQuery } from "@tanstack/react-query";
import { getSampleDataSet } from "../../services";

import {
  TableContainer,
  Table,
  Tbody,
  Thead,
  Tr,
  Td,
  Th,
} from "../../styles/table";
import ValidateDataRow from "./components/ValidateDataRow";

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
      <Table>
        <Thead>
          <Tr>
            <Th className="w-min-[150px]">Job No.</Th>
            <Th className="w-min-[150px]">Sample ID</Th>
            <Th className="w-min-[180px]">Rake No.</Th>
            <Th className="w-min-[150px]">TCRC QR Code</Th>
            <Th className="w-min-[150px]">TCRC Seal No.</Th>
            <Th className="w-min-[150px]">Plant Seal No.</Th>
            <Th className="w-min-[150px]">Plant QR Code</Th>
            <Th className="w-min-[150px]">Reference Seal No.</Th>
            <Th className="w-min-[150px]">Reference Qr Code</Th>
            <Th className="w-min-[150px]">TM Seal No.</Th>
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

export default ValidateData;
