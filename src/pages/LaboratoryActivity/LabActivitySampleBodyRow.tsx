import { FC } from "react";
import {
  GetLabactivitySamplesResponse,
  LabActivitySample,
  submitLabActivity,
} from "../../services/lab-activity-jrfs";
import { Field, Formik, FormikHelpers } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  QueryObserverResult,
  RefetchOptions,
  useMutation,
} from "@tanstack/react-query";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import { Td, Tr } from "../../styles/table";

interface LabActivitySampleRowProps {
  sample: LabActivitySample;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<GetLabactivitySamplesResponse, Error>>;
}

interface LabActivitySampleBodyRowInitialValues {
  qrcode: string;
  jrfNumber: string;
  jrfUrl: string;
  tcrcSampleId: string;
  despatchDate: string;
  receivedOn: Date | null;
  labcode: string;
  testStartDate: Date | null;
}

const LabActivitySampleBodyRow: FC<LabActivitySampleRowProps> = ({
  sample,
  refetch,
}) => {
  const mutation = useMutation({
    mutationFn: submitLabActivity,
  });

  const onSubmit = async (
    values: LabActivitySampleBodyRowInitialValues,
    formikHelpers: FormikHelpers<LabActivitySampleBodyRowInitialValues>
  ) => {
    try {
      const { receivedOn, testStartDate, ...rest } = values;
      await mutation.mutateAsync({
        ...rest,
        receivedOn: dayjs(receivedOn).format("YYYY-MM-DD"),
        testStartDate: dayjs(testStartDate).format("YYYY-MM-DD"),
      });
      refetch();
      Swal.fire("Successfully Submited");
      formikHelpers.resetForm();
    } catch (e) {
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  const initialValues: LabActivitySampleBodyRowInitialValues = {
    despatchDate: sample.despatchDate || "",
    jrfNumber: sample.jrfNumber || "",
    jrfUrl: sample.jrfUrl || "",
    labcode: sample.labcode || "",
    qrcode: sample.qrcode || "",
    receivedOn: null,
    tcrcSampleId: sample.tcrcSampleId || "",
    testStartDate: null,
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ values, isSubmitting, submitForm, setFieldValue }) => (
        <Tr>
          <Td className="whitespace-nowrap">{values.jrfNumber}</Td>
          <Td>{values.tcrcSampleId}</Td>
          <Td>{values.despatchDate}</Td>
          <Td>{values.qrcode}</Td>
          <Td>
            <DatePicker
              selected={values.receivedOn}
              onChange={(date) => setFieldValue("receivedOn", date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="YYYY-MM-DD"
              withPortal
              className="h-10 border mt-1 rounded px-4 w-32 bg-gray-50"
            />
          </Td>
          <Td>
            <Field
              id="labcode"
              name="labcode"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 min-w-60"
            />
          </Td>
          <Td>
            <DatePicker
              selected={values.testStartDate}
              onChange={(date) => setFieldValue("testStartDate", date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="YYYY-MM-DD"
              withPortal
              className="h-10 border mt-1 rounded px-4 w-32 bg-gray-50"
            />
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

export default LabActivitySampleBodyRow;
