import { useQuery } from "@tanstack/react-query";
import { getsamplepreparationlist } from "../../services";
import { useState } from "react";
import FilterAssignQRCode, {
  FilterAssignQRCodeInitialValues,
  OnSubmit,
} from "./FilterAssignQRCode";
import AssignQRTableHead from "./AssignQRTableHead";
import SamplePreparationForm from "./components/SamplePreparationForm";
import { Table, TableContainer, Tbody } from "../../styles/table";
import { withRole } from "../../hooks";
import { menuRolesMap } from "../../constants/roleBasedMenuItemsWithComponent";
import { Navigate } from "react-router-dom";

const initialValues: FilterAssignQRCodeInitialValues = {
  plantId: "",
  plannedPrepDate: "",
};

function AssignQr() {
  const [{ plannedPrepDate, plantId }, setData] =
    useState<FilterAssignQRCodeInitialValues>(initialValues);

  const { data, refetch } = useQuery({
    queryKey: ["sample-preparation-list", plannedPrepDate, plantId],
    queryFn: async () => {
      const { data } = await getsamplepreparationlist({
        plannedPrepDate,
        plantId,
      });
      return data;
    },
    enabled: Boolean(plannedPrepDate && plantId),
  });

  const onSubmit: OnSubmit = async (values, formikHelpers) => {
    try {
      setData(values);
    } catch (e) {
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  return (
    <div>
      <FilterAssignQRCode initialValues={initialValues} onSubmit={onSubmit} />
      <TableContainer className="mx-3">
        <Table>
          <AssignQRTableHead />
          <Tbody>
            {data?.map((row, key) => (
              <SamplePreparationForm key={key} row={row} refetch={refetch} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default withRole(AssignQr, {
  menu: "Sample prep and qr assignment",
  OnNoAccess: () => <Navigate to="/" replace />,
});
