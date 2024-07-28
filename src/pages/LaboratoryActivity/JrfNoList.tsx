import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { getLabactivityJrfs } from "../../services/lab-activity-jrfs";
import { DownloadLinkButton } from "../../components/buttons";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "../../styles/table";

interface JrfNoListProps {
  jrfNumber: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const JrfNoList: FC<JrfNoListProps> = ({ jrfNumber, onChange }) => {
  const { data } = useQuery({
    queryKey: ["laboratory-activity"],
    queryFn: async () => {
      const { data } = await getLabactivityJrfs();
      return data;
    },
  });

  return (
    <TableContainer className="mx-3">
      <Table className="max-w-[320px] min-w-0">
        <Thead>
          <Tr>
            <Th colSpan={3}>JRF No.</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((x, key) => (
            <Tr key={key}>
              <Td>
                <input
                  type="checkbox"
                  value={x.jrfNumber}
                  checked={jrfNumber === x.jrfNumber}
                  onChange={onChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mr-2 cursor-pointer"
                />
              </Td>
              <Td>{x.jrfNumber}</Td>
              <Td>
                <DownloadLinkButton
                  href={x.jrfDocumentUrl}
                  className="w-8 h-8 bg-transparent text-blue-600 hover:bg-transparent shadow-none"
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default JrfNoList;
