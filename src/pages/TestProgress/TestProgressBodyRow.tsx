import { FC } from "react";
import { Field, Formik, FormikHelpers } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TestProgress, submitTestDetail } from "../../services/test-progress";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import Swal from "sweetalert2";

interface TestProgressBodyRowProps {
  progress: TestProgress;
}

interface TestProgressBodyRowInitialValues {
  tcrcSampleId: string;
  jrfNumber: string;
  tcrcQrCode: string;
  adbIM: string;
  adbVM: string;
  adbAsh: string;
  adbGCV: string;
  arbTM: string;
  ebEM: string;
  testEndDate: Date | null;
}

const TestProgressBodyRow: FC<TestProgressBodyRowProps> = ({ progress }) => {
  const mutation = useMutation({
    mutationFn: submitTestDetail,
  });

  const onSubmit = async (
    values: TestProgressBodyRowInitialValues,
    formikHelpers: FormikHelpers<TestProgressBodyRowInitialValues>
  ) => {
    try {
      const { testEndDate, ...rest } = values;
      await mutation.mutateAsync({
        ...rest,
        testEndDate: dayjs(testEndDate).format("YYYY-MM-DD"),
      });
      Swal.fire("Successfully Submited");
      formikHelpers.resetForm();
    } catch (e) {
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  const initialValues: TestProgressBodyRowInitialValues = {
    adbAsh: progress.adbAsh,
    adbGCV: progress.adbGCV,
    adbIM: progress.adbIM,
    adbVM: progress.adbVM,
    arbTM: progress.arbTM,
    ebEM: progress.ebEM,
    jrfNumber: progress.jrfNumber,
    tcrcQrCode: progress.tcrcQrCode,
    tcrcSampleId: progress.tcrcSampleId,
    testEndDate: null,
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ values, isSubmitting, submitForm, setFieldValue }) => (
        <tr>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">
              <DatePicker
                selected={values.testEndDate}
                onChange={(date) => setFieldValue("testEndDate", date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="YYYY-MM-DD"
                withPortal
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              />
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">{values.arbTM}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">
              <Field
                id="adbIM"
                name="adbIM"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 min-w-60"
              />
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">
              <Field
                id="adbVM"
                name="adbVM"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 min-w-60"
              />
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">
              <Field
                id="adbAsh"
                name="adbAsh"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 min-w-60"
              />
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">
              <Field
                id="adbGCV"
                name="adbGCV"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 min-w-60"
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
