import { FC } from "react";
import { Formik, FormikHelpers } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TestProgress, submitTestDetail } from "../../services/test-progress";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import DecimalInput from "../../components/inputs/DecimalInput";
import { Td, Tr } from "../../styles/table";
interface TestProgressBodyRowProps {
  progress: TestProgress;
}

export interface TestProgressBodyRowInitialValues {
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
        <Tr>
          <Td>{values.tcrcSampleId}</Td>
          <Td>
            <DatePicker
              selected={values.testEndDate}
              onChange={(date) => setFieldValue("testEndDate", date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="YYYY-MM-DD"
              withPortal
              className="h-10 border mt-1 rounded px-4  bg-gray-50 w-32"
            />
          </Td>
          <Td>
            <DecimalInput name="arbTM" />
          </Td>
          <Td>
            <DecimalInput name="adbIM" />
          </Td>
          <Td>
            <DecimalInput name="adbVM" />
          </Td>
          <Td>
            <DecimalInput name="adbAsh" />
          </Td>
          <Td>
            <DecimalInput name="adbGCV" />
          </Td>
          <Td>
            <DecimalInput name="ebEM" />
          </Td>
          <Td>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              onClick={submitForm}
              disabled={isSubmitting}
            >
              Save
            </button>
          </Td>
        </Tr>
      )}
    </Formik>
  );
};

export default TestProgressBodyRow;
