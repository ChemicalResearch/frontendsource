import { useQuery } from "@tanstack/react-query";
import { getsamplepreparationlist } from "../../services";
import { useState } from "react";
import FilterAssignQRCode, {
  FilterAssignQRCodeInitialValues,
  OnSubmit,
} from "./FilterAssignQRCode";
import AssignQRTableHead from "./AssignQRTableHead";
import SamplePreparationForm from "./components/SamplePreparationForm";

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
    <div className="w-full bg-white shadow rounded-lg border border-gray-200 mb-5 p-16">
      <FilterAssignQRCode initialValues={initialValues} onSubmit={onSubmit} />
      {data?.length ? (
        <div className="mt-10">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <AssignQRTableHead />
              <tbody className="text-sm divide-y divide-gray-100">
                {data?.map((row, key) => (
                  <SamplePreparationForm
                    key={key}
                    row={row}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default AssignQr;
