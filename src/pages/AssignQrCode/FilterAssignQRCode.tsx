import { useQuery } from "@tanstack/react-query";
import { getSamplePselection } from "../../services";
import { FC, useEffect, useMemo } from "react";
import { Field, Formik, FormikConfig, isObject } from "formik";

export interface FilterAssignQRCodeInitialValues {
  plantId: string;
  plannedPrepDate: string;
}

export type OnSubmit =
  FormikConfig<FilterAssignQRCodeInitialValues>["onSubmit"];

interface FilterAssignQRCodeProps
  extends Pick<
    FormikConfig<FilterAssignQRCodeInitialValues>,
    "onSubmit" | "initialValues"
  > {}

const FilterAssignQRCode: FC<FilterAssignQRCodeProps> = ({
  initialValues,
  onSubmit,
}) => {
  const { data } = useQuery({
    queryKey: ["sample-p-selection"],
    queryFn: async () => {
      const { data } = await getSamplePselection();
      return data;
    },
    networkMode: "offlineFirst",
  });

  const plantModelsBydate = useMemo(() => {
    return data?.reduce((prev: any, current) => {
      return { ...prev, [current.plannedDate]: current.plantModels };
    }, {} as Record<string, { plantId: string; plantName: string }>);
  }, [data]);

  const renderPlantPrepDate = useMemo(() => {
    if (isObject(plantModelsBydate))
      return Object.keys(plantModelsBydate)?.map((d: any) => (
        <option key={d} value={d}>
          {d}
        </option>
      ));
    return null;
  }, [plantModelsBydate]);

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      displayPlantModels
      onSubmit={onSubmit}
    >
      {({ submitForm, values, isSubmitting, setFieldValue }) => {
        // Reset plantId if plannedPrepDate has been changed
        useEffect(() => {
          setFieldValue("plantId", "");
        }, [values.plannedPrepDate, setFieldValue]);

        const renderPlantIds = useMemo(() => {
          return plantModelsBydate?.[values.plannedPrepDate]?.map((d: any) => (
            <option key={d.plantId} value={d.plantId}>
              {d.plantName}
            </option>
          ));
        }, [plantModelsBydate, values.plannedPrepDate]);

        return (
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 items-end">
            <div className="md:col-span-2">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-90"
              >
                Select Planned Prep Date
              </label>
              <Field
                as="select"
                id="plannedPrepDate"
                name="plannedPrepDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>Select</option>
                {renderPlantPrepDate}
              </Field>
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-90"
              >
                Select Plant
              </label>
              <Field
                as="select"
                id="plantId"
                name="plantId"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>Select</option>
                {renderPlantIds}
              </Field>
            </div>
            <div className="md:col-span-1">
              <button
                onClick={submitForm}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 focus:outline-none w-[120px]"
                disabled={isSubmitting}
              >
                Search
              </button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default FilterAssignQRCode;
