import { FC } from "react";
import { Formik, FormikHelpers, Field } from "formik";
type Unit = {
  identifier: string;
  name: string;
  selected: boolean;
};
type LabDetails = {
  commodityGroupText: string;
  commodityGroupId: string;
  commodityText: string;
  commodityId: string;
  parameterText: string;
  parameterId: string;
  testmethodText: string;
  testmethodId: string;
  chemistAssignedOn: string;
  chemistActivityStatus: string;
  verificationStatus: string;
  verifiedon: string;
  chemist: string;
  qa: string;
  result: string;
  resultsubmitDate: string;
  unit: Array<Unit>;
  chemistAssignedDate: string;
  resultSubmitDate: string;
  verifiicationDate: string;
};

type ChemistResultForm = {
  jobNumber: string;
  qrcode: string;
  commodityId: string;
  parameterId: string;
  testMethodId: string;
  testResult: string;
  unitId: string;
  unitText: string;
  flag: string;
};
const ChemistLabDetails: FC<
  LabDetails & {
    jobNumber: string;
    qrcode: string;
  }
> = ({
  commodityGroupText,
  commodityId,
  parameterId,
  jobNumber,
  commodityText,
  parameterText,
  qrcode,
  testmethodText,
  verificationStatus,
  result,
}) => {
  const initialValues: ChemistResultForm = {
    jobNumber,
    qrcode,
    commodityId,
    parameterId,
    testMethodId: "",
    testResult: result,
    unitId: "",
    unitText: "",
    flag: "",
  };
  const onSubmit = (
    values: ChemistResultForm,
    formikHelpers: FormikHelpers<ChemistResultForm>
  ) => {
    console.log({values})
    // mutation.mutate(values, {
    //   onSuccess(data) {
    //     if (data) {
    //       formikHelpers.resetForm();
    //       formikHelpers.setSubmitting(false);
    //     }
    //   },
    // });
  };
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {({handleSubmit}) => (
        <tr>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">Details</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">{commodityGroupText}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">{commodityText}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">{parameterText}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">{testmethodText}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-center">{verificationStatus}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div
              className="w-20 bg-white border border-gray-200 rounded-lg mx-auto"
              data-hs-input-number
            >
              <div className="w-full flex justify-between items-center gap-x-1">
                <div className="grow py-2 px-3">
                  <Field
                    className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 text-center"
                    type="text"
                    name="testResult"
                  />
                </div>
              </div>
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="flex items-center justify-center">
              <button
               type="button"
               onClick={handleSubmit as any}
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Draft
              </button>
              <button
                type="button"
                onClick={handleSubmit as any}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Complete
              </button>
            </div>
          </td>
        </tr>
      )}
    </Formik>
  );
};

export default ChemistLabDetails;
