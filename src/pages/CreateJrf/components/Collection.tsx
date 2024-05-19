import { FC, Fragment, useState } from "react";
import { Field, Formik, FormikHelpers } from "formik";
import { getJRFList, GetJRFListResponse, createJRF } from "../../../services";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";

interface CollectionProps {
  plantModelsByDespatchDate:
    | Record<string, Array<{ plantId: string; plantName: string }>>
    | undefined;
}

interface InitialValues {
  plantId: string;
  despatchDate: string;
}

interface CreateJRFInitialValues {
  plantId: string;
  data: Array<{
    checked: boolean;
    jrfNumber: string;
  }>;
}

const CollectionCard: FC<CollectionProps> = ({ plantModelsByDespatchDate }) => {
  const [data, setData] = useState<GetJRFListResponse>();

  const mutation = useMutation({
    mutationFn: createJRF,
  });

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

  const handleSubmitJRF = async (
    values: CreateJRFInitialValues,
    formikHelpers: FormikHelpers<CreateJRFInitialValues>
  ) => {
    try {
      const { plantId, data } = values;
      const sampleIds = data.filter((x) => x.checked).map((x) => x.jrfNumber);
      const response = await mutation.mutateAsync({ plantId, sampleIds });
      formikHelpers.resetForm();
      Swal.fire(
        "JRF created successfully",
        "JRF Number is" + response.data.returnJrfNumber
      );
    } catch (e:any) {
      console.log(e.response);
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  const initialValues: InitialValues = {
    plantId: "",
    despatchDate: "",
  };

  const createJRFInitialValues = {
    data:
      data?.map((row) => ({ checked: false, jrfNumber: row.jrfNumber })) || [],
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
              <Formik
                initialValues={{
                  ...createJRFInitialValues,
                  plantId: values.plantId,
                }}
                onSubmit={handleSubmitJRF}
                enableReinitialize
              >
                {(subform) => (
                  <Fragment>
                    {data?.length ? (
                      <div className="mt-10">
                        <div className="overflow-x-auto">
                          <table className="table-auto w-full">
                            <thead className="text-xs font-semibold text-gray-400 bg-gray-50">
                              <tr>
                                <th className="p-2 whitespace-nowrap">
                                  <div className="font-semibold text-left">
                                    Sample ID
                                  </div>
                                </th>
                              </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-gray-100">
                              {subform?.values?.data?.map((row, key) => (
                                <tr key={key}>
                                  <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                      <Field
                                        type="checkbox"
                                        id={`data.${key}.checked`}
                                        name={`data.${key}.checked`}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mr-2 cursor-pointer"
                                      />
                                      <label
                                        htmlFor={`data.${key}.checked`}
                                        className="font-medium text-gray-800 cursor-pointer"
                                      >
                                        {row.jrfNumber}
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="flex items-center justify-start mt-5">
                          <button
                            onClick={subform?.submitForm}
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </Fragment>
                )}
              </Formik>
            </div>
          )}
        </Formik>
      </div>
    </Fragment>
  );
};

export default CollectionCard;
