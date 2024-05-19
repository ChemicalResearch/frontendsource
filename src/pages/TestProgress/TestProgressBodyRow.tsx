import { FC } from "react";
import { LabActivitySample } from "../../services/lab-activity-jrfs";
import { Field, Formik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface LabActivitySampleRowProps {
  sample: LabActivitySample;
}

interface LabActivitySampleBodyRowInitialValues extends LabActivitySample {
  receivedOn: Date | null;
  labcode: string;
  testStartDate: Date | null;
}

const TestProgressBodyRow: FC<LabActivitySampleRowProps> = ({
  sample,
}) => {
  const initialValues: LabActivitySampleBodyRowInitialValues = {
    ...sample,
    receivedOn: null,
    labcode: "",
    testStartDate: null,
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={console.log}
      enableReinitialize
    >
      {({ values, isSubmitting, submitForm, setFieldValue }) => (
        <tr>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">{values.jrfNumber}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">{values.tcrcSampleId}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">{values.dispatchDate}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">{values.tcrcRefNumber}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-center">
              <DatePicker
                selected={values.receivedOn}
                onChange={(date) => setFieldValue("receivedOn", date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="YYYY-MM-DD"
                withPortal
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              />
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">
              <Field
                id="labcode"
                name="labcode"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              />
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-right">
              <DatePicker
                selected={values.testStartDate}
                onChange={(date) => setFieldValue("testStartDate", date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="YYYY-MM-DD"
                withPortal
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              />
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="flex items-center justify-center">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                onClick={submitForm}
                disabled={isSubmitting}
              >
                Save
              </button>
            </div>
          </td>
        </tr>
      )}
    </Formik>
  );
};

export default TestProgressBodyRow;
