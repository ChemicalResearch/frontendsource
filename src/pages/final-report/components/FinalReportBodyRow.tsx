import { FC } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Formik, FormikHelpers } from "formik";
import { FinalReport, submitFinalReport } from "../../../services";
import Swal from "sweetalert2";
import { DownloadLinkButton } from "../../../components/buttons";
import { Td, Tr } from "../../../styles/table";

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
      const { jrfNumber, testReport } = values;
      const formData = new FormData();
      formData.append("file", testReport);
      formData.append("jrfNumber", jrfNumber);
      await mutation.mutateAsync(formData, {
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
      });
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
        <Tr>
          <Td>{values.jrfNumber}</Td>
          <Td>
            <input
              type="file"
              className="block w-48 text-sm text-gray-500
                              file:me-4 file:py-2 file:px-4
                              file:rounded-lg file:border-0
                              file:text-sm file:font-semibold
                              file:bg-blue-600 file:text-white
                              hover:file:bg-blue-700
                              file:disabled:opacity-50 file:disabled:pointer-events-none
                            "
              onChange={(event) => {
                setFieldValue("testReport", event?.currentTarget?.files?.[0]);
              }}
            />
          </Td>
          <Td>
            <DownloadLinkButton href={values.testReport} className="mx-auto" />
          </Td>
          <Td>
            <DownloadLinkButton href={values.gcvReport} className="mx-auto" />
          </Td>
          <Td>
            <button
              disabled={isSubmitting}
              className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none mx-auto"
              onClick={submitForm}
            >
              Save
            </button>
          </Td>
        </Tr>
      )}
    </Formik>
  );
};

export default FinalReportBodyRow;
