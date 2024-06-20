import { useQuery } from "@tanstack/react-query";
import { Field, Formik, FormikConfig } from "formik";
import { FC, useMemo } from "react";
import { getJRFSelection } from "../../services";

export interface FilterCreateJrfInitialValues {
  plantId: string;
  despatchDate: string;
}

export type OnSubmit = FormikConfig<FilterCreateJrfInitialValues>["onSubmit"];

interface FilterCreateJrfProps
  extends Pick<
    FormikConfig<FilterCreateJrfInitialValues>,
    "onSubmit" | "initialValues"
  > {}

const FilterCreateJrf: FC<FilterCreateJrfProps> = ({
  initialValues,
  onSubmit,
}) => {
  const { data } = useQuery({
    queryKey: ["jrf-selection"],
    queryFn: async () => {
      const { data } = await getJRFSelection();
      return data;
    },
  });

  const plantModelsByDespatchDate = useMemo(() => {
    return data?.reduce<
      Record<string, Array<{ plantId: string; plantName: string }>>
    >((prev: any, current) => {
      return { ...prev, [current.despatchDate]: current.plantModels };
    }, {} as Record<string, Array<{ plantId: string; plantName: string }>>);
  }, [data]);

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      displayPlantModels
      onSubmit={onSubmit}
    >
      {({ submitForm, values, isSubmitting }) => (
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 items-end">
          <div className="md:col-span-2">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-90"
            >
              Select Despatch Date
            </label>
            <Field
              as="select"
              id="despatchDate"
              name="despatchDate"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option>Select</option>

              {plantModelsByDespatchDate
                ? Object.keys(plantModelsByDespatchDate)?.map((d: any) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))
                : null}
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
              {plantModelsByDespatchDate
                ? plantModelsByDespatchDate?.[values.despatchDate]?.map(
                    (d: any) => (
                      <option key={d.plantId} value={d.plantId}>
                        {d.plantName}
                      </option>
                    )
                  )
                : null}
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
      )}
    </Formik>
  );
};

export default FilterCreateJrf;
