import { FC, Fragment, useState } from "react";
import { Field, Formik, FormikHelpers } from "formik";
import {
  getsamplepreparationlist,
  GetsamplepreparationlistResponse,
  SamplePreparation,
} from "../../../services";

interface CollectionProps {
  plantModelsBydate: any;
}

interface InitialValues {
  plantId: string;
  plannedPrepDate: string;
}

const CollectionCard: FC<CollectionProps> = ({ plantModelsBydate }) => {
  const [data, setData] = useState<GetsamplepreparationlistResponse>();
  const onSubmit = async (
    values: InitialValues,
    formikHelpers: FormikHelpers<InitialValues>
  ) => {
    try {
      const { data } = await getsamplepreparationlist(values);
      setData(data);
    } catch (e) {
      setData([]);
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  const handlePreparation = (data: SamplePreparation) => () => {
    console.log(data);
  };

  const initialValues: InitialValues = {
    plantId: "",
    plannedPrepDate: "",
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
                  Select Planned Prep Date
                </label>
                <Field
                  as="select"
                  id="plannedPrepDate"
                  name="plannedPrepDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option>Select</option>

                  {plantModelsBydate
                    ? Object.keys(plantModelsBydate)?.map((d: any) => (
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
                  {plantModelsBydate
                    ? plantModelsBydate?.[values.plannedPrepDate]?.map(
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
                        TCRC Reference No.
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        TCRC Sample Id
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Planned Preparation Date
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">TM Seal No.</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        TCRC Seal No.
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">
                        Plant Seal No.
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">
                        Referee Seal No.
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">
                        TCRC QR Code
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">
                        Plant QR Code
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">
                        Referee QR Code
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">
                        Preparation Date
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">
                        Despatch Date
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Action</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {data?.map((row, key) => (
                    <tr key={key}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">
                            {row.tcrcReferenceNumber}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{row.tcrcSampleId}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{row.plannedPrepDate}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{row.tmSealNo}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{row.tcrcSealNo}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">{row.plantSealNo}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">{row.refereeSealNo}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">{row.tcrcQrCode}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">{row.plantQrCode}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">{row.refereeQrCode}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">{row.preparationDate}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">{row.despatchDate}</div>
                      </td>
                      <td>
                        <button
                          onClick={handlePreparation(row)}
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 focus:outline-none w-[120px]"
                        >
                          Save
                        </button>
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
