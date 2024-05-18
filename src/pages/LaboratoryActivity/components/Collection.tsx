import { FC, Fragment, useState } from "react";
import { Field, Formik, FormikHelpers } from "formik";
import {
  getJRFList,
  GetJRFListResponse
} from "../../../services";

interface CollectionProps {
  plantModelsByDespatchDate:
    | Record<string, Array<{ plantId: string; plantName: string }>>
    | undefined;
}

interface InitialValues {
  plantId: string;
  despatchDate: string;
}

const CollectionCard: FC<CollectionProps> = ({ plantModelsByDespatchDate }) => {
  const [data, setData] = useState<GetJRFListResponse>();
  const onSubmit = async (
    values: InitialValues,
    formikHelpers: FormikHelpers<InitialValues>
  ) => {
    try {
      const { data } = await getJRFList(values);
      setData(data);
    } catch (e) {
      setData([]);
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  const initialValues: InitialValues = {
    plantId: "",
    despatchDate: "",
  };

  return (
    <Fragment>
      <div className="w-full bg-white shadow rounded-lg border border-gray-200 mb-5 p-16">
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
        {data?.length ? (
          <div className="mt-10">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        JRF No.
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Download Document
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {data?.map((row, key) => (
                    <tr key={key}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">
                            {row.jrfNumber}
                          </div>
                        </div>
                      </td>
                      <td>
                        <a
                          href={row.jrfUrl}
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 focus:outline-none w-[120px]"
                          download
                        >
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default CollectionCard;
