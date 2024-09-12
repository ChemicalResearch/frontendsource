import { useQuery } from "@tanstack/react-query";
import {
  getTestProgressJRF,
  getTestProgressList,
  GetTestProgressListResponse,
} from "../../services/test-progress";
import { useCallback, useEffect, useState } from "react";
import TestProgressHeadRow from "./TestProgressHeadRow";
import TestProgressBodyRow from "./TestProgressBodyRow";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "../../styles/table";
import { withRole } from "../../hooks";
import { Navigate } from "react-router-dom";

const TestProgress = () => {
  const { data } = useQuery({
    queryKey: ["test-progress-jrf"],
    queryFn: async () => {
      const { data } = await getTestProgressJRF();
      return data;
    },
  });

  const [jrfNumber, setJrfNumber] = useState<string>("");
  const [testProgress, setTestProgress] =
    useState<GetTestProgressListResponse>();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setJrfNumber((prev) => (prev === value ? "" : value));
  };

  const getTestProgress = useCallback(async () => {
    if (!jrfNumber) {
      setTestProgress([]);
      return;
    }
    try {
      const { data } = await getTestProgressList({ jrfNumber });
      setTestProgress(data);
    } catch (e) {
    } finally {
    }
  }, [jrfNumber]);

  useEffect(() => {
    getTestProgress();
  }, [getTestProgress]);

  return (
    <div className="grid gap-4 gap-y-2 text-sm grid-cols-4 m-2">
      <div className="col-span-1">
        <TableContainer className="h-[calc(100vh-100px)]">
          <Table className="max-w-[320px] min-w-0 w-full">
            <Thead>
              <Tr>
                <Th colSpan={2}>JRF No.</Th>
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
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 ml-2 cursor-pointer"
                    />
                  </Td>
                  <Td>{x.jrfNumber}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <div className="col-span-3">
        {!!testProgress?.length ? (
          <TableContainer className="h-[calc(100vh-100px)]">
            <Table className="min-w-[1800px]">
              <TestProgressHeadRow />
              <Tbody>
                {testProgress?.map((progress, key) => (
                  <TestProgressBodyRow key={key} progress={progress} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        ) : null}
      </div>
    </div>
  );
};

export default withRole(TestProgress, {
  menu: "Test progress",
  OnNoAccess: () => <Navigate to="/" replace />,
});
