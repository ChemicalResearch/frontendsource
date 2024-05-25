import { FC } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Formik, Field, FormikHelpers } from "formik";
import { FinalReport, submitFinalReport } from "../../../services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import { DownloadLinkButton } from "../../../components/buttons";

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
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: submitFinalReport,
  });

  const initialValues: FinalReportFormikInitialValues = {
    gcvReport: report.gcvReport,
    jrfNumber: report.jrfNumber,
    labReportDate: null,
    labReportNumber: report.labReportNumber || "",
    reportNumber: report.reportNumber || "",
    testReport: report.testReport,
  };

  const onSubmit = async (
    values: FinalReportFormikInitialValues,
    formikHelpers: FormikHelpers<FinalReportFormikInitialValues>
  ) => {
    try {
      const { labReportDate, ...rest } = values;
      await mutation.mutateAsync(
        {
          ...rest,
          labReportDate: dayjs(labReportDate).format("YYYY-MM-DD"),
        },
        {
          onSuccess(data) {
            if (data) {
              queryClient.setQueryData(
                ["final-reports"],
                (reports: Array<FinalReport> | undefined) => {
                  return reports?.filter(
                    (report) => report.jrfNumber !== values.jrfNumber
                  );
                }
              );
            }
          },
        }
      );
      Swal.fire("Successfully Submited");
      formikHelpers.resetForm();
    } catch (e) {
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

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
            <DownloadLinkButton href={values.testReport} className="mx-auto" />
          </td>
          <td className="p-2 whitespace-nowrap">
            <DownloadLinkButton href={values.gcvReport} className="mx-auto" />
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
