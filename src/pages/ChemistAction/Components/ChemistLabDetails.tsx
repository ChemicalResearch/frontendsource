import { FC, useMemo } from "react";
import { Formik, FormikHelpers, Field } from "formik";
import { useMutation } from "@tanstack/react-query";
import { submitChemistAction } from "../../../services";

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
  unit,
}) => {

    const mutation = useMutation({
      mutationFn: submitChemistAction
    })
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
      const [unitId, unitText] = values.unitId.split(",");
      values.unitId = unitId;
      values.unitText = unitText;

      mutation.mutateAsync(values, {
        onSuccess(data) {
          if (data) {
            formikHelpers.resetForm();
            formikHelpers.setSubmitting(false);
          }
        },
      });
    };

    const renderUnit = useMemo(() => {
      return unit.map((d) => (
        <option value={[d.identifier.toString(), d.name]}>{d.name}</option>
      ))
    }, [unit])

    return (
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={onSubmit}
      >
        {({ submitForm, setFieldValue }) => (
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
              <Field
                as="select"
                name="unitId"
                className="max-w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected>Select</option>
                {renderUnit}
              </Field>
            </td>
            <td className="p-2 whitespace-nowrap">
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => {
                    setFieldValue("flag", "Draft");
                    submitForm();
                  }}
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  Draft
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFieldValue("flag", "Complete");
                    submitForm();
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
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
