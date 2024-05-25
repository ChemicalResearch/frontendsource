import { FC, useCallback } from "react";
import { Formik, Field, FormikHelpers } from "formik";
import { FinalReport } from "../../../services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

type FinalReportFormikInitialValues = {
  jrfNumber: string;
  labReportNumber: string;
  reportNumber: string;
  labReportDate: Date | null;
  testReport: string;
  gcvReport: string;
};

type FinalReportBodyRowProps = {
  report: FinalReport;
};

const FinalReportBodyRow: FC<FinalReportBodyRowProps> = ({ report }) => {
  const initialValues: FinalReportFormikInitialValues = {
    gcvReport: report.gcvReport,
    jrfNumber: report.jrfNumber,
    labReportDate: null,
    labReportNumber: report.labReportnumber || "",
    reportNumber: report.reportNumber || "",
    testReport: report.testReport,
  };

  const onSubmit = useCallback<
    (
      values: FinalReportFormikInitialValues,
      formikHelpers: FormikHelpers<FinalReportFormikInitialValues>
    ) => Promise<void>
  >(async (values, formikHelpers) => {
    try {
      const { labReportDate, ...rest } = values;
      console.log({...rest, labReportDate: dayjs(labReportDate).format("YYYY-MM-DD")})
    } catch (e) {
    } finally {
      formikHelpers.setSubmitting(false);
    }
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ values, isSubmitting, setFieldValue, submitForm }) => (
        <tr>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">{values.jrfNumber}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <Field
              name="labReportNumber"
              className="h-10 border mt-1 rounded px-4 w-full min-w-24"
              type="text"
            />
          </td>
          <td className="p-2 whitespace-nowrap">
            <Field
              name="reportNumber"
              className="h-10 border mt-1 rounded px-4 w-full min-w-24"
              type="text"
            />
          </td>
          <td className="p-2 whitespace-nowrap">
            <DatePicker
              selected={values.labReportDate}
              onChange={(date) => setFieldValue("labReportDate", date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="YYYY-MM-DD"
              //   withPortal
              className="h-10 border rounded px-4 bg-gray-50 w-[100px]"
            />
          </td>
          <td className="p-2 whitespace-nowrap">
            <button className="flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </button>
          </td>
          <td className="p-2 whitespace-nowrap">
            <button className="flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </button>
          </td>
          <td className="p-2 whitespace-nowrap">
            <button
              disabled={isSubmitting}
              className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none mx-auto"
              onClick={submitForm}
            >
              Save
            </button>
          </td>
        </tr>
      )}
    </Formik>
  );
};

export default FinalReportBodyRow;
