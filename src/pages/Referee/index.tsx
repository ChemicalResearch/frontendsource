import { useQuery } from "@tanstack/react-query";
import  {getRefereeDataSet}  from "../../services";

import {
  TableContainer,
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
} from "../../styles/table";
import ValidateDataRow from "./components/ValidateDataRow";

function Referee() {
  const { data, isLoading } = useQuery({
    queryKey: ["sample-data-set"],
    queryFn: async () => {
      const { data } = await getRefereeDataSet();
      return data;
    },
  });

  return (
    <TableContainer className="h-[calc(100vh-84px)]">
      <Table className="min-w-[1800px]">
        <Thead>
          <Tr>
            <Th>Sample ID</Th>
            <Th>JRF No.</Th>
            <Th>TCRC QR Code</Th>
            <Th>adbIM.</Th>
            <Th>adbVM.</Th>
            <Th>adbAsh.</Th>
            <Th>adbFc.</Th>
            <Th>adbBand.</Th>
            <Th>adbGCV.</Th>
            <Th>arbTM.</Th>
            <Th>arbVM.</Th>
            <Th>arbAsh.</Th>
            <Th>arbFC.</Th>
            <Th>arbGCV.</Th>
            <Th>arbBand.</Th>
            <Th>emEM.</Th>
            <Th>emVM.</Th>
            <Th>emAsh.</Th>
            <Th>emFC.</Th>
            <Th>emGCV.</Th>
            <Th>emBand.</Th>
            <Th>jrfLink.</Th>
            <Th>paymentDate.</Th>
            <Th>adviceUrl.</Th>
            <Th>labDetails.</Th>
            <Th>resultDate.</Th>
            <Th>resultUrl.</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((sample) => (
            <ValidateDataRow key={sample.jrfNumber} data={sample} />
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

export default Referee;
