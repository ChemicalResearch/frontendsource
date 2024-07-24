import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSampleCollectionDetails } from "../../../services";
import {
  TableContainer,
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
  Td,
} from "../../../styles/table";

function SampleCollectionDetails() {
  const { tcrcReferenceNumber } = useParams();
  const { data } = useQuery({
    queryKey: ["sample-colletion-details"],
    queryFn: async () => {
      const { data } = await getSampleCollectionDetails(
        tcrcReferenceNumber as string
      );
      return data;
    },
  });
  return (
    <TableContainer className="h-[calc(100vh-84px)]">
      <Table>
        <Thead>
          <Tr>
            <Th>TCRC Reference No.</Th>
            <Th>TCRC Sample Id</Th>
            <Th>Customer</Th>
            <Th>Commodity</Th>
            <Th>Planned Preparation Date</Th>
            <Th>RR No.</Th>
            <Th>Quantity</Th>
            <Th>Source</Th>
            <Th>Start Date</Th>
            <Th>End Date</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody className="text-sm divide-y divide-gray-100">
          {data?.map((d, k) => (
            <Tr key={k}>
              <Td>{tcrcReferenceNumber}</Td>
              <Td>{d.tcrcSampleId}</Td>
              <Td>{d.customerText}</Td>
              <Td>{d.commodityText}</Td>
              <Td>{d.plannedPrepDate}</Td>
              <Td>{d.vehicleNumber}</Td>
              <Td>{d.quantity}</Td>
              <Td>{d.mineText}</Td>
              <Td>{d.startTime}</Td>
              <Td>{d.endTime}</Td>
              <Td>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-auto">
                  Live
                </button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default SampleCollectionDetails;
