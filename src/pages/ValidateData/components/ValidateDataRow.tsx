import { FC } from "react";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { Formik, Field, FormikHelpers } from "formik";
import { SampleDataSet, TmData } from "../../../services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

import { Tr, Td } from "../../../styles/table";

type ValidateDataRowProps = {
  data: SampleDataSet;
  refetch?: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<TmData[], Error>>;
};

type InitialValues = {
  jobNumber: string;
  sampleId: string;
  rakeNumber: string;
  tcrcQrCode: string;
  tcrcSealNo: string;
  plantSealNo: string;
  plantQrCode: string;
  referenceSealNo: string;
  referenceQrCode: string;
  tmSealNo: string;
  despatchDate: Date | null;
  preparationDate: Date | null;
};

const ValidateDataRow: FC<ValidateDataRowProps> = ({ data, refetch }) => {
  const onSubmit = async (
    values: InitialValues,
    formikHelpers: FormikHelpers<InitialValues>
  ) => {
    try {
      refetch?.();
      Swal.fire("Successfully Submited");
      formikHelpers.resetForm();
    } catch (e) {
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  return (
    <Formik<InitialValues>
      initialValues={{
        ...data,
        despatchDate: data.despatchDate ? new Date(data.despatchDate) : null,
        preparationDate: data.preparationDate
          ? new Date(data.preparationDate)
          : null,
      }}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ values, isSubmitting, setFieldValue, submitForm }) => (
        <Tr>
          <Td className="w-[120px] text-center">{values.jobNumber}</Td>
          <Td>
            <Field
              name="tmSealNo"
              className="h-10 border rounded px-4 py-1 w-full"
              type="text"
            />
          </Td>
          <Td>
            <Field
              name="rakeNumber"
              className="h-10 border rounded px-4 py-1 w-full"
              type="text"
            />
          </Td>
          <Td>
            <Field
              name="tcrcQrCode"
              className="h-10 border rounded px-4 py-1 w-full"
              type="text"
            />
          </Td>
          <Td>
            <Field
              name="tcrcSealNo"
              className="h-10 border rounded px-4 py-1 w-full"
              type="text"
            />
          </Td>
          <Td>
            <Field
              name="plantSealNo"
              className="h-10 border rounded px-4 py-1 w-full"
              type="text"
            />
          </Td>
          <Td>
            <Field
              name="plantQrCode"
              className="h-10 border rounded px-4 py-1 w-full"
              type="text"
            />
          </Td>
          <Td>
            <Field
              name="referenceSealNo"
              className="h-10 border rounded px-4 py-1 w-full"
              type="text"
            />
          </Td>
          <Td>
            <Field
              name="referenceQrCode"
              className="h-10 border rounded px-4 py-1 w-full"
              type="text"
            />
          </Td>
          <Td>
            <Field
              name="tmSealNo"
              className="h-10 border rounded px-4 py-1 w-full"
              type="text"
            />
          </Td>
          <Td>
            <DatePicker
              selected={values.despatchDate}
              onChange={(date) => setFieldValue("despatchDate", date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="YYYY-MM-DD"
              className="h-10 border rounded px-4 bg-gray-50 w-full"
            />
          </Td>
          <Td>
            <DatePicker
              selected={values.preparationDate}
              onChange={(date) => setFieldValue("preparationDate", date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="YYYY-MM-DD"
              className="h-10 border rounded px-4 bg-gray-50 w-full"
            />
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

export default ValidateDataRow;
