import { useQuery } from "@tanstack/react-query";
import { getTmList } from "../../services";
import FinalReportBodyRow from "./components/TmBodyRow";
import TMEntryTableHead from "./TMEntryTableHead";
import { Table, TableContainer, Tbody } from "../../styles/table";
import { withRole } from "../../hooks";
import { menuRolesMap } from "../../constants/roleBasedMenuItemsWithComponent";
import { Navigate } from "react-router-dom";

function Tm() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["tms"],
    queryFn: async () => {
      const { data } = await getTmList();
      return data;
    },
  });
  if (isLoading) return "Loading...";
  return (
    <TableContainer className="m-3">
      <Table>
        <TMEntryTableHead />
        <Tbody>
          {data?.map((tm, key) => (
            <FinalReportBodyRow key={key} tm={tm} refetch={refetch} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default withRole(Tm, {
  menu: "Tm entry at plant",
  OnNoAccess: () => <Navigate to="/" replace />,
});
